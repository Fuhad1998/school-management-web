import React from 'react';
import "./Footer.css"
const Footer = () => {
    return (
     <div className='bg-dark'>
            <div className='row'>
            <div className='col-md-4 col-sm-12 col-xs-12 p-5'>
                <h2 className='footer-title'>About School</h2>
                
                    <li className='footer-about pt-2'>About Us</li>
                    <li className='footer-about'>Our Staff</li>
                    <li className='footer-about'>Our Partners</li>
                    <li className='footer-about'>Careers</li>
                
               
            </div>
            <div className='col-md-4 col-sm-12 col-xs-12 p-5'>
                <h2 className='footer-title'>Programmes</h2>
                <li className='footer-about pt-2'>About Us</li>
                    <li className='footer-about'>Our Staff</li>
                    <li className='footer-about'>Our Partners</li>
                    <li className='footer-about'>Careers</li>
            </div>
            <div className='col-md-4 col-sm-12 col-xs-12 p-5'>
                <h2 className='footer-title'>Contact Info</h2>
                <p className='contact'><i class="fa-solid fa-envelope"></i> schoolmanagement@gmail.com</p>
                <p className='contact'><i class="fa-solid fa-mobile-screen-button"></i> call us: +09876543234</p>
                <p className='contact'><i class="fa-solid fa-location-pin"></i> Utrra, Dhaka, Bangladesh</p>
            </div>
        </div>
        <p className="text-center fs-6  p-5  text-white">
        <i className="  fas fa-copyright  "></i> Copy right 2022 By Language
        School
      </p>
     </div>
    );
};

export default Footer;