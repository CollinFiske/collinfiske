import Socials from "./Socials";
import myImage from './homeimgBig.jpg';

function Home() {
  return (
    <div className="home" id="home">
      
      <div className="homeMain">

        <div className="homePictureContainer">
          <img className="homePicture" src={ myImage } alt="portrait"/>
        </div>

        <div className="homeDescription">
          <h1 className="homeName">Collin Fiske</h1>
          <p>I'm a computer science and engineering major studying 
            at Santa Clara University. Check out my website!</p>
        </div>

      </div>

      <Socials />

    </div>
  );
}

export default Home;
