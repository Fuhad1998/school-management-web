import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import UseAuth from '../../Hooks/UseAuth';

const Register = () => {
    const { register, handleSubmit } = useForm();
    const {registerUser} = UseAuth();
    const Navigate = useNavigate();
    const onSubmit = (data) => {
      
      registerUser(data.email, data.password, data.name, Navigate)
    alert("Register success");
      
    };
    return (
        <div className="container  Register-container my-5 shadow-lg">
         <form className="login-from" onSubmit={handleSubmit(onSubmit)}>
          <h2 className="p-2 register-name">Register</h2>
          <input
            className="input-btn p-2"
            {...register("name")}
            placeholder="Write your name"
            type="name"
          />
          <br />
          <input
            className="input-btn p-2 "
            {...register("email")}
            placeholder="Write your email"
            type="email"
          />
          <br />
          <input
            className="input-btn p-2"
            {...register("password")}
            placeholder="Write your password"
            type="password"
          />
          <br />
          <input
            className="btn-submit input-btn btn btn-primary login-bac-color text-white fs-5 "
            type="submit"
            value="Register"
          />
  
          <br />
  
          <Link className=" " to="/login">
            <button
              className="border-0 bg-success bg-opacity-25 "
              style={{ fontWeight: 400 }}
            >
              ALREADY REGISTERED? PLEASE LOG-IN
            </button>
          </Link>
        </form>
       
      </div>
    );
};

export default Register;