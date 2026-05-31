angular.module('jobPortalApp')
    .service('AuthService', function() {
        var storageKey = 'jobPortalAuth';
        var currentUser = null;

        this.init = function() {
            var stored = localStorage.getItem(storageKey);
            if (stored) {
                currentUser = JSON.parse(stored);
            }
        };

        this.signup = function(userData) {
            var users = this.getAllUsers();
            
            var existingUser = users.find(function(u) {
                return u.email === userData.email;
            });

            if (existingUser) {
                return { success: false, message: 'Email already registered' };
            }

            var newUser = {
                id: Date.now(),
                name: userData.name,
                email: userData.email,
                password: userData.password,
                createdAt: new Date().toISOString()
            };

            users.push(newUser);
            localStorage.setItem('jobPortalUsers', JSON.stringify(users));

            currentUser = {
                id: newUser.id,
                name: newUser.name,
                email: newUser.email
            };
            localStorage.setItem(storageKey, JSON.stringify(currentUser));

            return { success: true, message: 'Account created successfully!', user: currentUser };
        };

        this.login = function(email, password) {
            var users = this.getAllUsers();
            var user = users.find(function(u) {
                return u.email === email && u.password === password;
            });

            if (!user) {
                return { success: false, message: 'Invalid email or password' };
            }

            currentUser = {
                id: user.id,
                name: user.name,
                email: user.email
            };
            localStorage.setItem(storageKey, JSON.stringify(currentUser));

            return { success: true, message: 'Login successful!', user: currentUser };
        };

        this.logout = function() {
            currentUser = null;
            localStorage.removeItem(storageKey);
        };

        this.getCurrentUser = function() {
            if (!currentUser) {
                this.init();
            }
            return currentUser;
        };

        this.isLoggedIn = function() {
            return this.getCurrentUser() !== null;
        };

        this.getAllUsers = function() {
            var stored = localStorage.getItem('jobPortalUsers');
            return stored ? JSON.parse(stored) : [];
        };

        this.init();
    });

