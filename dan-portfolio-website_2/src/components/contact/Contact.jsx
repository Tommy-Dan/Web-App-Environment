import React from 'react';
import './contact.css';
import {MdOutlineMail} from 'react-icons/md';
import {RiMessengerLine} from 'react-icons/ri';
import {BsWhatsapp} from 'react-icons/bs';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
   const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    e.target.reset();

    emailjs.sendForm('service_ap2g5fo', 'template_r0nqkua', form.current, 'Fvtict_QdNfSqcOib')
    
  };


  return (
     <section id='contact'>
          <h5>Get In Touch</h5>
          <h2>Contact Me</h2>

          <div className="container contact__container">
             <div className="contact__options">
                <article className="contact__option">
                   <MdOutlineMail className='contact__option-icon'/>
                   <h4>Email</h4>
                   <h5>dummyegator@gmail.com</h5>
                   <a href="mailto:dummyegator@gmal.com" target='_blank' rel='noreferrer'>Send a message</a>
                </article>

                <article className="contact__option">
                   <RiMessengerLine className='contact__option-icon'/>
                   <h4>Message</h4>
                   <h5>egatortutorials</h5>
                   <a href="https://m.me/ernest.achiever" target='_blank' rel='noreferrer'>Send a message</a>
                </article>

                <article className="contact__option">
                   <BsWhatsapp className='contact__option-icon'/>
                   <h4>WhatsApp</h4>
                   <h5>+123456789</h5>
                   <a href="https://api.whatsapp.com/send?phone+23355733888" target='_blank' rel='noreferrer'>Send a message</a>
                </article>
             </div>

             <form ref={form} onSubmit={sendEmail}>
                <input type="text" name='name' placeholder='Your Full Name' required />
                <input type="email" name='email' placeholder='Your Email' required  />
                <textarea name="message" id="message" cols="30" rows="7"></textarea>
                <button type='submit' className='btn btn-primary'>Send Message</button>
             </form>
          </div>
     </section>
  )
    
}

export default Contact;