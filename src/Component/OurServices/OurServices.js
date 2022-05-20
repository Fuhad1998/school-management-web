import React from "react";
import { Card } from "react-bootstrap";
import "./OurServices.css";
import img1 from "../../img/services/h1-custom-icon-7.png";
import img2 from "../../img/services/h1-custom-icon-8.png";
import img3 from "../../img/services/h1-custom-icon-9.png";

const OurServices = () => {
  return (
    <div className="container p-5 bg-white">
      <div className="row">
        <h6 className="text-primary pt-5">Guaranteed Success</h6>
        <h1>Our Services</h1>
        <h5 className="pt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
          delectus.
        </h5>
        <h5 className="pb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
          delectus.
        </h5>
        <div className="col-md-4 col-xs-12 col-sm-12">
          <Card className="mx-5 border-0" style={{ width: "18rem" }}>
            <Card.Img className="p-3" variant="top" src={img1} />
            <Card.Body>
              <Card.Title className="card-title">Notification & Emails</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit ametcon, sectetur adipiscing elit.
                Phasellus vehic sagittis euismod.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4 col-xs-12 col-sm-12">
          <Card className=" mx-5 border-0" style={{ width: "18rem" }}>
            <Card.Img className="p-3" variant="top" src={img2} />
            <Card.Body>
              <Card.Title className="card-title">Certification</Card.Title>
              <Card.Text>
                Phasellus vehic sagittis euismod. Lorem ipsum dolor sit ametcon,
                sectetur adipiscing elit.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4 col-xs-12 col-sm-12 mb-4">
          <Card className=" mx-5 border-0" style={{ width: "18rem" }}>
            <Card.Img className="p-3" variant="top" src={img3} />
            <Card.Body>
              <Card.Title className="card-title">Europe Campus</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit ametcon, sectetur adipiscing elit.
                Phasellus vehic sagittis euismod.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default OurServices;

{
  /* <h6 className="text-primary pt-5">Guaranteed Success</h6>
<h1>Our Services</h1>
<h5 className="pt-2">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
  delectus.
</h5>
<h5 className="pb-5">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
  delectus.
</h5>
<div className="row p-5">


<div className="col-md-4 col-xs-12 col-sm-12 mx- ms-">
<Card  style={{ width: "18rem" }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the
      bulk of the card's content.
    </Card.Text>
  </Card.Body>
</Card>
</div>
<Card className="col-md-4 col-xs-12 col-sm-12 mx-5" style={{ width: "18rem" }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the
      bulk of the card's content.
    </Card.Text>
  </Card.Body>
</Card>

</div> */
}
