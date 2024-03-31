
import dashboardIcon from '../assets/react.svg';
import jobsIcon from '../assets/react.svg';
import candidatesIcon from '../assets/react.svg';
import settingsIcon from '../assets/react.svg';

import "./SideBar.css";

import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom if you're using React Router
import Button from 'react-bootstrap/Button'; // Import Button from react-bootstrap

const SideBar = () => {
  return (
    <div className="sidenav">
      <div style={{ margin: '0px 0px 50px 0px', textAlign: 'center' }}>
        <img src={dashboardIcon} alt="Logo" width="70" height="60" className="d-inline-block align-text-top" />
      </div>

      <div className="sidenav-title">
        GENERAL
        <Link to="/dashboard">
          <Button variant="outline-primary">
            <img src={dashboardIcon} alt="Dashboard Logo" className="button-icon-100" />
            Dashboard
          </Button>
        </Link>
      </div>

      <div className="sidenav-title">
        RECRUITMENT
        <Link to="/jobs">
          <Button variant="outline-primary">
            <img src={jobsIcon} alt="Jobs Logo" className="button-icon-100" />
            Jobs
          </Button>
        </Link>
        
        <Link to="/candidates">
          <Button variant="outline-primary">
            <img src={candidatesIcon} alt="Candidates Logo" className="button-icon-100" />
            Candidates
          </Button>
        </Link>

        <Link to="/team">
          <Button variant="outline-primary">
            <img src={candidatesIcon} alt="Candidates Logo" className="button-icon-100" />
            Team
          </Button>
        </Link>
      </div>

      {/* Help Centre */}
      <div style={{ position: 'absolute', left: '65px', top: '95%' }}>
        <img src={settingsIcon} alt="Settings Logo" width="25" height="25" className="button-icon-100" />
      </div>
    </div>
  );
};

export default SideBar;
