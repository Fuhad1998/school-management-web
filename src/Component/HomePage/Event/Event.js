import React from 'react';
import "./Event.css"

const Event = () => {
    return (
        <div className='bg-white mt-1 row'>
            
            <div className='col-md-4 col-xs-12 col-sm-12 p-5'>
                <h1 className=''>Opening Hour</h1>
                <h4 className='pt-5 opening-date'>Monday - Friday8.00 - 17.00</h4>
                <h4 className='opening-date'>Saturday9.30 - 17.30</h4>
                <h4 className='opening-date'>Sunday9.30 - 15.00</h4>
            </div>
            <div className='col-md-4 col-xs-12 col-sm-12 p-5'>
                <h1 className='pb-5'>Latest Events</h1>
                <small className=''>OCTOBER 15, 2023 10:00 - APRIL 7, 2025 17:00</small>
                <h4>Language Trainings: Efficient Negotiating</h4>
                <br />
                <small>OCTOBER 15, 2023 10:00 - APRIL 7, 2025 17:00</small>
                <h4>English Discussion Club</h4>
               
            </div>
            <div className='col-md-4 col-xs-12 col-sm-12 p-5'>
                <h1>Upcoming Courses</h1>
                <h4 className='pt-5'>Chinese Language</h4>
                <small>Wednesday at 12:00pm-2:00pm</small>
                <h4>Bengali Language</h4>
                <small>Wednesday at 12:00pm-2:00pm</small>
                <h4>Hindi Language</h4>
                <small>Wednesday at 12:00pm-2:00pm</small>
            </div>
        </div>
    );
};

export default Event;