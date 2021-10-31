import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service';

const Service = (props) => {
  const { name, img, description, _id, rating, time, price } = props.service;
  return (
    <Col>
      <Card className="rounded rounded-3 shadow bg-light h-100">
        <Card.Img variant="top" src={img} className="p-3  rounded rounded-3" />
        <Card.Body>
          <Card.Title className="d-flex justify-content-between align-items-center">
            <h5>{name}</h5>
            <h6 className="text-danger">${price}</h6>
          </Card.Title>
          <div>
            <h6 className="ps-2 text-start ">
              <i className="far fa-smile-beam "></i>{' '}
              <span>
                {' '}
                {rating >= 7 ? `${rating} Superb` : `${rating} Good`}
              </span>
            </h6>
            <span>{description.slice(0, 100)}...</span>
          </div>{' '}
          <hr />
          <div className="d-flex justify-content-between px-3">
            <span>
              <i className="far fa-clock"></i> {time} Days
            </span>
            <p>
              <Link to={`/placeorder/${_id}`}>
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
