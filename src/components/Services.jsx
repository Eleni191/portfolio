function Services() {
    return(
        

<section className="services" id="services">
    <div className="section-heading">
        <span className="eyebrow">WHAT I DO</span>
        <h2>My Services</h2>
    </div>

    <div className="svc-grid">
        <div className="svc">
            <div className="svc-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="M2 8h20" />
                    <path d="M10 12l-2 2 2 2M14 12l2 2-2 2" />
                </svg>
            </div>
            <h3>Web Development</h3>
            <p>Custom web applications built with modern technologies and best practices.</p>
            <a href="#contact">Learn more <span>→</span></a>
        </div>

        <div className="svc">
            <div className="svc-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" />
                    <path d="M8 21h8M12 17v4" />
                </svg>
            </div>
            <h3>Frontend Development</h3>
            <p>Responsive and interactive user interfaces with React, Next.js, and Tailwind CSS.</p>
            <a href="#contact">Learn more <span>→</span></a>
        </div>

        <div className="svc">
            <div className="svc-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="5" rx="1" />
                    <rect x="2" y="10" width="20" height="5" rx="1" />
                    <rect x="2" y="17" width="20" height="5" rx="1" />
                    <path d="M6 5.5h.01M6 12.5h.01M6 19.5h.01" />
                </svg>
            </div>
            <h3>Backend Development</h3>
            <p>RESTful APIs and server-side applications with Laravel and databases.</p>
            <a href="#contact">Learn more <span>→</span></a>
        </div>

        <div className="svc">
            <div className="svc-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <ellipse cx="12" cy="5" rx="8" ry="3" />
                    <path d="M4 5v14c0 1.66 3.58 3 8 3s8-1.34 8-3V5" />
                    <path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3" />
                </svg>
            </div>
            <h3>Database Design</h3>
            <p>Database architecture and optimization for high-performance applications.</p>
            <a href="#contact">Learn more <span>→</span></a>
        </div>
    </div>
</section>
    );
}
export default Services;