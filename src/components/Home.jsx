import Socials from "./Socials";


function Home() {
  return (
    <div className="home" id="home">
      
      <div className="homeMain">

        <div className="homePictureContainer">
          <img className="homePicture" src="https://static.vecteezy.com/system/resources/previews/007/409/979/original/people-icon-design-avatar-icon-person-icons-people-icons-are-set-in-trendy-flat-style-user-icon-set-vector.jpg" alt="portrait"/>
        </div>

        <div className="homeDescription">
          <h1>I'm Collin Fiske</h1>
          <h4>A _____. Check out my portfolio below or contact me! (both links)</h4>
        </div>

      </div>

      <Socials />

    </div>
  );
}

export default Home;
