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

/* ---------- Scroll reveal ---------- */
(function () {
  // left side
  document.querySelectorAll('.hero-content, .frame, .contact-intro')
    .forEach(el => el.classList.add('reveal-left'));

  // right side
  document.querySelectorAll('.hero-panel, .about-content, .contact-form')
    .forEach(el => el.classList.add('reveal-right'));

  // boxes from the top, staggered one after another
  document.querySelectorAll('.cards, .svc-grid, .poster-grid, .stats-strip, .about-facts')
    .forEach(group => {
      [...group.children].forEach((box, i) => {
        box.classList.add('reveal-top');
        box.style.setProperty('--d', (i * 0.12) + 's');
      });
    });

  // section headings also from the top
  document.querySelectorAll('.section-heading')
    .forEach(el => el.classList.add('reveal-top'));

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        io.unobserve(entry.target); // play once
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.reveal-left, .reveal-right, .reveal-top')
    .forEach(el => io.observe(el));
})();


/* ---------- Count-up stats ---------- */
(function () {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const target = parseInt(el.textContent, 10);
      const suffix = el.textContent.replace(/[0-9]/g, '');
      const start = performance.now(), dur = 1400;
      (function tick(now) {
        const p = Math.min((now - start) / dur, 1);
        el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3))) + suffix;
        if (p < 1) requestAnimationFrame(tick);
      })(start);
      io.unobserve(el);
    });
  }, { threshold: 0.6 });
  document.querySelectorAll('.stat-num').forEach(n => io.observe(n));
})();

/* ---------- Poster lightbox ---------- */
(function () {
  const box = document.createElement('div');
  box.className = 'lightbox';
  box.innerHTML = '<img alt=""><button aria-label="Close">✕</button>';
  document.body.appendChild(box);
  const img = box.querySelector('img');
  const close = () => box.classList.remove('open');

  document.querySelectorAll('.poster-img img').forEach(p => {
    p.style.cursor = 'zoom-in';
    p.addEventListener('click', () => { img.src = p.src; img.alt = p.alt; box.classList.add('open'); });
  });
  box.addEventListener('click', e => { if (e.target !== img) close(); });
  addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
})();