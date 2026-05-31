angular.module('jobPortalApp')
    .controller('JobListController', ['$scope', '$location', 'JobService', 'AuthService', function($scope, $location, JobService, AuthService) {
        $scope.jobs = [];
        $scope.filteredJobs = [];
        $scope.searchQuery = '';
        $scope.filters = {
            location: '',
            type: '',
            category: ''
        };
        $scope.showFilters = false;
        $scope.hasSearched = false;

        $scope.jobTypes = ['', 'Full-time', 'Part-time', 'Contract', 'Remote'];
        $scope.categories = ['', 'Development', 'Design', 'Management', 'DevOps', 'Data Science'];

        $scope.loadJobs = function() {
            $scope.jobs = JobService.getAllJobs();
            $scope.filteredJobs = [];
            $scope.hasSearched = false;
        };

        $scope.searchJobs = function() {
            if ($scope.searchQuery || $scope.filters.location || $scope.filters.type || $scope.filters.category) {
                $scope.hasSearched = true;
                $scope.filteredJobs = JobService.searchJobs($scope.searchQuery, $scope.filters);
            } else {
                $scope.hasSearched = false;
                $scope.filteredJobs = [];
            }
        };

        $scope.clearFilters = function() {
            $scope.searchQuery = '';
            $scope.filters = {
                location: '',
                type: '',
                category: ''
            };
            $scope.hasSearched = false;
            $scope.filteredJobs = [];
        };

        $scope.viewJobDetails = function(jobId) {
            $location.path('/jobs/' + jobId);
        };

        $scope.loadJobs();
    }]);

