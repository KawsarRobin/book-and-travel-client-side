import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Discount = () => {
  return (
    <div className="p-5 bg-light">
      <Container>
        <Row xs={1} md={2} className="g-5">
          <Col>
            <div className="">
              <img
                className=" rounded rounded-5 img-fluid"
                src={`https://shinetheme.com/travelerdata/solotour/wp-content/uploads/2020/04/Group-208-1.png`}
                alt=""
                className="img-fluid"
              />
            </div>
          </Col>
          <Col>
            <div>
              <h6 className="text-danger fw-bold"> Multi Tour To Save Money</h6>
              <h1 className="fw-bolder">
                <span className="text-success">Discount</span> On Quantity
              </h1>
              <p className="text-muted">
                Book a tour today and enjoy exclusive savings on any future trip
                you book! There’s no time limit or expiry date on these savings
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
                  variant="outline-secondary"
                  size="lg"
                >
                  Dream Trips!!
                </Button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Discount;
