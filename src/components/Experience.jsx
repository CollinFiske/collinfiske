

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
  const onSCUClick = () => {
    window.open('https://www.scu.edu/engineering/', '_blank', 'noopener,noreferrer');
  };


  return (
    <div className="experience" id="experience">
      <h1 style={{ marginLeft: '5%' }}>Experience</h1>

      <div className="expBottom">
        <div className="expEach">
          <div className="expImageContainer">
            <img onClick={onCS50Click} className="expImage" src="https://upload.wikimedia.org/wikipedia/commons/1/11/Seal_of_the_President_of_Harvard_University.png" alt="harvard cs50 logo"/>
          </div>
          <div className="expText">
            <h3>Harvard University's CS50 Course</h3>
            <p>Completed CS50, Harvard's course for Computer Science</p>
          </div>
        </div>

        <div className="expEach">
          <div className="expImageContainer">
            <img onClick={onBroncosecClick} className="expImage" src="https://broncosec.com/static/media/BroncoSec_Logo_Red.017c7f92.png" alt="broncosec logo"/>
          </div>
          <div className="expText">
            <h3>SCU Broncosec Club - Member</h3>
            <p>Attend meetings and lectures on all topics cybersecurity. Participate in cybersecurity focused hackathons and speaker events with experts from the world of cybersecurity</p>
          </div>
        </div>

        <div className="expEach">
          <div className="expImageContainer">
            <img onClick={onACMClick} className="expImage" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Association_for_Computing_Machinery_%28ACM%29_logo.svg/1200px-Association_for_Computing_Machinery_%28ACM%29_logo.svg.png" alt="acm logo"/>
          </div>
          <div className="expText">
            <h3>SCU ACM Club - Member</h3>
            <p>Attend sponsored hackathons, lectures on new and exciting topics in the world of cs, and share and collaborate on projects with each other. Part of a driven community of like-minded computer scientists</p>
          </div>
        </div>

        <div className="expEach">
          <div className="expImageContainer">
            <img onClick={onLHSClick} className="expImage" src="https://media.licdn.com/dms/image/v2/D4E0BAQFv1I4dWQkfog/company-logo_100_100/company-logo_100_100/0/1684429023902?e=1733961600&v=beta&t=PiDaBfXdk3OyxrYoXlLH5mYFVF8MFTFqBr5auEIQEQ4" alt="lhs logo"/>
          </div>
          <div className="expText">
            <h3>Computer Science Teaching Assistant</h3>
            <p>Taught students about coding and computer science in a variety of languages, along with several computer applications. Covered overarching topics in cs, including: software and web development, web design, and basics on HTTP protocols and how the internet works.</p>
          </div>
        </div>

        <div className="expEach">
          <div className="expImageContainer">
            <img onClick={onSCUClick} className="expImage" src="https://www.scu.edu/media/school-of-engineering/photos/logos/scu-engineering-school-logo-150x179.gif" alt="acm logo"/>
          </div>
          <div className="expText">
            <h3>Santa Clara University - Engineering School</h3>
            <p>Relevant Coursework: Data Structures & Algorithms, Embedded Systems, Logic Design, Discrete Math, Object-Oriented Programming</p>
          </div>
        </div> 

      </div>

    </div>
  );
}

export default Experience;
