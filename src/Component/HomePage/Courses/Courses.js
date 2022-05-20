import React, { useEffect, useState } from "react";
import Course from "../Course/Course";

const Courses = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://damp-temple-98992.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setServices(data.slice(0, 4)));
  }, []);

  return (
    <div className="" >
      <div className="row p-5 ">
        <h1 style={{ backgroundColor: "#01a2a6" }} className="p-4 text-white">
          Popular Courses
        </h1>
        {services.map((service) => (
          <Course key={service.id} service={service}></Course>
        ))}
      </div>
    </div>
  );
};

export default Courses;
