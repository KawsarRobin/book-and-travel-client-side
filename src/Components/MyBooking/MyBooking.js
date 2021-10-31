import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row, Spinner } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const MyBooking = () => {
  const { user } = useAuth();
  const [myBookings, setMyBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //Load myBookings from database with email
  useEffect(() => {
    if (user.email) {
      fetch(
        `https://mysterious-citadel-34425.herokuapp.com/myOrders/${user.email}`,
        {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          setMyBookings(data);
          setIsLoading(false);
        })
        .catch((err) => console.log(err.message));
    }
  }, [user.email]);

  // Deleted or cancel booking by id

  const handleDelete = (id) => {
    if (window.confirm('Are You Sure to cancel Booking?')) {
      const url = `https://mysterious-citadel-34425.herokuapp.com/deleteMyOrder/${id}`;
      fetch(url, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert('You have successfully Canceled Booking!!');
            const remainingBooking = myBookings.filter(
              (booking) => booking._id !== id
            );
            setMyBookings(remainingBooking);
          }
        })
        .catch((err) => console.log(err.message));
    }
  };

  if (isLoading) {
    return (
      <div className="text-center m-5">
        <Spinner animation="border" variant="secondary" />
      </div>
    );
  } else {
    return (
      <Container className="py-md-4 p-sm-3">
        <Row xs={1} md={2} className="g-4">
          {myBookings.map((booking) => (
            <Col key={booking._id} className="p-3">
              <Card className="bg-light shadow">
                <Row>
                  <Col>
                    <Card.Img className="p-2" variant="top" src={booking.img} />
                  </Col>
                  <Col>
                    <Card.Body className="text-secondary">
                      <h4>{booking.name}</h4>
                      <h6>Booked on {booking.date}</h6>
                      <Button
                        onClick={() => handleDelete(booking._id)}
                        variant="danger"
                        className=""
                      >
                        Cancel
                      </Button>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
};

export default MyBooking;
