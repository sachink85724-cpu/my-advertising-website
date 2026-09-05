// ==============================
// MOBILE MENU
// ==============================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


// ==============================
// COUNTER ANIMATION
// ==============================

const counters = document.querySelectorAll(".counter");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const counter = entry.target;

        const target = Number(counter.dataset.target);

        let current = 0;

        const increment = target / 50;

        const updateCounter = () => {

            current += increment;

            if (current < target) {

                counter.textContent = Math.floor(current);

                requestAnimationFrame(updateCounter);

            } else {

                counter.textContent = target + "+";

            }

        };

        updateCounter();

        observer.unobserve(counter);

    });

});

counters.forEach(counter => {
    observer.observe(counter);
});


// ==============================
// CONTACT FORM
// ==============================

const form = document.getElementById("contactForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const business =
        document.getElementById("business").value;

    const phone =
        document.getElementById("phone").value;

    const campaign =
        document.getElementById("campaign").value;


    if (!business || !phone) {

        alert("Please fill all required fields.");

        return;

    }


    // Replace this number with your WhatsApp number.
    const whatsappNumber = "6232044953";


    const message =
        `Hello MovingAds,%0A%0A` +
        `Business: ${business}%0A` +
        `Phone: ${phone}%0A` +
        `Requirement: ${campaign}`;


    const whatsappURL =
        `https://wa.me/${whatsappNumber}?text=${message}`;


    window.open(whatsappURL, "_blank");

});


// ==============================
// CLOSE MOBILE MENU
// ==============================

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});