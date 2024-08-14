import React, { useEffect, useState } from 'react'
import SingleFlight from '../components/SingleFlight'
import { FaInfoCircle } from "react-icons/fa";
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Select from 'react-select'
import { getFlightReservations } from '../features/reservations/reservationSlice';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/Header';
import { filterOptions, myFlightsEditButtonselectStyle, searchItems } from '../constants/Constants';

const MyFlights = () => {
 // Redux store'dan gerekli stateleri çekmek için useSelector hook'u kullanılıyor
  const reservations = useSelector((state) => state.reservations.reservations)
  const dispatch = useDispatch();

  // Rating bileşeninin değeri için state tanımlandı
  const [value, setValue] = useState()

// Rezervasyonları çekmek için bir asenkron fonksiyon
  async function fetchFlightReservations() {
    let response = await dispatch(getFlightReservations());
    console.log(response)
  }
  
 // Bileşen yüklendiğinde rezervasyonları çekmek için useEffect kullanılıyor
  useEffect(() => {
    fetchFlightReservations()
  }, [])

  return (
    <div className='bg-secondary-subtle d-flex flex-column gap-3 ' style={{ minHeight: "100vh" }} >
      <Header />
      <div className='bg-light'>
        <nav className='myflights-navbar container-lg container-xl container-fluid py-2 d-flex'>
          <div className='col-6 d-flex gap-2'>
            <ul className='myflights-list d-flex m-0 gap-3 align-items-center'>
              {/* Arama seçeneklerini listeleme */}
              {
                searchItems.map((item, index) =>
                  <li key={index} className='myflights-item border border-2 p-2'>{item}</li>
                )
              }
            </ul>
            <div >
              {/* Arama düzenleme seçeneği için Select bileşeni */}
              <Select styles={myFlightsEditButtonselectStyle} placeholder="Edit Search" options={filterOptions} />
            </div>
          </div>

          <div className='stars col-6'>
            <Box sx={{'& > legend': { mt: 2 },}}>
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
          {/* Sıralama seçenekleri */}
          Sort By: <span className='fw-bolder'>Recomended</span>
        </div>
        <div className='avg-fare d-flex gap-2 align-items-center'>
          {/* Ortalama ücret bilgisi */}
          <FaInfoCircle className='text-primary' />
          <span>Avg Fare: $225</span>
        </div>
      </div>
      {/* Rezervasyonları listeleme */}
      {
        reservations &&
        reservations.map((item, index) =>
          <SingleFlight props={item} key={index} />
        )
      }
    </div>
  )
}

export default MyFlights




