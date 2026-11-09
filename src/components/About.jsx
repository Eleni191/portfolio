
function About (){
    return(
        <section className="about" id="about">

    <div className="frame">
      <img
    src="photo.JPG"
    alt="Portrait of Eleni"
    style={{ width: "280px", height: "280px", objectFit: "cover" }}
/>
       
    </div>

    <div className="about-content">
        <h2 >About Me</h2>
        <p>I'm a Computer Science student who enjoys solving problems and building websites. I like learning by creating real projects and exploring new technologies.</p>
        <p>Currently, I'm focusing on frontend and backend development and improving my problem-solving skills.</p>

        <div className="about-facts">
            <div className="fact"><span class="fact-label">Studying</span><span className="fact-value">Computer Science, 3rd year</span></div>
            <div className="fact"><span class="fact-label">Focus</span><span className="fact-value">Frontend &amp; Backend</span></div>
            <div className="fact"><span class="fact-label">Also</span><span className="fact-value">Graphic Design</span></div>
            <div className="fact"><span class="fact-label">Learning</span><span className="fact-value">React</span></div>
        </div>

        <div className="about-tags">
            <span>HTML/CSS</span><span>JavaScript</span><span>Java</span><span>C++</span><span>MySQL</span><span>Laravel</span><span>Adobes Photoshop</span>
        </div>

     
        <button className="btn" id="connectBtn">Let's Connect</button>
    </div>

</section>
    );
}

export default About;