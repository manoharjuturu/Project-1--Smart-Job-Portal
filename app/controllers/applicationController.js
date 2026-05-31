angular.module('jobPortalApp')
    .controller('ApplicationController', ['$scope', '$location', 'ApplicationService', 'JobService', function($scope, $location, ApplicationService, JobService) {
        $scope.applications = [];
        $scope.statusFilter = '';

        $scope.statusOptions = ['', 'Pending', 'Reviewed', 'Interview', 'Accepted', 'Rejected'];

        $scope.loadApplications = function() {
            var allApplications = ApplicationService.getApplications();
            
            $scope.applications = allApplications.map(function(app) {
                var job = JobService.getJobById(app.jobId);
                return {
                    ...app,
                    job: job
                };
            }).filter(function(app) {
                return app.job !== undefined;
            });
        };

        $scope.filterByStatus = function() {
        };

        $scope.getStatusClass = function(status) {
            var classes = {
                'Pending': 'status-pending',
                'Reviewed': 'status-reviewed',
                'Interview': 'status-interview',
                'Accepted': 'status-accepted',
                'Rejected': 'status-rejected'
            };
            return classes[status] || 'status-pending';
        };

        $scope.viewJob = function(jobId) {
            $location.path('/jobs/' + jobId);
        };

        $scope.formatDate = function(dateString) {
            var date = new Date(dateString);
            return date.toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
            });
        };

        $scope.loadApplications();
    }]);

