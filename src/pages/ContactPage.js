import React from "react";
import { useState } from 'react';
import Footer from "../components/Footer";
import emailjs from "emailjs-com";

//receptsida med video och länkar med recept

const ContactPage = () => {

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wre5t3h', 'template_0ivotep', e.target, 'user_80Yh8401pcqVgSJ54h3l7')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      alert ("Thank you for your message!");
     e.target.reset()
  };
    
        
        
    
    return ( 
        <div className="contactpage"> 
        <div className="contact-container"></div>
        <h1>Send me a message</h1>
           <form onSubmit ={sendEmail}>
<div className="rowinput">
    <div className="inputspace"><input type="text" className="inputs" placeholder="Name" name="name"/></div>
    <div className="inputspace"><input type="email" className="inputs" placeholder="Email adress" name="email"/></div>
   <div className="inputspace"><textarea className="inputs" placeholder="Message" cols="30" rows="5" name="message"></textarea></div>
    <div className="inputspace"> <input type="submit" className="inputsb" value="Send message"></input></div>

</div>

           </form>
           
    <Footer></Footer>
    </div>
        

     );
};
 
export default ContactPage;