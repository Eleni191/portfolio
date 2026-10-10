console.log("JavaScript is connected!");
const contactBtn=document.querySelector("#contactBtn");
contactBtn.addEventListener("click", function() {
    console.log("Contact button clicked!");
});

const themeBtn = document.querySelector("#themeBtn");
const body = document.querySelector("body");


themeBtn.addEventListener("click", function() {
    body.classList.toggle("light-mode");
    console.log("Theme button clicked!");
});
const contact=document.querySelector("#contact");
contact.addEventListener("submit", function(event) {
    event.preventDefault();
    console.log("Form submitted!");
    const nameInput = document.querySelector("#name");
    const emailInput = document.querySelector("#email");
    const messageInput = document.querySelector("#message");
    console.log("Name:", nameInput.value);
    console.log("Email:", emailInput.value);
    console.log("Message:", messageInput.value);
});

