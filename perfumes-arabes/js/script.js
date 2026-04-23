// Navbar Mobile Menu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu on link click
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(0, 0, 0, 0.95)';
    } else {
        navbar.style.background = 'rgba(0, 0, 0, 0.9)';
    }
});

// 3D Hero Interactions - Mouse Tilt
const hero3d = document.querySelector('.hero-3d');
const elements3d = document.querySelectorAll('.3d-element');

hero3d.addEventListener('mousemove', (e) => {
    const rect = hero3d.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;
    
    elements3d.forEach(el => {
        gsap.to(el, {
            rotationX: rotateX,
            rotationY: rotateY,
            duration: 0.5,
            ease: 'power2.out'
        });
    });
});

hero3d.addEventListener('mouseleave', () => {
    elements3d.forEach(el => {
        gsap.to(el, {
            rotationX: 0,
            rotationY: 0,
            duration: 1,
            ease: 'elastic.out(1, 0.3)'
        });
    });
});

// GSAP Animations
gsap.from('.hero-title', {
    opacity: 0,
    y: 50,
    duration: 1.2,
    ease: 'power3.out'
});

gsap.from('.hero-subtitle', {
    opacity: 0,
    y: 30,
    duration: 1,
    delay: 0.3,
    ease: 'power2.out'
});

gsap.from('.cta-buttons .btn', {
    opacity: 0,
    y: 30,
    duration: 0.8,
    delay: 0.6,
    stagger: 0.2,
    ease: 'back.out(1.7)'
});

// Floating animation for perfume bottles
gsap.to('.perfume-bottle', {
    y: -20,
    rotation: 360,
    duration: 4,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut'
});

gsap.to('.bottle2', {
    y: 15,
    rotation: -360,
    duration: 6,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut',
    delay: 1
});

// Particle animation
gsap.to('.particle', {
    y: -50,
    opacity: 0,
    duration: 4,
    repeat: -1,
    stagger: 1,
    ease: 'power2.in'
});

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe elements
document.querySelectorAll('.product-card, .testimonial, .section-title').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

// Testimonials slider (simple)
let testimonialIndex = 0;
const testimonials = document.querySelectorAll('.testimonial');

setInterval(() => {
    testimonials.forEach((t, i) => {
        t.style.transform = `translateX(${(i - testimonialIndex) * 100}%)`;
        t.style.opacity = i === testimonialIndex ? '1' : '0.5';
    });
    
    testimonialIndex = (testimonialIndex + 1) % testimonials.length;
}, 4000);

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add to cart functionality (demo)
document.querySelectorAll('.btn-add').forEach(btn => {
    btn.addEventListener('click', () => {
        // Simple demo notification
        const productName = btn.parentElement.querySelector('h3').textContent;
        alert(`✅ ${productName} adicionado ao carrinho!`);
        
        // Visual feedback
        gsap.to(btn, {
            scale: 0.95,
            duration: 0.1,
            yoyo: true,
            repeat: 1
        });
    });
});

// Parallax effect for hero on scroll
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero3d = document.querySelector('.hero-3d');
    if (hero3d) {
        hero3d.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});
