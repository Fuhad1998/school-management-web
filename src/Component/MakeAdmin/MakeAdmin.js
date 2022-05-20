import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./MakeAdmin.css"

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    setEmail(data);
    // const user = {email}
    fetch("https://damp-temple-98992.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          // console.log(data);
          setSuccess(true);

          alert("success");
        }
      });
  };
  return (
    <div className="p-5 bg-white">
      <h1 className="text-center">Make A Admin</h1>
      <form className="admin-container" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="input-btn p-2"
          {...register("email")}
          placeholder="Write your email"
          type="email"
        />
        <br />

        <input
          className="btn-submit input-btn p-2 bg-primary rounded border-0 text-white"
          type="submit"
          value="Please Make Admin"
        />
      </form>
    </div>
  );
};

export default MakeAdmin;
