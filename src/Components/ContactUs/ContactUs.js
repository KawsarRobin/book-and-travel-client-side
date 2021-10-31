import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const ContactUs = () => {
  return (
    <div className="pb-5" style={{ backgroundColor: '#E1F6FF' }}>
      <Container className="py-5 overflow-hidden">
        <div className="text-center pb-3">
          <h2 className="fw-bolder ">
            <span className="text-danger">Contact</span> information
          </h2>
          <p className="text-secondary">
            Have any question? Feel free to contact with us.
          </p>
        </div>
        <Row xs={2} md={4} className="g-4">
          <Col>
            <Card
              className="p-4 h-100 text-white shadow text-center"
              style={{ backgroundColor: '#2d69f0' }}
            >
              <div className="text-center">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/159/159832.png"
                  alt=""
                  className="w-25 mb-2"
                />
              </div>
              <h6>TALK TO US</h6>
              <small>
                <strong>Toll Free:</strong> 1224 2234 LAW
              </small>
              <small>
                {' '}
                <strong>Fax: </strong> 1224 2235 225
              </small>
            </Card>
          </Col>
          <Col>
            <Card
              className="p-4 h-100 text-white shadow text-center"
              style={{ backgroundColor: '#dd246e' }}
            >
              <div className="text-center">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/561/561127.png"
                  alt=""
                  className="w-25 mb-2"
                />
              </div>
              <h6>MAIL US @</h6>
              <small>
                <strong>Support:</strong> kawsarrobin3@gmail.com
              </small>
              <small>
                {' '}
                <strong>Admin: </strong> kawsarrobin3@gmail.com
              </small>
            </Card>
          </Col>
          <Col>
            <Card
              className="p-4 h-100 text-white shadow text-center"
              style={{ backgroundColor: '#8007e6' }}
            >
              <div className="text-center">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/484/484167.png"
                  alt=""
                  className="w-25 mb-2"
                />
              </div>
              <h6>OUR LOCATION</h6>
              <small>625 @ David Blake Road,</small>
              <small>Adventureland, LA 14536, USA</small>
            </Card>
          </Col>
          <Col>
            <Card
              className="p-4 h-100 text-white shadow text-center"
              style={{ backgroundColor: '#0cae74' }}
            >
              <div className="text-center">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/1584/1584807.png"
                  alt=""
                  className="w-25 mb-2"
                />
              </div>
              <h6>OPENING HOURS</h6>
              <small>Mon – Sat 9 am to 8 pm</small>
              <small>Sun – 10 am to 3 pm</small>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactUs;
