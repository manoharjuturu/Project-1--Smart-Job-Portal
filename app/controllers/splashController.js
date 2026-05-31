angular.module('jobPortalApp')
    .controller('SplashController', ['$scope', '$timeout', '$location', 'AuthService', function($scope, $timeout, $location, AuthService) {
        $scope.showSplash = true;
        $scope.animationComplete = false;

        var isLoggedIn = AuthService.isLoggedIn();

        $timeout(function() {
            $scope.animationComplete = true;
        }, 2500);

        $timeout(function() {
            $scope.showSplash = false;
            if (isLoggedIn) {
                $location.path('/home');
            } else {
                $location.path('/login');
            }
        }, 3000);
    }]);

