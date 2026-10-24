/* ---------- Theme ---------- */
const root = document.documentElement;
const themeBtn = document.querySelector("#themeBtn");

function applyTheme(isLight) {
    root.classList.toggle("light-mode", isLight);
    themeBtn.textContent = isLight ? "☀️" : "🌙";
}
applyTheme(localStorage.getItem("theme") === "light");

themeBtn.addEventListener("click", () => {
    const isLight = !root.classList.contains("light-mode");
    applyTheme(isLight);
    localStorage.setItem("theme", isLight ? "light" : "dark");
});

/* ---------- Mobile menu ---------- */
const menuBtn = document.querySelector("#menuBtn");
const navLinks = document.querySelector("#navLinks");

function setMenu(open) {
    navLinks.classList.toggle("open", open);
    menuBtn.classList.toggle("open", open);
    menuBtn.setAttribute("aria-expanded", open);
}
menuBtn.addEventListener("click", () => setMenu(!navLinks.classList.contains("open")));
navLinks.querySelectorAll("a").forEach(a => a.addEventListener("click", () => setMenu(false)));

/* ---------- Buttons ---------- */
const contactBtn = document.querySelector("#contactBtn");
if (contactBtn) {
    contactBtn.addEventListener("click", () => {
        document.querySelector("#contact").scrollIntoView({ behavior: "smooth" });
    });
}

const cvBtn = document.querySelector("#cvBtn");
if (cvBtn) {
    cvBtn.addEventListener("click", () => {
        const a = document.createElement("a");
        a.href = "cv.pdf";          // put your CV file next to index.html
        a.download = "Eleni-Mulugeta-CV.pdf";
        a.click();
    });
}

const connectBtn = document.querySelector("#connectBtn");
if (connectBtn) {
    const myEmail = "elenimulugeta69@gmail.com";
    connectBtn.addEventListener("click", () => {
        window.open("https://mail.google.com/mail/?view=cm&to=" + myEmail + "&su=Hello%20Eleni", "_blank");
    });
}

/* ---------- Back to top ---------- */
const backToTop = document.querySelector("#backToTop");
if (backToTop) {
    window.addEventListener("scroll", () => {
        backToTop.classList.toggle("show", window.scrollY > 300);
    });
    backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

/* ---------- Contact form (one handler only) ---------- */
const form = document.querySelector("#contactForm");
const statusEl = document.querySelector("#formStatus");

if (form) {
    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        const btn = form.querySelector(".submit-btn");
        btn.disabled = true;
        btn.textContent = "Sending...";
        statusEl.textContent = "";

        try {
            const res = await fetch(form.action, {
                method: "POST",
                body: new FormData(form),
                headers: { Accept: "application/json" }
            });
            if (!res.ok) throw new Error("Request failed");
            statusEl.textContent = "Thanks! Your message has been sent.";
            statusEl.className = "form-status success";
            form.reset();
        } catch (err) {
            statusEl.textContent = "Something went wrong. Please try again or email me directly.";
            statusEl.className = "form-status error";
        } finally {
            btn.disabled = false;
            btn.textContent = "Send Message";
        }
    });
}