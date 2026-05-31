angular.module('jobPortalApp')
    .controller('JobDetailController', ['$scope', '$routeParams', '$location', 'JobService', 'ApplicationService', function($scope, $routeParams, $location, JobService, ApplicationService) {
        $scope.job = null;
        $scope.showApplicationForm = false;
        $scope.applicationMessage = '';
        $scope.applicationSuccess = false;
        $scope.hasApplied = false;

        $scope.applicationData = {
            name: '',
            email: '',
            phone: '',
            coverLetter: '',
            resume: null
        };

        $scope.loadJob = function() {
            var jobId = $routeParams.id;
            $scope.job = JobService.getJobById(jobId);
            
            if (!$scope.job) {
                $location.path('/jobs');
                return;
            }

            var existingApp = ApplicationService.getApplicationByJobId(jobId);
            $scope.hasApplied = !!existingApp;
        };

        $scope.showApplyForm = function() {
            $scope.showApplicationForm = true;
        };

        $scope.submitApplication = function() {
            if (!$scope.applicationData.name || !$scope.applicationData.email) {
                $scope.applicationMessage = 'Please fill in all required fields';
                $scope.applicationSuccess = false;
                return;
            }

            var result = ApplicationService.applyForJob($scope.job.id, {
                name: $scope.applicationData.name,
                email: $scope.applicationData.email,
                phone: $scope.applicationData.phone,
                coverLetter: $scope.applicationData.coverLetter
            });

            $scope.applicationMessage = result.message;
            $scope.applicationSuccess = result.success;

            if (result.success) {
                $scope.hasApplied = true;
                $scope.showApplicationForm = false;
                $scope.applicationData = {
                    name: '',
                    email: '',
                    phone: '',
                    coverLetter: '',
                    resume: null
                };
            }
        };

        $scope.cancelApplication = function() {
            $scope.showApplicationForm = false;
            $scope.applicationMessage = '';
        };

        $scope.loadJob();
    }]);

