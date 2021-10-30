import React, { useEffect, useState } from 'react';
import { Spinner, Table } from 'react-bootstrap';

const ManageBookings = () => {
  const [allBookings, setAllBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //Load all the bookings
  useEffect(() => {
    fetch('http://localhost:5000/allOrders')
      .then((res) => res.json())
      .then((data) => {
        setAllBookings(data);
        setIsLoading(false);
      });
  }, []);

  // Deleted or cancle booking by id
  const handleDelete = (id) => {
    if (window.confirm('Are You Sure to cancel Booking?')) {
      const url = `http://localhost:5000/deleteMyOrder/${id}`;
      fetch(url, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert('You have successfully Canceled Booking!!');
            const remainingBooking = allBookings.filter(
              (booking) => booking._id !== id
            );
            setAllBookings(remainingBooking);
          }
        });
    }
  };

  if (isLoading) {
    return (
      <div className="text-center m-5">
        <Spinner animation="border" variant="secondary" />;
      </div>
    );
  } else {
    return (
      <div className="overflow-sm-scroll p-2">
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>SL</th>
              <th>Name</th>
              <th>Email</th>
              <th>Location</th>
              <th>Trip List</th>
              <th>Booking date</th>
              <th>Status</th>
              <th>Cancel</th>
              <th>Approve</th>
            </tr>
          </thead>
          <tbody>
            {allBookings.map((booking, index) => (
              <tr key={booking._id}>
                <td>{index + 1}</td>
                <td>{booking.UserName}</td>
                <td>{booking.email}</td>
                <td>{booking.address}</td>
                <td>{booking.name}</td>
                <td>{booking.date}</td>
                <td>{booking.status}</td>

                <td>
                  <button
                    onClick={() => handleDelete(booking._id)}
                    className="btn btn-danger"
                  >
                    Cancel <i className="fas fa-trash-alt "></i>
                  </button>
                </td>
                <td>
                  <button className="btn btn-success">Approve</button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
};

export default ManageBookings;
