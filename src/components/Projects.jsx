function Projects(){
    return(
        <section className="projects" id="projects">
    <div className="section-heading">
        <h2>My Projects</h2>
        <p className="section-sub">A few things I've built while learning to code.</p>
    </div>

    <div className="cards">

        <article className="card t1">
            <div className="card-thumb">
                <div className="ph">Aurum</div>
                <img src="/public/images/order.jpg" alt="Restaurant Ordering System screenshot" loading="lazy" onerror="this.remove()"/>
            </div>
            <div className="card-body">
                <span className="card-tag">Desktop App</span>
                <h3>Restaurant Ordering System</h3>
                <p>A JavaFX desktop app with customer ordering, waiter approval, and manager oversight.</p>
                <div className="card-stack"><span>Java</span><span>JavaFX</span><span>MySQL</span><span>OOP</span></div>
                <a href="https://github.com/Eleni191/ordering_system" className="card-link">View project</a>
            </div>
        </article>

        <article className="card t2">
            <div className="card-thumb">
                <div className="ph">C++</div>
                <img src="/public/images/job.jpg" alt="Employee Registration System screenshot" loading="lazy" onerror="this.remove()"/>
            </div>
            <div className="card-body">
                <span className="card-tag">Backend Application</span>
                <h3>Employee Registration System</h3>
                <p>Registers, stores, retrieves, and manages employee records using C++ and MySQL.</p>
                <div className="card-stack"><span>C++</span><span>MySQL</span></div>
                <a href="#" className="card-link">View project</a>
            </div>
        </article>

        <article className="card t3">
            <div className="card-thumb">
                <div className="ph">Sunrise</div>
                <img src="/public/images/hotel.jpg" alt="Sunrise Hotel website screenshot" loading="lazy" onerror="this.remove()"/>
            </div>
            <div className="card-body">
                <span className="card-tag">Frontend Development</span>
                <h3>Sunrise Hotel Website</h3>
                <p>A responsive hotel site where guests explore rooms and book, plus an admin dashboard for bookings.</p>
                <div className="card-stack"><span>HTML</span><span>CSS</span><span>JavaScript</span><span>Responsive</span></div>
                <a href="https://sunrisehotels.netlify.app" className="card-link">View project</a>
            </div>
        </article>

        <article className="card t4">
            <div className="card-thumb">
                <div className="ph">Heran</div>
                <img src="/public/images/cake.jpg" alt="Heran Cafe website screenshot" loading="lazy" onerror="this.remove()"/>
            </div>
            <div className="card-body">
                <span className="card-tag">Frontend Development</span>
                <h3>Heran Cafe Website</h3>
                <p>A warm, responsive cafe website with a home page and a full menu with prices.</p>
                <div className="card-stack"><span>HTML</span><span>CSS</span><span>JavaScript</span></div>
                <a href="https://cafe-frontend-wine.vercel.app/" className="card-link">View project</a>
            </div>
        </article>

    </div>

    <div className="view-more"><a href="projects.html" class="btn1">View more projects</a></div>
</section>
    );
}
export default Projects;