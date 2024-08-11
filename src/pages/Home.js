import React, { useEffect } from 'react'
import Header from '../components/Header'
import BookFlightBox from '../components/BookFlightBox'
import FlightItem from '../components/FlightItem'
import BlogPost from '../components/BlogPost'
import Filter from '../components/Filter'
import { useSelector, useDispatch } from 'react-redux'
import { getFlightDestinations, setDestinationsDictionary } from '../features/destinations/destinationSlice'
const Home = () => {

    const blogtypes = ["car", "hotel", "holiday"]
    const dispatch = useDispatch();
    const array = [1, 2, 3, 4, 5, 5, 5]


    async function fetchFlightDestinations() {
        let response = await dispatch(getFlightDestinations());
        let returnArray = [];

        response.payload.forEach(element => {
            let singleDestination = { label: "", value: "" }
            let country = element.country;
            let iata = element.iata;
            singleDestination.label = country;
            singleDestination.value = iata;

            returnArray.push(singleDestination)

        });

        dispatch(setDestinationsDictionary(returnArray))
    }

    useEffect(() => {

        fetchFlightDestinations()

    }, [])

    // console.log(destinationsDictionary)

    return (
        <div className='bg-secondary-subtle d-flex flex-column gap-4'>
            <Header />
            <div className='d-flex  container-fluid justify-content-around flex-wrap row'>
                <div className='d-flex flex-column gap-4 col-lg-9 col-md-9'>
                    <BookFlightBox />
                    <div className='d-flex gap-2'>
                        <div className='w-75 d-flex flex-column gap-3'>
                            {
                                array.map((i, index) =>

                                    <FlightItem key={index} />

                                )
                            }

                        </div>
                        <div className='w-25'>
                            <Filter />

                        </div>
                    </div>
                </div>
                <div className='d-flex flex-md flex-lg-column gap-4 col-lg-3 col-md-9 mt-md-3 mt-sm-3' >
                    {
                        blogtypes && blogtypes.map((item, index) => <BlogPost blogtype={item} />

                        )
                    }

                </div>

            </div>


        </div>
    )
}

export default Home