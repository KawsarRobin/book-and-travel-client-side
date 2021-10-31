import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import './AddService.css';

const AddService = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    const service = data;

    fetch('https://mysterious-citadel-34425.herokuapp.com/addService', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert('New Service Launched Successfully');
          reset();
        }
      });
  };
  return (
    <Container className=" mx-md-5 rounded rounded-3 border border-3 shadow my-5 bg-light">
      <h3 className="py-3 text-secondary">Launch a New Service</h3>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="d-flex flex-column pb-5"
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
          placeholder="Price in $"
          {...register('price', { required: true })}
        />
        <input
          placeholder="Rating (Within 10)"
          type="text"
          {...register('rating', { required: true })}
        />
        <input
          type="number"
          placeholder="Duration (in Days)"
          {...register('time', { required: true })}
        />

        <input className="btn btn-outline-success" type="submit" />
      </form>
    </Container>
  );
};

export default AddService;
