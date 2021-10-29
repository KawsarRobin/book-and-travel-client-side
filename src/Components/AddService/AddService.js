import React from 'react';
import { useForm } from 'react-hook-form';
import './AddService.css';

const AddService = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    const service = data;

    fetch('http://localhost:5000/addService', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert('New Service Added Successfully');
          reset();
        }
      });
  };
  return (
    <div>
      <h2 className="py-3">Add A New Service</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="d-flex flex-column align-items-center justify-content-center pb-5"
      >
        <input
          placeholder="Type Service Name"
          {...register('name', { required: true })}
        />

        <textarea
          placeholder="Service Description"
          {...register('description', { required: true })}
        />

        <input
          placeholder="Image URL"
          {...register('img', { required: true })}
        />
        <input
          placeholder="Rating (Within 10)"
          type="number"
          {...register('rating', { required: true })}
        />
        <input
          type="number"
          placeholder="Duration (in Days)"
          {...register('time', { required: true })}
        />

        <input className="btn btn-outline-success" type="submit" />
      </form>
    </div>
  );
};

export default AddService;
