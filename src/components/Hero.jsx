function Hero(){
    return(
        <section className="hero">
    <div className="hero-content">
        <p className="greeting">HELLO, I'M ELENI</p>
        <h1>Computer Science Student <span class="h1-divider">|</span> <span className="h1-accent">Web Developer</span></h1>
        <p className="description">I'm passionate about solving problems, building web projects, and exploring how technology can turn ideas into practical solutions.</p>
        <div className="hero-buttons">
            <button id="contactBtn">Contact Me</button>
            <a href="#projects" class="btn1">View Projects</a>
        </div>
        <div className="hero-skills">
            <span>Frontend Development</span>
            <span>Backend Development</span>
            <span>Problem Solving</span>
            <span>Graphic Design</span>
        </div>
    </div>
    <div className="hero-panel">
        <div className="hero-panel-row"><span className="label">Year</span><span className="value">3rd Year</span></div>
        <div className="hero-panel-row"><span className="label">Studying</span><span className="value">Computer Science</span></div>
        <div className="hero-panel-row"><span className="label">Focus</span><span className="value">Frontend &amp; Backend</span></div>
    </div>
</section>
    );
}
export default Hero;