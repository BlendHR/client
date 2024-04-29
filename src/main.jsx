
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React from 'react'
import ReactDOM from 'react-dom/client'
import { useState } from 'react';
import { useEffect } from 'react';
import { ThemeProvider } from 'react-bootstrap';
import App from './App.jsx'
import './global.css'
import "./custom-bootstrap.scss";
import Root from './pages/HRView/Root.jsx';
import Login from './pages/HRView/Login.jsx';
import ErrorPage from './pages/HRView/ErrorPage.jsx';
import UserList from './components/UserList.jsx';
import InviteLinkForm from './components/InviteLinkForm.jsx';
import SignupForm from './pages/HRView/SignupForm.jsx';
import EmailVerification from './pages/HRView/EmailVerification.jsx';
import JobPostForm from './components/JobPostForm.jsx';
import Candidates from './pages/HRView/Candidates.jsx';
import LoginCandidate from './pages/CandidateView/Login.jsx';
import JobView from './pages/CandidateView/JobViewCandidate.jsx';
import CandidateProfile from './pages/HRView/CandidateProfile.jsx';
import JobList from './pages/HRView/JobList.jsx';
import ApplyJob from './pages/CandidateView/ApplyJob.jsx';
import JobEditForm from './pages/HRView/JobEditForm.jsx';
import JobViewHR from './pages/HRView/JobView.jsx';
import Dashboard from './pages/HRView/Dashboard.jsx';

function Fetch() {


  const router = createBrowserRouter([
  {

    path: "/candidate-login",
    element: <LoginCandidate />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/signup",
    element: <SignupForm />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/signup/verify-email",
    element: <EmailVerification />,
    errorElement: <ErrorPage />,
  },
  {
      path: "/",
      element: <Root />,
      children: [
        // Now the sidebar will act as a layout for all of the below pages. I think this is more optimized
          {
            path: "/apply-job/:jobId",
            element: <ApplyJob />,
            errorElement: <ErrorPage />,
          }
        ,
        {
          path: "/job-view/:id",
          element: <JobViewHR />,
          errorElement: <ErrorPage />,
        },
          {
            path: "/candidates/:id",
            element: <CandidateProfile />,
            errorElement: <ErrorPage />,
          }
        ,
        {
          path: "/edit-job/:id",
          element: <JobEditForm />,
        },
        {
          path: "/team",
          element: <div>
            <UserList /> 
            <InviteLinkForm />
                  </div>,
          errorElement: <ErrorPage />,
        },
        {
          path: "/dashboard",
          element: <Dashboard />,
          errorElement: <ErrorPage />,
        },
        {
          path: "/jobs",
          element: <JobList />,
        },
        {
          path: "/post-job",
          element: <JobPostForm />,
        },
        {
          path: "/candidates",
          element: <Candidates />,
        },
        {
          path: "/job-view",
          element: <JobView />,
          errorElement: <ErrorPage />,
        },
    ]
  },
  
])

return (
  <React.StrictMode>

    <RouterProvider router={router} />

  </React.StrictMode>
);
}

ReactDOM.createRoot(document.getElementById('root')).render(<Fetch />);