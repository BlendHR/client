
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'
import './global.css'

import Root from './pages/Root.jsx';

import Login from './pages/Login.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import UserList from './components/UserList.jsx';
import InviteLinkForm from './components/InviteLinkForm.jsx';
import SignupForm from './pages/SignupForm.jsx';
import EmailVerification from './pages/EmailVerification.jsx';

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login/>,
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
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
