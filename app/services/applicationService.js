angular.module('jobPortalApp')
    .service('ApplicationService', function() {
        var storageKey = 'jobPortalApplications';
        
        this.getApplications = function() {
            var stored = localStorage.getItem(storageKey);
            return stored ? JSON.parse(stored) : [];
        };

        this.saveApplications = function(applications) {
            localStorage.setItem(storageKey, JSON.stringify(applications));
        };

        this.applyForJob = function(jobId, employeeInfo) {
            var applications = this.getApplications();
            
            var existingApp = applications.find(function(app) {
                return app.jobId === jobId;
            });

            if (existingApp) {
                return { success: false, message: 'You have already applied for this job' };
            }

            var application = {
                id: Date.now(),
                jobId: jobId,
                employeeInfo: employeeInfo,
                appliedDate: new Date().toISOString(),
                status: 'Pending'
            };

            applications.push(application);
            this.saveApplications(applications);
            
            return { success: true, message: 'Application submitted successfully!' };
        };

        this.getApplicationByJobId = function(jobId) {
            var applications = this.getApplications();
            return applications.find(function(app) {
                return app.jobId === parseInt(jobId);
            });
        };

        this.updateApplicationStatus = function(applicationId, status) {
            var applications = this.getApplications();
            var app = applications.find(function(a) {
                return a.id === applicationId;
            });
            
            if (app) {
                app.status = status;
                this.saveApplications(applications);
                return true;
            }
            return false;
        };
    });

