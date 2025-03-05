document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Empêche le rechargement de la page

        // Récupération des valeurs du formulaire
        const nom = document.getElementById("nom").value.trim();
        const prenom = document.getElementById("prenom").value.trim();
        const email = document.getElementById("email").value.trim();
        const ville = document.getElementById("message").value.trim();

        // Vérification des champs
        if (!nom || !prenom || !email || !ville) {
            alert("Veuillez remplir tous les champs !");
            return;
        }

        // Confirmation et reset du formulaire
        alert(`Merci ${prenom} ! Votre message a été envoyé.`);
        form.reset();
    });

    // Ajout d'une animation au défilement
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = "translateY(0)";
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2
    });

    const sections = document.querySelectorAll(".contact");
    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = "translateY(30px)";
        observer.observe(section);
    });
});
document.addEventListener("DOMContentLoaded", function() {
    // Animation d'apparition du titre
    document.querySelector(".left h1").classList.add("visible");

    // Effet au survol du bouton
    const btn = document.querySelector(".btn");
    btn.addEventListener("mouseover", function() {
        this.style.transform = "scale(1.1)";
    });

    btn.addEventListener("mouseout", function() {
        this.style.transform = "scale(1)";
    });

    // Effet d'apparition progressive lors du scroll
    const sections = document.querySelectorAll(".fade-in");

    function checkScroll() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < window.innerHeight - 100) {
                section.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll(); // Vérifier immédiatement pour les éléments visibles dès le début
});
