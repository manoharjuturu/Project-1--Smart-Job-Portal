angular.module('jobPortalApp')
    .service('JobService', function() {
        var jobs = [
            {
                id: 1,
                title: 'Senior Frontend Developer',
                company: 'Tech Innovations Inc.',
                location: 'San Francisco, CA',
                type: 'Full-time',
                salary: '$120,000 - $150,000',
                description: 'We are looking for an experienced Frontend Developer to join our team. You will be responsible for building user interfaces and ensuring excellent user experience.',
                requirements: ['5+ years of experience', 'Strong knowledge of JavaScript', 'Experience with Angular/React', 'CSS/HTML expertise'],
                postedDate: '2024-01-15',
                category: 'Development'
            },
            {
                id: 2,
                title: 'UX/UI Designer',
                company: 'Creative Solutions',
                location: 'New York, NY',
                type: 'Full-time',
                salary: '$90,000 - $110,000',
                description: 'Join our design team to create beautiful and intuitive user experiences. You will work on various projects from concept to implementation.',
                requirements: ['3+ years of UX/UI experience', 'Portfolio required', 'Figma/Sketch proficiency', 'User research skills'],
                postedDate: '2024-01-14',
                category: 'Design'
            },
            {
                id: 3,
                title: 'Backend Developer',
                company: 'Cloud Systems',
                location: 'Remote',
                type: 'Full-time',
                salary: '$110,000 - $140,000',
                description: 'We need a skilled Backend Developer to build scalable APIs and services. Work with modern technologies in a remote-friendly environment.',
                requirements: ['4+ years of backend development', 'Node.js/Python experience', 'Database design', 'API development'],
                postedDate: '2024-01-13',
                category: 'Development'
            },
            {
                id: 4,
                title: 'Product Manager',
                company: 'StartupXYZ',
                location: 'Austin, TX',
                type: 'Full-time',
                salary: '$130,000 - $160,000',
                description: 'Lead product development initiatives and work closely with engineering and design teams to deliver exceptional products.',
                requirements: ['5+ years of product management', 'Technical background', 'Strong communication skills', 'Agile experience'],
                postedDate: '2024-01-12',
                category: 'Management'
            },
            {
                id: 5,
                title: 'DevOps Engineer',
                company: 'Infrastructure Pro',
                location: 'Seattle, WA',
                type: 'Full-time',
                salary: '$125,000 - $155,000',
                description: 'Manage cloud infrastructure and CI/CD pipelines. Ensure system reliability and scalability.',
                requirements: ['3+ years of DevOps experience', 'AWS/Azure knowledge', 'Docker/Kubernetes', 'CI/CD tools'],
                postedDate: '2024-01-11',
                category: 'DevOps'
            },
            {
                id: 6,
                title: 'Data Scientist',
                company: 'Analytics Corp',
                location: 'Boston, MA',
                type: 'Full-time',
                salary: '$140,000 - $170,000',
                description: 'Analyze complex data sets and build machine learning models to drive business decisions.',
                requirements: ['4+ years of data science', 'Python/R proficiency', 'ML/AI experience', 'Statistics background'],
                postedDate: '2024-01-10',
                category: 'Data Science'
            }
        ];

        this.getAllJobs = function() {
            return jobs;
        };

        this.getJobById = function(id) {
            return jobs.find(function(job) {
                return job.id === parseInt(id);
            });
        };

        this.searchJobs = function(query, filters) {
            var results = jobs;
            
            if (query) {
                var lowerQuery = query.toLowerCase();
                results = results.filter(function(job) {
                    return job.title.toLowerCase().includes(lowerQuery) ||
                           job.company.toLowerCase().includes(lowerQuery) ||
                           job.description.toLowerCase().includes(lowerQuery);
                });
            }

            if (filters) {
                if (filters.location) {
                    results = results.filter(function(job) {
                        return job.location.toLowerCase().includes(filters.location.toLowerCase());
                    });
                }
                if (filters.type) {
                    results = results.filter(function(job) {
                        return job.type === filters.type;
                    });
                }
                if (filters.category) {
                    results = results.filter(function(job) {
                        return job.category === filters.category;
                    });
                }
            }

            return results;
        };
    });

