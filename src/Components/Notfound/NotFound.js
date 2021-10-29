import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="text-center mb-4 px-5">
      <img
        src="https://image.freepik.com/free-vector/internet-network-warning-404-error-page-file-found-web-page_1150-48324.jpg"
        alt=""
        className="img-fluid"
      />
      <h1 className="text-danger">Page Not Found!</h1>
      <h4>Please try search for some other page</h4>
      <Link to="/home">
        <br />
        <button className="shadow btn btn-primary btn-lg"> Back to Home</button>
      </Link>
    </div>
  );
};

export default NotFound;
