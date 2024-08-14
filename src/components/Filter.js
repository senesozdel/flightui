import React from 'react'
import { useDispatch } from 'react-redux'
import Select from 'react-select'
import { setFlightDirection } from '../features/flights/flightSlice'
import { setDepartureTimeInterval } from '../features/dates/dateSlice'
import { departureTimes, filterOptions } from '../constants/Constants'

const Filter = () => {


    const dispatch = useDispatch()


    return (
        <div className='d-flex flex-column gap-3 p-2'>
            <div className='sort d-flex flex-column gap-2'>
                <label className='m-0 fw-semibold'>Sort By:</label>
                <Select onChange={(choise)=>dispatch(setFlightDirection(choise.value))} defaultValue={filterOptions[0]} options={filterOptions} />
            </div>

            <div className='time d-flex flex-column gap-2'>
                <label className='m-0 fw-semibold'>Departure Time</label>{
                    departureTimes && departureTimes.map((item, index) =>
                        <div key={index} className='d-flex gap-2'>
                            <input onChange={(e)=>dispatch(setDepartureTimeInterval(e.target.value))} value={`${item.start}-${item.end}`} type="radio" name='time-interval' />
                            <label  className='time-interval'>{item.start}-{item.end}</label>
                        </div>
                    )
                }


            </div>
            {/* ek filter özellikleri için bıraklımış alan örnek olarak airline şirketleri filtre olarak kullanılabilir
            
            <div className='airlines d-flex flex-column gap-2'>
                <label className='m-0 fw-semibold'>Airlines</label>
                {
                    airLines && airLines.map((item, index) => <div key={index} className='d-flex gap-2'>
                        <input  type="radio" name='airline' />
                        <label className='airline-name'>{item}</label>
                    </div>)
                }


            </div> */}
        </div>
    )
}

export default Filter