import React, { useState } from 'react'
import SingleFlight from '../components/SingleFlight'
import { FaInfoCircle } from "react-icons/fa";
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Select from 'react-select'

const MyFlights = () => {

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
      width: '10rem',
      backgroundColor:'transparent'

    }),
    indicatorSeparator: () => ({
      display: 'none', // Ayırıcıyı kaldır
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      color: 'blue', // Aşağı ok rengini mavi yap
    }),
    placeholder: (provided) => ({
      ...provided,
      color: 'blue', // Placeholder metin rengi
    }),
  };

  const searchItems = ["Times", "Stops", "Airlines", "Airports", "Amenities"]
  const array = [1, 2, 3, 4, 5, 5, 5]
  const [value, setValue] = useState()
  return (
    <div className='bg-secondary-subtle d-flex flex-column gap-3' >
      <div className='bg-light'>
        <nav className='myflights-navbar container py-2 d-flex'>
          <div className='col-6 d-flex gap-2'>
            <ul className='myflights-list d-flex m-0 gap-3 align-items-center'>
              {
                searchItems.map((item, index) =>
                  <li key={index} className='myflights-item border border-2 p-2'>{item}</li>
                )
              }
              <li className="list-unstyled">
                <Select styles={selectStyle} placeholder="Edit Search" options={options} />
              </li>
            </ul>
            {/* <span className='text-primary'>Edit Search</span> */}
          </div>
          <div className='stars col-6 d-flex justify-content-end align-items-center'>

            <Box
              sx={{
                '& > legend': { mt: 2 },
              }}
            >
              <Rating
                name="simple-controlled"
                value={value}
                color='red'
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />

            </Box>

          </div>
        </nav>
      </div>

      <div className='container d-flex justify-content-between pt-3'>
        <div className='sort'>
          Sort By: <span className='fw-bolder'>Recomended</span>
        </div>
        <div className='avg-fare d-flex gap-2 align-items-center'>
          <FaInfoCircle className='text-primary' />
          <span>Avg Fare: $225</span>
        </div>
      </div>
      {
        array.map((item, index) =>
          <SingleFlight key={index} />

        )
      }
    </div>
  )
}

export default MyFlights