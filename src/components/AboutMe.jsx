

function AboutMe() {

    const goToResume = () => {
        //
    };

    return (
        <div className="aboutMe">
        
            <h1>About Me</h1>

            <p><b>Education: </b>I'm a curious and driven Computer Science and Engineering major at Santa Clara University. I am also pursuing a minor in Electrical and Computer Engineering and completed Harvard University's CS50 course. </p>
            <p><b>Journey: </b>Ever since I took my first computer science class in middle school, I've been hooked. I ran my first “Hello World” program and took off running. Nowadays, I have moved on to bigger and more complex programs, web applications, and software. I am continually learning new skills and improving my abilities in this industry and am eager to explore professional opportunities in the world of computing.  </p>
            <p><b>Hobbies: </b>The few times I'm not grinding out assignments in the library or computer lab, I can be found attempting to skateboard, spending time with friends, and staying active. I love competing in hackathons, hiking the beautiful California terrain, working out and playing basketball, and taking a nap in the sun of Santa Clara's beautiful Mission Gardens</p>

            <button onClick={goToResume} className="resumeButton">Résumé</button>

            <div className="aboutMeHoriz">
                <div>
                    <h2><b>Skills:</b></h2>
                </div>
                
                <div>
                    <p><b>Languages: </b></p>
                    <ul>
                        <li>Python</li>
                        <li>C</li>
                        <li>JavaScript</li>
                        <li>C++</li>
                        <li>Java</li>
                        <li>SQLite3</li>
                        <li>Verilog</li>
                        <li>HTML5</li>
                        <li>CSS</li>
                    </ul>
                </div>

                <div>
                    <p><b>Tools/Frameworks: </b></p>
                    <ul>
                        <li >React.js</li>
                        <li >Linux</li>
                        <li >Flask</li>
                        <li >Git/Github</li>
                        <li >MongoDB</li>
                        <li >Next.js</li>
                        <li >Arduino</li>
                        <li >SQLite3</li>
                        <li >Tailwind CSS</li>
                    </ul>
                </div>
            </div>

            

        </div>
    );
  }
  
  export default AboutMe;
  