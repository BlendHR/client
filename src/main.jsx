
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React from 'react'
import ReactDOM from 'react-dom/client'

import './global.css'

import Root from './pages/HRView/Root.jsx';

import Login from './pages/HRView/Login.jsx';
import ErrorPage from './pages/HRView/ErrorPage.jsx';
import UserList from './components/UserList.jsx';
import InviteLinkForm from './components/InviteLinkForm.jsx';
import SignupForm from './pages/HRView/SignupForm.jsx';
import EmailVerification from './pages/HRView/EmailVerification.jsx';

import JobPostForm from './components/JobPostForm.jsx';
import Candidates from './pages/HRView/Candidates.jsx';
//import candidate login 
import LoginCandidate from './pages/CandidateView/Login.jsx';
import JobView from './pages/CandidateView/JobViewCandidate.jsx';
import JobList from './pages/HRView/JobList.jsx';
import ApplyJob from './pages/CandidateView/ApplyJob.jsx';

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
    path: "/apply-job/:jobId",
    element: <ApplyJob />,
    errorElement: <ErrorPage />,
  },
  // {
  //   path: "/candidates/:id",
  //   element: <CandidateProfile />,
  //   errorElement: <ErrorPage />,
  // },
  {
    path: "/",
    element: <Root />,
    children: [ // Now the sidebar will act as a layout for all of the below pages. I think this is more optimized
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
        element: <div>Dashboard</div>,
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