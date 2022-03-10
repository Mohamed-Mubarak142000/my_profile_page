import React from 'react'
import {FaGithub , FaLinkedin , FaFacebookMessenger} from 'react-icons/fa'
import './Mylinks.css'

const Mylinks = () => {
  return (
    <section>
        <div className='mylink'>
            <a href='#'><FaGithub /> </a>
            <a href='#'> <FaLinkedin /> </a>
            <a href='#'> <FaFacebookMessenger /> </a>
        </div>
    </section>
  )
}

export default Mylinks