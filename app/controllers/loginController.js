angular.module('jobPortalApp')
    .controller('LoginController', ['$scope', '$location', 'AuthService', function($scope, $location, AuthService) {
        $scope.email = '';
        $scope.password = '';
        $scope.message = '';
        $scope.messageType = '';

        if (AuthService.isLoggedIn()) {
            $location.path('/home');
        }

        $scope.login = function() {
            if (!$scope.email || !$scope.password) {
                $scope.message = 'Please fill in all fields';
                $scope.messageType = 'error';
                return;
            }

            var result = AuthService.login($scope.email, $scope.password);

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

        $scope.goToSignup = function() {
            $location.path('/signup');
        };
    }]);

