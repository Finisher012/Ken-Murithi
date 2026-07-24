// ===============================
// MOBILE MENU
// ===============================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    } else {
        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }
});

// ===============================
// STICKY NAVBAR
// ===============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background = "rgba(11,15,25,0.95)";
        header.style.backdropFilter = "blur(10px)";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.25)";

    } else {

        header.style.background = "transparent";
        header.style.boxShadow = "none";

    }

});

// ===============================
// SMOOTH SCROLL
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

        navLinks.classList.remove("active");
        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';

    });

});

// ===============================
// HERO FADE-IN
// ===============================

window.addEventListener("load", () => {

    const hero = document.querySelector(".hero-content");

    hero.style.opacity = "0";
    hero.style.transform = "translateY(40px)";

    setTimeout(() => {

        hero.style.transition = "all 1s ease";

        hero.style.opacity = "1";
        hero.style.transform = "translateY(0)";

    }, 300);

});
// ===============================
// SCROLL REVEAL
// ===============================

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {

    reveals.forEach((element) => {

        const windowHeight = window.innerHeight;
        const revealTop = element.getBoundingClientRect().top;
        const revealPoint = 120;

        if (revealTop < windowHeight - revealPoint) {
            element.classList.add("active");
        }

    });

}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
// ===============================
// PROJECT FILTER
// ===============================

const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => btn.classList.remove("active"));

        button.classList.add("active");

        const filter = button.dataset.filter;

        projectCards.forEach(card => {

            if (
                filter === "all" ||
                card.dataset.category === filter
            ) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

});
// ===============================
// LOADER
// ===============================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";
        loader.style.visibility = "hidden";

    }, 1200);

});
// ===============================
// BACK TO TOP BUTTON
// ===============================

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if(window.scrollY > 400){
        backToTop.classList.add("show");
    }else{
        backToTop.classList.remove("show");
    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});
// ===============================
// TYPING EFFECT
// ===============================

const typingText = document.getElementById("typing-text");

const words = [
    "Software Developer",
    "Web Developer",
    "Python Programmer",
    "UI/UX Designer",
    "Future Founder of Finisher Technologies"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect(){

    const currentWord = words[wordIndex];

    if(!deleting){

        typingText.textContent = currentWord.substring(0,charIndex++);

        if(charIndex > currentWord.length){

            deleting = true;

            setTimeout(typeEffect,1500);

            return;

        }

    }else{

        typingText.textContent = currentWord.substring(0,charIndex--);

        if(charIndex < 0){

            deleting = false;

            wordIndex++;

            if(wordIndex >= words.length){

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect,deleting ? 50 : 100);

}

typeEffect();
// ===============================
// THEME TOGGLE
// ===============================

const themeToggle = document.getElementById("theme-toggle");

const body = document.body;

const icon = themeToggle.querySelector("i");

// Load saved theme
if(localStorage.getItem("theme")==="light"){

    body.classList.add("light-theme");

    icon.className="fas fa-sun";

}

themeToggle.onclick=()=>{

    body.classList.toggle("light-theme");

    if(body.classList.contains("light-theme")){

        icon.className="fas fa-sun";

        localStorage.setItem("theme","light");

    }else{

        icon.className="fas fa-moon";

        localStorage.setItem("theme","dark");

    }

}
// ===============================
// ANIMATED SKILL BARS
// ===============================

const skillSection = document.querySelector("#skills");
const progressBars = document.querySelectorAll(".progress-bar");

let skillsAnimated = false;

function animateSkills() {

    if (!skillSection || skillsAnimated) return;

    const sectionTop = skillSection.getBoundingClientRect().top;

    if (sectionTop < window.innerHeight - 120) {

        progressBars.forEach(bar => {
            bar.style.width = bar.dataset.width;
        });

        skillsAnimated = true;
    }
}

window.addEventListener("scroll", animateSkills);
window.addEventListener("load", animateSkills);
// ===============================
// ANIMATED COUNTERS
// ===============================

const counters = document.querySelectorAll(".counter");
const aboutStats = document.querySelector(".about-stats");

let counterStarted = false;

function animateCounters() {

    if (!aboutStats || counterStarted) return;

    const top = aboutStats.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {

        counters.forEach(counter => {

            const target = Number(counter.dataset.target);

            let current = 0;

            const increment = Math.max(1, Math.ceil(target / 60));

            const updateCounter = () => {

                current += increment;

                if (current >= target) {
                    current = target;
                }

                counter.textContent = current;

                if (current < target) {
                    requestAnimationFrame(updateCounter);
                } else {

                    if (target === 100) {

                        counter.textContent = target + "%";

                    } else {

                        counter.textContent = target + "+";

                    }

                }

            };

            requestAnimationFrame(updateCounter);

        });

        counterStarted = true;

    }

}

window.addEventListener("scroll", animateCounters);
window.addEventListener("load", animateCounters);
// ===============================
// SCROLL PROGRESS BAR
// ===============================

const progressBar = document.getElementById("progress-bar");

window.addEventListener("scroll", () => {

    const scrollTop = document.documentElement.scrollTop;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress = (scrollTop / scrollHeight) * 100;

    progressBar.style.width = progress + "%";

});
// ===============================
// ACTIVE NAVIGATION
// ===============================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

function updateActiveNav(){

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if(window.scrollY >= sectionTop &&
           window.scrollY < sectionTop + sectionHeight){

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

}

window.addEventListener("scroll", updateActiveNav);
window.addEventListener("load", updateActiveNav);