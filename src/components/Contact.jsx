import Socials from "./Socials";

function Contact() {

  const handleSubmit = () => {
    //
  };

  return (
    <div className="contactContainer" id="contact">


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

      <Socials />

    </div>
  );
}

export default Contact;
