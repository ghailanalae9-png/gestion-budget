// ================================
// BudgetPlus - JavaScript
// ================================

document.addEventListener("DOMContentLoaded", () => {

    console.log("BudgetPlus est prêt !");


    // ----------------------------
    // Menu mobile
    // ----------------------------

    const menuBtn = document.getElementById("menuBtn");
    const navLinks = document.querySelector(".nav-links");

    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("show");

        if (navLinks.classList.contains("show")) {
            menuBtn.textContent = "✕";
        } else {
            menuBtn.textContent = "☰";
        }
    });


    // Fermer le menu après avoir cliqué
    document.querySelectorAll(".nav-links a").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("show");
            menuBtn.textContent = "☰";

        });

    });


    // ----------------------------
    // Navigation active
    // ----------------------------

    const sections = document.querySelectorAll("section[id]");
    const links = document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll", () => {

        let currentSection = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {
                currentSection = section.id;
            }

        });

        links.forEach(link => {

            link.classList.remove("active");

            if (
                link.getAttribute("href") ===
                "#" + currentSection
            ) {
                link.classList.add("active");
            }

        });

    });


    // ----------------------------
    // Animation au scroll
    // ----------------------------

    const animatedElements = document.querySelectorAll(
        ".question, .answer, .card, .situation-card"
    );

    const observer = new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                }

            });

        },
        {
            threshold: 0.15
        }
    );


    animatedElements.forEach(element => {

        element.classList.add("hidden");

        observer.observe(element);

    });

});
