import React, { useEffect, useState } from 'react';
import { Spinner, Table } from 'react-bootstrap';

const ManageBookings = () => {
  const [allBookings, setAllBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isApproved, setIsApproved] = useState(false);

  //Load all the bookings
  useEffect(() => {
    fetch('https://mysterious-citadel-34425.herokuapp.com/allOrders')
      .then((res) => res.json())
      .then((data) => {
        setAllBookings(data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err.message));
  }, [isApproved]);

  // Update pending status to approved

  const handleUpdate = (id) => {
    const status = {
      status: 'Approved',
    };

    fetch(
      `https://mysterious-citadel-34425.herokuapp.com/upadateOrders/${id}`,
      {
        method: 'PUT',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(status),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert('Booking Approved Successfully');
          setIsApproved(true);
        }
      })
      .catch((err) => console.log(err.message));
  };

  // Deleted or cancel booking by id
  const handleDelete = (id) => {
    if (window.confirm('Are you sure to Cancel Booking?')) {
      const url = `https://mysterious-citadel-34425.herokuapp.com/deleteMyOrder/${id}`;
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
      <div className="overflow-auto p-2">
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
              <th>Action</th>
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
                    className="btn btn-danger m-1"
                  >
                    Cancel <i className="fas fa-trash-alt "></i>
                  </button>
                  <button
                    onClick={() => handleUpdate(booking._id)}
                    className="btn btn-success m-1"
                  >
                    Approve
                  </button>
                </td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
};

export default ManageBookings;
