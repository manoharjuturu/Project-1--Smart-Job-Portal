# Project-1--Smart-Job-Portal
A modern and responsive job portal web application built with Angular that connects job seekers and employers on a single platform. The system provides an efficient way to search, apply, and manage job opportunities while helping recruiters post and manage job listings.
# CREATE ACCOUNT PAGE

![img alt](https://github.com/manoharjuturu/Project-1--Smart-Job-Portal/blob/583036d3dbc57b84e487d6472e45c568e9921909/Screenshot_31-5-2026_17234_127.0.0.1.jpeg)

This clean and user-friendly Create Account page is designed for a Smart Job Portal application, providing a seamless registration experience for new users. The interface includes essential fields such as Full Name, Email, Password, and Confirm Password, ensuring secure account creation. A modern card-based layout with intuitive icons and clear input validation enhances usability and accessibility. The responsive design and professional appearance help job seekers quickly register and begin exploring career opportunities.

# SIGN IN PAGE

![img alt](https://github.com/manoharjuturu/Project-1--Smart-Job-Portal/blob/b6c1822e2442c861a1bcb14983b706e586255706/Screenshot_31-5-2026_17257_127.0.0.1.jpeg)

The sign page provides a secure and user-friendly authentication system for job seekers accessing the HireNest platform. Users can sign in using their registered email and password through a clean and intuitive interface. The responsive design ensures a seamless experience across devices while maintaining a professional appearance. Quick navigation to the registration page enables new users to create an account effortlessly.

#  DASHBOARD PAGE

![img alt](https://github.com/manoharjuturu/Project-1--Smart-Job-Portal/blob/1d4b5b21acff3ab6e435fc6b7eb7de00257fb0b2/Screenshot_31-5-2026_17318_127.0.0.1.jpeg)

The Dashboard serves as the central hub of the HireNest Job Portal, offering quick access to key features such as job browsing, application tracking, and profile management. Interactive cards and navigation menus provide a smooth user experience for job seekers. Platform statistics highlight the number of active jobs, companies, and registered users. The modern layout helps users efficiently manage their job search journey.

#  BROWSE JOBS PAGE

![img alt](https://github.com/manoharjuturu/Project-1--Smart-Job-Portal/blob/fc60900b07e715d83c3cf4f663ed997531c357b7/Screenshot_31-5-2026_17330_127.0.0.1.jpeg)

The Browse Jobs Page enables users to explore job opportunities through an advanced search and filtering system. Job seekers can search by keywords, company names, or specific roles to find relevant positions. The clean and organized interface simplifies the job discovery process and improves accessibility. This feature helps users quickly identify opportunities that match their skills and career goals.

#  MY APLLICATIONS PAGE

![img alt](https://github.com/manoharjuturu/Project-1--Smart-Job-Portal/blob/8ae9f7ae17c6a9778928903120acc5c9722ed82a/Screenshot_31-5-2026_17345_127.0.0.1.jpeg)

The My Applications Page allows users to monitor and manage all submitted job applications from a single location. Applicants can track the status of their applications and stay updated throughout the recruitment process. Filtering options improve organization and make it easier to review application progress. This centralized dashboard enhances transparency and keeps users informed about their job search activities.

# PROFILE PAGE

![img alt](https://github.com/manoharjuturu/Project-1--Smart-Job-Portal/blob/7fb2a18d2f76cad3332fb9d717dcd2fd3829959e/Screenshot_31-5-2026_17357_127.0.0.1.jpeg)

The Profile Management Page enables users to create and maintain a comprehensive professional profile. It includes sections for personal details, work experience, education, skills, and career information. Users can update their profiles at any time to improve visibility and attract potential employers. The structured design ensures that important information is organized and easily accessible for recruitment purposes.


Job Portal - Employee Frontend (AngularJS)

A modern, responsive job portal application built with AngularJS for employees to browse jobs, apply for positions, and manage their applications.

## Features

- **Browse Jobs**: Search and filter through available job listings
- **Job Details**: View comprehensive job information including requirements and descriptions
- **Apply for Jobs**: Submit applications directly through the portal
- **Application Management**: Track application status and view all submitted applications
- **Employee Profile**: Create and manage your professional profile with skills and experience

## Technologies Used

- AngularJS 1.8.3
- Angular Route (for SPA routing)
- HTML5 & CSS3
- Font Awesome (for icons)
- Google Fonts (Inter)

## Getting Started

### Prerequisites

- Node.js and npm installed on your system

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

Or use the dev script to automatically open in browser:
```bash
npm run dev
```

3. Open your browser and navigate to:
```
http://localhost:8080
```

## Project Structure

```
job-portal-angularjs/
├── app/
│   ├── app.js                    # Main AngularJS module and routing
│   ├── services/
│   │   ├── jobService.js         # Job data management service
│   │   └── applicationService.js # Application management service
│   └── controllers/
│       ├── jobListController.js  # Job listing page controller
│       ├── jobDetailController.js # Job detail page controller
│       ├── applicationController.js # Applications page controller
│       └── profileController.js  # Profile page controller
├── views/
│   ├── job-list.html            # Job listing view
│   ├── job-detail.html          # Job detail view
│   ├── applications.html        # Applications view
│   └── profile.html             # Profile view
├── styles/
│   └── main.css                 # Main stylesheet
├── index.html                   # Main HTML file
├── package.json                 # Project dependencies
└── README.md                    # This file
```

## Usage

### Browse Jobs
- Navigate to the "Browse Jobs" page
- Use the search bar to find jobs by title, company, or keywords
- Apply filters by location, job type, or category
- Click on any job card to view detailed information

### Apply for Jobs
- View job details by clicking on a job listing
- Click "Apply for this Job" button
- Fill in the application form with your details
- Submit your application

### Manage Applications
- Go to "My Applications" to see all your submitted applications
- Filter applications by status (Pending, Reviewed, Interview, Accepted, Rejected)
- View job details for any application

### Update Profile
- Navigate to "Profile" page
- Fill in your personal and professional information
- Add your skills
- Save your profile

## Data Storage

The application uses browser localStorage to persist:
- Employee profile information
- Job applications

Note: In a production environment, this data would be stored on a backend server.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT
