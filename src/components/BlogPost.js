import React from 'react'
import { FaCar, FaUmbrellaBeach, FaHotel } from "react-icons/fa";

const BlogPost = ({ blogtype }) => {
    return (
        <>{blogtype &&
            <div className={blogtype}>
                {
                    blogtype == "car" ?

                        <div className='d-flex flex-column gap-2'>
                            <FaCar className='fs-2 text-light' />
                            <h4 className='m-0 text-light'>
                              Car Rentals
                            </h4>
                        </div>

                        : blogtype == "holiday" ?

                            <div className='d-flex flex-column gap-2'>
                                <FaUmbrellaBeach className='fs-2 text-light' />
                                <h4 className='m-0 text-light'>
                                    Travel Packages
                                </h4>
                            </div>
                            :
                            <div className='d-flex flex-column gap-2'>
                                <FaHotel className='fs-2 text-light' />
                                <h4 className='m-0 text-light'>
                                    Hotels
                                </h4>
                            </div>
                }


            </div>
        }
        </>

    )
}

export default BlogPost