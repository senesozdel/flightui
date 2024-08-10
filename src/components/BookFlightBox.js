import React, { useState } from 'react'
import { FaPlane, FaPlaneDeparture, FaPlaneArrival, FaCalendar } from "react-icons/fa";
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import Select from 'react-select'
import { getFlightData } from '../dataRequests/DataRequests';
const BookFlightBox = () => {

    const [departureDate, setDepartureDate] = useState(new Date());
    const [returnDate, setReturnDate] = useState(new Date());
    const [flightType, setFlightType] = useState("round-trip")
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]


    const selectStyle = {
        control: (provided) => ({
            ...provided,
            border: 'none', // Sınırı kaldırmak için
            boxShadow: 'none', // Odağı kaldırmak için
            width: '12rem'

        }),
    };
    return (
        <div className='wrapper  d-flex flex-column justify-content-between gap-5 bg-white rounded-4 p-4'>
            <div className='header d-flex justify-content-between'>
                <div className='title-wrapper d-flex gap-2 align-items-center '>
                    <div className='title-img'>
                        <FaPlane className='text-mor fs-4' />

                    </div>
                    <div className='title-name fw-bolder'>BOOK YOUR FLIGHT</div>
                </div>
                <div className='switch-box d-flex'>
                    <div
                        onClick={() => setFlightType('round-trip')}
                        className={`switch-box-item round-trip p-2 ${flightType === 'round-trip' ? 'bg-mor text-white' : 'bg-secondary-subtle text-mor'
                            } rounded-start-5`}
                    >
                        Round Trip
                    </div>
                    <div
                        onClick={() => setFlightType('one-way')}
                        className={`switch-box-item one-way p-2 ${flightType === 'one-way' ? 'bg-mor text-white' : 'bg-secondary-subtle text-mor'
                            } rounded-end-5`}
                    >
                        One Way
                    </div>
                </div>
            </div>
            <div className='input-forms d-flex justify-content-xcenter flex-wrap   gap-2 ' >
                <div className='directions d-flex '>
                    <div className='landing rounded-start-5  border border-2 '>
                        <div className='d-flex align-items-center px-2  py-1 gap-1 '>
                            <FaPlaneDeparture className='text-mor' />
                            <Select styles={selectStyle} options={options} />
                        </div>

                    </div>
                    <div className='arrivals rounded-end-5  border border-2 '>
                        <div className='d-flex align-items-center px-2 py-1 gap-1'>
                            <FaPlaneArrival className='text-mor' />
                            <Select styles={selectStyle} options={options} />
                        </div>

                    </div>
                </div>
                {
                    flightType === "round-trip" ?

                        <div className='dates d-flex '>
                            <div className='landing rounded-start-5  border border-2  justify-content-center d-flex'>
                                <div className='d-flex align-items-center px-2 py-1 gap-1 '>
                                    <FaCalendar className='text-mor' />
                                    <DatePicker selected={departureDate} onChange={(date) => setDepartureDate(date)} className="inputs" />
                                </div>

                            </div>

                            <div className='arrivals rounded-end-5  border border-2  justify-content-center d-flex'>
                                <div className='d-flex align-items-center px-2 py-1 gap-1'>
                                    <FaCalendar className='text-mor' />
                                    <DatePicker minDate={departureDate} selected={returnDate} onChange={(date) => setReturnDate(date)} className="inputs" />
                                </div>

                            </div>
                        </div>
                        :
                        <div className='dates d-flex '>
                            <div className='landing rounded-5  border border-2  justify-content-center d-flex'>
                                <div className='d-flex align-items-center px-2 py-1 gap-1 '>
                                    <FaCalendar className='text-mor' />
                                    <DatePicker selected={departureDate} onChange={(date) => setDepartureDate(date)} className="inputs" />
                                </div>

                            </div>

                        </div>
                }

            </div>
            <div className='button'>
                <button  className= 'buttons p-2 col-sm-12 col-md-12 col-lg-12 col-xl-2 rounded-2 bg-mor fw-semibold text-white'>Show Flights</button>
            </div>
        </div>
    )
}

export default BookFlightBox