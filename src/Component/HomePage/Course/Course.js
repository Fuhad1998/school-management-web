import React, {  } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Course.css";

const Course = ({ service }) => {
  
  const { name, price, img, description, id } = service;


  return (
    <Card
      style={{ width: "19rem" }}
      className="col-md-3 col-xs-12 col-sm-12 mx-1 "
    >
      <Card.Img className="" variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Title>
          Price: $<span className="text-danger">{price}</span>
        </Card.Title>

        <Card.Text>{description}</Card.Text>
        <Button className=" enroll-btn">
          <Link className="enroll-link" to={`/enroll/${id}`}>
            Enroll Now
          </Link>
        </Button>
       
      </Card.Body>
    </Card>
  );
};

export default Course;
