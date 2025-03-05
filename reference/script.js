document.addEventListener("DOMContentLoaded", () => {
    const text = document.querySelector(".anim");
    text.classList.add("visible");
});

document.addEventListener("DOMContentLoaded", () => {
    const blogPosts = document.querySelectorAll(".blog-post");
    
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.2 });
    
    blogPosts.forEach(post => {
        observer.observe(post);
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const text = document.querySelector("#ftt");
    text.classList.add("visible");
});




document.addEventListener("DOMContentLoaded", function() {
    // Animation au défilement
    const elements = document.querySelectorAll(".reveal");

    function checkScroll() {
        let windowHeight = window.innerHeight;
        elements.forEach(element => {
            let positionFromTop = element.getBoundingClientRect().top;
            if (positionFromTop - windowHeight <= 0) {
                element.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll(); // Vérifier au chargement

    // Effet sur les boutons
    const buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
        button.addEventListener("mouseenter", () => {
            button.style.transform = "scale(1.1)";
            button.style.transition = "transform 0.3s";
        });
        button.addEventListener("mouseleave", () => {
            button.style.transform = "scale(1)";
        });
    });
});


const texts = ["Nous offrons des formations en", "ENTREPRENEURIAT", "BUREAUTIQUE", "PLAN D'ACTION", "PLAN D'AFFAIRE", "Etc..."];
let index = 0;

setInterval(() => {
    index = (index + 1) % texts.length;
    document.getElementById("text").textContent = texts[index];
}, 2000);

