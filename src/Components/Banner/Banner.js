import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div style={{ backgroundColor: '#C9E5DE', fontWeight: '700' }}>
      <Container>
        <Row xs={1} md={2} className="gx-md-5 gx-sm-3 py-5">
          <Col className="pt-3 mb-5 text-start">
            <h6 className="text-success fw-bold">
              Start planning your dream trip today!
            </h6>
            <h1 className="fw-bolder">BOOK & TRAVEL</h1>

            <h5>
              The place where we are your family, All you need to trust us, rest
              is our responsibilities. We treat you as our family.
            </h5>
            <br />
            <Link to="/home">
              <Button className="shadow" variant="outline-secondary">
                Find Your Dream Trip
              </Button>
            </Link>
          </Col>
          <Col>
            <img
              src="https://image.freepik.com/free-vector/camping-with-caravan-illustration_23-2148679098.jpg"
              alt=""
              className=" img-fluid "
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
