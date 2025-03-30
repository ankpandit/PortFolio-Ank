import React from 'react'
import './Contact.css' ;
import emailjs from '@emailjs/browser';
import { useRef , useState } from 'react';
export default function Contact() {
    // textarea message 
    const [message, setMessage] = useState("") ;
    const handleOnChange = (event)=>{
        setMessage(event.target.value) ;
    }

    // contact form message status 
    const [messageStatus, setMessageStatus] = useState(false) ;
    const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_mhh1szs', 'template_muz1lbo', form.current, 'XLP4D0Ll-gov-3x51')
      .then((result) => {
          console.log(result.text);
          setMessageStatus(true) ;
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="contact-form" id="Contact">
        <div className="w-left">
            <div className="contactawesome">
                <span>Get in Touch</span>
                <span>Contact me</span>
                {/* <div className="blur s-blur" style={{ background: "#ABF1FF94" }}></div> */}
            </div>
        </div>

        <div className="c-right">
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name="user_name" className="user" placeholder="Name"/>
                <input type="email"  name="user_email"  className="user" placeholder='Email'/>
                <textarea name="message" value={message} placeholder="Message" rows="10" className='Message user' onChange={handleOnChange}></textarea>
                <input type="submit" value="send"  className='button'/>
                {/* <div className="blur c-blur1" style={{background:"var(--purple)"}}></div> */}
                <span>{messageStatus && "Thanks for contacting me !"}</span>
            </form>
        </div>
            
    </div>
  )
}
