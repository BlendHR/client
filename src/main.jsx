
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React from 'react'
import ReactDOM from 'react-dom/client'
import { useState } from 'react';
import { useEffect } from 'react';
import { ThemeProvider } from 'react-bootstrap';

import App from './App.jsx'
import './global.css'

import "./custom-bootstrap.scss";

import Root from './pages/Root.jsx';

import Login from './pages/Login.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import UserList from './components/UserList.jsx';
import InviteLinkForm from './components/InviteLinkForm.jsx';
<<<<<<< Updated upstream
import SignupForm from './pages/SignupForm.jsx';
import EmailVerification from './pages/EmailVerification.jsx';
import Jobs from './pages/Jobs.jsx';

import JobPostForm from './components/jobPostFomr.jsx';
const router = createBrowserRouter([
  {
=======
import SignupForm from './pages/HRView/SignupForm.jsx';
import EmailVerification from './pages/HRView/EmailVerification.jsx';
import Jobs from './pages/HRView/Jobs.jsx';
import JobPostForm from './components/JobPostForm.jsx';
import Candidates from './pages/HRView/Candidates.jsx';
//import candidate login 
import LoginCandidate from './pages/CandidateView/Login.jsx';
import JobView from './pages/CandidateView/JobViewCandidate.jsx';
import CreateJob from './pages/HRView/CreateJob.jsx';
import JobList from './pages/HRView/JobViewHR.jsx'
import ApplyJob from './pages/CandidateView/ApplyJob.jsx';

import instance from './axios.js';
import {UserContext} from './UserContext.jsx';


function Fetch() {



const [data, setData] = useState('');
// fetch user data

useEffect(() => {
const fetchUserData = async () => {

  const token = '0369720fc39c5e551369e8f67132791be7cdfd3b';
  try {
    const response = await instance.get('user_detail/', {
      headers: {
        Authorization: `Token ${token}`,
      },
    });
    console.log(response.data);
    
    setData(response.data);

  } catch (error) {
    console.error('Error fetching data:', error);
  }

};

fetchUserData();


}, []);

const router = createBrowserRouter([
  {

    path: "/candidate-login",
    element: <LoginCandidate />,
    errorElement: <ErrorPage />,
  },
  {
>>>>>>> Stashed changes
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
    path: "/verify-email",
    element: <EmailVerification />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
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
        element: <div>Dahhboard</div>,
        errorElement: <ErrorPage />,
      },
      {
        path: "/jobs",
        element: <Jobs />,
      },
      {
        path: "/post-job",
        element: <JobPostForm />,
      },
      
    ]
  },
  
])

return (
  <React.StrictMode>
    <UserContext.Provider value={data}>
    <RouterProvider router={router} />
    </UserContext.Provider>
  </React.StrictMode>
);
}

ReactDOM.createRoot(document.getElementById('root')).render(<Fetch />);