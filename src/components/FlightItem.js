import React from 'react'
import { FaPlane, FaPlaneDeparture, FaPlaneArrival, FaCalendar } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { addReservation } from '../features/reservations/reservationSlice';
import { passengerName } from '../constants/Constants';
import { randomPrice, takeLandingTime } from '../functions/Functions';
import { Link } from 'react-router-dom';

const FlightItem = ({ messageApi, props }) => {

    const flightType = useSelector((state) => state.flights.flightType)
    const dispatch = useDispatch()

// Yeni rezervasyon oluşturma fonksiyonu
    const postNewReservation = async () => {
        const payload = {
          flightNumber: props.flightName,
          flightDirection: props.flightDirection === "D" ? true : false,
          arrivalTime: props.estimatedLandingTime ? takeLandingTime(props.estimatedLandingTime).substr(0,5) : null,
          route: props.route.destinations[0],
          passengerName: passengerName,
          departureDate: props.scheduleDate,
          departureTime: (props.scheduleTime).substr(0,5),
          airline: props.prefixICAO
        };
        try {
          const resultAction = await dispatch(addReservation(payload));
          
          if (addReservation.fulfilled.match(resultAction)) {
            // Başarı Mesajı
            messageApi.open({
              type: 'success',
              content: 'Reservation added successfully!',
            });
          } else if (addReservation.rejected.match(resultAction)) {
            // Hata Mesajı
            messageApi.open({
              type: 'error',
              content: 'Failed to add reservation.',
            });
          } else {
             // Hata Mesajı
            messageApi.open({
              type: 'error',
              content: 'An unexpected error occurred.',
            });
          }
        } catch (error) {
           // Hata Mesajı
          messageApi.open({
            type: 'error',
            content: 'An unexpected error occurred.',
          });
        }
      };
      
    return (

        <div className='wrapper '>
            <div className='box-content  d-flex flex-column justify-content-between gap-5 bg-white rounded-top-4 p-4'>
                <div className='header '>
                    {
                        props.flightDirection && props.flightDirection === "D" ?
                        <div className='title fw-bolder '>
                        AMS-{props.route.destinations[0]}
                    </div>
                    :
                    <div className='title fw-bolder '>
                    {props.route.destinations[0]}-AMS
                </div>
                    }

                </div>
                <div className='main d-flex justify-content-between'>
                    <div className='departure'>
                        <div className='departure-title d-flex align-items-center gap-2'>
                            <FaPlaneDeparture />
                            <div className='departure-title-name'>Departure</div>
                        </div>
                        <div className='departure-time fw-bolder'>{props.scheduleTime}</div>

                        {
                        props.flightDirection && props.flightDirection === "D" ?
                        <div className='departure-airport'>Airport: AMS</div>

                    :

                        <div className='departure-airport'>Airport:{props.route.destinations[0]}</div>

                    }

                    </div>
                    <div className='line-box d-flex align-items-center col-3'>
                        <div className='horizontal-line '></div>

                    </div>
                    <div className='flight-detail d-flex flex-column align-items-center'>
                        <div className='brand'>{props.prefixICAO}</div>
                        <div className='icon'>
                            <FaPlane className='text-mor' />
                        </div>
                        <div className='flight-name'>{props.flightName}</div>
                    </div>
                    <div className='line-box d-flex align-items-center col-3'>
                        <div className='horizontal-line '></div>

                    </div>
                    <div className='arrival'>
                        <div className='arrival-title d-flex align-items-center gap-2'>
                            <   FaPlaneArrival />
                            <div className='arrival-title-name'>Arrival</div>
                        </div>
                        {
                          props.estimatedLandingTime ?
                        <div className='arrival-time fw-bolder'>{takeLandingTime(props.estimatedLandingTime)}</div>
                        :
                        <div className='arrival-time fw-bolder'>Not Determined</div>

                        }
                        {
                        props.flightDirection && props.flightDirection === "D" ?
                        <div className='arrival-airport'>Airport:{props.route.destinations[0]}</div>

                    :

                    <div className='arrival-airport'>Airport: AMS</div>

                    }
                    </div>
                </div>
                <div className='footer d-flex justify-content-between'>
                    <div className='payment d-flex flex-column gap-2'>
                        <div className='price fw-bold'>Price: {randomPrice()}$</div>
                        {
                            flightType === "round-trip" ?
                                <div className='flight-type'>Round Trip</div>
                                :
                                <div className='flight-type'>One Way</div>

                        }
                    </div>
                    <button onClick={postNewReservation} className='buttons p-3 rounded-2 bg-mor fw-semibold text-white'>Book Flight</button>
                </div>
            </div>
            <div className='box-link col-lg-12 col-xl-4 col-md-12 col-sm-12 bg-mor  rounded-bottom-4 py-3 py-sm-1 text-center'>
                <Link className='text-white' >Check the Details</Link>
            </div>
        </div>



    )
}

export default FlightItem