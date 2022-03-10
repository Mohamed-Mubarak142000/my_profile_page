import React from 'react'
import './Experience.css'
import { FaCheckCircle } from 'react-icons/fa'

const Experience = () => {
  return (

    <section id='myexperience'>
      <div className='container'>

        <div className='header-section'>
          <h5>get to know</h5>
          <h1> my experience</h1>
        </div>

        <div className='main-content-exper'>

          <div className='child-content-exper'>

            <div className='header-child'>
              <h3>frontEnd developement</h3>
            </div>

            <div className='content-skills'>

              <div className='skills'>
                <h2> <span> <FaCheckCircle /> </span> html </h2>
                <h5>experienced</h5>
              </div>

              <div className='skills'>
                <h2> <span> <FaCheckCircle /> </span> css </h2>
                <h5>experienced</h5>
              </div>

              <div className='skills'>
                <h2> <span> <FaCheckCircle /> </span> bootstrap </h2>
                <h5>experienced</h5>
              </div>

              <div className='skills'>
                <h2> <span> <FaCheckCircle /> </span> javascript </h2>
                <h5>experienced</h5>
              </div>

              <div className='skills'>
                <h2> <span> <FaCheckCircle /> </span> react js </h2>
                <h5>experienced</h5>
              </div>

            </div>
          </div>

          <div className='child-content-exper'>
          
          <div className='header-child'>
            <h3>another skills</h3>
          </div>

        <div className='content-skills'>
      
            <div className='skills'>
              <h2> <span> <FaCheckCircle /> </span> python </h2>
              <h5>experienced</h5>
            </div>

            <div className='skills'>
              <h2> <span> <FaCheckCircle /> </span> java </h2>
              <h5>experienced</h5>
            </div>

            <div className='skills'>
              <h2> <span> <FaCheckCircle /> </span> c++ </h2>
              <h5>experienced</h5>
            </div>

            <div className='skills'>
              <h2> <span> <FaCheckCircle /> </span> data analysis </h2>
              <h5>experienced</h5>
            </div>

            <div className='skills'>
              <h2> <span> <FaCheckCircle /> </span> my sql </h2>
              <h5>experienced</h5>
            </div>

          </div>

        </div>
      </div>
          
      </div>
      
    </section>
  )
}

export default Experience