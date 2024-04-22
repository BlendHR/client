// NOT USING APP.JSX IN MAIN.JSX

import { useState } from 'react'
import { Route, Routes} from 'react-router-dom';

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'

// import components
import SideBar from './components/SideBar'
import CandidateLogin from './pages/CandidateView/Login'
import Nav from './components/nav-bar'
import FrontScreen from './pages/ai-gen/front-screen';
import ApplyJob from './pages/CandidateView/ApplyJob';
import JobView from './pages/CandidateView/JobView';
// App.js
function App() {
  return (
    <></>
  );
}

export default App;
