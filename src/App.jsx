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
import Login from './pages/Login'

// App.js
function App() {
  return (
      <Login></Login>
  );
}

export default App;
