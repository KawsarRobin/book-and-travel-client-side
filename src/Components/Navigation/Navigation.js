import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Navigation = () => {
  const { user, logOut } = useAuth();
  return (
    <div style={{ backgroundColor: '#C9E5DE', fontWeight: '600' }}>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#">
            <span className="fw-bold text-danger"> Book</span>&
            <span className="fw-bold text-info">Travel</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link className=" text-black" as={Link} to="/home">
                Home
              </Nav.Link>
              <Nav.Link className=" text-black" as={Link} to="/about">
                About
              </Nav.Link>
              <Nav.Link className=" text-black" as={Link} to="/contact">
                Contact
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
                    Manage Services
                  </Nav.Link>
                  <Button
                    variant="outline-secondary"
                    size="sm"
                    onClick={logOut}
                  >
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
                <a
                  href="#login"
                  className="text-dark text-decoration-none ms-2"
                >
                  {user?.displayName}
                </a>
              </Navbar.Text>
            </Navbar.Collapse>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
