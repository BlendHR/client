import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";
import { Container, Row, Col } from "react-bootstrap";
import axios from 'axios';

import './Root.css';
export default function Root() {
  const navigate = useNavigate();

  useEffect(() => {
    const authToken = localStorage.getItem('blendhr-ats-auth-token');
    if (authToken) {
      // If authentication token exists, verify it with the backend
      axios.post('/api/verify-token', { authToken })
        .then(response => {
          // If token verification is successful, navigate to the home page
          navigate('/dashboard');
        })
        .catch(error => {
          // If token verification fails, navigate to the login page
          // navigate('/login');
          navigate('/dashboard'); // Just for now until we haven't connected the server
        });
    } else {
      // If no authentication token exists, navigate to the login page
      navigate('/login');
    }
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts

  return (
    <>
      <NavBar />
      <div id="main">
        <Outlet />
      </div>
      <SideBar />
    </>
  );
}
