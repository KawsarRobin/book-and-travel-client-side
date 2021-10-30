import React, { useEffect } from 'react';
import useAuth from '../../hooks/useAuth';

const MyBooking = () => {
  const { user } = useAuth();
  console.log(user.email);

  useEffect(() => {
    if (user.email) {
      fetch(`http://localhost:5000/myOrders/${user.email}`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    }
  }, [user.email]);

  return (
    <div>
      <h4>this is my booking</h4>
    </div>
  );
};

export default MyBooking;
