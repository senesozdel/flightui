import React from 'react'
import Select from 'react-select'

const Filter = () => {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]

    const arrivalTimes = [
        { start: '04:00', end: '11:59' },
        { start: '12:00', end: '16:59' },
        { start: '20:00', end: '03:59' },
    ]
    const airLines = [
        "THY", "Qatar Airways", "FLY Pegausus"
    ]

    return (
        <div className='d-flex flex-column gap-3 p-2'>
            <div className='sort d-flex flex-column gap-2'>
                <label className='m-0 fw-semibold'>Sort By:</label>
                <Select options={options} />
            </div>
            <div className='arrival'>

                <input className='form-control' placeholder='Arrival Place' type="text" />
            </div>
            <div className='time d-flex flex-column gap-2'>
                <label className='m-0 fw-semibold'>Arrival Time</label>{
                    arrivalTimes && arrivalTimes.map((item, index) =>
                        <div key={index} className='d-flex gap-2'>
                            <input  type="checkbox" />
                            <label className='time-interval'>{item.start}-{item.end}</label>
                        </div>
                    )
                }


            </div>
            <div className='airlines d-flex flex-column gap-2'>
                <label className='m-0 fw-semibold'>Airlines</label>
                {
                    airLines && airLines.map((item, index) => <div key={index} className='d-flex gap-2'>
                        <input  type="checkbox" />
                        <label className='airline-name'>{item}</label>
                    </div>)
                }


            </div>
        </div>
    )
}

export default Filter