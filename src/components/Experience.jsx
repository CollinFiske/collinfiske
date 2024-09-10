import Socials from "./Socials";


function Experience() {

  const onCS50Click = () => {
    window.open('https://pll.harvard.edu/course/cs50-introduction-computer-science', '_blank', 'noopener,noreferrer');
  };
  const onLHSClick = () => {
    window.open('https://www.lexingtonma.org/lhs/', '_blank', 'noopener,noreferrer');
  };
  const onBroncosecClick = () => {
    window.open('https://broncosec.com/#home', '_blank', 'noopener,noreferrer');
  };
  const onACMClick = () => {
    window.open('https://www.scuacm.com/', '_blank', 'noopener,noreferrer');
  };


  return (
    <div className="experience">
      <h1>Experience</h1>

      <div>
        <div className="expEach">
          <div className="expImageContainer">
            <img onClick={onCS50Click} className="expImage" src="https://upload.wikimedia.org/wikipedia/commons/1/11/Seal_of_the_President_of_Harvard_University.png" alt="harvard cs50 logo"/>
          </div>
          <div className="expText">
            <h3>Harvard University's CS50 Course</h3>
            <p>ehroesahroaeroa</p>
          </div>
        </div>

        <div className="expEach">
          <div className="expImageContainer">
            <img onClick={onLHSClick} className="expImage" src="https://media.licdn.com/dms/image/v2/D4E0BAQFv1I4dWQkfog/company-logo_100_100/company-logo_100_100/0/1684429023902?e=1733961600&v=beta&t=PiDaBfXdk3OyxrYoXlLH5mYFVF8MFTFqBr5auEIQEQ4" alt="lhs logo"/>
          </div>
          <div className="expText">
            <h3>Computer Science Teaching Assistant</h3>
            <p>ehroesahroaeroa</p>
          </div>
        </div>

        <div className="expEach">
          <div className="expImageContainer">
            <img onClick={onBroncosecClick} className="expImage" src="https://broncosec.com/static/media/BroncoSec_Logo_Red.017c7f92.png" alt="broncosec logo"/>
          </div>
          <div className="expText">
            <h3>SCU Broncosec - member</h3>
            <p>ehroesahroaeroa</p>
          </div>
        </div>

        <div className="expEach">
          <div className="expImageContainer">
            <img onClick={onACMClick} className="expImage" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Association_for_Computing_Machinery_%28ACM%29_logo.svg/1200px-Association_for_Computing_Machinery_%28ACM%29_logo.svg.png" alt="acm logo"/>
          </div>
          <div className="expText">
            <h3>SCU ACM - member</h3>
            <p>ehroesahroaeroa</p>
          </div>
        </div>

      </div>

      <div className="expCourses">
        <div className="expCoursesBox">
          <h4>Relevant CourseWork: </h4>
        </div>
        <div className="expCoursesBox">
          <ul>
            <li>ejroasja</li>
            <li>ejroasja</li>
            <li>ejroasja</li>
          </ul>
        </div>
      </div>

      <p>cpy from projects, but move pic from right to left</p>


      <Socials />

    </div>
  );
}

export default Experience;
