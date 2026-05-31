angular.module('jobPortalApp')
    .controller('HomeController', ['$scope', '$location', 'AuthService', function($scope, $location, AuthService) {
        $scope.currentUser = AuthService.getCurrentUser();

        if (!AuthService.isLoggedIn()) {
            $location.path('/login');
            return;
        }

        $scope.goToJobs = function() {
            $location.path('/jobs');
        };

        $scope.goToApplications = function() {
            $location.path('/applications');
        };

        $scope.goToProfile = function() {
            $location.path('/profile');
        };
    }]);

