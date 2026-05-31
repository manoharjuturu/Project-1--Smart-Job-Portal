A modern and responsive job portal web application built with Angular that connects job seekers and employers on a single platform. The system provides an efficient way to search, apply, and manage job opportunities while helping recruiters post and manage job listings.
 
 # CREATE ACCOUNT PAGE

 ![img alt](https://github.com/manoharjuturu/Project-1--Smart-Job-Portal/blob/04f1baaada0d072db734e351378238b22def481f/Screenshot_31-5-2026_17234_127.0.0.1.jpeg)

 This clean and user-friendly Create Account page is designed for a Smart Job Portal application, providing a seamless registration experience for new users. The interface includes essential fields such as Full Name, Email, Password, and Confirm Password, ensuring secure account creation. A modern card-based layout with intuitive icons and clear input validation enhances usability and accessibility. The responsive design and professional appearance help job seekers quickly register and begin exploring career opportunities.
 
 # Job Portal - Employee Frontend (AngularJS)

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

