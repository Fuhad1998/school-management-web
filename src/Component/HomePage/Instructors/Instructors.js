import React from "react";
import { Card } from "react-bootstrap";
import img1 from "../../../img/Instructors-img/Depositphotos_82577506_original-580x580.jpg";
import img2 from "../../../img/Instructors-img/photodune-10624211-businesswoman-networking-s1-580x580.jpg";
import img3 from "../../../img/Instructors-img/photodune-6860206-ginger-woman-s1-580x580.jpg";
import img4 from "../../../img/Instructors-img/photodune-8386876-employee-at-work-s1-580x580.jpg";
import "./Instructors.css"

const Instructors = () => {
  return (
    <div className=" p-5 instructors-con">
      <h1 className="text-center">Featured Instructors</h1>
      <div className="row pt-5">
        <Card style={{ width: "18rem" }} className="col-md-3 col-xs-12 col-sm-12 m-3 ">
          <Card.Img
            className="rounded-circle cart-img p-5"
            variant="top"
            src={img1}
          />
          <Card.Body>
            <Card.Title>Danny Awesome</Card.Title>
            <Card.Text>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium sed omnis ipsum, reiciendis id sequi totam voluptate fugit doloremque consequuntur!
            </Card.Text>
          </Card.Body>
         
        </Card>
        <Card style={{ width: "18rem" }} className="col-md-3 col-xs-12 col-sm-12 m-3">
          <Card.Img className="rounded-circle p-5" variant="top" src={img2} />
          <Card.Body>
            <Card.Title>Kimberly Richiez</Card.Title>
            <Card.Text>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium sed omnis ipsum, reiciendis id sequi totam voluptate fugit doloremque consequuntur!
            </Card.Text>
          </Card.Body>
         
        </Card>
        <Card style={{ width: "18rem" }} className="col-md-3 col-xs-12 col-sm-12 m-3">
          <Card.Img className="rounded-circle p-5" variant="top" src={img3} />
          <Card.Body>
            <Card.Title>Dylan Taylor</Card.Title>
            <Card.Text>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium sed omnis ipsum, reiciendis id sequi totam voluptate fugit doloremque consequuntur!
            
            </Card.Text>
          </Card.Body>
        
        </Card>
        <Card style={{ width: "18rem" }} className="col-md-3 m-3">
          <Card.Img className="rounded-circle p-5" variant="top" src={img4} />
          <Card.Body>
            <Card.Title>Amy Clarke</Card.Title>
            <Card.Text>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium sed omnis ipsum, reiciendis id sequi totam voluptate fugit doloremque consequuntur!
            </Card.Text>
          </Card.Body>
          
        </Card>
      </div>
    </div>
  );
};

export default Instructors;
