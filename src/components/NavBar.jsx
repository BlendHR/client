import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
<<<<<<< Updated upstream
=======
import React, { useContext, useEffect, useState } from 'react';
>>>>>>> Stashed changes
import { Link } from 'react-router-dom';

import "./NavBar.css"

import react_svg from '../assets/react.svg';
import { UserContext } from '../UserContext';

function NavBar() {
<<<<<<< Updated upstream
=======

  const user = useContext(UserContext);


//   const [user, setUser] = useState('');
//   const fetchUser = async () => {
//   try {
//     const response = await axios.get('http://localhost:8000/api/accounts/users/me/', {
//       headers: {
//         'Authorization': `Token ${localStorage.getItem('token')}` // replace with the way you store your token
//       }
//     });
//     setUser(response.data);
//   } catch (error) {
//     console.error('Failed to fetch user', error);
//   }
// };

// useEffect(() => {
//   fetchUser();
// }, []); // add an empty dependency array to run the effect only once when the component mounts
>>>>>>> Stashed changes
  return (
    <div id="navbar">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="\home">COMPANY</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="\home">Home</Nav.Link>
            <Nav.Link href="\features">Features</Nav.Link>
            <Nav.Link href="\pricing">Pricing</Nav.Link>
          </Nav>    
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            {/* Notification bell icon */}
            <Nav.Link href="\notifications">
              {/* add bell.svg from assets */}
              <img src={react_svg} alt="bell" style={{ marginRight: '24px' }}/>
            </Nav.Link>
            <Navbar.Text>
              Signed in as: <a href="\user">{user ? user.first_name : 'Guest'}</a>
            </Navbar.Text>
          </Navbar.Collapse>

        </Container>
      </Navbar>

    </div>
  );
}

export default NavBar;