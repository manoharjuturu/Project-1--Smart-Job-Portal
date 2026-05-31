angular.module('jobPortalApp')
    .controller('SignupController', ['$scope', '$location', 'AuthService', function($scope, $location, AuthService) {
        $scope.userData = {
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
        };
        $scope.message = '';
        $scope.messageType = '';

        if (AuthService.isLoggedIn()) {
            $location.path('/home');
        }

        $scope.signup = function() {
            if (!$scope.userData.name || !$scope.userData.email || !$scope.userData.password) {
                $scope.message = 'Please fill in all required fields';
                $scope.messageType = 'error';
                return;
            }

            if ($scope.userData.password !== $scope.userData.confirmPassword) {
                $scope.message = 'Passwords do not match';
                $scope.messageType = 'error';
                return;
            }

            if ($scope.userData.password.length < 6) {
                $scope.message = 'Password must be at least 6 characters';
                $scope.messageType = 'error';
                return;
            }

            var result = AuthService.signup({
                name: $scope.userData.name,
                email: $scope.userData.email,
                password: $scope.userData.password
            });

            if (result.success) {
                $scope.message = result.message;
                $scope.messageType = 'success';
                setTimeout(function() {
                    $location.path('/home');
                    $scope.$apply();
                }, 1000);
            } else {
                $scope.message = result.message;
                $scope.messageType = 'error';
            }
        };

        $scope.goToLogin = function() {
            $location.path('/login');
        };
    }]);

