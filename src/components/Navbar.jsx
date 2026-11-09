import {useState, useEffect} from "react";

function Navbar(){
const[isLight, setIsLight] = useState(
    localStorage.getItem("theme") === "light" 
);

useEffect(() => {
    document.documentElement.classList.toggle("light-mode", isLight);

    localStorage.setItem("theme", isLight ? "light" : "dark");
}, [isLight]);

const [isMenuOpen, setIsMenuOpen] = useState(false);

    return(
       <nav className="navbar">
    <div className="logo">Eleni</div>
<div className={`links ${isMenuOpen ? "open" : ""}`} id="navLinks">
        <a href="index.html">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        <a href="#contact" className="links-cv">Contact Me</a>
    </div>
    <div className="nav-actions">
       <button
    id="themeBtn"
    aria-label="Toggle theme"
    onClick={() => setIsLight(!isLight)}
>
    {isLight ? "☀️" : "🌙"}
</button>
        <a href="#contact" className="btn1">Contact Me</a>
    <button
    id="menuBtn"
    className="menu-toggle"
    aria-label="Toggle menu"
    aria-expanded={isMenuOpen}
    onClick={() => setIsMenuOpen(!isMenuOpen)}
>
    <span></span>
    <span></span>
    <span></span>
</button>
    </div>
</nav>
    );

}
export default Navbar;