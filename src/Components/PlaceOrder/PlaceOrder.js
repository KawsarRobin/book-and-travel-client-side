import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './PlaceOrder';

const PlaceOrder = () => {
  const { id } = useParams();
  const [service, setService] = useState({});
  const { register, handleSubmit, reset } = useForm();
  const { user } = useAuth();

  //Find single service
  useEffect(() => {
    fetch(`http://localhost:5000/services/${id}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  const onSubmit = (data) => {
    const email = data.email;
    const status = 'Pending';
    service.UserName = user.displayName;
    service.email = email;
    service.address = data.address;
    service.phone = data.phone;
    service.date = data.date;
    service.status = status;
    delete service._id;

    fetch('http://localhost:5000/addOrder', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert('Your Order Placed Successfully');
          reset();
        }
      });
  };

  return (
    <Container>
      <Row xs={1} md={2} className="g-4">
        <Col>
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
                <span>{service.description?.slice(0, 100)}</span>
              </Card.Text>{' '}
              <hr />
              <div className="d-flex justify-content-between px-3">
                <span>
                  <i className="far fa-clock"></i> {service.time} Days
                </span>
                <p>
                  <Link to="/">
                    <Button size="sm" variant="primary">
                      Back Home
                    </Button>
                  </Link>
                </p>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <h2 className="pt-3">Place Order</h2>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="d-flex flex-column align-items-center justify-content-center"
          >
            <input
              placeholder="Your Name"
              defaultValue={user.displayName}
              {...register('name', { required: true })}
            />
            <input
              placeholder="Your Email"
              type="email"
              defaultValue={user.email}
              {...register('email', { required: true })}
            />
            <textarea
              type="text"
              placeholder="Address"
              {...register('address', { required: true })}
            />
            <input
              type="text"
              placeholder="Phone Number"
              {...register('phone', { required: true })}
            />
            <input
              type="date"
              placeholder="date"
              {...register('date', { required: true })}
            />

            <input className="btn btn-outline-success" type="submit" />
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default PlaceOrder;
