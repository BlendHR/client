import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from "../../components/NavBar";
import { Outlet } from "react-router-dom";
import SideBar from "../../components/SideBar";
import { Container, Row, Col } from "react-bootstrap";
import axios from 'axios';

import { get_user_info } from '../../../api';

import './Root.css';
export default function Root() {
  // const navigate = useNavigate();
  // let user_info = {first_name: '', last_name: ''};

  // useEffect(() => {
  //   const token = localStorage.getItem('token');
  //   if (!token) {
  //     navigate('/login');
  //   } else {
  //     // axios.defaults.headers.common['Authorization'] = `Token ${token}`;
  //     get_user_info()
  //       .then((response) => {
  //         if (response.status === 200) {
  //           user_info = response.data;
  //         } else {
  //           navigate('/login');
  //         }
  //       })
  //       .catch((error) => {
  //         console.error("Error in Root.jsx::useEffect:", error);
  //         navigate('/login');
  //       });
  //   }
  // }
  // , [navigate]);
  
  return (
    <>
      {/* <NavBar name={user_info.first_name + user_info.last_name} /> */}
      <div id="main">
        <Outlet />
      </div>
      <SideBar/>
    </>
  );
}
