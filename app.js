/* ============================================
   RUNGTA PUBLIC SCHOOL - INTERACTIVE ENGINE
   ============================================ */

// Wait for DOM
document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide Icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // ============ PRELOADER ============
    const preloader = document.getElementById('preloader');
    const progress = document.getElementById('preloaderProgress');
    let loadProgress = 0;

    function animatePreloader() {
        const interval = setInterval(() => {
            loadProgress += Math.random() * 15;
            if (loadProgress >= 100) {
                loadProgress = 100;
                clearInterval(interval);
                setTimeout(() => {
                    preloader.classList.add('hidden');
                    document.body.style.overflow = '';
                    initHeroAnimations();
                }, 400);
            }
            progress.style.width = loadProgress + '%';
        }, 100);
    }

    // Create preloader particles
    const preloaderParticles = document.getElementById('preloaderParticles');
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 4 + 1}px;
            height: ${Math.random() * 4 + 1}px;
            background: rgba(255,255,255,${Math.random() * 0.3 + 0.1});
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: particleFloat ${Math.random() * 5 + 3}s ease-in-out infinite ${Math.random() * 3}s;
        `;
        preloaderParticles.appendChild(particle);
    }

    document.body.style.overflow = 'hidden';
    animatePreloader();

    // ============ CUSTOM CURSOR ============
    const cursorDot = document.getElementById('cursorDot');
    const cursorRing = document.getElementById('cursorRing');
    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        cursorDot.style.left = mouseX + 'px';
        cursorDot.style.top = mouseY + 'px';
    });

    function animateCursorRing() {
        ringX += (mouseX - ringX) * 0.15;
        ringY += (mouseY - ringY) * 0.15;
        cursorRing.style.left = ringX + 'px';
        cursorRing.style.top = ringY + 'px';
        requestAnimationFrame(animateCursorRing);
    }
    animateCursorRing();

    // Cursor hover effects
    const hoverElements = document.querySelectorAll('a, button, [data-tilt], .nav-link, .btn');
    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursorDot.classList.add('active');
            cursorRing.classList.add('active');
        });
        el.addEventListener('mouseleave', () => {
            cursorDot.classList.remove('active');
            cursorRing.classList.remove('active');
        });
    });

    // ============ HERO CANVAS (Particle Network) ============
    const heroCanvas = document.getElementById('heroCanvas');
    const ctx = heroCanvas.getContext('2d');
    let particles = [];
    let canvasWidth, canvasHeight;

    function resizeCanvas() {
        canvasWidth = heroCanvas.width = heroCanvas.offsetWidth;
        canvasHeight = heroCanvas.height = heroCanvas.offsetHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    class Particle {
        constructor() {
            this.reset();
        }
        reset() {
            this.x = Math.random() * canvasWidth;
            this.y = Math.random() * canvasHeight;
            this.vx = (Math.random() - 0.5) * 0.5;
            this.vy = (Math.random() - 0.5) * 0.5;
            this.radius = Math.random() * 2 + 0.5;
            this.opacity = Math.random() * 0.5 + 0.2;
        }
        update() {
            this.x += this.vx;
            this.y += this.vy;
            if (this.x < 0 || this.x > canvasWidth) this.vx *= -1;
            if (this.y < 0 || this.y > canvasHeight) this.vy *= -1;
        }
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(59, 130, 246, ${this.opacity})`;
            ctx.fill();
        }
    }

    // Create particles
    const particleCount = Math.min(80, Math.floor(canvasWidth * canvasHeight / 15000));
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }

    function drawConnections() {
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 150) {
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `rgba(59, 130, 246, ${0.1 * (1 - dist / 150)})`;
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            }
        }
    }

    function animateParticles() {
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        particles.forEach(p => {
            p.update();
            p.draw();
        });
        drawConnections();
        requestAnimationFrame(animateParticles);
    }
    animateParticles();

    // Mouse interaction with particles
    heroCanvas.addEventListener('mousemove', (e) => {
        const rect = heroCanvas.getBoundingClientRect();
        const mx = e.clientX - rect.left;
        const my = e.clientY - rect.top;
        particles.forEach(p => {
            const dx = p.x - mx;
            const dy = p.y - my;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 100) {
                p.vx += dx / dist * 0.5;
                p.vy += dy / dist * 0.5;
            }
        });
    });

    // ============ HERO ANIMATIONS ============
    function initHeroAnimations() {
        // Animate title words
        const words = document.querySelectorAll('.hero-title-word');
        words.forEach((word, i) => {
            gsap.to(word, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                delay: 0.3 + i * 0.15,
                ease: 'power3.out'
            });
        });

        // Animate other hero elements
        gsap.from('.hero-badge', { opacity: 0, y: 20, duration: 0.6, delay: 0.1, ease: 'power2.out' });
        gsap.from('.hero-desc', { opacity: 0, y: 20, duration: 0.6, delay: 0.8, ease: 'power2.out' });
        gsap.from('.hero-actions', { opacity: 0, y: 20, duration: 0.6, delay: 1, ease: 'power2.out' });
        gsap.from('.hero-stats', { opacity: 0, y: 20, duration: 0.6, delay: 1.2, ease: 'power2.out' });

        // Typing effect for subtitle
        typeWriter();
    }

    // ============ TYPING EFFECT ============
    function typeWriter() {
        const subtitle = document.getElementById('heroSubtitle');
        const texts = [
            'Where Learning Has A Purpose',
            'Nurturing Brilliance Since 1999',
            'Best CBSE School in Bhilai-Durg',
            'Preparing Children For Life'
        ];
        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typingSpeed = 80;

        function type() {
            const currentText = texts[textIndex];
            if (isDeleting) {
                subtitle.innerHTML = currentText.substring(0, charIndex - 1) + '<span class="cursor"></span>';
                charIndex--;
                typingSpeed = 40;
            } else {
                subtitle.innerHTML = currentText.substring(0, charIndex + 1) + '<span class="cursor"></span>';
                charIndex++;
                typingSpeed = 80;
            }

            if (!isDeleting && charIndex === currentText.length) {
                typingSpeed = 2000;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
                typingSpeed = 500;
            }

            setTimeout(type, typingSpeed);
        }
        type();
    }

    // ============ ANIMATED COUNTERS ============
    function animateCounter(element, target) {
        let current = 0;
        const increment = target / 60;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            element.textContent = Math.floor(current).toLocaleString();
        }, 30);
    }

    // Observe counters
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counters = entry.target.querySelectorAll('[data-target]');
                counters.forEach(counter => {
                    const target = parseInt(counter.dataset.target);
                    animateCounter(counter, target);
                });
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.hero-stats, .achievements-grid').forEach(el => {
        counterObserver.observe(el);
    });

    // ============ NAVIGATION ============
    const nav = document.getElementById('mainNav');
    const navToggle = document.getElementById('navToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    // Scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });

    // Close mobile menu on link click
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            mobileMenu.classList.remove('active');
        });
    });

    // Active nav link on scroll
    const sections = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 200;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.dataset.section === current) {
                link.classList.add('active');
            }
        });
    });

    // Smooth scroll for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                gsap.to(window, {
                    duration: 1,
                    scrollTo: { y: target, offsetY: 80 },
                    ease: 'power3.inOut'
                });
            }
        });
    });

    // ============ GSAP SCROLL ANIMATIONS ============
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    // Section headers
    gsap.utils.toArray('.section-header').forEach(header => {
        gsap.from(header, {
            scrollTrigger: {
                trigger: header,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            y: 50,
            duration: 0.8,
            ease: 'power3.out'
        });
    });

    // About cards
    gsap.utils.toArray('.about-card').forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            y: 60,
            duration: 0.6,
            delay: i * 0.1,
            ease: 'power3.out'
        });
    });

    // Timeline items
    gsap.utils.toArray('.timeline-item').forEach((item, i) => {
        gsap.to(item, {
            scrollTrigger: {
                trigger: item,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            },
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: i * 0.15,
            ease: 'power3.out'
        });
    });

    // Sports cards
    gsap.utils.toArray('.sports-card').forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            y: 80,
            scale: 0.95,
            duration: 0.7,
            delay: i * 0.1,
            ease: 'power3.out'
        });
    });

    // Facility cards
    gsap.utils.toArray('.facility-card').forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            y: 50,
            rotation: 2,
            duration: 0.6,
            delay: i * 0.08,
            ease: 'power3.out'
        });
    });

    // Pastoral cards
    gsap.utils.toArray('.pastoral-card').forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            x: i % 2 === 0 ? -50 : 50,
            duration: 0.6,
            delay: i * 0.1,
            ease: 'power3.out'
        });
    });

    // Gallery items
    gsap.utils.toArray('.gallery-item').forEach((item, i) => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: 'top 90%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            scale: 0.8,
            duration: 0.5,
            delay: i * 0.08,
            ease: 'back.out(1.7)'
        });
    });

    // Leader cards
    gsap.utils.toArray('.leader-card').forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            y: 60,
            duration: 0.7,
            delay: i * 0.15,
            ease: 'power3.out'
        });
    });

    // Achievement cards
    gsap.utils.toArray('.achievement-card').forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            scale: 0.8,
            duration: 0.6,
            delay: i * 0.1,
            ease: 'back.out(1.7)'
        });
    });

    // Schedule items animation
    gsap.utils.toArray('.schedule-item').forEach((item, i) => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: 'top 90%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            x: -30,
            duration: 0.4,
            delay: i * 0.08,
            ease: 'power2.out'
        });
    });

    // Program cards
    gsap.utils.toArray('.program-card').forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            y: 40,
            duration: 0.5,
            delay: i * 0.1,
            ease: 'power3.out'
        });
    });

    // House cards
    gsap.utils.toArray('.house-card').forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            y: 40,
            duration: 0.5,
            delay: i * 0.1,
            ease: 'power3.out'
        });
    });

    // Parallax for section bg text
    gsap.utils.toArray('.section-bg-text').forEach(text => {
        gsap.to(text, {
            scrollTrigger: {
                trigger: text.parentElement,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1
            },
            x: 100,
            ease: 'none'
        });
    });

    // ============ VANILLA TILT ============
    if (typeof VanillaTilt !== 'undefined') {
        VanillaTilt.init(document.querySelectorAll('[data-tilt]'), {
            max: 8,
            speed: 400,
            glare: true,
            'max-glare': 0.15,
            scale: 1.02
        });
    }

    // ============ ACADEMICS TABS ============
    const tabButtons = document.querySelectorAll('.academics-tab');
    const tabPanels = document.querySelectorAll('.academics-panel');

    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const tab = btn.dataset.tab;
            tabButtons.forEach(b => b.classList.remove('active'));
            tabPanels.forEach(p => p.classList.remove('active'));
            btn.classList.add('active');
            document.getElementById(`panel-${tab}`).classList.add('active');
        });
    });

    // ============ GALLERY FILTER ============
    const filterButtons = document.querySelectorAll('.gallery-filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.dataset.filter;
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            galleryItems.forEach(item => {
                if (filter === 'all' || item.dataset.category === filter) {
                    item.classList.remove('hidden');
                    gsap.to(item, { opacity: 1, scale: 1, duration: 0.4, ease: 'power2.out' });
                } else {
                    gsap.to(item, {
                        opacity: 0,
                        scale: 0.8,
                        duration: 0.3,
                        ease: 'power2.in',
                        onComplete: () => item.classList.add('hidden')
                    });
                }
            });
        });
    });

    // ============ CONTACT FORM ============
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = contactForm.querySelector('button[type="submit"]');
        const originalText = btn.innerHTML;
        btn.innerHTML = '<span>Sending...</span>';
        btn.disabled = true;

        setTimeout(() => {
            btn.innerHTML = '<span>✓ Message Sent!</span>';
            btn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
            contactForm.reset();

            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.style.background = '';
                btn.disabled = false;
            }, 3000);
        }, 1500);
    });

    // ============ BACK TO TOP ============
    const backToTop = document.getElementById('backToTop');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });

    backToTop.addEventListener('click', () => {
        gsap.to(window, { duration: 1, scrollTo: 0, ease: 'power3.inOut' });
    });

    // ============ THEME TOGGLE ============
    const themeToggle = document.getElementById('themeToggle');
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);

    themeToggle.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
    });

    // ============ MAGNETIC BUTTONS ============
    document.querySelectorAll('.btn, .nav-cta').forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
        });
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = '';
        });
    });

    // ============ CTA PARTICLES ============
    const ctaParticles = document.getElementById('ctaParticles');
    if (ctaParticles) {
        for (let i = 0; i < 30; i++) {
            const star = document.createElement('div');
            star.style.cssText = `
                position: absolute;
                width: ${Math.random() * 3 + 1}px;
                height: ${Math.random() * 3 + 1}px;
                background: rgba(255,255,255,${Math.random() * 0.3 + 0.1});
                border-radius: 50%;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                animation: particleFloat ${Math.random() * 5 + 3}s ease-in-out infinite ${Math.random() * 3}s;
            `;
            ctaParticles.appendChild(star);
        }
    }

    // ============ TEXT SCRAMBLE EFFECT ============
    class TextScramble {
        constructor(el) {
            this.el = el;
            this.chars = '!<>-_\\/[]{}—=+*^?#________';
            this.update = this.update.bind(this);
        }
        setText(newText) {
            const oldText = this.el.innerText;
            const length = Math.max(oldText.length, newText.length);
            const promise = new Promise(resolve => this.resolve = resolve);
            this.queue = [];
            for (let i = 0; i < length; i++) {
                const from = oldText[i] || '';
                const to = newText[i] || '';
                const start = Math.floor(Math.random() * 40);
                const end = start + Math.floor(Math.random() * 40);
                this.queue.push({ from, to, start, end });
            }
            cancelAnimationFrame(this.frameRequest);
            this.frame = 0;
            this.update();
            return promise;
        }
        update() {
            let output = '';
            let complete = 0;
            for (let i = 0, n = this.queue.length; i < n; i++) {
                let { from, to, start, end, char } = this.queue[i];
                if (this.frame >= end) {
                    complete++;
                    output += to;
                } else if (this.frame >= start) {
                    if (!char || Math.random() < 0.28) {
                        char = this.chars[Math.floor(Math.random() * this.chars.length)];
                        this.queue[i].char = char;
                    }
                    output += char;
                } else {
                    output += from;
                }
            }
            this.el.innerHTML = output;
            if (complete === this.queue.length) {
                this.resolve();
            } else {
                this.frameRequest = requestAnimationFrame(this.update);
                this.frame++;
            }
        }
    }

    // Apply text scramble to section tags on scroll
    const scrambleObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const tag = entry.target.querySelector('.section-tag');
                if (tag && !tag.dataset.scrambled) {
                    tag.dataset.scrambled = 'true';
                    const originalText = tag.textContent;
                    const scrambler = new TextScramble(tag);
                    scrambler.setText(originalText);
                }
            }
        });
    }, { threshold: 0.3 });

    document.querySelectorAll('.section-header').forEach(header => {
        scrambleObserver.observe(header);
    });

    // ============ SMOOTH REVEAL ON SCROLL ============
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => {
        revealObserver.observe(el);
    });

    // ============ TILT RESET ON MOBILE ============
    if ('ontouchstart' in window) {
        document.querySelectorAll('[data-tilt]').forEach(el => {
            el.removeAttribute('data-tilt');
        });
    }

    // ============ PERFORMANCE: Reduce animations on low-end devices ============
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        gsap.globalTimeline.timeScale(0);
        document.querySelectorAll('[data-tilt]').forEach(el => {
            el.removeAttribute('data-tilt');
        });
    }

    // ============ 3D TILT EFFECT FOR HERO ============
    const hero = document.querySelector('.hero');
    if (hero && window.innerWidth > 768) {
        hero.addEventListener('mousemove', (e) => {
            const rect = hero.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;

            document.querySelectorAll('.hero-gradient-orb').forEach((orb, i) => {
                const speed = (i + 1) * 20;
                orb.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
            });
        });
    }

    // ============ RIPPLE EFFECT ON BUTTONS ============
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255,255,255,0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: rippleEffect 0.6s ease-out;
                pointer-events: none;
            `;
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            setTimeout(() => ripple.remove(), 600);
        });
    });

    // Add ripple keyframes
    const rippleStyle = document.createElement('style');
    rippleStyle.textContent = `
        @keyframes rippleEffect {
            to { transform: scale(4); opacity: 0; }
        }
    `;
    document.head.appendChild(rippleStyle);

    // ============ INTERSECTION FADE SECTIONS ============
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.05 });

    document.querySelectorAll('.section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        sectionObserver.observe(section);
    });

    // ============ LIVE CLOCK IN HERO ============
    function updateHeroTime() {
        const now = new Date();
        const options = { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
        const timeStr = now.toLocaleTimeString('en-IN', options);
        const dateStr = now.toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

        let timeEl = document.getElementById('heroTime');
        if (!timeEl) {
            timeEl = document.createElement('div');
            timeEl.id = 'heroTime';
            timeEl.style.cssText = 'position: absolute; top: 100px; right: 24px; z-index: 10; color: rgba(255,255,255,0.5); font-family: var(--font-mono); font-size: 0.8rem; text-align: right;';
            document.querySelector('.hero').appendChild(timeEl);
        }
        timeEl.innerHTML = `${timeStr}<br><span style="font-size:0.7rem">${dateStr}</span>`;
    }
    updateHeroTime();
    setInterval(updateHeroTime, 1000);

    console.log('🎓 Rungta Public School - Next Gen Website Loaded Successfully!');
});
