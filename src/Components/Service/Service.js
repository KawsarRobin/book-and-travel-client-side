import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = (props) => {
  const { name, img, description, _id, rating, time, price } = props.service;
  return (
    <Col>
      <Card
        style={{ backgroundColor: '#' }}
        className="rounded rounded-3 shadow  h-100"
      >
        <Card.Img variant="top" src={img} className="p-3  rounded rounded-3" />
        <Card.Body className="">
          <Card.Title className="d-flex justify-content-between align-items-center">
            <h5>{name}</h5>
            <h6>${price}</h6>
          </Card.Title>
          <Card.Text>
            <p className="ps-2 text-start">
              <i class="far fa-smile-beam"></i> <span>{rating} Superb </span>
            </p>
            <span>{description.slice(0, 100)}...</span>
          </Card.Text>{' '}
          <hr />
          <div className="d-flex justify-content-between px-3">
            <span>
              <i class="far fa-clock"></i> {time} Days
            </span>
            <p>
              <Link to={`/service/${_id}`}>
                <Button size="sm" variant="outline-secondary">
                  Book Now
                </Button>
              </Link>
            </p>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Service;
