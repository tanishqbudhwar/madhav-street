// Preloader Framework Handle Execution
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    preloader.style.opacity = '0';
    setTimeout(() => {
        preloader.style.display = 'none';
    }, 500);
    startCounters(); // Kick off counter animations on resource loaded state
});

// Premium Navbar Sticky Logic and Highlight State
const navbar = document.querySelector('.navbar');
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    // Sticky Transition
    if (window.scrollY > 50) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }

    // Scroll Active Highlighting Node Logic
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

// Hamburger Mobile Navigation Management Menu State
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

navLinks.forEach(link => link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Incremental Stats Counters Module System Engine
function startCounters() {
    const counters = document.querySelectorAll('.stat-number');
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            // Configurable speed modifier factor
            const speed = target / 100;

            if (count < target) {
                counter.innerText = Math.ceil(count + speed);
                setTimeout(updateCount, 20);
            } else {
                counter.innerText = target + (counter.getAttribute('data-target').includes('.') ? '' : '+');
            }
        };
        updateCount();
    });
}

// Google Business Reviews Slider Framework Structure Logic
let currentSlideIndex = 0;
const carousel = document.getElementById('carousel');
const dots = document.querySelectorAll('.dot');

function currentSlide(index) {
    currentSlideIndex = index;
    carousel.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
}

// Optional Auto-slide framework loop rotation logic
setInterval(() => {
    currentSlideIndex = (currentSlideIndex + 1) % dots.length;
    currentSlide(currentSlideIndex);
}, 6000);

// Advanced Scroll Reveal Engine Observer Configuration Setup
const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active-reveal');
            revealObserver.unobserve(entry.target); // Trigger uniquely once
        }
    });
}, { threshold: 0.15 });

revealElements.forEach(el => revealObserver.observe(el));

// Lightbox Grid Media Interaction Engine
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeLightbox = document.querySelector('.close-lightbox');
const galleryItems = document.querySelectorAll('.gallery-item img');

galleryItems.forEach(img => {
    img.addEventListener('click', () => {
        lightbox.style.display = 'block';
        lightboxImg.src = img.src;
        document.body.style.overflow = 'hidden'; // Lock context scrolling structure
    });
});

closeLightbox.addEventListener('click', () => {
    lightbox.style.display = 'none';
    document.body.style.overflow = 'auto';
});

lightbox.addEventListener('click', (e) => {
    if(e.target !== lightboxImg) {
        lightbox.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Premium Lead Generation Form Response Action Override Context
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for choosing luxury. Your premium inquiry has been successfully dispatched to our concierge division.');
    this.reset();
});