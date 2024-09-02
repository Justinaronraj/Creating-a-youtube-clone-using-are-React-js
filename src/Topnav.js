import React from 'react'
import { FaYoutube } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
export default function Topnav() {
  return (
    <div className='topnav'>
        <div className='logo'>
        <div className='licon'>
            <h1 ><i><FaYoutube /></i>YouTube</h1>
        </div>
    </div>
    <div className='search'>
        <input className='sinput' placeholder='Search..'></input>
    </div>
    <div className='profile'>
        <i className='picon'><RiVideoAddLine /></i>
        <i className='nicon'><IoIosNotificationsOutline /></i>
        <i className='picon'><IoPerson /></i>

    </div>
    </div>
  )
}
