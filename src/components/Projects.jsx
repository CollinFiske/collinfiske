

function Projects() {
  return (

    <div className="projects" id="projects">

      <h1 style={{ marginLeft: '5%', marginBottom: '40px', marginTop: '40px' }}>Projects</h1>

      <div className="prjEach">
        <div className="prjDescription">
          <h2>AskRON</h2>
          <p>AskRON - the Reliable Option for Navigation, a chrome extension for AI assisted browsing. Powered by AWS Bedrock's Claude Sonnet, easy to access via Google's web extension, and with a Flask based backend. Project for AWS x INRIX hackathon fall '24.</p>

          <div className="prjAllTools">
            <div className="prjTool">AWS Bedrock</div>
            <div className="prjTool">Chrome Extension</div>
            <div className="prjTool">AI</div>
            <div className="prjTool">Flask</div>
            <div className="prjTool">Python</div>
            <div className="prjTool">Javascript</div>
          </div>
        </div>

        <div className="prjVideo">
          <iframe src="https://www.youtube.com/embed/3cftxUejehY" title="AskRON - AWS x INRIX Hackathon Project 2024" allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen"></iframe>
        </div>
      </div>

      <hr className="divider"></hr>
      
      <div className="prjEach">
        <div className="prjDescription">
          <h2>Amtrak vs Plane trip calculator</h2>
          <p>Parses plane tickets from all major airlines using the SkyScanner API and Amtrak tickets with an algorithm. Compare prices, departure and arrival times, stations and airports, all to plan your trip accordingly. Currently expanding access to all regions of the U.S.!</p>

          <div className="prjAllTools">
            <div className="prjTool">React.js</div>
            <div className="prjTool">SkyScanner API</div>
            <div className="prjTool">Next.js</div>
            <div className="prjTool">Javascript</div>
            <div className="prjTool">CSS</div>
            <div className="prjTool">HTML5</div>
          </div>
        </div>

        <div className="prjVideo">
          <iframe src="" title="amtrak vs plane demo vid" allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen"></iframe>
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
          <iframe src="" title="flitter demo vid" allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen"></iframe>
        </div>
      </div>
      
      <hr className="divider"></hr>

      <div className="prjEach">
        <div className="prjDescription">
          <h2>Quicksort and Set ADT Text Reader</h2>
          <p>Reads in files of any type into a created Set abstract data type and enacts quicksort on to them.</p>

          <div className="prjAllTools">
            <div className="prjTool">C</div>
            <div className="prjTool">Linux</div>
            <div className="prjTool">GDB</div>
            <div className="prjTool">Data Structures</div>
          </div>
        </div>

        <div className="prjVideo">
          <iframe src="https://www.youtube.com/embed/uG1N3hLW9XM" title="qsort and set ADT C demo vid" allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen"></iframe>
        </div>
      </div>
      
    
    </div>
      
  );
}

export default Projects;
