console.log("JavaScript is connected!");

/* ---------- Theme (works on every page) ---------- */
const root = document.documentElement;
const themeBtn = document.querySelector("#themeBtn");

function applyTheme(isLight) {
    root.classList.toggle("light-mode", isLight);
    themeBtn.textContent = isLight ? "☀️" : "🌙";
}

applyTheme(localStorage.getItem("theme") === "light");

themeBtn.addEventListener("click", function () {
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

menuBtn.addEventListener("click", function () {
    setMenu(!navLinks.classList.contains("open"));
});

/* close the menu after tapping a link */
navLinks.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
        setMenu(false);
    });
});

/* ---------- Home page only ---------- */
const contactBtn = document.querySelector("#contactBtn");
if (contactBtn) {
    contactBtn.addEventListener("click", function () {
        console.log("Contact button clicked!");
    });
}
/* "Let's Connect" opens Gmail compose to you */
const connectBtn = document.querySelector("#connectBtn");
if (connectBtn) {
    const myEmail = "eleimulugeta69@gmail.com";   // <- put your real email here, once

    connectBtn.addEventListener("click", function () {
        window.open(
            "https://mail.google.com/mail/?view=cm&to=" + myEmail + "&su=Hello%20Eleni",
            "_blank"
        );
    });
}

const contactForm = document.querySelector("#contactForm");
if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();
        console.log("Form submitted!");
        console.log("Name:", document.querySelector("#name").value);
        console.log("Email:", document.querySelector("#email").value);
        console.log("Message:", document.querySelector("#message").value);
    });
}

const backToTop = document.querySelector("#backToTop");

window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }
});

backToTop.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

const form = document.getElementById("contactForm");
const statusEl = document.getElementById("formStatus");

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
        if (res.ok) {
            statusEl.textContent = "Thanks! Your message has been sent.";
            statusEl.className = "form-status success";
            form.reset();
        } else {
            throw new Error("Request failed");
        }
    } catch (err) {
        statusEl.textContent = "Something went wrong. Please try again or email me directly.";
        statusEl.className = "form-status error";
    } finally {
        btn.disabled = false;
        btn.textContent = "Send Message";
    }
});