import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Slide from 'react-reveal/Fade';
import { HashLink } from 'react-router-hash-link';

const AboutUs = () => {
  return (
    <div className="p-5">
      <Slide right>
        <Container>
          <div className="text-center pb-3">
            <h2 className="fw-bolder ">
              Know More <span className="text-primary">About Us</span>
            </h2>
            <p className="text-secondary">Know About us to build your trust!</p>
          </div>
          <Row xs={1} md={2} className="g-5">
            <Col>
              <div className="px-5">
                <img
                  className=" rounded rounded-5 img-fluid"
                  src={`https://image.freepik.com/free-photo/tourist-presenting-something_1368-7018.jpg`}
                  alt=""
                />
              </div>
            </Col>
            <Col>
              <div>
                <h1>
                  {' '}
                  <span className="fw-bolder text-danger"> Book</span>&
                  <span className="fw-bolder text-info">Travel</span>
                </h1>
                <p className="text-muted">
                  We at <strong>Book & Travel</strong> Team are always fully
                  focused on helping your family and you to plan your dream tour
                  with your family and friends.
                </p>
                <p className="text-muted">
                  Since 2021, we’ve helped more than 500,000 people of all ages
                  enjoy the best outdoor experience of their lives. Whether it’s
                  for one day or a two-week vacation, close to home or a foreign
                  land and something like that.
                </p>

                <br />
                <HashLink to="#services">
                  <Button
                    className="shadow my-3 rounded-pill"
                    variant="outline-dark"
                  >
                    Explore Our Trips
                  </Button>
                </HashLink>
              </div>
            </Col>
          </Row>
        </Container>
      </Slide>
    </div>
  );
};

export default AboutUs;
