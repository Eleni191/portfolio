function About() {
    const technologies = [
        "HTML/CSS",
        "JavaScript",
        "React",
        "Next.js",
        "Tailwind CSS",
        "Laravel",
        "Java",
        "MySQL",
        "PostgreSQL",
    ];

    return (
        <>
            {/* ORIGINAL: image left + text right (unchanged) */}
            <section className="about" id="about">

                <div className="frame">
                    <img
                        src="photo.JPG"
                        alt="Portrait of Eleni"
                        style={{
                            width: "280px",
                            height: "280px",
                            objectFit: "cover"
                        }}
                    />
                </div>

                <div className="about-content">
                    <h2>About Me</h2>

                    <p>
                        I'm a Computer Science student and Full-Stack Web Developer
                        passionate about building practical, user-friendly web
                        applications. I enjoy solving problems, exploring new
                        technologies, and turning ideas into functional solutions.
                    </p>

                    <p>
                        I work with Next.js and Laravel to develop modern web
                        applications, combining frontend development with
                        backend functionality. I'm also continuously strengthening
                        my knowledge of databases, data structures, and
                        problem-solving.
                    </p>

                    <div className="about-facts">
                        <div className="fact">
                            <span className="fact-label">Education</span>
                            <span className="fact-value">Computer Science</span>
                        </div>

                        <div className="fact">
                            <span className="fact-label">Specialization</span>
                            <span className="fact-value">Full-Stack Development</span>
                        </div>

                        <div className="fact">
                            <span className="fact-label">Technologies</span>
                            <span className="fact-value">Next.js & Laravel</span>
                        </div>

                        <div className="fact">
                            <span className="fact-label">Databases</span>
                            <span className="fact-value">MySQL & PostgreSQL</span>
                        </div>
                    </div>

                    <button className="btn" id="connectBtn">
                        Let's Connect
                    </button>
                </div>

            </section>

            {/* NEW: separate block on the bottom */}
            <section className="tech-section">
                <h3 className="tech-title">Other Technologies I Use</h3>
                <p className="tech-text">
                    The tools and languages I work with to design, build,
                    and ship web applications.
                </p>

                <div className="tech-tags">
                    {technologies.map((tech) => (
                        <span key={tech}>{tech}</span>
                    ))}
                </div>
            </section>
        </>
    );
}

export default About;