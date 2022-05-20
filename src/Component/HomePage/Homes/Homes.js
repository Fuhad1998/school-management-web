import React from "react";
import "./Homes.css";

import Instructors from "../Instructors/Instructors";
import Banner from "../Banner/Banner";
import Courses from "../Courses/Courses";
import Event from "../Event/Event";
import OurServices from "../../OurServices/OurServices";


const Homes = () => {
  return (
    <div className="row">
       
      <Banner></Banner>
      <Courses></Courses>
      <Instructors></Instructors>
      <Event></Event>
      <OurServices></OurServices>
    </div>
  );
};

export default Homes;
