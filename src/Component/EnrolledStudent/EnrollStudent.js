import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const EnrollStudent = () => {
    const [enrolls, setEnrolls] = useState([])

    useEffect(()=>{
        fetch("https://damp-temple-98992.herokuapp.com/enrolled")
        .then(res => res.json())
        .then(data => setEnrolls(data))

    }, [])
    return (
      <div className='bg-white pt-5'>
          <h2 className='pb-3'>Student List</h2>
            <Table className=' ' responsive striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Name</th>
            <th>Course Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Id</th>
            <th>Total Price</th>
            
            
          </tr>
        </thead>
        <tbody>
        {
          enrolls.map(enroll =>  <tr
          key={enroll?.id}
          
  
          >
                      
            <td>{enroll?.FirstName}</td>
            <td>{enroll?.orderName}</td>
              <td>{enroll?.email}</td>
              <td>{enroll?.number}</td>
              <td>{enroll?._id}</td>
              <td>{enroll?.orderPrice}</td>
              <td>
                {" "}
              
                
              
              </td>
            </tr>
          )
        }
        </tbody>
      </Table>
      </div>
    );
};

export default EnrollStudent;