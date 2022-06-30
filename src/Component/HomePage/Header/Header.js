import React, { useState } from "react";
import { Button, Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";
import UseAuth from "../../../Hooks/UseAuth";

import "./Header.css";

const Header = () => {
  const { user, logOut, admin } = UseAuth();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (

<Navbar collapseOnSelect expand="lg" className="bg-white"  >
  <Container>
  <Navbar.Brand className="web-name" href="#">
  <i className="fa-solid fa-school p-2"></i>
         Language School
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
     
    
    </Nav>
    <Nav>
    <Link className="header-link  home-link" to="/homes">
          Home
        </Link>

         {user?.email ? (
            <button className="header-link border-0  bg-white px-3" onClick={logOut}>
              Log-Out
            </button>
          ) : (
            <Link className="header-link  px-2" to="/login">
              Log-In
            </Link>
          )}
      <Button className="bg-white  border-0 dashboard-btn" onClick={handleShow}>
     Dashboard
   </Button>
    </Nav>
  </Navbar.Collapse>

  <>
  <Offcanvas show={show} onHide={handleClose}>
    <Offcanvas.Header closeButton className="bg-white">
      <Offcanvas.Title className="">
      <i className="fa-solid fa-school p-2"></i>
        Language School
        </Offcanvas.Title>
    </Offcanvas.Header>
    <Offcanvas.Body>
    
         <Nav>
         <Link className="p-2 dashbord-link" to="/homes">
                Home
              </Link>

              {admin && (
                <Link className="p-2 dashbord-link" to="/AllCourses">
                  All Courses
                </Link>
              )}
              {admin && (
                <Link className="p-2 dashbord-link" to="/enrollStudent">
                  Enroll Student
                </Link>
              )}
              {admin && (
                <Link className="p-2 dashbord-link" to="/addServices">
                  Add Services
                </Link>
              )}
              {admin && (
                <Link className="p-2 dashbord-link" to="/makeAdmin">
                  Make Admin
                </Link>
              )}
         </Nav>
            
    </Offcanvas.Body>
  </Offcanvas>
</>
  </Container>

</Navbar>
  );
};

export default Header;
