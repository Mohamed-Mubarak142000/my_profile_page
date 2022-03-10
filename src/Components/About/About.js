import React from 'react'
import { FaCertificate, FaUserFriends, FaFileCode } from 'react-icons/fa'
import './About.css'


const About = () => {
  return (
    <section id="myabout">
      <div className='container'>

        <div className='header-section'>
          <h5>get to know</h5>
          <h1>about me</h1>
        </div>

        <div className='main-content-about'>

          <div className='main-image-about'>
            <div className='myimage-content-about'>
              <img src='../images/image-me.jpeg'></img>
            </div>
          </div>

          <div className='content-info-image-about'>

            <div className='child-info-about'>
              <FaCertificate className='icons' />
              <h3>experience</h3>
              <h5>2+ years working</h5>
            </div>

            <div className='child-info-about'>
              <FaUserFriends className='icons' />
              <h3>experience</h3>
              <h5>2+ years working</h5>
            </div>

            <div className='child-info-about'>
              <FaFileCode className='icons' />
              <h3>experience</h3>
              <h5>2+ years working</h5>
            </div>

            <div className='child-info-about'>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac urna eu turpis aliquet pharetra.
                Donec quis orci est. Proin mauris purus, bibendum vel nunc id, consequat efficitur ipsum. Curabitur viverra ex arcu,
                nec euismod nisi tincidunt vel. Ut pellentesque mauris nunc,
                at eleifend lorem pellentesque at. Nam ac eros urna. Nunc tempor
              </p>

              <a href='#' className='btn'>let's talk</a>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}

export default About