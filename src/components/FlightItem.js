import React from 'react'
import { FaPlane, FaPlaneDeparture, FaPlaneArrival, FaCalendar } from "react-icons/fa";

const FlightItem = () => {
    return (

        <div className='wrapper '>
            <div className='box-content  d-flex flex-column justify-content-between gap-5 bg-white rounded-top-4 p-4'>
                <div className='header '>
                    <div className='title fw-bolder '>
                        Gidiş-Varış
                    </div>
                </div>
                <div className='main d-flex justify-content-between'>
                    <div className='departure'>
                        <div className='departure-title d-flex align-items-center gap-2'>
                            <FaPlaneDeparture />
                            <div className='departure-title-name'>Departure</div>
                        </div>
                        <div className='departure-time fw-bolder'>8:30</div>
                        <div className='departure-airport'>Airport:</div>
                    </div>
                    <div className='line-box d-flex align-items-center col-3'>
                    <div className='horizontal-line '></div>

                    </div>
                    <div className='flight-detail d-flex flex-column align-items-center'>
                        <div className='brand'>İtalia</div>
                        <div className='icon'>
                            <FaPlane className='text-mor' />
                        </div>
                        <div className='time'>2h 25m</div>
                    </div>
                    <div className='line-box d-flex align-items-center col-3'>
                    <div className='horizontal-line '></div>

                    </div>
                    <div className='arrival'>
                        <div className='arrival-title d-flex align-items-center gap-2'>
                            <   FaPlaneArrival />
                            <div className='arrival-title-name'>Arrival</div>
                        </div>
                        <div className='arrival-time fw-bolder'>10:25</div>
                        <div className='arrival-airport'>Airport: </div>
                    </div>
                </div>
                <div className='footer d-flex justify-content-between'>
                    <div className='payment d-flex flex-column gap-2'>
                        <div className='price fw-bold'>Price:</div>
                        <div className='flight-type'>Round Trip</div>
                    </div>
                    <button className='buttons p-3 rounded-2 bg-mor fw-semibold text-white'>Book Flight</button>
                </div>
            </div>
            <div className='box-link col-lg-12 col-xl-4 col-md-12 col-sm-12 bg-mor  rounded-bottom-4 py-3 py-sm-1 text-center'>
                <a className='text-white' href="#">Check the Details</a>
            </div>
        </div>



    )
}

export default FlightItem