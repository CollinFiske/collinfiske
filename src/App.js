import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Socials from "./components/Socials";


function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Socials />
      <AboutMe />
      <Projects />
      <Experience />
      <Socials />
      <Contact />

      <Footer />

    </>
  );
}

export default App;
