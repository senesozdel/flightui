import React from 'react'
import { FaPlane, FaPlaneDeparture, FaPlaneArrival, FaCalendar } from "react-icons/fa";
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import Select from 'react-select'
import { useSelector, useDispatch } from 'react-redux';
import { setDepartureDate, setReturnDate } from '../features/dates/dateSlice';
import { setRoute,getFlights,setFlightType, setFilteredFlights } from '../features/flights/flightSlice';
import { formatDate } from '../functions/Functions';
import { bookFlightBoxselectStyle } from '../constants/Constants';


const BookFlightBox = () => {

    // Redux store'dan gerekli state'leri çekiyoruz
    const departureDate = useSelector((state) => state.dates.departureDate)
    const returnDate = useSelector((state) => state.dates.returnDate)
    const destinationsDictionary = useSelector((state) => state.destinations.destinationsDictionary)
    const route = useSelector((state) => state.flights.route)
    const flightDirection = useSelector((state)=>state.flights.flightDirection)
    const flightType = useSelector((state)=>state.flights.flightType)
    const dispatch = useDispatch()

    // Show Flights butonu tıklamasında tetiklenen fonksiyon
     const handleshowflightsbutton = async (getFlights,departureDate,route,flightDirection,)=>{
        let payload = {departureDate:departureDate,route:route,flightDirection:flightDirection}
        let response = await dispatch(getFlights({payload}))
        console.log(response)
        // Filtrelenmiş uçuşları boşaltma
        dispatch(setFilteredFlights())
    }

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
                        onClick={() => dispatch(setFlightType('round-trip'))}
                        className={`switch-box-item round-trip p-2 ${flightType === 'round-trip' ? 'bg-mor text-white' : 'bg-secondary-subtle text-mor'
                            } rounded-start-5`}
                    >
                        Round Trip
                    </div>
                    <div
                        onClick={() => dispatch(setFlightType('one-way'))}
                        className={`switch-box-item one-way p-2 ${flightType === 'one-way' ? 'bg-mor text-white' : 'bg-secondary-subtle text-mor'
                            } rounded-end-5`}
                    >
                        One Way
                    </div>
                </div>
            </div>
            <div className='input-forms d-flex justify-content-center flex-wrap   gap-2 ' >
                {
                    flightType === "round-trip" ?
                        <div className='directions d-flex '>
                            <div className='landing rounded-start-5  border border-2 '>
                                <div className='d-flex align-items-center px-2  py-1 gap-1 '>
                                    <FaPlaneDeparture className='text-mor' />
                                    <Select styles={bookFlightBoxselectStyle} options={destinationsDictionary} />
                                </div>
                            </div>
                            <div className='arrivals rounded-end-5  border border-2 d-flex align-items-center'>
                                <div className='d-flex align-items-center px-2 py-1 gap-1'>
                                    <FaPlaneArrival className='text-mor' />
                                    <input className='inputs' value="Schiphol Airport -AMS"  />
                                </div>

                            </div>
                        </div>
                        :
                        <div className='directions d-flex '>
                            <div className='arrivals rounded-5  border border-2 '>
                                <div className='d-flex align-items-center px-2 py-1 gap-1'>
                                    <FaPlaneArrival className='text-mor' />
                                    <Select defaultValue={route} onChange={(choise)=>dispatch(setRoute(choise.value))} styles={bookFlightBoxselectStyle} options={destinationsDictionary} />
                                </div>
                            </div>
                        </div>
                }
                {
                    flightType === "round-trip" ?
                        <div className='dates d-flex '>
                            <div className='landing rounded-start-5  border border-2  justify-content-center d-flex'>
                                <div className='d-flex align-items-center px-2 py-1 gap-1 '>
                                    <FaCalendar className='text-mor' />
                                    <DatePicker selected={departureDate} onChange={(date) => dispatch(setDepartureDate(formatDate(date)))} className="inputs" />
                                </div>
                            </div>
                            <div className='arrivals rounded-end-5  border border-2  justify-content-center d-flex'>
                                <div className='d-flex align-items-center px-2 py-1 gap-1'>
                                    <FaCalendar className='text-mor' />
                                    <DatePicker minDate={departureDate} selected={returnDate} onChange={(date) => dispatch(setReturnDate(formatDate(date)))} className="inputs" />
                                </div>
                            </div>
                        </div>
                        :
                        <div className='dates d-flex '>
                            <div className='landing rounded-5  border border-2  justify-content-center d-flex'>
                                <div className='d-flex align-items-center px-2 py-1 gap-1 '>
                                    <FaCalendar className='text-mor' />
                                    <DatePicker selected={departureDate} onChange={(date) => dispatch(setDepartureDate(formatDate(date)))} className="inputs" />
                                </div>
                            </div>
                        </div>
                }
            </div>
            <div className='button'>
                <button onClick={()=>handleshowflightsbutton(getFlights,departureDate,route,flightDirection)} className='buttons p-2 col-sm-12 col-md-12 col-lg-12 col-xl-2 rounded-2 bg-mor fw-semibold text-white'>Show Flights</button>
            </div>
        </div>
    )
}

export default BookFlightBox