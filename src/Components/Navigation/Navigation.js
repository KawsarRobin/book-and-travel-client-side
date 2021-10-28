import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Navigation = () => {
  const { user, HandleSignOut } = useAuth();
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">Book&Travel</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link as={Link} to="/home">
                Home
              </Nav.Link>
            </Nav>
            <Navbar.Collapse className="justify-content-end ">
              {user?.email ? (
                <Navbar.Collapse className="justify-content-end ">
                  <Nav.Link as={Link} to="/bookings" className="text-dark">
                    My Booking
                  </Nav.Link>
                  <Nav.Link as={Link} to="/manageBooking" className="text-dark">
                    Manage Bookings
                  </Nav.Link>
                  <Nav.Link as={Link} to="/addService" className="text-dark">
                    Add Service
                  </Nav.Link>
                  <Button variant="light" onClick={HandleSignOut}>
                    {' '}
                    LogOut
                  </Button>
                </Navbar.Collapse>
              ) : (
                <Nav.Link as={Link} to="/Login" className="text-dark">
                  Login
                </Nav.Link>
              )}

              <Navbar.Text>
                <a href="#login" className="text-dark text-decoration-none">
                  {user?.displayName}
                </a>
              </Navbar.Text>
              <NavDropdown title="More" id="navbarScrollingDropdown">
                <NavDropdown.Item as={Link} to="/contact">
                  Contact Us
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/about">
                  About Us
                </NavDropdown.Item>
              </NavDropdown>
            </Navbar.Collapse>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
