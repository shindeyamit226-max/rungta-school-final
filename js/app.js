// ============ PEAK QUALITY SPA ENGINE ============
const app = document.getElementById('app');
const navLinks = document.querySelectorAll('.nav-link[data-page]');
let currentPage = '';
let typingInterval = null;
let heroSliderInterval = null;
let lightboxImages = [];
let lightboxIndex = 0;

// Router
function router() {
    const hash = window.location.hash.slice(2) || 'home';
    if (hash === currentPage) return;
    currentPage = hash;
    const page = PAGES[hash];
    if (!page) { window.location.hash = '#/'; return; }

    document.title = page.title || 'Rungta Public School';

    // Kill previous intervals
    if (typingInterval) clearTimeout(typingInterval);
    if (heroSliderInterval) clearInterval(heroSliderInterval);

    // Page transition
    app.style.opacity = '0';
    app.style.transform = 'translateY(20px)';

    setTimeout(() => {
        const heroHTML = (page.tag && page.heading) ?
            `<section class="page-hero"><div class="container"><span class="section-tag">${page.tag}</span><h1 class="page-hero-title">${page.heading}</h1>${page.sub ? `<p class="page-hero-subtitle">${page.sub}</p>` : ''}</div></section>` : '';
        app.innerHTML = heroHTML + page.render();

        window.scrollTo({ top: 0, behavior: 'instant' });
        initPage();

        requestAnimationFrame(() => {
            app.style.transition = 'opacity .5s ease, transform .5s ease';
            app.style.opacity = '1';
            app.style.transform = 'translateY(0)';
        });
    }, 300);

    navLinks.forEach(l => l.classList.toggle('active', l.dataset.page === hash));
    document.getElementById('navToggle').classList.remove('active');
    document.getElementById('mobileMenu').classList.remove('active');
}

function initPage() {
    if (typeof lucide !== 'undefined') lucide.createIcons();

    // Vanilla Tilt
    if (typeof VanillaTilt !== 'undefined') {
        VanillaTilt.init(document.querySelectorAll('[data-tilt]'), { max: 6, speed: 400, glare: true, 'max-glare': 0.12, scale: 1.02 });
    }

    // GSAP Scroll Animations
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
        ScrollTrigger.getAll().forEach(t => t.kill());

        // Stagger reveal
        gsap.utils.toArray('.stagger, .card, .about-card, .facility-card, .pastoral-card, .leader-card, .achievement-card, .house-card, .sports-card, .faq-item, .content-card, .gallery-item, .schedule-item, .program-card, .leader-card, .message-card').forEach((el, i) => {
            gsap.from(el, {
                scrollTrigger: { trigger: el, start: 'top 90%', toggleActions: 'play none none reverse' },
                opacity: 0, y: 40, duration: 0.6, delay: Math.min(i * 0.04, 0.4), ease: 'power3.out'
            });
        });

        // Timeline items
        gsap.utils.toArray('.timeline-item').forEach((item, i) => {
            gsap.to(item, {
                scrollTrigger: { trigger: item, start: 'top 85%', toggleActions: 'play none none reverse' },
                opacity: 1, y: 0, duration: 0.6, delay: i * 0.12, ease: 'power3.out'
            });
        });

        // Parallax
        gsap.utils.toArray('.parallax-bg').forEach(bg => {
            gsap.to(bg, {
                scrollTrigger: { trigger: bg.parentElement, start: 'top bottom', end: 'bottom top', scrub: 1 },
                y: '-20%', ease: 'none'
            });
        });

        // Section bg text parallax
        gsap.utils.toArray('.section-bg-text').forEach(txt => {
            gsap.to(txt, {
                scrollTrigger: { trigger: txt.parentElement, start: 'top bottom', end: 'bottom top', scrub: 1 },
                x: 80, ease: 'none'
            });
        });

        ScrollTrigger.refresh();
    }

    // Animated Counters
    const counterObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.querySelectorAll('[data-target]').forEach(el => {
                    let curr = 0, target = parseInt(el.dataset.target), inc = target / 50;
                    el.classList.add('animated-number');
                    let timer = setInterval(() => {
                        curr += inc;
                        if (curr >= target) { curr = target; clearInterval(timer); }
                        el.textContent = Math.floor(curr).toLocaleString();
                    }, 30);
                });
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    document.querySelectorAll('.hero-stats, .achievements-grid, .counter-group').forEach(el => counterObserver.observe(el));

    // Tabs
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const tab = btn.dataset.tab;
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
            btn.classList.add('active');
            const panel = document.getElementById(`panel-${tab}`);
            if (panel) { panel.classList.add('active'); gsap.from(panel, { opacity: 0, y: 20, duration: 0.4, ease: 'power2.out' }); }
        });
    });

    // Gallery filter
    document.querySelectorAll('.gallery-filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.dataset.filter;
            document.querySelectorAll('.gallery-filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            document.querySelectorAll('.gallery-item').forEach((item, i) => {
                if (filter === 'all' || item.dataset.category === filter) {
                    item.classList.remove('hidden');
                    gsap.fromTo(item, { opacity: 0, scale: 0.85 }, { opacity: 1, scale: 1, duration: 0.4, delay: i * 0.03, ease: 'back.out(1.7)' });
                } else {
                    gsap.to(item, { opacity: 0, scale: 0.85, duration: 0.25, onComplete: () => item.classList.add('hidden') });
                }
            });
        });
    });

    // FAQ accordion
    document.querySelectorAll('.faq-question').forEach(q => {
        q.addEventListener('click', () => {
            const item = q.parentElement;
            const answer = item.querySelector('.faq-answer');
            const isOpen = item.classList.contains('active');
            document.querySelectorAll('.faq-item').forEach(i => { i.classList.remove('active'); i.querySelector('.faq-answer').style.maxHeight = '0'; });
            if (!isOpen) { item.classList.add('active'); answer.style.maxHeight = answer.scrollHeight + 'px'; }
        });
    });

    // Contact form
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', e => {
            e.preventDefault();
            const btn = form.querySelector('button[type="submit"]');
            const orig = btn.innerHTML;
            btn.innerHTML = '<span>Sending...</span>'; btn.disabled = true;
            setTimeout(() => {
                btn.innerHTML = '<span>✓ Message Sent Successfully!</span>';
                btn.style.background = 'linear-gradient(135deg,#41604d,#677b6e)';
                form.reset();
                setTimeout(() => { btn.innerHTML = orig; btn.style.background = ''; btn.disabled = false; }, 3000);
            }, 1500);
        });
    }

    // Lightbox for gallery
    initLightbox();

    // Hero features
    if (currentPage === 'home') initHero();

    // Lazy load images
    initLazyLoad();
}

// ============ LIGHTBOX ============
function initLightbox() {
    lightboxImages = [];
    document.querySelectorAll('.gallery-item').forEach((item, i) => {
        const img = item.querySelector('img');
        const label = item.querySelector('.gallery-label');
        if (img) {
            lightboxImages.push({ src: img.src, caption: label ? label.textContent : '' });
            item.addEventListener('click', () => openLightbox(i));
        }
    });
}

function openLightbox(index) {
    lightboxIndex = index;
    const lightbox = document.getElementById('lightbox');
    const img = document.getElementById('lightboxImg');
    const caption = document.getElementById('lightboxCaption');
    const counter = document.getElementById('lightboxCounter');

    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
    updateLightbox();
}

function closeLightbox() {
    document.getElementById('lightbox').classList.remove('active');
    document.body.style.overflow = '';
}

function updateLightbox() {
    if (!lightboxImages.length) return;
    const data = lightboxImages[lightboxIndex];
    document.getElementById('lightboxImg').src = data.src;
    document.getElementById('lightboxCaption').textContent = data.caption;
    document.getElementById('lightboxCounter').textContent = `${lightboxIndex + 1} / ${lightboxImages.length}`;
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
    document.querySelector('.lightbox-overlay').addEventListener('click', closeLightbox);
    document.querySelector('.lightbox-prev').addEventListener('click', () => { lightboxIndex = (lightboxIndex - 1 + lightboxImages.length) % lightboxImages.length; updateLightbox(); });
    document.querySelector('.lightbox-next').addEventListener('click', () => { lightboxIndex = (lightboxIndex + 1) % lightboxImages.length; updateLightbox(); });
    document.addEventListener('keydown', e => {
        if (!document.getElementById('lightbox').classList.contains('active')) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') { lightboxIndex = (lightboxIndex - 1 + lightboxImages.length) % lightboxImages.length; updateLightbox(); }
        if (e.key === 'ArrowRight') { lightboxIndex = (lightboxIndex + 1) % lightboxImages.length; updateLightbox(); }
    });
});

// ============ HERO SLIDER ============
function initHeroSlider() {
    const slides = document.querySelectorAll('.hero-slide');
    if (slides.length < 2) return;
    let current = 0;
    slides[0].classList.add('active');
    heroSliderInterval = setInterval(() => {
        slides[current].classList.remove('active');
        current = (current + 1) % slides.length;
        slides[current].classList.add('active');
    }, 5000);
}

// ============ LAZY LOADING ============
function initLazyLoad() {
    const lazyObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    img.classList.remove('img-loading');
                }
                lazyObserver.unobserve(img);
            }
        });
    }, { rootMargin: '200px' });

    document.querySelectorAll('img[data-src]').forEach(img => {
        img.classList.add('img-loading');
        lazyObserver.observe(img);
    });
}

// ============ HERO ============
function initHero() {
    initHeroSlider();

    const canvas = document.getElementById('heroCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let particles = [], W, H;

    function resize() { W = canvas.width = canvas.offsetWidth; H = canvas.height = canvas.offsetHeight; }
    resize();
    window.addEventListener('resize', resize);

    class P {
        constructor() { this.reset(); }
        reset() { this.x = Math.random() * W; this.y = Math.random() * H; this.vx = (Math.random() - 0.5) * 0.4; this.vy = (Math.random() - 0.5) * 0.4; this.r = Math.random() * 2 + 0.5; this.o = Math.random() * 0.4 + 0.1; }
        update() { this.x += this.vx; this.y += this.vy; if (this.x < 0 || this.x > W) this.vx *= -1; if (this.y < 0 || this.y > H) this.vy *= -1; }
        draw() { ctx.beginPath(); ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2); ctx.fillStyle = `rgba(255,255,255,${this.o})`; ctx.fill(); }
    }

    const count = Math.min(60, Math.floor(W * H / 20000));
    for (let i = 0; i < count; i++) particles.push(new P());

    function loop() {
        ctx.clearRect(0, 0, W, H);
        particles.forEach(p => { p.update(); p.draw(); });
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x, dy = particles[i].y - particles[j].y, d = Math.sqrt(dx * dx + dy * dy);
                if (d < 120) {
                    ctx.beginPath(); ctx.moveTo(particles[i].x, particles[i].y); ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `rgba(255,255,255,${0.08 * (1 - d / 120)})`; ctx.lineWidth = 0.5; ctx.stroke();
                }
            }
        }
        requestAnimationFrame(loop);
    }
    loop();

    canvas.addEventListener('mousemove', e => {
        const r = canvas.getBoundingClientRect();
        particles.forEach(p => {
            const dx = p.x - (e.clientX - r.left), dy = p.y - (e.clientY - r.top), d = Math.sqrt(dx * dx + dy * dy);
            if (d < 100) { p.vx += dx / d * 0.3; p.vy += dy / d * 0.3; }
        });
    });

    // Animate hero elements
    gsap.utils.toArray('.hero-title-word').forEach((w, i) => gsap.to(w, { opacity: 1, y: 0, duration: 0.8, delay: 0.3 + i * 0.15, ease: 'power3.out' }));
    gsap.from('.floating-badge', { opacity: 0, y: 20, duration: 0.6, delay: 0.1 });
    gsap.from('.hero-desc', { opacity: 0, y: 20, duration: 0.6, delay: 0.8 });
    gsap.from('.hero-actions', { opacity: 0, y: 20, duration: 0.6, delay: 1 });
    gsap.from('.hero-stats', { opacity: 0, y: 20, duration: 0.6, delay: 1.2 });

    // Typing
    const sub = document.getElementById('heroSubtitle');
    if (sub) {
        const texts = ['Where Learning Has A Purpose', 'Nurturing Brilliance Since 1999', 'Best CBSE School in Bhilai-Durg', 'Preparing Children For Life'];
        let ti = 0, ci = 0, del = false, speed = 80;
        function type() {
            if (currentPage !== 'home') return;
            const t = texts[ti];
            sub.innerHTML = del ? t.substring(0, --ci) + '<span class="typewriter-cursor"></span>' : t.substring(0, ++ci) + '<span class="typewriter-cursor"></span>';
            speed = del ? 40 : 80;
            if (!del && ci === t.length) { speed = 2500; del = true; }
            else if (del && ci === 0) { del = false; ti = (ti + 1) % texts.length; speed = 600; }
            typingInterval = setTimeout(type, speed);
        }
        type();
    }
}

// ============ INIT ============
window.addEventListener('hashchange', router);
window.addEventListener('DOMContentLoaded', () => {
    // Preloader with school branding
    const progress = document.getElementById('preloaderProgress');
    let p = 0;
    const interval = setInterval(() => {
        p += Math.random() * 12;
        if (p >= 100) {
            p = 100; clearInterval(interval);
            setTimeout(() => {
                gsap.to('#preloader', { opacity: 0, duration: 0.6, onComplete: () => {
                    document.getElementById('preloader').classList.add('hidden');
                    router();
                }});
            }, 300);
        }
        progress.style.width = p + '%';
    }, 80);

    // Nav scroll
    const nav = document.getElementById('mainNav');
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        nav.classList.toggle('scrolled', scrollY > 50);
        // Hide/show nav on scroll direction
        if (scrollY > 200) {
            nav.style.transform = scrollY > lastScroll && scrollY - lastScroll > 5 ? 'translateY(-100%)' : 'translateY(0)';
        } else {
            nav.style.transform = 'translateY(0)';
        }
        lastScroll = scrollY;
    });

    // Mobile menu
    const toggle = document.getElementById('navToggle');
    const menu = document.getElementById('mobileMenu');
    toggle.addEventListener('click', () => { toggle.classList.toggle('active'); menu.classList.toggle('active'); });
    document.querySelectorAll('.mobile-link').forEach(l => l.addEventListener('click', () => { toggle.classList.remove('active'); menu.classList.remove('active'); }));

    // Back to top
    const btt = document.getElementById('backToTop');
    window.addEventListener('scroll', () => btt.classList.toggle('visible', window.scrollY > 500));
    btt.addEventListener('click', () => { if (typeof gsap !== 'undefined') gsap.to(window, { duration: 1, scrollTo: 0, ease: 'power3.inOut' }); else window.scrollTo({ top: 0, behavior: 'smooth' }); });

    // Theme
    const themeBtn = document.getElementById('themeToggle');
    const saved = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', saved);
    themeBtn.addEventListener('click', () => { const n = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'; document.documentElement.setAttribute('data-theme', n); localStorage.setItem('theme', n); });

    // Cursor
    const dot = document.getElementById('cursorDot'), ring = document.getElementById('cursorRing');
    if (window.innerWidth > 768 && dot && ring) {
        let mx = 0, my = 0, rx = 0, ry = 0;
        document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; dot.style.left = mx + 'px'; dot.style.top = my + 'px'; });
        (function loop() { rx += (mx - rx) * 0.12; ry += (my - ry) * 0.12; ring.style.left = rx + 'px'; ring.style.top = ry + 'px'; requestAnimationFrame(loop); })();
        document.addEventListener('mouseover', e => { if (e.target.closest('a,button,[data-tilt],.nav-link,.btn,.faq-question,.tab-btn,.gallery-item')) { dot.classList.add('active'); ring.classList.add('active'); } });
        document.addEventListener('mouseout', e => { if (e.target.closest('a,button,[data-tilt],.nav-link,.btn,.faq-question,.tab-btn,.gallery-item')) { dot.classList.remove('active'); ring.classList.remove('active'); } });
    }

    // Smooth scroll for internal links
    document.addEventListener('click', e => {
        const link = e.target.closest('a[data-link]');
        if (link) { e.preventDefault(); window.location.hash = link.getAttribute('href'); }
    });

    // Magnetic buttons
    document.addEventListener('mousemove', e => {
        const btn = e.target.closest('.btn, .nav-cta');
        if (btn && window.innerWidth > 768) { const r = btn.getBoundingClientRect(); btn.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.12}px, ${(e.clientY - r.top - r.height / 2) * 0.12}px)`; }
    });
    document.addEventListener('mouseleave', e => { if (e.target.closest('.btn, .nav-cta')) e.target.closest('.btn, .nav-cta').style.transform = ''; });

    // Ripple effect
    document.addEventListener('click', e => {
        const btn = e.target.closest('.btn');
        if (!btn) return;
        const r = btn.getBoundingClientRect(), size = Math.max(r.width, r.height);
        const ripple = document.createElement('span');
        ripple.style.cssText = `position:absolute;width:${size}px;height:${size}px;left:${e.clientX - r.left - size / 2}px;top:${e.clientY - r.top - size / 2}px;background:rgba(255,255,255,.3);border-radius:50%;transform:scale(0);animation:rippleEffect .6s ease-out;pointer-events:none`;
        btn.style.position = 'relative'; btn.style.overflow = 'hidden'; btn.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
    });

    // Scroll progress
    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        const bar = document.getElementById('scrollProgress');
        if (bar) bar.style.width = scrollPercent + '%';
    });
});
