import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from "../../components/NavBar";
import { Outlet } from "react-router-dom";
import SideBar from "../../components/SideBar";
import { Container, Row, Col } from "react-bootstrap";
import axios from 'axios';

import { get_user_info } from '../../../api';

import './Root.css';
export default function Root() {
  const navigate = useNavigate();
  const [user_info, setUser_info] = useState(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const userInfo = await get_user_info();
        setUser_info(userInfo);
      } catch (error) {
        navigate('/login');
      }
    };

    fetchUserInfo();
  }, [navigate]);

  if (!user_info) {
    return <div>
      Loading...
    </div>; // You might want to render a loading spinner or message here
  }
  console.log(user_info); // <console>
  return (
    <>
      <NavBar name={user_info.email} /> 
      <div id="main">
        <Outlet />
      </div>
      <SideBar/>
    </>
  );
}
