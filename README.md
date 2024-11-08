# Ujira Job Application and Recruitment Portal

## Overview
Ujira is a comprehensive job application and recruitment portal designed to connect job seekers with licensed nutritionists in Kenya. The platform allows users to register, search for jobs, apply for positions, and receive real-time notifications. Employers can post job listings, verify applicants, and manage applications.

## Features
- **User Registration and Authentication:** Secure user registration and login using Supabase Auth.
- **Role-Based Access Control:** Distinguish between users, employers, and admins with appropriate permissions.
- **Job Listings:** Post, search, and manage job listings.
- **Real-Time Notifications:** Receive notifications for job applications, updates, and more.
- **Responsive Design:** Optimized for both desktop and mobile devices using Tailwind CSS.

## Tech Stack
- **Frontend:** React, JavaScript, Tailwind CSS, React Router
- **Backend:** Node.js, Express, Supabase (PostgreSQL)
- **Deployment:** Vercel (Frontend), Heroku (Backend)

## Installation

### Prerequisites
- Node.js and npm installed on your machine
- Supabase account and project set up
- Git installed on your machine

### Frontend Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/Morg3an/ujira-portal.git
   cd ujira-portal
Install dependencies:

```bash
npm install
```
### Create a .env file in the root directory and add your Supabase credentials:

```env
REACT_APP_SUPABASE_URL=your-supabase-url
REACT_APP_SUPABASE_ANON_KEY=your-supabase-anon-key
```
### Start the development server:

```bash
npm start
```
## Backend Setup
### Navigate to the backend directory:

```bash
cd ujira-backend
```
### Install dependencies:

```bash
npm install
```
### Create a .env file in the root directory and add your Supabase credentials:

```env
SUPABASE_URL=your-supabase-url
SUPABASE_ANON_KEY=your-supabase-anon-key
```
### Start the backend server:

```bash
node server.js
```
## Deployment
### Frontend Deployment
Deploy the frontend to Vercel:

Link your GitHub repository to Vercel.

Configure the build settings and deploy.

## Backend Deployment
Deploy the backend to Heroku:

Create a new Heroku app.

Link your GitHub repository to Heroku.

### Configure environment variables and deploy.

## Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.

## Contact
For any inquiries, please contact us at support@ujiraportal.com.
