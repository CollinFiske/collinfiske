import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item"><a href="#home">Collin Fiske</a></li>
        <li className="navbar-item"><a href="#projects">Projects</a></li>
        <li className="navbar-item"><a href="#experience">Experience</a></li>
        <li className="navbar-item"><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
