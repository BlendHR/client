import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from "../../components/NavBar";
import { Outlet } from "react-router-dom";
import SideBar from "../../components/SideBar";
import { Container, Row, Col } from "react-bootstrap";
import axios from 'axios';

import { get_user_info, async_get_recruiter } from '../../../api';

import { useUser } from '../../UserContext';

import './Root.css';
export default function Root() {
  const navigate = useNavigate();
  const [user_info, setUser_info] = useState(null);
  const [recruiter_info, setRecruiter_info] = useState(null);
  const { user, setUser } = useUser();

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const userInfo = await get_user_info();
        if (!userInfo) {
          navigate('/login');
          return;
        }
        setUser_info(userInfo);
        const _rec_info = await async_get_recruiter(userInfo.id);
        setUser({
          email: userInfo.email,
          id: userInfo.id,
          recruiter_id: _rec_info.recruiter_id
        })
      } catch (error) {
        console.error('Error fetching data:', error);
        navigate('/login');
      }
    };
    fetchUserInfo();
  }, []);

  if (!user) {
    return <div>
      Loading...
    </div>; // You might want to render a loading spinner or message here
  }
  console.log(user); // <console>
  return (
    <>
      <NavBar name={user.email} /> 
      <div id="main">
        <Outlet recruiter_id={user.id}/>
      </div>
      <SideBar/>
    </>
  );
}
