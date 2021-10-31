import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Slide from 'react-reveal/Fade';
import { Link } from 'react-router-dom';

const Discount = () => {
  return (
    <div className="p-5 " style={{ backgroundColor: '#F8EFBA' }}>
      <Slide left>
        <Container>
          <Row xs={1} md={2} className="g-5">
            <Col>
              <div className="">
                <img
                  className=" rounded rounded-5 img-fluid"
                  src={`https://shinetheme.com/travelerdata/solotour/wp-content/uploads/2020/04/Group-208-1.png`}
                  alt=""
                />
              </div>
            </Col>
            <Col>
              <div>
                <h6 className="text-danger fw-bold">
                  {' '}
                  Multi Tour To Save Money
                </h6>
                <h1 className="fw-bolder">
                  <span className="text-success">Discount</span> On Quantity
                </h1>
                <p className="text-muted">
                  Book a tour today and enjoy exclusive savings on any future
                  trip you book! There’s no time limit or expiry date on these
                  savings
                </p>
                <img
                  src="https://shinetheme.com/travelerdata/solotour/wp-content/uploads/2020/04/Group-296-2.png"
                  alt=""
                  className="img-fluid"
                />
                <br />
                <Link to="/login">
                  <Button
                    className="shadow-lg w-50 my-md-5 my-sm-2"
                    variant="secondary"
                    size="lg"
                  >
                    Explore Trips
                  </Button>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </Slide>
    </div>
  );
};

export default Discount;
