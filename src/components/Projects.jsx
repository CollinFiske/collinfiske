

function Projects() {
  return (

    <div className="projects" id="projects">

      <h1 style={{ marginLeft: '5%', marginBottom: '40px', marginTop: '40px' }}>Projects</h1>

      <div className="prjEach">
        <div className="prjDescription">
          <h2>Amtrak vs Plane trip calculator</h2>
          <p>Parses plane tickets from all major airlines and Amtrak tickets using SkyScanner API and an Amtrak ________. Compare prices, departure and arrival times, stations and airports, all to plan your trip accordingly. Currently expanding access to all regions of the U.S.!</p>

          <div className="prjAllTools">
            <div className="prjTool">React.js</div>
            <div className="prjTool">SkyScanner API</div>
            <div className="prjTool">Javascript</div>
            <div className="prjTool">CSS</div>
            <div className="prjTool">HTML5</div>
          </div>
        </div>

        <div className="prjVideo">
          <iframe src="https://www.youtube.com/embed/TMk5-zNAYv8" title="amtrak vs plane demo vid"></iframe>
        </div>
      </div>

      <hr className="divider"></hr>

      <div className="prjEach">
        <div className="prjDescription">
          <h2>Flitter</h2>
          <p>A full-stack functional twitter (X) clone. Allows: creating users, posting, following others and viewing their posts, editing profile, login and password authentication, and all other twitter capabilites. All backs up to a Mongodb database using Prisma.</p>

          <div className="prjAllTools">
            <div className="prjTool">Mongodb</div>
            <div className="prjTool">React.js</div>
            <div className="prjTool">Tailwind CSS</div>
            <div className="prjTool">Next.js</div>
            <div className="prjTool">Prisma</div>
            <div className="prjTool">Next Auth</div>
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
          <h2>Quicksort and Set ADT Text Reader</h2>
          <p>Reads in files of any type into a created Set abstract data type and ____.</p>

          <div className="prjAllTools">
            <div className="prjTool">C</div>
            <div className="prjTool">Linux</div>
            <div className="prjTool">GDB</div>
            <div className="prjTool">Data Structures</div>
          </div>
        </div>

        <div className="prjVideo">
          <iframe src="https://www.youtube.com/embed?v=uG1N3hLW9XM" title="qsort and set ADT C demo vid"></iframe>
        </div>
      </div>
      
    
    </div>
      
  );
}

export default Projects;
