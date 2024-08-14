import React from 'react'
import { IoEarth } from "react-icons/io5";
import { FaTag,FaPlane, FaHome, FaPaperPlane } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import {Link} from 'react-router-dom'
const Header = () => {
    return (
        <nav className='justify-content-between d-flex  container-fluid montserrat-2 py-2 '>
            <div className='logo-wrapper d-flex gap-2 align-items-center '>
                <div className='logo-img'>
                <FaPlane className='text-mor fs-4'/>

                </div>
                <div className='logo-name'>PLANE SCAPE</div>
            </div>
            <div className='navbar '>
                <ul className='navbar-list d-flex gap-4 m-0 p-0'>
                <li className='navbar-item'>
                        <FaHome className='navbar-icon text-mor' />
                        <Link className='navbar-link' to="/">Home</Link>
                    </li>
                    <li className='navbar-item'>
                        <FaPaperPlane className='navbar-icon text-mor' />
                        <Link className='navbar-link' to="/myFlights">Reservations</Link>
                    </li>
                    <li className='navbar-item'>
                        <FaTag className='navbar-icon text-mor' />
                        <Link className='navbar-link' >Deals</Link>
                    </li>
                    <li className='navbar-item'>
                        <IoEarth className='navbar-icon text-mor' />
                        <Link className='navbar-link'>Discover</Link>
                    </li>
                    <li className='navbar-item'>
                        <FaUser className='navbar-icon text-mor' />
                        <Link className='navbar-link' >Joanne Smith</Link>
                    </li>
                </ul>
            </div>

        </nav>
    )
}

export default Header