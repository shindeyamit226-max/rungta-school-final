// ============ SPA ENGINE ============
const app = document.getElementById('app');
const navLinks = document.querySelectorAll('.nav-link[data-page]');
const mobileLinks = document.querySelectorAll('.mobile-link[data-link]');
let currentPage = '';
let typingInterval = null;

// Router
function router() {
    const hash = window.location.hash.slice(2) || 'home';
    if (hash === currentPage) return;
    currentPage = hash;
    const page = PAGES[hash];
    if (!page) { window.location.hash = '#/'; return; }

    // Update title
    document.title = page.title || 'Rungta Public School';

    // Page transition
    app.classList.remove('page-enter-active');
    app.classList.add('page-enter');

    setTimeout(() => {
        // Render page hero + content
        const heroHTML = (page.tag && page.heading) ?
            `<section class="page-hero"><div class="container"><span class="section-tag">${page.tag}</span><h1 class="page-hero-title">${page.heading}</h1>${page.sub ? `<p class="page-hero-subtitle">${page.sub}</p>` : ''}</div></section>` : '';
        app.innerHTML = heroHTML + page.render();

        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'instant' });

        // Re-init components
        initPage();

        // Animate in
        requestAnimationFrame(() => {
            app.classList.remove('page-enter');
            app.classList.add('page-enter-active');
        });
    }, 200);

    // Update active nav
    navLinks.forEach(l => l.classList.toggle('active', l.dataset.page === hash));
    // Close mobile menu
    document.getElementById('navToggle').classList.remove('active');
    document.getElementById('mobileMenu').classList.remove('active');
}

function initPage() {
    // Lucide icons
    if (typeof lucide !== 'undefined') lucide.createIcons();

    // Vanilla Tilt
    if (typeof VanillaTilt !== 'undefined') {
        VanillaTilt.init(document.querySelectorAll('[data-tilt]'), { max: 8, speed: 400, glare: true, 'max-glare': 0.15, scale: 1.02 });
    }

    // GSAP scroll animations
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
        ScrollTrigger.getAll().forEach(t => t.kill());

        gsap.utils.toArray('.section-header, .content-card, .card, .about-card, .facility-card, .pastoral-card, .leader-card, .achievement-card, .house-card, .sports-card, .faq-item, .message-card, .schedule, .gallery-item, .stagger').forEach((el, i) => {
            gsap.from(el, {
                scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none reverse' },
                opacity: 0, y: 50, duration: 0.6, delay: Math.min(i * 0.05, 0.5), ease: 'power3.out'
            });
        });

        // Timeline items
        gsap.utils.toArray('.timeline-item').forEach((item, i) => {
            gsap.to(item, { scrollTrigger: { trigger: item, start: 'top 85%', toggleActions: 'play none none reverse' }, opacity: 1, y: 0, duration: 0.6, delay: i * 0.15, ease: 'power3.out' });
        });

        // Schedule items
        gsap.utils.toArray('.schedule-item').forEach((item, i) => {
            gsap.from(item, { scrollTrigger: { trigger: item, start: 'top 90%', toggleActions: 'play none none reverse' }, opacity: 0, x: -30, duration: 0.4, delay: i * 0.05, ease: 'power2.out' });
        });

        ScrollTrigger.refresh();
    }

    // Animated counters
    const counterObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.querySelectorAll('[data-target]').forEach(el => {
                    let curr = 0, target = parseInt(el.dataset.target), inc = target / 60;
                    let timer = setInterval(() => { curr += inc; if (curr >= target) { curr = target; clearInterval(timer); } el.textContent = Math.floor(curr).toLocaleString(); }, 30);
                });
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    document.querySelectorAll('.hero-stats, .achievements-grid').forEach(el => counterObserver.observe(el));

    // Tabs
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const tab = btn.dataset.tab;
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
            btn.classList.add('active');
            const panel = document.getElementById(`panel-${tab}`);
            if (panel) panel.classList.add('active');
        });
    });

    // Gallery filter
    document.querySelectorAll('.gallery-filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.dataset.filter;
            document.querySelectorAll('.gallery-filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            document.querySelectorAll('.gallery-item').forEach(item => {
                if (filter === 'all' || item.dataset.category === filter) {
                    item.classList.remove('hidden');
                    if (typeof gsap !== 'undefined') gsap.fromTo(item, { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 0.4 });
                } else {
                    item.classList.add('hidden');
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
            setTimeout(() => { btn.innerHTML = '<span>✓ Message Sent!</span>'; btn.style.background = 'linear-gradient(135deg,#10b981,#059669)'; form.reset(); setTimeout(() => { btn.innerHTML = orig; btn.style.background = ''; btn.disabled = false; }, 3000); }, 1500);
        });
    }

    // Hero typing effect
    if (currentPage === 'home') initHero();
}

// Hero canvas & typing
function initHero() {
    // Particle canvas
    const canvas = document.getElementById('heroCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let particles = [];
    let W, H;

    function resize() { W = canvas.width = canvas.offsetWidth; H = canvas.height = canvas.offsetHeight; }
    resize();
    window.addEventListener('resize', resize);

    class P {
        constructor() { this.reset(); }
        reset() { this.x = Math.random() * W; this.y = Math.random() * H; this.vx = (Math.random() - 0.5) * 0.5; this.vy = (Math.random() - 0.5) * 0.5; this.r = Math.random() * 2 + 0.5; this.o = Math.random() * 0.5 + 0.2; }
        update() { this.x += this.vx; this.y += this.vy; if (this.x < 0 || this.x > W) this.vx *= -1; if (this.y < 0 || this.y > H) this.vy *= -1; }
        draw() { ctx.beginPath(); ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2); ctx.fillStyle = `rgba(0,126,253,${this.o})`; ctx.fill(); }
    }

    const count = Math.min(80, Math.floor(W * H / 15000));
    for (let i = 0; i < count; i++) particles.push(new P());

    function loop() {
        ctx.clearRect(0, 0, W, H);
        particles.forEach(p => { p.update(); p.draw(); });
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x, dy = particles[i].y - particles[j].y, d = Math.sqrt(dx * dx + dy * dy);
                if (d < 150) {
                    ctx.beginPath(); ctx.moveTo(particles[i].x, particles[i].y); ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `rgba(0,126,253,${0.1 * (1 - d / 150)})`; ctx.lineWidth = 0.5; ctx.stroke();
                }
            }
        }
        requestAnimationFrame(loop);
    }
    loop();

    // Hero mouse interaction
    canvas.addEventListener('mousemove', e => {
        const r = canvas.getBoundingClientRect(), mx = e.clientX - r.left, my = e.clientY - r.top;
        particles.forEach(p => { const dx = p.x - mx, dy = p.y - my, d = Math.sqrt(dx * dx + dy * dy); if (d < 100) { p.vx += dx / d * 0.5; p.vy += dy / d * 0.5; } });
    });

    // Animate hero title
    gsap.utils.toArray('.hero-title-word').forEach((w, i) => gsap.to(w, { opacity: 1, y: 0, duration: 0.8, delay: 0.3 + i * 0.15, ease: 'power3.out' }));
    gsap.from('.hero-badge', { opacity: 0, y: 20, duration: 0.6, delay: 0.1 });
    gsap.from('.hero-desc', { opacity: 0, y: 20, duration: 0.6, delay: 0.8 });
    gsap.from('.hero-actions', { opacity: 0, y: 20, duration: 0.6, delay: 1 });
    gsap.from('.hero-stats', { opacity: 0, y: 20, duration: 0.6, delay: 1.2 });

    // Typing effect
    const sub = document.getElementById('heroSubtitle');
    if (sub) {
        const texts = ['Where Learning Has A Purpose', 'Nurturing Brilliance Since 1999', 'Best CBSE School in Bhilai-Durg', 'Preparing Children For Life'];
        let ti = 0, ci = 0, del = false, speed = 80;
        function type() {
            if (currentPage !== 'home') return;
            const t = texts[ti];
            sub.innerHTML = del ? t.substring(0, --ci) + '<span class="cursor"></span>' : t.substring(0, ++ci) + '<span class="cursor"></span>';
            speed = del ? 40 : 80;
            if (!del && ci === t.length) { speed = 2000; del = true; }
            else if (del && ci === 0) { del = false; ti = (ti + 1) % texts.length; speed = 500; }
            typingInterval = setTimeout(type, speed);
        }
        type();
    }
}

// ============ INIT ============
window.addEventListener('hashchange', router);
window.addEventListener('DOMContentLoaded', () => {
    // Preloader
    const progress = document.getElementById('preloaderProgress');
    let p = 0;
    const interval = setInterval(() => {
        p += Math.random() * 15;
        if (p >= 100) { p = 100; clearInterval(interval); setTimeout(() => { document.getElementById('preloader').classList.add('hidden'); router(); }, 400); }
        progress.style.width = p + '%';
    }, 100);

    // Nav scroll
    const nav = document.getElementById('mainNav');
    window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 50));

    // Mobile menu
    const toggle = document.getElementById('navToggle');
    const menu = document.getElementById('mobileMenu');
    toggle.addEventListener('click', () => { toggle.classList.toggle('active'); menu.classList.toggle('active'); });
    document.querySelectorAll('.mobile-link').forEach(l => l.addEventListener('click', () => { toggle.classList.remove('active'); menu.classList.remove('active'); }));

    // Scroll progress bar
    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        const progressBar = document.getElementById('scrollProgress');
        if (progressBar) progressBar.style.width = scrollPercent + '%';
    });

    // Back to top
    const btt = document.getElementById('backToTop');
    window.addEventListener('scroll', () => btt.classList.toggle('visible', window.scrollY > 500));
    btt.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

    // Theme
    const themeBtn = document.getElementById('themeToggle');
    const saved = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', saved);
    themeBtn.addEventListener('click', () => { const n = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'; document.documentElement.setAttribute('data-theme', n); localStorage.setItem('theme', n); });

    // Cursor
    const dot = document.getElementById('cursorDot'), ring = document.getElementById('cursorRing');
    if (window.innerWidth > 768) {
        let mx = 0, my = 0, rx = 0, ry = 0;
        document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; dot.style.left = mx + 'px'; dot.style.top = my + 'px'; });
        (function loop() { rx += (mx - rx) * 0.15; ry += (my - ry) * 0.15; ring.style.left = rx + 'px'; ring.style.top = ry + 'px'; requestAnimationFrame(loop); })();
        document.addEventListener('mouseover', e => { if (e.target.closest('a,button,[data-tilt],.nav-link,.btn,.faq-question,.tab-btn')) { dot.classList.add('active'); ring.classList.add('active'); } });
        document.addEventListener('mouseout', e => { if (e.target.closest('a,button,[data-tilt],.nav-link,.btn,.faq-question,.tab-btn')) { dot.classList.remove('active'); ring.classList.remove('active'); } });
    }

    // Smooth scroll for internal links
    document.addEventListener('click', e => {
        const link = e.target.closest('a[data-link]');
        if (link) { e.preventDefault(); window.location.hash = link.getAttribute('href'); }
    });

    // Magnetic buttons
    document.addEventListener('mousemove', e => {
        const btn = e.target.closest('.btn, .nav-cta');
        if (btn) { const r = btn.getBoundingClientRect(); btn.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.15}px, ${(e.clientY - r.top - r.height / 2) * 0.15}px)`; }
    });
    document.addEventListener('mouseout', e => { if (e.target.closest('.btn, .nav-cta')) e.target.closest('.btn, .nav-cta').style.transform = ''; });

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
});
