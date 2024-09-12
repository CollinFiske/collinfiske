import Socials from "./Socials";
import React, { useState } from 'react';

function Contact() {

  const [var1, setVar1] = useState('');
  const [var2, setVar2] = useState('');
  const [var3, setVar3] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = "" + var3 + " \nFrom: " + var2;
    const subject = "Connect with " + var1;
    const mailtoLink = `mailto:${'cfiske09@gmail.com'}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoLink;
    };

  return (

    <div className="contactAll" id="contact">
      <div className="contactVert">
        <div className="contactHoriz">

          <h1>Contact</h1>

          <form onSubmit={handleSubmit}>

            <span>
              <h3>Name: </h3>
              <input value={var1} onChange={(e) => setVar1(e.target.value)} type="text" placeholder="Enter name here: "/>
            </span>

            <span>
              <h3>Email: </h3>
              <input value={var2} type="text" onChange={(e) => setVar2(e.target.value)} placeholder="Enter email here: "/>
            </span>

            <span>
              <h3>Message: </h3>
              <input value={var3} type="text" onChange={(e) => setVar3(e.target.value)} placeholder="Ex) Hi! Let's connect..."/>
            </span>

            <button type="submit" className="contactButton">Submit</button>

          </form >

        </div>

        <Socials />

      </div>
      
    </div>


  );
}

export default Contact;
