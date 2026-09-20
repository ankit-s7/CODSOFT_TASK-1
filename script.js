// ===== Mobile Menu =====

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


// Mobile menu par kisi link ko click karne ke baad menu close
document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });

});


// ===== Contact Form Validation =====

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();


    // Empty fields check
    if (name === "" || email === "" || message === "") {

        formMessage.textContent = "*All fields are required.";
        formMessage.style.color = "#f87171";

        return;
    }

    //Name validation 
    const namePattern = /^[A-Za-z ]+$/;

    if (!namePattern.test(name)) {
    formMessage.textContent = "Please enter only alphabets in name.";
    formMessage.style.color = "red";
    return;
}


    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {

        formMessage.textContent = "Please enter a valid email address.";
        formMessage.style.color = "#f87171";

        return;
    }


    // Success message
    formMessage.textContent =
        "Thank you! Your message has been submitted.";

    formMessage.style.color = "#4ade80";


    // Form clear
    contactForm.reset();

});


// ===== Scroll Animation =====

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },
    {
        threshold: 0.15
    }
);


sections.forEach(section => {
    observer.observe(section);
});

const profileLink = document.getElementById("profileLink");
const profileModal = document.getElementById("profileModal");
const closeProfile = document.querySelector(".close-profile");

profileLink.addEventListener("click", function (e) {
    e.preventDefault();
    profileModal.style.display = "flex";
});

closeProfile.addEventListener("click", function () {
    profileModal.style.display = "none";
});

profileModal.addEventListener("click", function (e) {
    if (e.target === profileModal) {
        profileModal.style.display = "none";
    }
});
