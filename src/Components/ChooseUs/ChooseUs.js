import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Slide from 'react-reveal/Fade';

const ChooseUs = () => {
  return (
    <div style={{ backgroundColor: '#' }}>
      <Slide right>
        <Container className="py-5 overflow-hidden">
          <div className="text-center pb-3">
            <h2 className="fw-bolder ">
              <span className="text-danger">Why</span> You'll Choose Us
            </h2>
            <p className="text-secondary">
              You don't have to Travel alone, you've got our assistance and
              help.
            </p>
          </div>
          <Row xs={2} md={4} className="g-4">
            <Col>
              <div
                className="p-4 h-100   text-center"
                style={{
                  borderRadius: '50%',
                  borderTop: '5px solid #68629E',
                }}
              >
                <div className="text-center">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/522/522568.png"
                    alt=""
                    className="w-25 mb-2"
                  />
                </div>
                <h6 style={{ color: '#68629E' }}>Commitment</h6>
                <p>We always fulfill our customer's need</p>
              </div>
            </Col>
            <Col>
              <div
                className="p-4 h-100   text-center"
                style={{
                  borderRadius: '50%',
                  borderTop: '5px solid #DD246E',
                }}
              >
                <div className="text-center">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/753/753651.png"
                    alt=""
                    className="w-25 mb-2"
                  />
                </div>
                <h6 style={{ color: '#DD246E' }}>Professional</h6>
                <p>Travelling is our profession, We Love it</p>
              </div>
            </Col>
            <Col>
              <div
                className="p-4 h-100   text-center"
                style={{
                  borderRadius: '50%',
                  borderTop: '5px solid #2D69EF',
                }}
              >
                <div className="text-center">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/584/584093.png"
                    alt=""
                    className="w-25 mb-2"
                  />
                </div>
                <h6 style={{ color: '#2D69EF' }}>Cost Effective</h6>
                <p>Travel with us in low cost and save money</p>
              </div>
            </Col>
            <Col>
              <div
                className="p-4 h-100  text-center"
                style={{
                  borderRadius: '50%',
                  borderTop: '5px solid #1AA291',
                }}
              >
                <div className="text-center">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/1534/1534952.png"
                    alt=""
                    className="w-25 mb-2"
                  />
                </div>
                <h6 style={{ color: '#1AA291' }}>Team Work</h6>
                <p>We work with team to ensure your safety</p>
              </div>
            </Col>
          </Row>
        </Container>
      </Slide>
    </div>
  );
};

export default ChooseUs;
