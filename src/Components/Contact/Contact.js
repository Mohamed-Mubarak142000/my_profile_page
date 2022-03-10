import React from 'react'
import './Contact.css'
import {FaEnvelope , FaFacebookMessenger , FaWhatsapp} from 'react-icons/fa'

const Contact = () => {
  return (
  <section id='mycontact'>

    <div className='container'>  
      
        <div className='header-section'>
          <h5>get in touch</h5>
          <h1> my Contact</h1>
        </div>

        <div className='main-content-contact'>

          <div className='child-content-contact'>

            <div className='contact-email'>
              <FaEnvelope className='icons'/>
              <h3>email</h3>
              <h5>01224384697m@gmail.com</h5>
              <a href='mailto:01224384697m@gmail.com' target='_blank'>send a message</a>
            </div>
            
            <div className='contact-email'>
              <FaFacebookMessenger className='icons'/>
              <h3>messenger</h3>
              <h5>mohamed mubarak</h5>
              <a href='https://www.facebook.com/profile.php?id=100024738793891' target='_blank'>send a message</a>
            </div>
            
            <div className='contact-email'>
              <FaWhatsapp className='icons' />
              <h3>whatsapp</h3>
              <h5>01224384697</h5>
              <a href='https://web.whatsapp.com/' target='_blank'>send a message</a>
            </div>

          </div>

          <div className='child-content-contact'>
            <form>

              <div className='input'>
                <input type="text" placeholder='Your Full Name'></input>
              </div>

              <div className='input'>
                <input type="email" placeholder='Your Email'></input>
              </div>

              <div className='textarea'>
                <textarea cols="50" rows="20" placeholder='Your message...'></textarea>
              </div>

              <div className='button-send'>
                <a href='#'>send message</a>
              </div>

            </form>
          </div>


        </div>

    </div>
</section>
  )
}

export default Contact