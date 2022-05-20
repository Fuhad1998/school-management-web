import React from 'react';
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UseAuth from '../../../Hooks/UseAuth';
import "./Header.css"

const Header = () => {
  const { user, logOut, admin } = UseAuth();
    return (
        <Navbar expand={false} className="bg-white   py-3">
        <Container fluid>
          <Navbar.Brand href="#" className=" web-name">
          <i className="fa-solid fa-school p-2"></i>
           Language School
          </Navbar.Brand>
          <Link className="header-link  home-link" to="/homes">
          Home
        </Link>

        {user?.email ? (
          <button className="header-link border-0  bg-white" onClick={logOut}>
            Log-Out
          </button>
        ) : (
          <Link className="header-link  px-2" to="/login">
            Log-In
          </Link>
        )}

        
          {/* <button className="header-link border-0  bg-white" >
            Log-Out
          </button> */}
        
          {/* <Link className="header-link  px-2" to="/login">
            Log-In
          </Link> */}
        
  
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            style={{ width: "300px" }}
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel"></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
              <Link className='p-2 dashbord-link' to="/homes">Home</Link>

              {admin && (<Link className='p-2 dashbord-link' to="/AllCourses">All Courses</Link>)}
              {admin && (<Link className='p-2 dashbord-link' to="/enrollStudent">Enroll Student</Link>)}
              {admin && (<Link className='p-2 dashbord-link' to="/addServices">Add Services</Link>)}
              {admin && (<Link className='p-2 dashbord-link' to="/makeAdmin">Make Admin</Link>)}
              
              
              
              
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    );
};

export default Header;