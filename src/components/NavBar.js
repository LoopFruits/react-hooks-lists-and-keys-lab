import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return <nav>
    {/* display an <a> tag for each link here */}
    <a href="#home" key = 'home'>home</a>
    <a href="#about" key = 'about'>about</a>
    <a href="#projects" key = 'projects'>projects</a>
    </nav>;
}
// doing <a href='#'> Insert Text Here </a> creates a link in the nav bar  
export default NavBar;
