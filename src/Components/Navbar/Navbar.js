import React from 'react'
import {FaHome ,FaUser , FaBook ,FaServicestack ,FaPhone , FaMedal} from 'react-icons/fa'
import './Navbar.css'
import { useState } from 'react'


const Navbar = () => {
  
  const[activeNav , setActiveNav] = useState("#")


  return (
    <section>
      
      <nav>
        <div className='mynavbar'>
        <a href='#myheader' onClick={()=> setActiveNav('#myheader')} className={activeNav === '#myheader' ? 'active': ''}> <FaHome /> </a>
        <a href='#myabout' onClick={()=> setActiveNav('#myabout')} className={activeNav === '#myabout' ? 'active': ''}> <FaUser /> </a>
        <a href='#myexperience' onClick={()=> setActiveNav('#myexperience')} className={activeNav === '#myexperience' ? 'active': ''}> <FaBook /> </a>
        <a href='#myservices' onClick={()=> setActiveNav('#myservices')} className={activeNav === '#myservices' ? 'active': ''}> <FaServicestack /> </a>
        <a href='#myportofolio' onClick={()=> setActiveNav('#myportofolio')} className={activeNav === '#myportofolio' ? 'active': ''}> <FaMedal /> </a>
        <a href='#mycontact' onClick={()=> setActiveNav('#mycontact')} className={activeNav === '#mycontact' ? 'active': ''}> <FaPhone /> </a>
        </div>  
      </nav>
 
    </section>
  )
}

export default Navbar