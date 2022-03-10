import React from 'react'
import './Header.css'
import Mylinks from './Mylinks'
import ScrollDown from './ScrollDown'


const Header = () => {
  return (
    <section id='myheader'>
        <div className='container'>

            <div className='main-content-header'>
                
                <div className='right-content'>
                    <Mylinks />
                </div>

                <div className='center-content'>
       
                    <div className='content-info-header'>
                        <h5>hello , im</h5>
                        <h1>mohamed mubarak</h1>
                        <h3>frontEnd developer</h3>
                    </div>

                    <div className='button-header'>
                        <a href='#' className='btn'> download CV</a>
                        <a href='#' className='btn btn-primary'> let's talk</a>
                    </div>

                    <div className='about-me'>
                        <div className='about-me-image'>
                            <img src='../images/image-me.jpeg'></img>
                        </div>
                    </div>

                </div>

                <div className='left-content'>
                    <ScrollDown />
                </div>
    
            </div>

        </div>
    </section>
  )
}

export default Header