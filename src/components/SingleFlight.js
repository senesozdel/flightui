import React from 'react'
import{flightleveltype} from '../constants/Constants'

const SingleFlight = ({ props }) => {

    const imageSource = `/assets/img/${props.airline}.png`

    return (
        <div className='container bg-white border border-1 py-3 rounded-1 mb-3 '>
            <div className='d-flex p-2 justify-content-between flex-wrap gap-2'>
                <div className='col-lg-6 col-md-12 col-sm-6 flight-content row'>
                    <div className='logo col-3 d-flex justify-content-center' >
                        <div style={{ width: "3rem" }}>
                            <img src={imageSource} style={{ width: "100%" }} alt="" />
                        </div>

                    </div>
                    <div className='info col-9 d-flex gap-2 flex-lg-column flex-md flex-sm-column gap-sm-3'>
                        <div className='date fs-3 '>{props.departureTime} - {props.arrivalTime ? props.arrivalTime : "Not Determined"}</div>
                        <div className='details row fw-semibold'>
                            <div className='airlines col-4'>{props.airline}</div>
                            <div className='flight-name col-4'>{props.flightNumber}</div>
                            <div className='destination col-4'>AMS to {props.route}</div>
                        </div>
                    </div>
                </div>
                <div className='col-lg-6 col-md-12 col-sm-6 flight-prices row gap-2 justify-content-md-center '>
                    {
                        flightleveltype.map((i, index) =>
                            <div key={index} className='flight-price col-lg-2 col-md-2 col-sm-5 p-2 d-flex justify-content-between align-items-center flex-column'>
                                <div className='price'>{i.value}</div>
                                <div className='type text-center'>{i.label}</div>
                            </div>
                        )

                    }


                </div>
            </div>
        </div>
    )
}

export default SingleFlight