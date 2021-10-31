import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://mysterious-citadel-34425.herokuapp.com/services')
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <div className="text-center m-5">
        <Spinner animation="border" variant="secondary" />;
      </div>
    );
  } else {
    return (
      <div style={{ backgroundColor: '#F3F4F8' }}>
        <Container className="py-5">
          <h2 className="text-center fw-bolder">
            Our <span className="text-info">Packages</span> For You
          </h2>
          <p className="text-secondary text-center">
            You`re guaranteed to find something that`s right for you.
          </p>
          <Row xs={1} md={3} className="g-4">
            {services.map((service) => (
              <Service key={service._id} service={service}></Service>
            ))}
          </Row>
        </Container>
      </div>
    );
  }
};

export default Services;
