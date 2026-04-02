// ================= MOBILE MENU =================
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

if (menuIcon && navbar) {
    menuIcon.addEventListener("click", () => {
        menuIcon.classList.toggle("bx-x");
        navbar.classList.toggle("active");
    });

    window.addEventListener("scroll", () => {
        menuIcon.classList.remove("bx-x");
        navbar.classList.remove("active");
    });

    document.querySelectorAll(".navbar a").forEach((link) => {
        link.addEventListener("click", () => {
            menuIcon.classList.remove("bx-x");
            navbar.classList.remove("active");
        });
    });
}

// ================= FAST & SMOOTH ANIMATIONS =================
if (typeof ScrollReveal !== "undefined") {
    const sr = ScrollReveal({
        distance: "40px",      // reduced from 60px
        duration: 800,         // much faster (was 2500)
        delay: 100,            // reduced delay
        reset: false
    });

    sr.reveal(".text", { origin: "top" });
    sr.reveal(".form-container form", { origin: "bottom", delay: 150 });

    sr.reveal(".heading", { origin: "top", delay: 100 });

    sr.reveal(".ride-container .box", {
        origin: "bottom",
        interval: 100
    });

    sr.reveal(".services-container .box", {
        origin: "bottom",
        interval: 100
    });

    sr.reveal(".about-container", {
        origin: "bottom",
        delay: 100
    });

    sr.reveal(".reviews-container .box, .review-box", {
        origin: "bottom",
        interval: 100
    });

    sr.reveal(".contact-wrapper", {
        origin: "bottom",
        delay: 100
    });
}