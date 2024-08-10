import React from 'react'


const SingleFlight = () => {
    return (
        <div className='container bg-white border border-1 py-3 rounded-1 '>
            <div className='d-flex p-2 justify-content-between flex-wrap gap-2'>
                <div className='col-lg-6 col-md-12 col-sm-6 flight-content row'>
                    <div className='logo col-3 d-flex justify-content-center' >
                        <div style={{width:"3rem"}}>
                        <img src="/assets/img/thy.png" style={{width:"100%"}} alt="" />

                        </div>

                    </div>
                    <div className='info col-9 d-flex gap-2 flex-lg-column flex-md flex-sm-column gap-sm-3'>
                        <div className='date fs-3 '>7:40 AM - 9:12 AM</div>
                        <div className='details row fw-semibold'>
                            <div className='airlines col-4'>Delta Airlines</div>
                            <div className='flight-time col-4'>1h32M</div>
                            <div className='destination col-4'>SFO to  Lax</div>
                        </div>
                    </div>
                </div>
                <div className='col-lg-6 col-md-12 col-sm-6 flight-prices row gap-2 justify-content-md-center '>
                    <div className='flight-price col-lg-2 col-md-2 col-sm-5 p-2 d-flex justify-content-between align-items-center flex-column'>
                        <div className='price'>$156</div>
                        <div className='type'>Bussiness</div>
                    </div>
                    <div className='flight-price col-lg-2 col-md-2 col-sm-5 p-2 d-flex justify-content-between align-items-center flex-column'>
                        <div className='price'>$156</div>
                        <div className='type'>Bussiness</div>
                    </div>
                    <div className='flight-price col-lg-2 col-md-2 col-sm-5 p-2 d-flex justify-content-between align-items-center flex-column'>
                        <div className='price'>$156</div>
                        <div className='type'>Bussiness</div>
                    </div>
                    <div className='flight-price col-lg-2 col-md-2 col-sm-5 p-2 d-flex justify-content-between align-items-center flex-column'>
                        <div className='price'>$156</div>
                        <div className='type'>Bussiness</div>
                    </div>
                    <div className='flight-price col-lg-2 col-md-2 col-sm-5 p-2 d-flex justify-content-between align-items-center flex-column'>
                        <div className='price'>$156</div>
                        <div className='type'>Bussiness</div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SingleFlight