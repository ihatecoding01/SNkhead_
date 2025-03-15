document.addEventListener("DOMContentLoaded", function() {
    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobileMenuButton');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.classList.add('bg-black');
                navbar.classList.remove('bg-opacity-75');
            } else {
                navbar.classList.add('bg-opacity-75');
                navbar.classList.remove('bg-black');
            }
        });
    }

    // GSAP Animations for hero section
    if (typeof gsap !== 'undefined') {
        // Hero section animations
        gsap.from(".hero-title", { 
            opacity: 0, 
            y: 50, 
            duration: 1, 
            delay: 0.3, 
            ease: "power3.out" 
        });
        
        gsap.from(".hero-subtitle", { 
            opacity: 0, 
            y: 30, 
            duration: 1, 
            delay: 0.7, 
            ease: "power3.out" 
        });
        
        gsap.from(".cta-button", { 
            opacity: 0, 
            scale: 0.8, 
            duration: 0.8, 
            delay: 1, 
            ease: "elastic.out(1, 0.5)" 
        });

        // Scroll animations
        const animateOnScroll = document.querySelectorAll('.animate-on-scroll');
        animateOnScroll.forEach((element, index) => {
            gsap.from(element, {
                scrollTrigger: {
                    trigger: element,
                    start: "top 80%",
                    toggleActions: "play none none none"
                },
                opacity: 0,
                y: 30,
                duration: 0.8,
                delay: index * 0.1
            });
        });

        // Sneaker card animations
        gsap.utils.toArray('.company-card').forEach((card, index) => {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: "top 85%",
                    toggleActions: "play none none none"
                },
                opacity: 0,
                y: 30,
                duration: 0.6,
                delay: index * 0.2
            });
        });
    }

    // Scroll to top button
    const scrollToTopButton = document.getElementById('scrollToTop');
    if (scrollToTopButton) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                scrollToTopButton.classList.remove('opacity-0');
                scrollToTopButton.classList.add('opacity-100');
            } else {
                scrollToTopButton.classList.add('opacity-0');
                scrollToTopButton.classList.remove('opacity-100');
            }
        });

        scrollToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Initialize Particle.js if available
    if (typeof particlesJS !== 'undefined') {
        particlesJS("hero-section", {
            particles: {
                number: {
                    value: 100,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: "#ffffff"
                },
                shape: {
                    type: "circle",
                },
                opacity: {
                    value: 0.5,
                    random: true
                },
                size: {
                    value: 3,
                    random: true
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: "#ffffff",
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: "none",
                    random: true,
                    straight: false,
                    out_mode: "out",
                    bounce: false
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: {
                        enable: true,
                        mode: "grab"
                    },
                    onclick: {
                        enable: true,
                        mode: "push"
                    },
                    resize: true
                }
            },
            retina_detect: true
        });
    }

    // Custom cursor
    const customCursor = document.createElement('div');
    customCursor.className = 'custom-cursor fixed w-6 h-6 rounded-full pointer-events-none z-50 mix-blend-difference';
    document.body.appendChild(customCursor);

    document.addEventListener('mousemove', function(e) {
        gsap.to(customCursor, {
            x: e.clientX - 12,
            y: e.clientY - 12,
            duration: 0.1
        });
    });

    // Add hover effect for links
    const links = document.querySelectorAll('a, button');
    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            gsap.to(customCursor, {
                scale: 1.5,
                duration: 0.3
            });
        });
        
        link.addEventListener('mouseleave', () => {
            gsap.to(customCursor, {
                scale: 1,
                duration: 0.3
            });
        });
    });
});
