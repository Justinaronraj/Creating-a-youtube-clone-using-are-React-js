import React from 'react';
import './App.css'
import { FaHome } from "react-icons/fa";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { BiSolidVideos } from "react-icons/bi";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className='nav'>
        <li><i className='navitems' ><FaHome /></i><p className='navname'>Home</p></li>
        <li ><i className='navitems'><SiYoutubeshorts /></i><p className='navname'>Shorts</p></li>
        <li ><i className='navitems'><MdOutlineSubscriptions /></i><p className='navname'>Subscription</p></li>
        <hr></hr>
        <li><i className='navitems'><BiSolidVideos /></i><p className='navname'>you</p></li>
      </ul>
    </div>
  );
};
export default Sidebar;
