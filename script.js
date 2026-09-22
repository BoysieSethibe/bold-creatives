// =========================
// BANNER SLIDER
// =========================

const slides = document.querySelectorAll(".slide");

let current = 0;

function slider() {

    if (slides.length === 0) {
        return;
    }

    slides[current].classList.remove("active");

    current++;

    if (current >= slides.length) {
        current = 0;
    }

    slides[current].classList.add("active");
}

if (slides.length > 1) {
    setInterval(slider, 4000);
}


// =========================
// SCROLL TO TOP BUTTON
// =========================

let mybutton = document.getElementById("topBtn");

window.onscroll = function () {

    if (
        document.body.scrollTop > 300 ||
        document.documentElement.scrollTop > 300
    ) {

        mybutton.style.display = "block";

    } else {

        mybutton.style.display = "none";

    }

};


function topFunction() {

    document.body.scrollTop = 0;

    document.documentElement.scrollTop = 0;

}


// =========================
// MOBILE MENU
// =========================

const menu = document.querySelector(".menu-toggle");

const nav = document.querySelector(".nav-links");

if (menu && nav) {

    menu.onclick = function () {

        nav.classList.toggle("active");

    };

}


// =========================
// DARK MODE
// =========================

const darkBtn = document.getElementById("darkModeBtn");

if (darkBtn) {

    darkBtn.addEventListener("click", function () {

        document.body.classList.toggle("dark");

    });

}

// =========================
// CONTACT FORM
// =========================

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (contactForm) {

    contactForm.addEventListener("submit", async function (event) {

        event.preventDefault();

        formMessage.textContent = "Sending your enquiry...";
        formMessage.style.color = "blue";

        const formData = new FormData(contactForm);

        try {

            const response = await fetch(contactForm.action, {
                method: "POST",
                body: formData,
                headers: {
                    "Accept": "application/json"
                }
            });

            if (response.ok) {

                formMessage.textContent =
                    "✅ Thank you! Your enquiry has been sent successfully. We will contact you shortly.";

                formMessage.style.color = "green";

                contactForm.reset();

            } else {

                formMessage.textContent =
                    "❌ Something went wrong. Please try again.";

                formMessage.style.color = "red";

            }

        } catch (error) {

            formMessage.textContent =
                "❌ Unable to send your enquiry. Please check your internet connection and try again.";

            formMessage.style.color = "red";

        }

    });

}