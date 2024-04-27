import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import "./NavBar.css"
import react_svg from '../assets/react.svg';

function NavBar(props) {
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
              Signed in as: <a href="\user">{ props.name }</a>
            </Navbar.Text>
          </Navbar.Collapse>

        </Container>
      </Navbar>

    </div>
  );
}

export default NavBar;