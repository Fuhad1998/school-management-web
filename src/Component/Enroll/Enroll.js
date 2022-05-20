import React, { useEffect, useState } from "react";
import { Card, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import "./Enroll.css"

const Enroll = () => {
  const [services, setServices] = useState([]);
  const { id } = useParams();
  const { register, handleSubmit } = useForm();

  const item = services.find((pd) => pd.id == id);

  const onSubmit = (data) => {
    data.orderName = item.name;
    data.orderPrice = item.price;
    fetch("http://localhost:5000/enrolled", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.insertedId) {
            alert("Enrolled Successful");
          }
        });
  };

  useEffect(() => {
    fetch(`http://localhost:5000/services`)
      .then((res) => res.json())
      .then((data) => setServices(data));
    // console.log(service)
  }, []);

  return (
    <div className="bg-light ">
      <div className="row p-5">
          <h2 className="pb-4">Purchase Courses</h2>
        <div className="col-md-6 col-xs-12 col-sm-12">
          <Col
            className="g-4 m-auto"
            style={{ width: "20rem" }}
            
          >
            <Card className="h-100 p-3 shadow px-5">
              <Card.Img variant="top" src={item?.img} />
              <Card.Body>
                <Card.Title>Course Name: {item?.name}</Card.Title>

                <Card.Text>
                  price: <span className="text-danger">{item?.price}</span>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </div>
        <div className="col-md-6 col-xs-12 col-sm-12 enroll-container shadow ">
            <h2 className="p-2">Personal Information</h2>
        <form className="enroll-from" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="mb-3 input-btn p-2"
          {...register("FirstName")}
          placeholder="First Name"
        />
        <input
          className="mb-3 input-btn p-2"
          {...register("lastName")}
          placeholder="Last Name"
        />
        <input
          className="mb-3 input-btn p-2"
          {...register("email")}
          placeholder="Email"
        />
        <input
          className="mb-3 input-btn p-2"
          {...register("address")}
          placeholder="Address"
        />
        <input
          className="mb-3 input-btn p-2"
          {...register("number")}
          placeholder="Phone Number"
        />
    

        <input
          className="btn-submit input-btn p-2 bg-primary text-white border-0"
          type="submit"
          value="Enrolled"
        />
      </form>
        </div>
      </div>
    </div>
  );
};

export default Enroll;
