import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import {
  Button,
  Col,
  Container,
  FormControl,
  InputGroup,
  Row,
} from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
const Footer = () => {
  const arrowIcon = <FontAwesomeIcon icon={faArrowRight} />;

  return (
    <div style={{ backgroundColor: '#104161' }}>
      <Fade bottom>
        <Container>
          <Row xs={1} md={4} className="p-5 g-3 text-white">
            <Col>
              <h2>
                {' '}
                <span className="fw-bold text-danger"> Book</span>&
                <span className="fw-bold text-info">Travel</span>
              </h2>
              <p>
                A Place you can trust to travel around world. Travel your dream
                place with us, and live the days your waiting for..
              </p>
              <div className="fw-bolder d-flex justify-content-center align-items-center">
                <h3>
                  <i className="fab fa-facebook "></i>
                </h3>
                <h3>
                  <i className="fab fa-instagram mx-3"></i>
                </h3>
                <h3>
                  <i className="fab fa-dribbble"></i>
                </h3>
              </div>
            </Col>
            <Col>
              <h5>Booking information's</h5>
              <p>General information</p>
              <p>Offer Packages</p>
              <p>Guide's Profile</p>
              <p>Working hours</p>
              <p>Upcoming Tours</p>
              <p>Contact</p>{' '}
            </Col>
            <Col>
              <h5>About</h5>
              <p>Travel Guide</p>
              <p>Partners</p>
              <p>News & blogs</p>
              <p>FAQs</p>
              <p>Our Introduction</p>
              <p>Galleries</p>
            </Col>
            <Col>
              <h5>Subscribe</h5>
              <InputGroup className="mb-3">
                <FormControl
                  placeholder="Your email..."
                  aria-label="Recipient's username"
                />
                <Button variant="secondary" size="sm">
                  {arrowIcon}
                </Button>
              </InputGroup>
              <p>
                Get the latest Travel-Packages and updates right at your inbox.
              </p>
            </Col>
          </Row>
        </Container>
      </Fade>
      <hr />
      <h6 className="text-center py-2 fw-bolder text-white">
        <small>Copyright © 2021 Kawsar Robin All rights reserved.</small>
      </h6>
    </div>
  );
};

export default Footer;
