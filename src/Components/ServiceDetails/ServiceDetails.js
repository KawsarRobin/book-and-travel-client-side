import React from 'react';
import { useParams } from 'react-router';

const ServiceDetails = () => {
  const { id } = useParams();
  return (
    <div>
      <h2>the id is {id}</h2>
    </div>
  );
};

export default ServiceDetails;
