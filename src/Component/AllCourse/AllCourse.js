import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AllCourse = ({allCourse}) => {
    const [products, setProducts] = useState([]);
    const { name, price, img, description, id } = allCourse;


    useEffect(() => {
        fetch("http://localhost:5000/services")
          .then((res) => res.json())
          .then((data) => setProducts(data));
      }, []);
    
      const handelDeleteManageProducts = (id) => {
        console.log(id);
        const proceed = window.confirm("Are You Sure You Want TO Delete");
        if (proceed) {
          const url = `http://localhost:5000/services/${id}`;
          fetch(url, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.deletedCount > 0) {
                alert("deleted successful");
                const remainingUser = products?.filter(
                  (order) => order?._id !== id
                );
                setProducts(remainingUser);
              }
            });
        }
      };
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
        <button
          onClick={() => handelDeleteManageProducts(allCourse?._id)}
          className="btn-submit w-50 mx-5 bg-primary mt-2 text-white border-0 p-2"
        >
          Delete Course
        </button>
      </Card.Body>
    </Card>
    );
};

export default AllCourse;