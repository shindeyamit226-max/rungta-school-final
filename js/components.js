/* ============================================
   SHARED COMPONENTS - Nav, Footer, Theme, Cursor
   ============================================ */

function getNavHTML(activePage) {
    return `
    <nav class="nav" id="mainNav">
        <div class="nav-inner">
            <a href="index.html" class="nav-logo">
                <div class="nav-logo-icon"><span>R</span></div>
                <div class="nav-logo-text">
                    <span class="nav-logo-title">Rungta</span>
                    <span class="nav-logo-sub">Public School</span>
                </div>
            </a>
            <div class="nav-links" id="navLinks">
                <a href="index.html" class="nav-link ${activePage==='home'?'active':''}">Home</a>
                <a href="about.html" class="nav-link ${activePage==='about'?'active':''}">About</a>
                <a href="admission.html" class="nav-link ${activePage==='admission'?'active':''}">Admissions</a>
                <a href="academic.html" class="nav-link ${activePage==='academics'?'active':''}">Academics</a>
                <a href="sports.html" class="nav-link ${activePage==='sports'?'active':''}">Sports</a>
                <a href="facilities.html" class="nav-link ${activePage==='facilities'?'active':''}">Facilities</a>
                <a href="gallery.html" class="nav-link ${activePage==='gallery'?'active':''}">Gallery</a>
                <a href="contact.html" class="nav-link ${activePage==='contact'?'active':''}">Contact</a>
            </div>
            <div class="nav-actions">
                <a href="https://myrungta.com/cricket_academy_registration_form_2025/registration_form.php" target="_blank" class="nav-cta">
                    <span>Admissions Open</span>
                    <i data-lucide="arrow-right"></i>
                </a>
                <button class="nav-toggle" id="navToggle" aria-label="Toggle menu">
                    <span></span><span></span><span></span>
                </button>
            </div>
        </div>
    </nav>
    <div class="mobile-menu" id="mobileMenu">
        <div class="mobile-menu-bg"></div>
        <div class="mobile-menu-content">
            <a href="index.html" class="mobile-link">Home</a>
            <a href="about.html" class="mobile-link">About</a>
            <a href="admission.html" class="mobile-link">Admissions</a>
            <a href="academic.html" class="mobile-link">Academics</a>
            <a href="sports.html" class="mobile-link">Sports & Culture</a>
            <a href="facilities.html" class="mobile-link">Facilities</a>
            <a href="pastoralcare.html" class="mobile-link">Pastoral Care</a>
            <a href="gallery.html" class="mobile-link">Gallery</a>
            <a href="achievement.html" class="mobile-link">Achievements</a>
            <a href="faq.html" class="mobile-link">FAQ</a>
            <a href="contact.html" class="mobile-link">Contact</a>
            <a href="https://myrungta.com/cricket_academy_registration_form_2025/registration_form.php" target="_blank" class="mobile-cta">Admissions Open →</a>
        </div>
    </div>`;
}

function getFooterHTML() {
    return `
    <footer class="footer">
        <div class="footer-wave"><svg viewBox="0 0 1440 120" preserveAspectRatio="none"><path d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,60 1440,80 L1440,120 L0,120 Z" fill="currentColor"/></svg></div>
        <div class="container">
            <div class="footer-grid">
                <div class="footer-brand">
                    <div class="footer-logo">
                        <div class="nav-logo-icon"><span>R</span></div>
                        <div><span class="nav-logo-title">Rungta Public School</span><span class="nav-logo-sub">Where Learning Has A Purpose</span></div>
                    </div>
                    <p>Nurturing brilliance and inspiring excellence since 1999. Part of the G.D. Rungta Educational Society.</p>
                    <div class="footer-social">
                        <a href="https://www.facebook.com/rungtapublicschool/" target="_blank" aria-label="Facebook"><i data-lucide="facebook"></i></a>
                        <a href="https://in.linkedin.com/company/rungta-public-school" target="_blank" aria-label="LinkedIn"><i data-lucide="linkedin"></i></a>
                        <a href="https://www.youtube.com/channel/UCLFKF4aEnl0MbTG_n_waYSw" target="_blank" aria-label="YouTube"><i data-lucide="youtube"></i></a>
                    </div>
                </div>
                <div class="footer-links">
                    <h4>Quick Links</h4>
                    <a href="about.html">About RPS</a>
                    <a href="academic.html">Academics</a>
                    <a href="sports.html">Sports & Culture</a>
                    <a href="facilities.html">Facilities</a>
                    <a href="gallery.html">Gallery</a>
                </div>
                <div class="footer-links">
                    <h4>Academics</h4>
                    <a href="curriculum.html">CBSE Curriculum</a>
                    <a href="cambridge.html">Cambridge Curriculum</a>
                    <a href="learningprogram.html">Learning Programs</a>
                    <a href="teachertraining.html">Teacher Training</a>
                </div>
                <div class="footer-links">
                    <h4>Resources</h4>
                    <a href="admission.html">Fee Structure</a>
                    <a href="faq.html">FAQ</a>
                    <a href="achievement.html">Achievements</a>
                    <a href="playschools.html">Play Schools</a>
                    <a href="media.html">Media</a>
                </div>
                <div class="footer-links">
                    <h4>Contact</h4>
                    <a href="tel:+918085111555">+91 808 511 1555</a>
                    <a href="tel:+917882960666">+91 788 296 0666</a>
                    <a href="mailto:info@rungtapublicschool.ac.in">info@rungtapublicschool.ac.in</a>
                    <a href="contact.html">Contact Us</a>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2026 Rungta Public School. All rights reserved.</p>
                <div class="footer-bottom-links">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Service</a>
                    <a href="introduction.html">Mandatory Disclosure</a>
                </div>
            </div>
        </div>
    </footer>
    <button class="back-to-top" id="backToTop" aria-label="Back to top"><i data-lucide="chevron-up"></i></button>
    <button class="theme-toggle" id="themeToggle" aria-label="Toggle theme"><i data-lucide="sun" class="theme-icon-light"></i><i data-lucide="moon" class="theme-icon-dark"></i></button>`;
}

function getCursorHTML() {
    return `<div class="cursor-dot" id="cursorDot"></div><div class="cursor-ring" id="cursorRing"></div>`;
}

function getPageHeader(tag, title, subtitle) {
    return `
    <section class="page-hero">
        <div class="page-hero-bg"></div>
        <div class="container">
            <span class="section-tag">${tag}</span>
            <h1 class="page-hero-title">${title}</h1>
            ${subtitle ? `<p class="page-hero-subtitle">${subtitle}</p>` : ''}
        </div>
    </section>`;
}

// Initialize shared functionality
function initShared() {
    // Inject nav & footer
    const pageName = document.body.dataset.page || 'home';
    const navContainer = document.getElementById('nav-container');
    const footerContainer = document.getElementById('footer-container');
    const cursorContainer = document.getElementById('cursor-container');
    
    if (navContainer) navContainer.innerHTML = getNavHTML(pageName);
    if (footerContainer) footerContainer.innerHTML = getFooterHTML();
    if (cursorContainer) cursorContainer.innerHTML = getCursorHTML();

    // Init Lucide
    if (typeof lucide !== 'undefined') lucide.createIcons();

    // Page headers
    document.querySelectorAll('[data-page-header]').forEach(el => {
        const [tag, title, subtitle] = el.dataset.pageHeader.split('|');
        el.innerHTML = getPageHeader(tag, title, subtitle);
    });

    // Mobile menu
    const navToggle = document.getElementById('navToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            mobileMenu.classList.toggle('active');
        });
        document.querySelectorAll('.mobile-link, .mobile-cta').forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('active');
                mobileMenu.classList.remove('active');
            });
        });
    }

    // Scrolled nav
    const nav = document.getElementById('mainNav');
    window.addEventListener('scroll', () => {
        if (nav) nav.classList.toggle('scrolled', window.scrollY > 50);
    });

    // Back to top
    const btt = document.getElementById('backToTop');
    if (btt) {
        window.addEventListener('scroll', () => btt.classList.toggle('visible', window.scrollY > 500));
        btt.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    }

    // Theme
    const themeToggle = document.getElementById('themeToggle');
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', next);
            localStorage.setItem('theme', next);
        });
    }

    // Custom cursor
    const dot = document.getElementById('cursorDot');
    const ring = document.getElementById('cursorRing');
    if (dot && ring && window.innerWidth > 768) {
        let mx = 0, my = 0, rx = 0, ry = 0;
        document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; dot.style.left = mx+'px'; dot.style.top = my+'px'; });
        (function loop() { rx+=(mx-rx)*0.15; ry+=(my-ry)*0.15; ring.style.left=rx+'px'; ring.style.top=ry+'px'; requestAnimationFrame(loop); })();
        document.querySelectorAll('a,button,[data-tilt],.nav-link,.btn').forEach(el => {
            el.addEventListener('mouseenter', () => { dot.classList.add('active'); ring.classList.add('active'); });
            el.addEventListener('mouseleave', () => { dot.classList.remove('active'); ring.classList.remove('active'); });
        });
    }

    // GSAP scroll reveals
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
        gsap.utils.toArray('.section-header, .animate-in').forEach(el => {
            gsap.from(el, { scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none reverse' }, opacity: 0, y: 50, duration: 0.7, ease: 'power3.out' });
        });
        gsap.utils.toArray('.stagger-item').forEach((el, i) => {
            gsap.from(el, { scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none reverse' }, opacity: 0, y: 40, duration: 0.5, delay: i * 0.08, ease: 'power3.out' });
        });
    }

    // Vanilla Tilt
    if (typeof VanillaTilt !== 'undefined') {
        VanillaTilt.init(document.querySelectorAll('[data-tilt]'), { max: 8, speed: 400, glare: true, 'max-glare': 0.15, scale: 1.02 });
    }

    // Contact form
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', e => {
            e.preventDefault();
            const btn = form.querySelector('button[type="submit"]');
            const orig = btn.innerHTML;
            btn.innerHTML = '<span>Sending...</span>'; btn.disabled = true;
            setTimeout(() => { btn.innerHTML = '<span>✓ Sent!</span>'; btn.style.background='linear-gradient(135deg,#10b981,#059669)'; form.reset(); setTimeout(() => { btn.innerHTML=orig; btn.style.background=''; btn.disabled=false; }, 3000); }, 1500);
        });
    }

    // Accordion / FAQ
    document.querySelectorAll('.faq-question').forEach(q => {
        q.addEventListener('click', () => {
            const item = q.parentElement;
            const answer = item.querySelector('.faq-answer');
            const isOpen = item.classList.contains('active');
            document.querySelectorAll('.faq-item').forEach(i => { i.classList.remove('active'); i.querySelector('.faq-answer').style.maxHeight = '0'; });
            if (!isOpen) { item.classList.add('active'); answer.style.maxHeight = answer.scrollHeight + 'px'; }
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
                    item.style.display = '';
                    if (typeof gsap !== 'undefined') gsap.to(item, { opacity: 1, scale: 1, duration: 0.4 });
                } else {
                    if (typeof gsap !== 'undefined') gsap.to(item, { opacity: 0, scale: 0.8, duration: 0.3, onComplete: () => item.style.display = 'none' });
                    else item.style.display = 'none';
                }
            });
        });
    });

    // Tab switching
    document.querySelectorAll('.academics-tab, .tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const tab = btn.dataset.tab;
            const parent = btn.closest('.tabs-container') || document;
            parent.querySelectorAll('.academics-tab, .tab-btn').forEach(b => b.classList.remove('active'));
            parent.querySelectorAll('.academics-panel, .tab-panel').forEach(p => p.classList.remove('active'));
            btn.classList.add('active');
            const panel = document.getElementById(`panel-${tab}`);
            if (panel) panel.classList.add('active');
        });
    });

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
    document.querySelectorAll('.counter-group').forEach(el => counterObserver.observe(el));
}

document.addEventListener('DOMContentLoaded', initShared);
