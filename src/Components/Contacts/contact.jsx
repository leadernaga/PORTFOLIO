import React,{useRef} from 'react';
import "./contacts.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsLinkedin, BsWhatsapp } from "react-icons/bs";
// import emailjs from "emailjs-com";


export const Contact = () => {
  const form = useRef()
  
  const sendEmail = (e) => {
    e.preventDefault();
      
    
  }



  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__icons'/>
            <h4>Email</h4>
            <h5>leadernaga90@gmail.com</h5>
            <a href="mailto:leadernaga90@gmail.com">Send a message</a>
          </article>
          <article className='contact__option'>
            <BsLinkedin className="contact__icons"/>
            <h4>Linkedin</h4>
            <h5>Connect here</h5>
            <a href="https://www.linkedin.com/in/pnaga15/" target="__blank">Send Connect Request</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className="contact__icons"/>
            <h4>Whatsapp</h4>
            <h5>+916281773036</h5>
            <a href="http://wa.me/+916281773036" target="__blank">Whatsapp Me</a>
          </article>
        </div>
        {/* /* ###################### FORM CONTACT ########################*/ }
        
        <form ref={form} onSubmit={sendEmail}>
          <input name="name" placeholder='Your Full Name' required />
          <input type="email" name="email" required />
          <textarea name="message" rows="7" placeholder='Your Message' required />

          <input type="submit" value="Send Message" className='btn btn-primary'/>
        </form>

      </div>
    </section >
  )
}
