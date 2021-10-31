import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row, Spinner } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './PlaceOrder';

const PlaceOrder = () => {
  const { id } = useParams();
  const [service, setService] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { register, handleSubmit, reset } = useForm();
  const { user } = useAuth();

  //Find single service
  useEffect(() => {
    fetch(`https://mysterious-citadel-34425.herokuapp.com/services/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setService(data);
        setIsLoading(false);
      });
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

    fetch('https://mysterious-citadel-34425.herokuapp.com/addOrder', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert('Your Booking Placed Successfully');
          reset();
        }
      });
  };

  if (isLoading) {
    return (
      <div className="text-center m-5">
        <Spinner animation="border" variant="secondary" />;
      </div>
    );
  } else {
    return (
      <div style={{ backgroundColor: '#F7FEE7' }}>
        <Container>
          <Row xs={1} md={2} className="gx-4">
            <Col>
              <Card className="rounded rounded-3 shadow my-3 ">
                <Card.Img
                  variant="top"
                  src={service.img}
                  className="p-3 img-fluid rounded rounded-3"
                />
                <Card.Body className="p-md-5">
                  <Card.Title className="d-flex justify-content-between align-items-center">
                    <h2>{service.name}</h2>
                    <h4 className="text-danger">${service.price}</h4>
                  </Card.Title>
                  <div>
                    <p className="ps-2 text-start">
                      <i className="far fa-smile-beam"></i>{' '}
                      <span>{service.rating} Superb </span>
                    </p>
                    <span>{service.description?.slice(0, 100)}</span>
                  </div>{' '}
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
              <div className="bg-light py-3 shadow-lg my-5 border border-3 rounded rounded-3">
                <h3 className="pt-3 fw-bold text-secondary">
                  Fill-Up This Form!
                </h3>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="d-flex flex-column w-100 px-4"
                >
                  <input
                    placeholder="Your Name"
                    className=""
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
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
};

export default PlaceOrder;
