angular.module('jobPortalApp')
    .controller('ProfileController', ['$scope', 'ApplicationService', function($scope, ApplicationService) {
        var profileStorageKey = 'jobPortalEmployeeProfile';
        
        $scope.loadProfile = function() {
            var stored = localStorage.getItem(profileStorageKey);
            if (stored) {
                $scope.profile = JSON.parse(stored);
            } else {
                $scope.profile = {
                    name: '',
                    email: '',
                    phone: '',
                    location: '',
                    title: '',
                    experience: '',
                    skills: [],
                    education: '',
                    bio: ''
                };
            }
        };

        $scope.saveProfile = function() {
            if (!$scope.profile.name || !$scope.profile.email) {
                $scope.saveMessage = 'Please fill in required fields (Name and Email)';
                $scope.saveSuccess = false;
                return;
            }

            localStorage.setItem(profileStorageKey, JSON.stringify($scope.profile));
            $scope.saveMessage = 'Profile saved successfully!';
            $scope.saveSuccess = true;
            
            setTimeout(function() {
                $scope.$apply(function() {
                    $scope.saveMessage = '';
                });
            }, 3000);
        };

        $scope.addSkill = function() {
            if ($scope.newSkill && $scope.newSkill.trim()) {
                if (!$scope.profile.skills) {
                    $scope.profile.skills = [];
                }
                $scope.profile.skills.push($scope.newSkill.trim());
                $scope.newSkill = '';
            }
        };

        $scope.removeSkill = function(index) {
            $scope.profile.skills.splice(index, 1);
        };

        $scope.loadProfile();
    }]);

