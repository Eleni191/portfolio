
function Hero() {
    return (
        <section className="hero">
            <div className="hero-content">
                <p className="greeting">HELLO, I'M ELENI</p>

                <h1>
                    Next.js <span className="h1-divider">&</span>{" "}
                    <span className="h1-accent">Laravel Developer</span>
                </h1>

                <p className="description">
                    I build modern, responsive web applications with a focus
                    on creating intuitive user experiences and reliable backend
                    solutions. I enjoy solving problems and turning ideas into
                    functional applications.
                </p>

                <div className="hero-buttons">
                    <button id="contactBtn">Contact Me</button>
                    <a href="#projects" className="btn1">
                        View Projects
                    </a>
                </div>

                <div className="hero-skills">
                    <span>Frontend Development</span>
                    <span>Backend Development</span>
                    <span>Database Management</span>
                    <span>Problem Solving</span>
                </div>
            </div>

          <div className="hero-panel">
    <div className="hero-panel-row">
        <span className="label">Academic Level</span>
        <span className="value">3rd Year</span>
    </div>

    <div className="hero-panel-row">
        <span className="label">Field of Study</span>
        <span className="value">Computer Science</span>
    </div>

    <div className="hero-panel-row">
        <span className="label">Primary Focus</span>
        <span className="value">Web Development</span>
    </div>
</div>
        </section>
    );
}

export default Hero;
