import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const ServiceDetails = () => {
  const { id } = useParams();
  const [service, setService] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/services/${id}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);
  return (
    <Container className="px-md-5">
      <Col className="p-md-5">
        <Card
          style={{ backgroundColor: '#' }}
          className="rounded rounded-3 shadow my-3 "
        >
          <Card.Img
            variant="top"
            src={service.img}
            className="p-3 img-fluid rounded rounded-3"
          />
          <Card.Body className="p-md-5">
            <Card.Title className="d-flex justify-content-between align-items-center">
              <h2>{service.name}</h2>
              <h4>${service.price}</h4>
            </Card.Title>
            <Card.Text>
              <p className="ps-2 text-start">
                <i className="far fa-smile-beam"></i>{' '}
                <span>{service.rating} Superb </span>
              </p>
              <span>{service.description?.slice(0, 300)}</span>
            </Card.Text>{' '}
            <hr />
            <div className="d-flex justify-content-between px-3">
              <span>
                <i className="far fa-clock"></i> {service.time} Days
              </span>
              <p>
                <Link to="/">
                  <Button size="lg" variant="success">
                    Place Order
                  </Button>
                </Link>
              </p>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Container>
  );
};

export default ServiceDetails;
