

function Projects() {
  return (

    <div className="projects" id="projects">

      <h1>Projects</h1>

      <div className="prjEach">
        <div className="prjDescription">
          <h2>Amtrak vs Plane trip calculator</h2>
          <p>Parses plane tickets from all major airlines and Amtrak tickets using SkyScanner API and a Amtrak. Compare prices, departure and arrival times, plan your trip accordingly. Currently expanding access to all regions of the U.S.!</p>

          <div className="prjAllTools">
            <div className="prjTool">React.js</div>
            <div className="prjTool">SkyScanner API</div>
            <div className="prjTool">Javascript</div>
            <div className="prjTool">CSS</div>
            <div className="prjTool">HTML5</div>
          </div>
        </div>

        <div className="prjVideo">
          <h2>demo vid here</h2>
        </div>
      </div>

      <hr className="divider"></hr>

      <div className="prjEach">
        <div className="prjDescription">
          <h2>Flitter</h2>
          <p>A full-stack functional twitter (X) clone. reating users, posting, following others and viewing their posts, editing profile, login and password authentication, and all other twitter (X) capabilites. All backs up to a Mongodb database using Prisma.</p>

          <div className="prjAllTools">
            <div className="prjTool">Mongodb</div>
            <div className="prjTool">React.js</div>
            <div className="prjTool">Prisma</div>
            <div className="prjTool">Tailwind CSS</div>
          </div>
        </div>

        <div className="prjVideo">
          <h2>demo vid here</h2>
        </div>
      </div>
      
      <hr className="divider"></hr>

      <div className="prjEach">
        <div className="prjDescription">
          <h2>prj3</h2>
          <p>oerhoihreahro</p>

          <div className="prjAllTools">
            <div className="prjTool">Mongodb</div>
            <div className="prjTool">React.js</div>
            <div className="prjTool">Prisma</div>
            <div className="prjTool">Tailwind CSS</div>
            <div className="prjTool">Next JS or is it node?</div>
          </div>
        </div>

        <div className="prjVideo">
          <h2>demo vid here</h2>
        </div>
      </div>
      
      <hr className="divider"></hr>

      <div className="prjEach">
        <div className="prjDescription">
          <h2>something from class using C</h2>
          <p>oerhoihreahro</p>

          <div className="prjAllTools">
            <div className="prjTool">C</div>
          </div>
        </div>

        <div className="prjVideo">
          <h2>demo vid here</h2>
        </div>
      </div>
      
    
    </div>
      
  );
}

export default Projects;
