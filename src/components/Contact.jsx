import Socials from "./Socials";

function Contact() {

  const handleSubmit = () => {
    //
  };

  return (

    <div className="contactAll" id="contact">
      <div className="contactVert">
        <div className="contactHoriz">

          <h1>Contact</h1>

          <form onSubmit={handleSubmit}>

            <span>
              <h3>Name: </h3>
              <input type="text" placeholder="Enter your name here: "/>
            </span>

            <span>
              <h3>Email: </h3>
              <input type="text" placeholder="Enter your email here: "/>
            </span>

            <span>
              <h3>Message: </h3>
              <input type="text" placeholder="Ex) Hi! I'd love to connect on..."/>
            </span>

            <button type="submit" onSubmit={handleSubmit} className="contactButton">Submit</button>

          </form >

        </div>

        <Socials />

      </div>
      
    </div>


  );
}

export default Contact;
