import React, { useEffect, useState } from 'react';
import AllCourse from '../AllCourse/AllCourse';

const AllCourses = () => {
    const [allCourses, setAllCourses] = useState([])

    useEffect(() => {
        fetch("https://damp-temple-98992.herokuapp.com/services")
          .then((res) => res.json())
          .then((data) => setAllCourses(data));
      }, []);
    return (
        <div className="" >
        <div className="row p-5 ">
          <h1 style={{ backgroundColor: "#01a2a6" }} className="p-4 text-white">
            Popular Courses
          </h1>
          {allCourses.map((allCourse) => <AllCourse
          key={allCourse.id}
          allCourse={allCourse}
          ></AllCourse>)}
        </div>
      </div>
    );
};

export default AllCourses;