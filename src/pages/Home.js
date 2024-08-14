import React, { useEffect } from 'react'
import Header from '../components/Header'
import BookFlightBox from '../components/BookFlightBox'
import FlightItem from '../components/FlightItem'
import BlogPost from '../components/BlogPost'
import Filter from '../components/Filter'
import { useSelector, useDispatch } from 'react-redux'
import { getFlightDestinations, setDestinationsDictionary } from '../features/destinations/destinationSlice'
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { message } from 'antd';
import { setFilteredFlights } from '../features/flights/flightSlice'
import { blogtypes } from '../constants/Constants'
import { isInInterval } from '../functions/Functions'

const Home = () => {
    // Redux store'dan gerekli state'leri çekiyoruz
    const dispatch = useDispatch();
    const flights = useSelector((state) => state.flights.flights)
    const flightDirection = useSelector((state) => state.flights.flightDirection)
    const departureTimeInterval = useSelector((state) => state.dates.departureTimeInterval)
    const filteredFlights = useSelector((state) => state.flights.filteredFlights)
    const fetchflightsLoading = useSelector((state) => state.flights.loading)

    // Ant Design'dan mesaj API'sini kullanmak için hook
    const [messageApi, contextHolder] = message.useMessage();

    // Uçuşları filtreleyen fonksiyon
    function filterFlights(flightDirection, flights, departureTimeInterval, isInInterval) {
        let filteredFlightsArray = [];

        // Eğer departureTimeInterval mevcutsa, aralığa göre filtreleme yapıyoruz
        if (departureTimeInterval !== "") {
            const [startTime, endTime] = departureTimeInterval.split("-");

            filteredFlightsArray = flights.filter(flight => {
                const flightTime = flight.scheduleTime.split(':').slice(0, 2).join(":"); // "HH:MM:SS" formatından "HH:MM" kısmını al
                return isInInterval(flightTime, startTime, endTime);
            });
        } else {
            filteredFlightsArray = flights;
        }

        // Eğer flightDirection mevcutsa, uçuş yönüne göre filtreleme yapıyoruz
        if (flightDirection) {
            filteredFlightsArray = filteredFlightsArray.filter(
                flight => flight.flightDirection === flightDirection
            );
        }

        // Sonuçları Redux'a dispatch etme
        dispatch(setFilteredFlights(filteredFlightsArray));
        console.log(filteredFlightsArray);
    }


// Uçuş destinasyonlarını fetch eden fonksiyon
    async function fetchFlightDestinations() {
        let response = await dispatch(getFlightDestinations());
        let anyDestination = { label: "Any Destination", value: "" };
        let returnArray = [];

        // Eğer API'den veri geldiyse, her destinasyonu işleyip listeye ekliyoruz
        if (response.payload) {
            response.payload.forEach(element => {
                let singleDestination = { label: "", value: "" }
                let country = element.country;
                let airport = element.publicName.english;
                let iata = element.iata;
                singleDestination.label = `${country} ${airport}`;
                singleDestination.value = iata;

                returnArray.push(singleDestination)
            });
            returnArray.push(anyDestination)  // "Any Destination" seçeneğini ekleme
        }
        // Destinasyon objesini Redux store'a dispatch etme
        dispatch(setDestinationsDictionary(returnArray))
    }

// Bileşen yüklendiğinde destinasyonları fetch etmek için useEffect
    useEffect(() => {
        fetchFlightDestinations();
    }, [])

// Filtreleme koşullarında değişiklik olduğunda uçuşları filtrelemek için useEffect
    useEffect(() => {
        if (flights.length > 0) {
            filterFlights(flightDirection, flights, departureTimeInterval, isInInterval)
        }
    }, [flightDirection, departureTimeInterval])

    return (
        <>
            {contextHolder}
            <div className='bg-secondary-subtle d-flex flex-column gap-4'>
                <Header />
                <div className='d-flex  container-fluid justify-content-around flex-wrap row'>
                    <div className='d-flex flex-column gap-4 col-lg-9 col-md-9'>
                        <BookFlightBox />
                        {/* Uçuşlar yükleniyor mu kontrolü */}
                        {
                            fetchflightsLoading ?
                                <Box sx={{ width: '100%' }}>
                                    <LinearProgress />
                                </Box>
                                :
                                filteredFlights ?
                                
                                    <div className='d-flex gap-2'>
                                        <div className='w-75 d-flex flex-column gap-3'>
                                            {/* Filtrelenmiş uçuşları listeleme */}
                                            {
                                                filteredFlights.map((i, index) =>
                                                    <FlightItem props={i} key={index} messageApi={messageApi} />
                                                )
                                            }
                                        </div>
                                        <div className='w-25'>
                                            <Filter />
                                        </div>
                                    </div>
                                    : flights.length > 0 ?
                                        <div className='d-flex gap-2'>
                                            <div className='w-75 d-flex flex-column gap-3'>
                                                {/* Tüm uçuşları listeleme */}
                                                {
                                                    flights.map((i, index) =>
                                                        <FlightItem props={i} key={index} messageApi={messageApi} />
                                                    )
                                                }
                                            </div>
                                            <div className='w-25'>
                                                <Filter />
                                            </div>
                                        </div>
                                        :
                                        null
                        }
                    </div>
                    <div className='d-flex flex-md flex-lg-column gap-4 col-lg-3 col-md-9 mt-md-3 mt-sm-3 mt-lg-0 mt-xl-0' >
                        {/* Blog yazılarını listeleme */}
                        {
                            blogtypes && blogtypes.map((item, index) => <BlogPost blogtype={item} key={index} />
                            )
                        }
                    </div>
                </div>
            </div>
        </>

    )
}

export default Home