angular.module('jobPortalApp', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/splash', {
                templateUrl: 'views/splash.html',
                controller: 'SplashController'
            })
            .when('/login', {
                templateUrl: 'views/login.html',
                controller: 'LoginController'
            })
            .when('/signup', {
                templateUrl: 'views/signup.html',
                controller: 'SignupController'
            })
            .when('/home', {
                templateUrl: 'views/home.html',
                controller: 'HomeController'
            })
            .when('/jobs', {
                templateUrl: 'views/job-list.html',
                controller: 'JobListController'
            })
            .when('/jobs/:id', {
                templateUrl: 'views/job-detail.html',
                controller: 'JobDetailController'
            })
            .when('/applications', {
                templateUrl: 'views/applications.html',
                controller: 'ApplicationController'
            })
            .when('/profile', {
                templateUrl: 'views/profile.html',
                controller: 'ProfileController'
            })
            .otherwise({
                redirectTo: '/splash'
            });
    }])
    .run(['$rootScope', '$location', 'AuthService', function($rootScope, $location, AuthService) {
        $rootScope.$location = $location;

        $rootScope.$on('$routeChangeStart', function(event, next, current) {
            var publicRoutes = ['/splash', '/login', '/signup'];
            var currentPath = $location.path();
            var isPublicRoute = publicRoutes.indexOf(currentPath) !== -1;
            
            if (!isPublicRoute && !AuthService.isLoggedIn()) {
                event.preventDefault();
                $location.path('/login');
            }
        });

        $rootScope.$on('$routeChangeSuccess', function() {
            $rootScope.currentUser = AuthService.getCurrentUser();
            $rootScope.isLoggedIn = AuthService.isLoggedIn();
        });

        $rootScope.currentUser = AuthService.getCurrentUser();
        $rootScope.isLoggedIn = AuthService.isLoggedIn();

        $rootScope.logout = function($event) {
            if ($event) {
                $event.preventDefault();
            }
            AuthService.logout();
            $rootScope.currentUser = null;
            $rootScope.isLoggedIn = false;
            $location.path('/login');
        };
    }]);

