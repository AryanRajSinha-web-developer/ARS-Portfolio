// ================================
// Aryan Raj Sinha Portfolio Script
// ================================

document.addEventListener("DOMContentLoaded", () => {

    // ===========================
    // Typing Animation
    // ===========================

    const typingElement = document.getElementById("typing");

    const words = [
        "Professional Web Developer",
        "Frontend Developer",
        "HTML • CSS • JavaScript",
        "Creative UI Designer"
    ];

    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function typeEffect() {

        if (!typingElement) return;

        const currentWord = words[wordIndex];

        if (!deleting) {

            typingElement.textContent =
                currentWord.substring(0, charIndex);

            charIndex++;

            if (charIndex > currentWord.length) {

                deleting = true;

                setTimeout(typeEffect, 1500);

                return;

            }

        } else {

            typingElement.textContent =
                currentWord.substring(0, charIndex);

            charIndex--;

            if (charIndex < 0) {

                deleting = false;

                wordIndex++;

                if (wordIndex >= words.length) {

                    wordIndex = 0;

                }

                charIndex = 0;

            }

        }

        setTimeout(typeEffect, deleting ? 50 : 100);

    }

    typeEffect();

    // ===========================
    // Floating Name Animation
    // ===========================

    const floatingName =
        document.getElementById("floatingName");

    // ===========================
    // Skill Bars
    // ===========================

    const skillBars =
        document.querySelectorAll(".fill");

    // ===========================
    // Reveal Elements
    // ===========================

    const revealElements =
        document.querySelectorAll(".reveal");

    function animatePage() {

        const scroll =
            window.scrollY;

        // Floating Name

        if (floatingName) {

            floatingName.style.transform =
                `translateY(${Math.min(scroll * 0.25, 120)}px)`;

        }

        // Skill Bars

        skillBars.forEach(bar => {

            const position =
                bar.getBoundingClientRect().top;

            if (position < window.innerHeight - 50) {

                const width =
                    bar.getAttribute("data-width");

                if (width) {

                    bar.style.width = width;

                }

            }

        });

        // Reveal Animation

        revealElements.forEach(item => {

            const position =
                item.getBoundingClientRect().top;

            if (position < window.innerHeight - 80) {

                item.classList.add("show");

            }

        });

    }

    window.addEventListener("scroll", animatePage);

    animatePage();

    // ===========================
    // Smooth Scroll
    // ===========================

    const links =
        document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {

        link.addEventListener("click", function (e) {

            const target =
                document.querySelector(this.getAttribute("href"));

            if (target) {

                e.preventDefault();

                target.scrollIntoView({

                    behavior: "smooth"

                });

            }

        });

    });

    // ===========================
    // Navbar Shadow
    // ===========================

    const navbar =
        document.querySelector(".navbar");

    window.addEventListener("scroll", () => {

        if (!navbar) return;

        if (window.scrollY > 50) {

            navbar.style.boxShadow =
                "0 10px 25px rgba(0,0,0,0.15)";

        } else {

            navbar.style.boxShadow =
                "none";

        }

    });

});