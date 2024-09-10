import Socials from "./Socials";


function Experience() {
  return (
    <div className="experience">
      <h1>Experience</h1>

      <div>
        <div className="expEach">
          <div className="expImage">
            <img src="images/exp/harvardlogo.png" alt="harvard cs50 logo"/>
            <h4>img here</h4>
          </div>

          <div className="expText">
            <h4>description here</h4>
          </div>
        </div>

        <div className="expEach">
          <div className="expImage">
            <h4>img here</h4>
          </div>

          <div className="expText">
            <h4>description here</h4>
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
