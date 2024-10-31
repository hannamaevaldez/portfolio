import React from 'react';

function Contact() {
  return (
    <section className="#Contact">
      <h2>Contact Me</h2>
      <div className="contact-body">
        <div className="contact-pic">
          <img src="hanna.jpg" alt="hanna-contact" width={'400px'}/>
        </div>
        <div className="contact-info">
          <a href="#gmail">hannamaevaldez@gmail.com</a>
          <a href="#fb">hannamae_facebook.com</a>
          <a href="#linkedin">hannamae_linkedIn.com</a>
          <a href="#github">hannamae_github.com</a>
        </div>
      </div>
    </section>
  );
}

export default Contact;