import React from 'react';
import { useForm } from 'react-hook-form';
import "./AddServices.css"

const AddServices = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
      fetch("http://localhost:5000/services", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((result) => {
            if (result.insertedId) {
              alert("successful Add A course");
              
            }
          });
    };
    return (
        <div className='bg-light '>
        <h1 className="text-center p-3">Add-A-Course</h1>
  
       
  
        <form className="product-from" onSubmit={handleSubmit(onSubmit)}>
          <input
            className="input-btn p-2 shadow"
            {...register("name")}
            placeholder="Write product name"
            type="text"
          />
          <br />
          <input
            className="input-btn p-2 shadow"
            {...register("description")}
            placeholder="Write description"
            type="text"
          />
          <br />
          <input
            className="input-btn p-2 shadow"
            {...register("img")}
            placeholder="Write imgUrl"
            type="text"
          />
          <br />
          <input
            className="input-btn p-2 shadow"
            {...register("price")}
            placeholder="Write product price "
            type="number"
          />
          <br />
          <input
            className="btn-submit mb-4 input-btn p-2  bg-primary border border-secondary text-white fs-5 shadow"
            type="submit"
            value="Please Add product"
          />
        </form>
      </div>
    );
};

export default AddServices;