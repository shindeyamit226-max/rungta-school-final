// All page templates with FULL real content
const PAGES = {};

// ============ HOME ============
PAGES['home'] = {
    title: 'Rungta Public School | Best CBSE School in Bhilai-Durg',
    meta: 'Where learning has a purpose. Best CBSE School in Bhilai-Durg.',
    render: () => `
    <section class="hero" id="hero">
        <div class="hero-slider">
            <div class="hero-slide"><img src="images/slider/slide11.jpg" alt="RPS Campus"><div class="hero-slide-overlay"></div></div>
            <div class="hero-slide"><img src="images/slider/slide12.jpg" alt="RPS Sports"><div class="hero-slide-overlay"></div></div>
            <div class="hero-slide"><img src="images/slider/slide13.jpg" alt="RPS Activities"><div class="hero-slide-overlay"></div></div>
            <div class="hero-slide"><img src="images/slider/slide14.jpg" alt="RPS Events"><div class="hero-slide-overlay"></div></div>
            <div class="hero-slide"><img src="images/slider/slide02.jpg" alt="RPS Campus"><div class="hero-slide-overlay"></div></div>
            <div class="hero-slide"><img src="images/slider/slide03.jpg" alt="RPS Building"><div class="hero-slide-overlay"></div></div>
        </div>
        <canvas class="hero-canvas" id="heroCanvas"></canvas>
        <div class="hero-orb hero-orb-1"></div><div class="hero-orb hero-orb-2"></div><div class="hero-orb hero-orb-3"></div>
        <div class="hero-content hero-glass">
            <div class="floating-badge"><span class="hero-badge-dot"></span><span>Admissions Open 2026-27</span></div>
            <h1 class="hero-title"><span class="hero-title-line"><span class="hero-title-word">Rungta</span></span><span class="hero-title-line"><span class="hero-title-word">Public </span><span class="hero-title-word hero-title-accent">School</span></span></h1>
            <p class="hero-subtitle" id="heroSubtitle"></p>
            <p class="hero-desc">Where learning has a purpose. Nurturing brilliance and inspiring excellence since 1999. Best CBSE School in Bhilai-Durg.</p>
            <div style="display:flex;gap:16px;justify-content:center;margin-bottom:2rem;align-items:center;flex-wrap:wrap"><img src="images/cbse.png" alt="CBSE" style="height:50px;opacity:.9"><img src="images/cambridge.png" alt="Cambridge" style="height:50px;opacity:.9"></div>
            <div class="hero-actions"><a href="#/about" class="btn btn-primary" data-link><span>Explore RPS</span><i data-lucide="arrow-down"></i></a><a href="https://myrungta.com/cricket_academy_registration_form_2025/registration_form.php" target="_blank" class="btn btn-secondary"><span>Register Now</span><i data-lucide="external-link"></i></a></div>
            <div class="hero-stats"><div class="hero-stat"><span class="hero-stat-number" data-target="4000">0</span><span class="hero-stat-plus">+</span><span class="hero-stat-label">Students</span></div><div class="hero-stat-divider"></div><div class="hero-stat"><span class="hero-stat-number" data-target="25">0</span><span class="hero-stat-plus">+</span><span class="hero-stat-label">Years Legacy</span></div><div class="hero-stat-divider"></div><div class="hero-stat"><span class="hero-stat-number" data-target="100">0</span><span class="hero-stat-plus">%</span><span class="hero-stat-label">Results</span></div></div>
        </div>
        <div class="hero-scroll"><div class="hero-scroll-mouse"><div class="hero-scroll-wheel"></div></div><span>Scroll to explore</span></div>
        <div class="hero-marquee"><div class="hero-marquee-track"><span>CBSE Affiliated ★ Cambridge Curriculum ★ Smart Classes ★ Sports Excellence ★ Holistic Development ★ Boarding Facilities ★ 4000+ Students ★ Since 1999 ★</span><span>CBSE Affiliated ★ Cambridge Curriculum ★ Smart Classes ★ Sports Excellence ★ Holistic Development ★ Boarding Facilities ★ 4000+ Students ★ Since 1999 ★</span></div></div>
    </section>
    <section class="section"><div class="section-bg-text">ABOUT</div><div class="container">
        <div class="section-header"><span class="section-tag">Who We Are</span><h2 class="section-title">We Nurture <em>Brilliance.</em> We Inspire <em>Excellence.</em></h2></div>
        <div class="about-grid">
            <div class="about-card stagger" data-tilt><div style="width:100%;height:160px;border-radius:12px;overflow:hidden;margin-bottom:1rem"><img src="images/about/community.jpg" style="width:100%;height:100%;object-fit:cover" alt="RPS Community"></div><h3>Our Legacy</h3><p>Beginning humbly in 1999 with just 240 students, the G.D. Rungta Educational Society has grown to proudly educate more than 4,000 students from across the country.</p></div>
            <div class="about-card stagger" data-tilt><div class="about-card-icon"><i data-lucide="target"></i></div><h3>Our Mission</h3><p>We believe that when students are encouraged to explore their interests, dreams, and inner motivations, they create meaningful stories, ideas, and expressions.</p></div>
            <div class="about-card stagger" data-tilt><div class="about-card-icon"><i data-lucide="heart"></i></div><h3>Our Values</h3><ul class="about-values"><li><i data-lucide="check-circle"></i> Respect for all</li><li><i data-lucide="check-circle"></i> Perseverance</li><li><i data-lucide="check-circle"></i> Selfless Service</li></ul></div>
        </div>
    </div></section>
    <section class="section" style="background:var(--bg-alt)"><div class="section-bg-text">PROGRAMS</div><div class="container">
        <div class="section-header"><span class="section-tag">What We Offer</span><h2 class="section-title">Key <em>Highlights</em></h2></div>
        <div class="card-grid">
            <a href="#/academics" data-link class="card stagger" data-tilt><div class="card-icon">📚</div><h3>Academics</h3><p>Comprehensive curriculum, student-centric teaching, and qualified faculty ensuring competitive success and lifelong learning.</p></a>
            <a href="#/sports" data-link class="card stagger" data-tilt><div class="card-icon">⚽</div><h3>Sports & Culture</h3><p>Equal emphasis on Sports and Cultural activities. Football, Cricket, Basketball, Music, Dance, and more.</p></a>
            <a href="#/facilities" data-link class="card stagger" data-tilt><div class="card-icon">🔬</div><h3>Facilities</h3><p>Well-equipped labs, library with 5,000+ books, smart classrooms, medical facility, and more.</p></a>
            <a href="#/pastoral" data-link class="card stagger" data-tilt><div class="card-icon">🏠</div><h3>Pastoral Care</h3><p>Safe, secure, caring boarding environment with AC accommodation and dedicated house parents.</p></a>
        </div>
    </div></section>
    <section class="cta-section"><div class="container"><div class="cta-card"><div class="cta-content"><h2>Ready to Join the Rungta Family?</h2><p>Admissions open for Playgroup to IX & XI for both CBSE and Cambridge curricula.</p><div class="cta-actions"><a href="https://myrungta.com/cricket_academy_registration_form_2025/registration_form.php" target="_blank" class="btn btn-primary btn-lg"><span>Register Online</span><i data-lucide="arrow-right"></i></a><a href="tel:+919229344486" class="btn btn-outline btn-lg"><i data-lucide="phone"></i><span>Call 9229344486</span></a></div></div></div></div></section>`
};

// ============ ABOUT ============
PAGES['about'] = {
    title: 'About RPS | Rungta Public School',
    tag: 'About Us', heading: 'About Rungta Public School', sub: 'Nurturing Brilliance. Inspiring Excellence.',
    render: () => `
    <section class="section"><div class="container">
        <div class="section-header"><span class="section-tag">Our Community</span><h2 class="section-title">The <em>Rungta</em> Legacy</h2></div>
        <div class="content-card"><p>Our community is built upon the legacy of the G.D. Rungta Educational Society. Beginning humbly in 1999 with an intake of just 240 students, we have experienced phenomenal growth. Today, our various institutions proudly educate more than 4,000 students from across the country, all pursuing their educational goals within the Rungta family.</p></div>
        <div class="about-grid" style="margin-top:2rem">
            <div class="about-card stagger" data-tilt><div class="about-card-icon"><i data-lucide="target"></i></div><h3>Our Mission</h3><p>We believe that when students are encouraged to explore their interests, dreams, and inner motivations, they create meaningful stories, ideas, and expressions. This helps them understand themselves better, think creatively, and communicate with confidence.</p></div>
            <div class="about-card stagger" data-tilt><div class="about-card-icon"><i data-lucide="heart"></i></div><h3>Our Values</h3><ul class="about-values"><li><i data-lucide="check-circle"></i> Respect for all</li><li><i data-lucide="check-circle"></i> Perseverance</li><li><i data-lucide="check-circle"></i> Selfless Service</li></ul></div>
            <div class="about-card stagger" data-tilt><div class="about-card-icon"><i data-lucide="map-pin"></i></div><h3>Location & Weather</h3><p>Rungta Knowledge City, Kohka-Kurud Road, Bhilai (C.G.) - 490024</p><div class="about-loc-item"><i data-lucide="plane"></i><span>40km from Swami Vivekanand Airport, Raipur</span></div><div class="about-loc-item"><i data-lucide="train-front"></i><span>10-12km from Durg Junction</span></div></div>
        </div>
        <div class="section-header" style="margin-top:4rem"><h3 class="section-title" style="font-size:1.8rem">Our Journey</h3></div>
        <div class="timeline">
            <div class="timeline-line"></div>
            <div class="timeline-item"><div class="timeline-dot"></div><div class="timeline-content"><span class="timeline-year">1999</span><h4>The Beginning</h4><p>Started with just 240 students under G.D. Rungta Educational Society</p></div></div>
            <div class="timeline-item"><div class="timeline-dot"></div><div class="timeline-content"><span class="timeline-year">2005</span><h4>CBSE Affiliation</h4><p>Received CBSE affiliation (No. 3330201), establishing academic credibility</p></div></div>
            <div class="timeline-item"><div class="timeline-dot"></div><div class="timeline-content"><span class="timeline-year">2015</span><h4>Cambridge Curriculum</h4><p>Introduced Cambridge International Curriculum (Reg. No. IA036)</p></div></div>
            <div class="timeline-item"><div class="timeline-dot"></div><div class="timeline-content"><span class="timeline-year">2020</span><h4>Digital Transformation</h4><p>Smart classes and digital learning infrastructure upgraded</p></div></div>
            <div class="timeline-item"><div class="timeline-dot"></div><div class="timeline-content"><span class="timeline-year">2026</span><h4>4000+ Strong</h4><p>Over 4,000 students from across the country</p></div></div>
        </div>
    </div></section>`
};

// ============ INTRODUCTION ============
PAGES['introduction'] = {
    title: 'Introduction | Rungta Public School',
    tag: 'Introduction', heading: 'Introduction', sub: 'School Board, Affiliations, Rules & Regulations',
    render: () => `
    <section class="section"><div class="container">
        <div class="section-header"><span class="section-tag">Introduction</span><h2 class="section-title">About <em>Rungta Public School</em></h2></div>
        <div class="content-card"><p>Rungta Public School is part of the distinguished G.D. Rungta Educational Society, an institution dedicated to shaping futures through quality education. Our journey began in 1999 with just 240 students. Today, the Rungta educational community has grown and now proudly comprises more than 4,000 students from diverse parts of the country.</p></div>
        <div class="content-card" id="rps-schoolboard"><h3>School Board & Affiliations</h3><ul class="content-list"><li>Central Board of Secondary Education (CBSE): Affiliation No. 3330201</li><li>Cambridge Assessment International Education (CAIE): Registration No. IA036</li></ul></div>
        <div class="content-card" id="whyrungta"><h3>Why Rungta?</h3><p>At RPS, education is not a standard path—it's a personalized journey powered by aspiration. Your child is an individual learner paired with a team of passionate, dedicated mentors who provide exceptional instruction and genuine care. We support a strong value system and excellent discipline with good infrastructure. This environment delivers an outstanding range of opportunities that actively nurture the child, preparing them not just for exams, but for life.</p></div>
        <div class="content-card" id="childwouldbe"><h3>What Your Child Would Be?</h3><ul class="content-list"><li>High performance with a balanced personality</li><li>Responsible, caring, and grounded in strong values</li><li>Achieving excellence through disciplined consistency</li><li>Future-Ready for Leadership and Personal Fulfillment</li></ul></div>
        <div class="content-card" id="rps-general"><h3>General Instructions</h3><p>A successful Rungta education relies on a strong partnership, requiring parental respect for the system and learning.</p><ul class="content-list"><li>Parents should not enter classrooms or approach teachers during class hours. Please schedule all meetings in advance.</li><li>For security reasons, requesting half-day leave is strongly discouraged. In emergencies only, provide a written request approved by both the Principal and the Class Teacher.</li><li>Please avoid criticizing the teacher or school in the presence of your child, as this can cause them to lose respect for their teacher.</li><li>All official communication from Parents/Guardians must be addressed to the Head and routed via the Class Teacher.</li><li>The Name, Admission Number, Class/Section, and House of the pupil must be clearly marked on all personal belongings.</li><li>Parents must check the Student Handbook every day for instructions and homework.</li><li>Encourage your child to take interest in academics, co-curricular activities, sports & community service.</li><li>Any change in address or telephone number must be immediately intimated to the school office.</li><li>To be eligible for the Final Examination, students must complete a minimum of 75% attendance.</li><li>Students must attend school in a neat, well-ironed, complete uniform. Boys are required to have a proper haircut.</li><li>Parents are advised to give pocket money judiciously. Students must not possess more than ₹50/-.</li><li>Valuable articles (gold/diamond jewellery, cosmetics) and electronic gadgets (mobiles, iPods, cameras) are strictly prohibited.</li></ul></div>
        <div class="content-card" id="rps-rules"><h3>Rules & Regulations</h3><ul class="content-list"><li>Every student must carry the School Handbook and Identity Card to school every day.</li><li>Non-bus commuters should arrive at school at least 5 minutes before the Home Room period begins.</li><li>Students must be neat, clean, and properly dressed at all times.</li><li>Students should take utmost care of school property.</li><li>Students must not bring books or magazines other than textbooks, reference books, or library books without prior permission.</li><li>Lending or borrowing money or personal items is strictly not allowed.</li><li>Students must exhibit polite and respectful behaviour at all times.</li><li>Bursting crackers, throwing colours, spraying ink inside school premises are strictly prohibited.</li><li>Students must participate in community services, school festivals, and functions.</li><li>Students must not remain absent on special working days.</li><li>Any student found using unfair means in tests will receive zero marks in that subject.</li><li>The School Mess provides pure vegetarian meals. Parents are requested not to send non-vegetarian food.</li></ul></div>
        <div class="content-card" id="rps-discipline"><h3>Discipline Codes</h3><p>The following practices are unacceptable and will invite strict disciplinary action:</p><ul class="content-list"><li>Disfiguring or damaging school property</li><li>Bunking School and classes</li><li>Bringing electronic gadgets to school</li><li>Disrespecting teachers or staff</li><li>Bullying or ragging</li><li>Using unfair means in examinations</li></ul></div>
        <div class="content-card" id="childcare"><h3>Child Care and Protection Policy</h3><p>Rungta Public School is committed to the safety and well-being of every child. We have a comprehensive child protection policy that ensures a safe, nurturing, and supportive environment for all students.</p></div>
    </div></section>`
};

// ============ LEADERSHIP ============
PAGES['leadership'] = {
    title: 'Leadership | Rungta Public School',
    tag: 'Leadership', heading: 'Our Leadership', sub: 'Guiding the institution with vision and commitment',
    render: () => `
    <section class="section"><div class="container">
        <div class="section-header"><span class="section-tag">GDR Society</span><h2 class="section-title">The GDR Society — <em>Once a Spark, Now a Beacon</em></h2></div>
        <div class="content-card"><p>Every family takes pride in certain inherent values that are passed down through generations. For the Rungta family, philanthropy has been that enduring legacy — a virtue upheld and strengthened over time.</p><p>Shri Rai Saheb Richhpalji Rungta, the distinguished scion of the family, along with Shri Ghanshyam Dasji Rungta, served as the torchbearers of this noble tradition. With sincerity and dedication, they initiated the mission of providing quality education to the people of Durg, Bhilai, and neighbouring regions. Their vision was to spark educational reform and uplift this part of the country. That small spark they ignited has now grown into a guiding beacon.</p><p>The GD Rungta Educational Society began its journey in 1999 with an initial intake of just 240 students. Today, the institution now nurtures more than 4,000 students from different parts of the country and across the globe.</p></div>
        <div class="section-header" style="margin-top:3rem"><h2 class="section-title">Board of <em>Governors</em></h2></div>
        <div class="leadership-grid">
            <div class="leader-card stagger" data-tilt><div class="leader-avatar"><img src="images/leadership/Sanjay_Rungta_Sir.jpg" alt="Sanjay Rungta" style="width:100%;height:100%;object-fit:cover;border-radius:50%"><div class="leader-avatar-ring"></div></div><h3>Sanjay Rungta</h3><span class="leader-role">Chairman</span></div>
            <div class="leader-card stagger" data-tilt><div class="leader-avatar"><img src="images/leadership/Dr_Saket_Rungta_Sir.jpg" alt="Dr. Saket Rungta" style="width:100%;height:100%;object-fit:cover;border-radius:50%"><div class="leader-avatar-ring"></div></div><h3>Dr. Saket Rungta</h3><span class="leader-role">Member (Finance)</span></div>
            <div class="leader-card stagger" data-tilt><div class="leader-avatar"><img src="images/leadership/Harsha_Rungta_Mam.jpg" alt="Harsha Rungta" style="width:100%;height:100%;object-fit:cover;border-radius:50%"><div class="leader-avatar-ring"></div></div><h3>Harsha Rungta</h3><span class="leader-role">Member</span></div>
            <div class="leader-card stagger" data-tilt><div class="leader-avatar"><img src="images/leadership/Pallavi_Rungta_Goel_Mam.jpg" alt="Pallavi Rungta Geol" style="width:100%;height:100%;object-fit:cover;border-radius:50%"><div class="leader-avatar-ring"></div></div><h3>Pallavi Rungta Geol</h3><span class="leader-role">Member</span></div>
            <div class="leader-card stagger" data-tilt><div class="leader-avatar"><img src="images/leadership/Manas_Chatterjee_sir.jpg" alt="Manas Chatterjee" style="width:100%;height:100%;object-fit:cover;border-radius:50%"><div class="leader-avatar-ring"></div></div><h3>Manas Chatterjee</h3><span class="leader-role">Member</span></div>
            <div class="leader-card stagger" data-tilt><div class="leader-avatar"><img src="images/leadership/Vijay_Kumar_Gupta_sir.jpg" alt="Vijay Kumar Gupta" style="width:100%;height:100%;object-fit:cover;border-radius:50%"><div class="leader-avatar-ring"></div></div><h3>Vijay Kumar Gupta</h3><span class="leader-role">Member</span></div>
            <div class="leader-card stagger" data-tilt><div class="leader-avatar"><img src="images/leadership/Chaturbhuj_Rathi_Sir.jpg" alt="Chaturbhuj Rathi" style="width:100%;height:100%;object-fit:cover;border-radius:50%"><div class="leader-avatar-ring"></div></div><h3>Mr. Chaturbhuj Rathi</h3><span class="leader-role">Member</span></div>
            <div class="leader-card stagger" data-tilt><div class="leader-avatar"><img src="images/leadership/Arvind_Kumar_Jain_Sir.jpg" alt="Arvind Kumar Jain" style="width:100%;height:100%;object-fit:cover;border-radius:50%"><div class="leader-avatar-ring"></div></div><h3>Arvind Kumar Jain</h3><span class="leader-role">Member</span></div>
            <div class="leader-card stagger" data-tilt><div class="leader-avatar"><img src="images/leadership/Dr_Rajkumar_Agrawal_Sir.jpg" alt="Dr. Rajkumar Agrawal" style="width:100%;height:100%;object-fit:cover;border-radius:50%"><div class="leader-avatar-ring"></div></div><h3>Dr. Rajkumar Agrawal</h3><span class="leader-role">Member</span></div>
            <div class="leader-card stagger" data-tilt><div class="leader-avatar"><img src="images/leadership/Dr_Jawahar_Surisetty_Sir.jpg" alt="Dr. Jawahar Surisetty" style="width:100%;height:100%;object-fit:cover;border-radius:50%"><div class="leader-avatar-ring"></div></div><h3>Dr. Jawahar Surisetty</h3><span class="leader-role">Member</span></div>
            <div class="leader-card stagger" data-tilt><div class="leader-avatar"><img src="images/leadership/Md_Shajid_Ansari_Sir.jpg" alt="Dr. Shajid Ansari" style="width:100%;height:100%;object-fit:cover;border-radius:50%"><div class="leader-avatar-ring"></div></div><h3>Dr. Shajid Ansari</h3><span class="leader-role">Member</span></div>
        </div>
        <div class="section-header" style="margin-top:3rem"><h2 class="section-title">Principal's <em>Team</em></h2></div>
        <div class="leadership-grid">
            <div class="leader-card stagger" data-tilt><div class="leader-avatar"><img src="images/leadership/vice_principal_deepti_singh.jpg" alt="Mrs. Deepti Singh" style="width:100%;height:100%;object-fit:cover;border-radius:50%"><div class="leader-avatar-ring"></div></div><h3>Mrs. Deepti Singh</h3><span class="leader-role">Principal</span></div>
            <div class="leader-card stagger" data-tilt><div class="leader-avatar"><img src="images/leadership/himanshu.jpg" alt="Himanshu Shekhar Pandey" style="width:100%;height:100%;object-fit:cover;border-radius:50%"><div class="leader-avatar-ring"></div></div><h3>Himanshu Shekhar Pandey</h3><span class="leader-role">Senior Wing Coordinator</span></div>
            <div class="leader-card stagger" data-tilt><div class="leader-avatar"><img src="images/leadership/arpita.jpg" alt="Arpita Ghosh" style="width:100%;height:100%;object-fit:cover;border-radius:50%"><div class="leader-avatar-ring"></div></div><h3>Arpita Ghosh</h3><span class="leader-role">Middle Wing Coordinator</span></div>
            <div class="leader-card stagger" data-tilt><div class="leader-avatar"><img src="images/leadership/garima.jpg" alt="Garima Sharma" style="width:100%;height:100%;object-fit:cover;border-radius:50%"><div class="leader-avatar-ring"></div></div><h3>Garima Sharma</h3><span class="leader-role">Primary Wing Coordinator</span></div>
            <div class="leader-card stagger" data-tilt><div class="leader-avatar"><img src="images/leadership/soni-patani.jpg" alt="Sonu Patni" style="width:100%;height:100%;object-fit:cover;border-radius:50%"><div class="leader-avatar-ring"></div></div><h3>Sonu Patni</h3><span class="leader-role">Pre-Primary Coordinator</span></div>
        </div>
    </div></section>`
};

// ============ CHAIRMAN ============
PAGES['chairman'] = {
    title: "Chairman's Message | Rungta Public School",
    tag: "Chairman's Message", heading: 'Sanjay Rungta', sub: 'Chairman, G.D. Rungta Educational Society',
    render: () => `<section class="section"><div class="container"><div class="message-card"><div class="message-avatar"><img src="images/leadership/Sanjay_Rungta_Sir.jpg" alt="Sanjay Rungta" style="width:120px;height:120px;object-fit:cover;border-radius:50%"></div><div class="message-content"><h3>Sanjay Rungta</h3><span class="leader-role">Chairman</span><p>Dear Parents and Students,</p><p>It gives me immense pleasure to welcome you to Rungta Public School. Since our inception in 1999, we have been committed to providing quality education that goes beyond textbooks. Our vision is to create responsible global citizens who are equipped with the knowledge, skills, and values to make a positive impact on society.</p><p>We believe that every child is unique and has the potential to excel. At RPS, we provide a nurturing environment where students can explore their interests, develop their talents, and grow into confident individuals.</p><p>I invite you to be a part of the Rungta family and embark on a journey of learning, discovery, and excellence.</p></div></div></div></section>`
};

// ============ DIRECTOR ============
PAGES['director'] = {
    title: "Director's Message | Rungta Public School",
    tag: "Director's Message", heading: 'Saket Rungta', sub: 'Director, Rungta Public School',
    render: () => `<section class="section"><div class="container"><div class="message-card"><div class="message-avatar"><img src="images/leadership/Sanjay_Rungta_Sir.jpg" alt="Sanjay Rungta" style="width:120px;height:120px;object-fit:cover;border-radius:50%"></div><div class="message-content"><h3>Saket Rungta</h3><span class="leader-role">Director</span><p>Dear Rungta Family,</p><p>At Rungta Public School, we are committed to creating an educational ecosystem that prepares students for the challenges of the 21st century. Our focus is on innovation, technology integration, and developing critical thinking skills.</p><p>We continuously invest in modern infrastructure, teacher training, and curriculum development. The Cambridge International program is a testament to our commitment to providing global educational standards.</p><p>Together, let us inspire the next generation of leaders, thinkers, and innovators.</p></div></div></div></section>`
};

// ============ PRINCIPAL ============
PAGES['principal'] = {
    title: "Principal's Message | Rungta Public School",
    tag: "Principal's Message", heading: 'Mrs. Deepti Singh', sub: 'Principal, Rungta Public School',
    render: () => `<section class="section"><div class="container"><div class="message-card"><div class="message-avatar"><img src="images/leadership/vice_principal_deepti_singh.jpg" alt="Mrs. Deepti Singh" style="width:120px;height:120px;object-fit:cover;border-radius:50%"></div><div class="message-content"><h3>Mrs. Deepti Singh</h3><span class="leader-role">Principal</span><p>Dear Parents and Students,</p><p>Education is not just about acquiring knowledge; it is about building character, developing values, and preparing for life. At Rungta Public School, we are dedicated to providing a holistic education that nurtures the mind, body, and spirit of every child.</p><p>Our team of qualified and passionate educators works tirelessly to create engaging learning experiences that inspire curiosity and foster a love for learning. We believe in individual attention and ensuring that every child reaches their full potential.</p><p>I look forward to partnering with you in your child's educational journey.</p></div></div></div></section>`
};

// ============ SMC ============
PAGES['smc'] = {
    title: 'School Management Committee | Rungta Public School',
    tag: 'SMC', heading: 'School Management Committee', sub: 'Governance and oversight',
    render: () => `<section class="section"><div class="container"><div class="section-header"><span class="section-tag">Governance</span><h2 class="section-title">School Management <em>Committee</em></h2></div><div class="content-card"><p>The School Management Committee (SMC) comprises experienced educators, parents, and community members who work together to ensure the school maintains its high standards of education and student welfare. The committee oversees academic quality, infrastructure development, student welfare policies, financial transparency, and compliance with CBSE and government regulations.</p></div></div></section>`
};

// ============ ADMISSION ============
PAGES['admission'] = {
    title: 'Admissions | Rungta Public School',
    tag: 'Admissions', heading: 'Admission & Registration', sub: 'Admissions open for Playgroup to IX & XI',
    render: () => `
    <section class="section"><div class="container">
        <div class="section-header"><span class="section-tag">Admission Procedure</span><h2 class="section-title">How to <em>Apply</em></h2></div>
        <div class="content-card"><h3>Admission Procedure & Registration</h3><ul class="content-list"><li>Admission is open for classes Nursery to IX & XI for the session 2025-26.</li><li>The Admission cum Registration Form could be obtained from the school office on payment of Rs. 600/-.</li><li>Registration would be done only after submitting the duly filled form with all required documents and on payment of Rs. 1000/-.</li></ul></div>
        <div class="content-card"><h3>Age Criteria</h3><ul class="content-list"><li><strong>Nursery:</strong> Minimum Age as on 1st April, 2025 - 3½ years</li><li><strong>UKG:</strong> Minimum Age as on 1st April, 2025 - 4½ years</li><li><strong>Class I:</strong> Minimum Age as on 1st April, 2025 - 5½ years</li><li><strong>II-IX & XI:</strong> As per the TC issued by the previous school</li></ul></div>
        <div class="content-card"><h3>Admission Procedure</h3><ul class="content-list"><li>As per the RTE Act, there will be no written test for admission to classes Nursery to VIII.</li><li>For classes Nursery, UKG & I, admission will be granted on the basis of Age Criteria.</li><li>For classes II – IX, admission will be considered on the basis of the previous 3 years Annual Marks Statement.</li><li>Class XI admissions will be on the basis of the performance in class X Board examination.</li><li>All admissions are considered purely on merit after an informal interaction.</li></ul></div>
        <div class="content-card"><h3>Documents for Registration</h3><ul class="content-list"><li>Duly filled in Admission-cum-Registration Form alongwith photographs</li><li>Birth Certificate of the Candidate</li><li>Aadhar Card of the Candidate</li><li>Previous two years Annual Marks Statement and current year's Half yearly Exams Marks Statement</li><li>Countersigned original Transfer Certificate of the previous school</li><li>For NRI and Foreign Nationals: Passport copy, Visa, Police Clearance certificate</li></ul></div>
        <div class="content-card"><h3>Documents for Admission</h3><ul class="content-list"><li>Countersigned Original Transfer Certificate of the Previous school</li><li>Photocopy of the Annual Exam Mark Statement of the Previous class</li><li>Two passport size photographs in School Uniform (RPS)</li><li>Caste Certificate (SC/ST/OBC), if applicable</li><li>Medical Certificate in the prescribed proforma</li><li>Duly Filled in Hostel Form (in duplicate), if applicable</li><li>Bank Account details of the child</li></ul></div>
        <div class="content-card"><h3>Withdrawal & Refund</h3><ul class="content-list"><li>Parents must give 1 month's notice in writing and obtain acknowledgement from the school.</li><li>A student who drops out in the middle of the term forfeits the claim of fees.</li><li>Caution Money will be refunded after deducting all dues.</li><li>Transfer Certificate will be issued not before 15 days after receiving the application.</li><li>School Fees once Paid are not Refundable.</li><li>For withdrawal of transport services, one month's written notice is essential.</li></ul></div>
        <div class="content-card" id="fees"><h3>Fee Structure</h3><p>For detailed fee structure for Indian students (CBSE), please download the fee structure document.</p><a href="https://rungtapublicschool.ac.in/downloads/RPS_fee_2026.pdf" target="_blank" class="btn btn-primary" style="margin-top:1rem"><span>Download Fee Structure</span><i data-lucide="download"></i></a></div>
        <div class="content-card"><h3>Admission Enquiry</h3><p>For admission enquiries, please fill the online enquiry form or contact us directly.</p><div style="display:flex;gap:1rem;flex-wrap:wrap;margin-top:1rem"><a href="https://docs.google.com/forms/d/e/1FAIpQLSedSXjN7MioScm3T0EMpqvWgIH7-OtNX12MlHQwE-sWs4urVg/viewform" target="_blank" class="btn btn-primary"><span>Admission Enquiry Form</span><i data-lucide="external-link"></i></a><a href="https://myrungta.com/cricket_academy_registration_form_2025/registration_form.php" target="_blank" class="btn btn-secondary"><span>Register Online</span><i data-lucide="external-link"></i></a><a href="tel:+919229344486" class="btn btn-secondary"><i data-lucide="phone"></i><span>Call 9229344486</span></a></div></div>
    </div></section>`
};

// ============ ACADEMICS ============
PAGES['academics'] = {
    title: 'Academics | Rungta Public School',
    tag: 'Academics', heading: 'Academic Program', sub: 'Comprehensive curriculum and qualified faculty',
    render: () => `
    <section class="section"><div class="container">
        <div class="section-header"><span class="section-tag">Academic Excellence</span><h2 class="section-title">Our Academic <em>Programs</em></h2></div>
        <div class="tabs">
            <button class="tab-btn active" data-tab="cbse"><i data-lucide="book-open"></i> CBSE</button>
            <button class="tab-btn" data-tab="cambridge"><i data-lucide="globe"></i> Cambridge</button>
            <button class="tab-btn" data-tab="semester"><i data-lucide="calendar"></i> Semester</button>
            <button class="tab-btn" data-tab="smart"><i data-lucide="monitor"></i> Smart Classes</button>
            <button class="tab-btn" data-tab="assess"><i data-lucide="clipboard-check"></i> Assessment</button>
        </div>
        <div class="tab-panel active" id="panel-cbse"><div class="tab-content"><div><h3>CBSE Curriculum</h3><p>Our CBSE curriculum follows the National Education Framework with emphasis on holistic development. Classes from Playgroup to XII with activity-based learning, STEM education, and competitive exam preparation.</p><ul class="content-list"><li>Playgroup to Class XII</li><li>Activity-based Learning</li><li>STEM Education Focus</li><li>Competitive Exam Preparation</li><li>Regular Parent-Teacher Interaction</li></ul></div><div style="background:linear-gradient(135deg,#7e694c,#a7766f);border-radius:var(--radius-lg);padding:2.5rem;color:white;text-align:center"><div style="font-size:3rem;margin-bottom:1rem">📚</div><h4>Classes Offered</h4><div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin-top:1rem"><span style="padding:8px;background:rgba(255,255,255,.15);border-radius:8px;font-size:.85rem">Playgroup</span><span style="padding:8px;background:rgba(255,255,255,.15);border-radius:8px;font-size:.85rem">Nursery</span><span style="padding:8px;background:rgba(255,255,255,.15);border-radius:8px;font-size:.85rem">I</span><span style="padding:8px;background:rgba(255,255,255,.15);border-radius:8px;font-size:.85rem">II</span><span style="padding:8px;background:rgba(255,255,255,.15);border-radius:8px;font-size:.85rem">III</span><span style="padding:8px;background:rgba(255,255,255,.15);border-radius:8px;font-size:.85rem">IV</span><span style="padding:8px;background:rgba(255,255,255,.15);border-radius:8px;font-size:.85rem">V</span><span style="padding:8px;background:rgba(255,255,255,.15);border-radius:8px;font-size:.85rem">VI</span><span style="padding:8px;background:rgba(255,255,255,.15);border-radius:8px;font-size:.85rem">VII</span><span style="padding:8px;background:rgba(255,255,255,.15);border-radius:8px;font-size:.85rem">VIII</span><span style="padding:8px;background:rgba(255,255,255,.15);border-radius:8px;font-size:.85rem">IX</span><span style="padding:8px;background:rgba(255,255,255,.15);border-radius:8px;font-size:.85rem">X</span><span style="padding:8px;background:rgba(255,255,255,.15);border-radius:8px;font-size:.85rem">XI</span><span style="padding:8px;background:rgba(255,255,255,.15);border-radius:8px;font-size:.85rem">XII</span></div></div></div></div>
        <div class="tab-panel" id="panel-cambridge"><div class="tab-content"><div><h3>Cambridge International</h3><p>Globally recognized curriculum developing confident, responsible, and innovative learners. Critical thinking focus with international standards and research-based approach.</p></div><div style="background:linear-gradient(135deg,#7e694c,#a7766f);border-radius:var(--radius-lg);padding:2.5rem;color:white;text-align:center"><div style="font-size:3rem;margin-bottom:1rem">🌍</div><h4>Global Recognition</h4><p style="color:rgba(255,255,255,.8)">Cambridge qualifications recognized by universities worldwide.</p></div></div></div>
        <div class="tab-panel" id="panel-semester"><div class="tab-content"><div><h3>Academic Semester</h3><p>The academic year is divided into two semesters with periodic assessments, ensuring continuous learning and evaluation throughout the year.</p></div><div style="background:linear-gradient(135deg,#7e694c,#a7766f);border-radius:var(--radius-lg);padding:2.5rem;color:white;text-align:center"><div style="font-size:3rem;margin-bottom:1rem">📅</div><h4>Two Semesters</h4></div></div></div>
        <div class="tab-panel" id="panel-smart"><div class="tab-content"><div><h3>Smart Classes</h3><p>Technology-enabled classrooms with interactive whiteboards, digital content, and multimedia resources that make learning engaging and effective.</p></div><div style="background:linear-gradient(135deg,#7e694c,#a7766f);border-radius:var(--radius-lg);padding:2.5rem;color:white;text-align:center"><div style="font-size:3rem;margin-bottom:1rem">💻</div><h4>Digital Learning</h4></div></div></div>
        <div class="tab-panel" id="panel-assess"><div class="tab-content"><div><h3>Assessment & Evaluation</h3><p>Continuous and comprehensive evaluation focusing on holistic development. Portfolio-based evaluation with skill-based testing and progress tracking.</p></div><div style="background:linear-gradient(135deg,#7e694c,#a7766f);border-radius:var(--radius-lg);padding:2.5rem;color:white;text-align:center"><div style="font-size:3rem;margin-bottom:1rem">📊</div><h4>100% Results</h4></div></div></div>
        <div class="content-card" style="margin-top:2rem"><h3>Streams at +2 Level</h3><p>The school has both Science (Engineering & Medicine) & Commerce streams at the Senior Secondary level.</p></div>
    </div></section>`
};

// ============ CURRICULUM ============
PAGES['curriculum'] = {
    title: 'CBSE Curriculum | Rungta Public School',
    tag: 'CBSE', heading: 'CBSE Curriculum', sub: 'Affiliation No. 3330201',
    render: () => `<section class="section"><div class="container"><div class="section-header"><span class="section-tag">CBSE</span><h2 class="section-title">CBSE <em>Curriculum</em></h2></div><div class="content-card"><h3>About CBSE at RPS</h3><p>The Central Board of Secondary Education (CBSE) curriculum at Rungta Public School provides a comprehensive, student-centric education framework. We offer classes from Playgroup to Class XII, covering all streams - Science, Commerce, and Humanities. The medium of Instruction is English.</p></div><div class="about-grid" style="margin-top:2rem"><div class="about-card stagger" data-tilt><div class="about-card-icon"><i data-lucide="flask"></i></div><h3>Science Stream</h3><p>Physics, Chemistry, Mathematics/Biology with practical laboratory sessions and competitive exam preparation.</p></div><div class="about-card stagger" data-tilt><div class="about-card-icon"><i data-lucide="briefcase"></i></div><h3>Commerce Stream</h3><p>Accountancy, Business Studies, Economics with real-world case studies and practical applications.</p></div></div><div class="content-card" style="margin-top:2rem"><h3>Scholarships</h3><p>The school gives scholarships to meritorious students of classes XI & XII. Apart from that there are various concessions given to the different categories of child.</p></div></div></section>`
};

// ============ CAMBRIDGE ============
PAGES['cambridge'] = {
    title: 'Cambridge | Rungta Public School',
    tag: 'Cambridge', heading: 'Cambridge International', sub: 'Registration No. IA036',
    render: () => `<section class="section"><div class="container"><div class="section-header"><span class="section-tag">Cambridge</span><h2 class="section-title">Cambridge <em>International</em></h2></div><div class="content-card"><h3>Why Cambridge?</h3><p>The Cambridge International Curriculum prepares students for life, helping them develop an informed curiosity and lasting passion for learning. It is recognized by leading universities and employers worldwide.</p></div><div class="about-grid" style="margin-top:2rem"><div class="about-card stagger" data-tilt><div class="about-card-icon"><i data-lucide="globe"></i></div><h3>Global Recognition</h3><p>Cambridge qualifications are recognized by universities and employers worldwide.</p></div><div class="about-card stagger" data-tilt><div class="about-card-icon"><i data-lucide="brain"></i></div><h3>Critical Thinking</h3><p>Emphasizes deep understanding, critical thinking, and problem-solving skills.</p></div><div class="about-card stagger" data-tilt><div class="about-card-icon"><i data-lucide="award"></i></div><h3>International Standards</h3><p>Rigorous academic standards benchmarked against the best education systems globally.</p></div></div></div></section>`
};

// ============ LEARNING ============
PAGES['learning'] = {
    title: 'Learning Programs | Rungta Public School',
    tag: 'Learning', heading: 'Learning Programs', sub: 'Supporting every learner',
    render: () => `<section class="section"><div class="container"><div class="section-header"><span class="section-tag">Learning Support</span><h2 class="section-title">Holistic <em>Learning Programs</em></h2></div><div class="about-grid"><div class="about-card stagger" data-tilt><div class="about-card-icon"><i data-lucide="heart-handshake"></i></div><h3>Learning Support</h3><p>Personalized attention and support for students with different learning needs. Dedicated resource rooms and trained special educators ensure every child receives the help they need.</p></div><div class="about-card stagger" data-tilt><div class="about-card-icon"><i data-lucide="languages"></i></div><h3>English as a Second Language</h3><p>Comprehensive ESL program to help students develop fluency in English through immersive activities and conversation practice.</p></div><div class="about-card stagger" data-tilt><div class="about-card-icon"><i data-lucide="sparkles"></i></div><h3>The Holistic Learning Program</h3><p>Beyond academics — developing the whole child through arts, sports, leadership programs, community service, and life skills education.</p></div></div></div></section>`
};

// ============ TRAINING ============
PAGES['training'] = {
    title: "Teacher's Training | Rungta Public School",
    tag: 'Training', heading: "Teacher's Training", sub: 'Continuous professional development',
    render: () => `<section class="section"><div class="container"><div class="section-header"><span class="section-tag">Professional Development</span><h2 class="section-title">Teacher's <em>Training</em></h2></div><div class="content-card"><h3>Our Commitment to Excellence</h3><p>At Rungta Public School, we believe that great teachers create great students. We invest heavily in continuous professional development to ensure our educators are equipped with the latest teaching methodologies and technologies. The teacher-taught ratio at RPS is 1:10.</p></div><div class="about-grid" style="margin-top:2rem"><div class="about-card stagger" data-tilt><div class="about-card-icon"><i data-lucide="graduation-cap"></i></div><h3>Workshops & Seminars</h3><p>Regular workshops on modern teaching techniques, classroom management, and subject-specific training.</p></div><div class="about-card stagger" data-tilt><div class="about-card-icon"><i data-lucide="laptop"></i></div><h3>Technology Training</h3><p>Hands-on training in smart class technology, digital content creation, and educational software.</p></div><div class="about-card stagger" data-tilt><div class="about-card-icon"><i data-lucide="book-open"></i></div><h3>Cambridge Training</h3><p>Specialized training for Cambridge curriculum teachers to maintain international teaching standards.</p></div></div></div></section>`
};

// ============ SPORTS ============
PAGES['sports'] = {
    title: 'Sports & Culture | Rungta Public School',
    tag: 'Sports & Culture', heading: 'Sports & Culture', sub: 'Equal emphasis on Sports and Cultural activities',
    render: () => `
    <section class="section"><div class="container">
        <div class="section-header"><span class="section-tag">Beyond Academics</span><h2 class="section-title">Sports & <em>Culture</em></h2><p class="section-desc">Active involvement in Sports and Cultural activities is an essential part of schooling. The school believes that Academics, Sports & Cultural Activities are complimentary to each other in realizing the child's full potential.</p></div>
        <div class="sports-showcase">
            <div class="sports-card stagger" data-tilt><div class="sports-card-bg" style="background:url('images/sports/games.jpg') center/cover"><div class="sports-card-pattern"></div></div><div class="sports-card-content"><div class="sports-card-icon">⚽</div><h3>Games & Sports</h3><p>Football, Cricket, Badminton, Basketball, Volleyball, Table Tennis, Athletics, Taekwondo, Horse Riding, Chess and a Toddler's pool.</p></div></div>
            <div class="sports-card stagger" data-tilt><div class="sports-card-bg" style="background:url('images/sports/arts.jpg') center/cover"><div class="sports-card-pattern"></div></div><div class="sports-card-content"><div class="sports-card-icon">🎭</div><h3>Performing Arts</h3><p>Music – Vocal and Instrumental, Dance – Indian and Western, Drawing, Painting, Block Printing, Embroidery, Needle Work and Craftwork.</p></div></div>
            <div class="sports-card stagger" data-tilt><div class="sports-card-bg" style="background:url('images/sports/tournament.jpg') center/cover"><div class="sports-card-pattern"></div></div><div class="sports-card-content"><div class="sports-card-icon">🏆</div><h3>Tournament & Meets</h3><p>Children participate in various Tournaments and Cultural and Sports Meets at Intra and Inter School level.</p></div></div>
            <div class="sports-card stagger" data-tilt><div class="sports-card-bg" style="background:url('images/sports/festival.jpg') center/cover"><div class="sports-card-pattern"></div></div><div class="sports-card-content"><div class="sports-card-icon">🎪</div><h3>Festivals & Celebrations</h3><p>The school is secular in nature. All major festivals are enacted and celebrated to inculcate Unity in Diversity.</p></div></div>
            <div class="sports-card stagger" data-tilt><div class="sports-card-bg" style="background:url('images/sports/trip.jpg') center/cover"><div class="sports-card-pattern"></div></div><div class="sports-card-content"><div class="sports-card-icon">🚌</div><h3>Field Trips & Excursions</h3><p>Children are taken on field trips to various industrial, production, and manufacturing units as Learning Beyond the Classroom.</p></div></div>
            <div class="sports-card stagger" data-tilt><div class="sports-card-bg" style="background:url('images/sports/house.jpg') center/cover"><div class="sports-card-pattern"></div></div><div class="sports-card-content"><div class="sports-card-icon">🏠</div><h3>House System</h3><p>All children from Class Ist onwards are divided into four houses: Kalam, Raman, Tagore, and Teresa.</p></div></div>
        </div>
        <div class="content-card" style="margin-top:2rem"><h3>Community Service</h3><p>Rungta Public School actively works to share its joy during festivals like Diwali and Christmas by engaging in acts of social responsibility. This includes sharing sweets, gifts, and essential items with less privileged children and senior citizens, instilling a strong sense of compassion and community service in the students.</p></div>
        <div class="content-card"><h3>Exchange Program</h3><p>School exchange programs offer students the opportunity to live in another city, state, or country and become a part of its local culture. This experience enables students to immerse themselves in a new environment, staying with a host family, attending a local school, and engaging with the community.</p></div>
        <div class="section-header" style="margin-top:3rem"><h3 class="section-title" style="font-size:1.8rem">Our Four Houses</h3></div>
        <div class="houses-grid">
            <div class="house-card stagger kalam" data-tilt><div class="house-color" style="background:#f13023"></div><h4>🔴 Kalam House</h4><p>Courage & Determination</p></div>
            <div class="house-card stagger raman" data-tilt><div class="house-color" style="background:#007efd"></div><h4>🔵 Raman House</h4><p>Wisdom & Loyalty</p></div>
            <div class="house-card stagger tagore" data-tilt><div class="house-color" style="background:#41604d"></div><h4>🟢 Tagore House</h4><p>Growth & Harmony</p></div>
            <div class="house-card stagger teresa" data-tilt><div class="house-color" style="background:#ffc107"></div><h4>🟡 Teresa House</h4><p>Energy & Excellence</p></div>
        </div>
    </div></section>`
};

// ============ FACILITIES ============
PAGES['facilities'] = {
    title: 'Facilities | Rungta Public School',
    tag: 'Facilities', heading: 'Our Facilities', sub: 'World-class infrastructure',
    render: () => `
    <section class="section"><div class="container">
        <div class="section-header"><span class="section-tag">Infrastructure</span><h2 class="section-title">World-Class <em>Facilities</em></h2></div>
        <div class="facilities-grid">
            <div class="facility-card facility-card-large stagger" data-tilt style="background:url('images/facilities/lab.jpg') center/cover;color:white;min-height:300px;position:relative"><div style="position:absolute;inset:0;background:rgba(0,0,0,.65);border-radius:var(--radius-lg)"></div><div style="position:relative;z-index:1"><div class="facility-icon">🔬</div><h3>Laboratories</h3><p>Well-equipped laboratories for General Science, Physics, Chemistry, Biology, Computer Science, and Mathematics. Wi-Fi enabled campus supports IT needs.</p></div></div>
            <div class="facility-card stagger" data-tilt style="background:url('images/facilities/library.jpg') center/cover;color:white;position:relative;min-height:220px"><div style="position:absolute;inset:0;background:rgba(0,0,0,.65);border-radius:var(--radius-lg)"></div><div style="position:relative;z-index:1"><div class="facility-icon">📚</div><h3>Library</h3><p>Over 5,000 books, journals, and magazines. A vital center for reading and independent learning.</p></div></div>
            <div class="facility-card stagger" data-tilt style="background:url('images/facilities/health.jpg') center/cover;color:white;position:relative;min-height:220px"><div style="position:absolute;inset:0;background:rgba(0,0,0,.65);border-radius:var(--radius-lg)"></div><div style="position:relative;z-index:1"><div class="facility-icon">🏥</div><h3>Health & Medical</h3><p>Qualified nurse for First Aid. Regular medical check-ups with comprehensive records.</p></div></div>
            <div class="facility-card stagger" data-tilt style="background:url('images/facilities/security.jpg') center/cover;color:white;position:relative;min-height:220px"><div style="position:absolute;inset:0;background:rgba(0,0,0,.65);border-radius:var(--radius-lg)"></div><div style="position:relative;z-index:1"><div class="facility-icon">🛡️</div><h3>Safety & Security</h3><p>24/7 CCTV Surveillance. Qualified Drivers, Conductors, and Lady Attendants for transport safety.</p></div></div>
            <div class="facility-card stagger" data-tilt style="background:url('images/facilities/food.jpg') center/cover;color:white;position:relative;min-height:220px"><div style="position:absolute;inset:0;background:rgba(0,0,0,.65);border-radius:var(--radius-lg)"></div><div style="position:relative;z-index:1"><div class="facility-icon">🍽️</div><h3>Food & Nutrition</h3><p>Menu planned by Food Committee with Nutritionist. In-season vegetables, whole grains, lower fat choices.</p></div></div>
            <div class="facility-card stagger" data-tilt style="background:url('images/facilities/tuck.jpg') center/cover;color:white;position:relative;min-height:220px"><div style="position:absolute;inset:0;background:rgba(0,0,0,.65);border-radius:var(--radius-lg)"></div><div style="position:relative;z-index:1"><div class="facility-icon">🛍️</div><h3>Tuck Shop</h3><p>Dedicated facility for boarders with notebooks, textbooks, stationery, and daily-use articles.</p></div></div>
            <div class="facility-card stagger" data-tilt style="background:url('images/facilities/laundry.jpeg') center/cover;color:white;position:relative;min-height:220px"><div style="position:absolute;inset:0;background:rgba(0,0,0,.65);border-radius:var(--radius-lg)"></div><div style="position:relative;z-index:1"><div class="facility-icon">👕</div><h3>Laundry</h3><p>Free laundry service for boarders. Clean laundry delivered to rooms twice a week.</p></div></div>
        </div>
    </div></section>`
};

// ============ PASTORAL ============
PAGES['pastoral'] = {
    title: 'Pastoral Care | Rungta Public School',
    tag: 'Pastoral Care', heading: 'Pastoral Care', sub: 'Home away from home',
    render: () => `
    <section class="section"><div class="container">
        <div class="section-header"><span class="section-tag">Boarding Life</span><h2 class="section-title">Pastoral <em>Care</em></h2><p class="section-desc">At RPS, we provide a safe, secure, caring, and stress-free environment, which will make our boarders feel that they are in a home away from home.</p></div>
        <div class="content-card"><h3>Boarding Houses</h3><p>There is a separate boarding house for Boys and Girls with AC accommodation from Grade VI onwards. Two to four students share a room which has an attached washroom. Students follow a set routine in the morning and evening. After-school hours are used for learning with academic support from teachers who are available on campus. Boarders can look forward to the entire range of sporting activities like basketball, football, cricket, badminton, table tennis, horse riding and athletics along with other activities like music, dance, art & craft.</p></div>
        <div class="pastoral-features">
            <div class="pastoral-card stagger" data-tilt><div class="pastoral-card-number">01</div><div class="pastoral-card-icon">💬</div><h3>Communication</h3><p>Parents are advised to contact the school office or write to the Head of School directly. Boarders can meet Parents/Guardians only on specified days. Contact: Reception 0788-666 0600, Boy's House Parent: 9229344418, Girl's House Parent: 9229155516.</p></div>
            <div class="pastoral-card stagger" data-tilt><div class="pastoral-card-number">02</div><div class="pastoral-card-icon">🍎</div><h3>Food Policy</h3><p>RPS is a Pure Veg campus. The Food Committee meets once a week to plan the menu with the Nutritionist. Foods include in-season vegetables, whole grains, and lower fat choices. Separate boarding houses for NRI and Foreign students cater to Non-Vegetarian/Continental/Thai/Chinese cuisine.</p></div>
            <div class="pastoral-card stagger" data-tilt><div class="pastoral-card-number">03</div><div class="pastoral-card-icon">🙏</div><h3>Spiritual & Religious Life</h3><p>A student has the freedom to worship according to their denomination and faith in their room. Certain religious festivals are celebrated to develop awareness and respect for different faiths. Students are not allowed to fast.</p></div>
            <div class="pastoral-card stagger" data-tilt><div class="pastoral-card-number">04</div><div class="pastoral-card-icon">💝</div><h3>Emotional Support</h3><p>The Boarding facility takes care of the child's social, emotional and spiritual needs. House Parents and staff take special care of the Boarders. They are committed to the cause of the child.</p></div>
            <div class="pastoral-card stagger" data-tilt><div class="pastoral-card-number">05</div><div class="pastoral-card-icon">👨‍🏫</div><h3>House Masters & Dames</h3><p>Both Boys and Girls Hostel have a separate House Parent who provides support and personalized attention. House-parents regularly inspect rooms and common areas, ensure neatness and personal hygiene, and provide a nurturing environment. They keep in touch with parents via email or telephonically.</p></div>
        </div>
        <div class="section-header" style="margin-top:3rem"><h3 class="section-title" style="font-size:1.8rem">Daily Schedule for Boarders</h3></div>
        <div class="schedule">
            <h3>Weekday Schedule</h3>
            <div class="schedule-item"><span class="schedule-time">05:30 AM</span><span class="schedule-activity">Wake–up bell & Freshening up</span></div>
            <div class="schedule-item"><span class="schedule-time">05:45 AM</span><span class="schedule-activity">Jogging / Yoga / Gym</span></div>
            <div class="schedule-item"><span class="schedule-time">06:15 AM</span><span class="schedule-activity">Shower & change into school uniform</span></div>
            <div class="schedule-item"><span class="schedule-time">07:10 AM</span><span class="schedule-activity">Milk time</span></div>
            <div class="schedule-item"><span class="schedule-time">07:30 AM</span><span class="schedule-activity">Home room / Assembly</span></div>
            <div class="schedule-item"><span class="schedule-time">07:55 AM</span><span class="schedule-activity">Lessons begin</span></div>
            <div class="schedule-item"><span class="schedule-time">09:15 AM</span><span class="schedule-activity">Breakfast</span></div>
            <div class="schedule-item"><span class="schedule-time">09:35 AM</span><span class="schedule-activity">Lessons continue</span></div>
            <div class="schedule-item"><span class="schedule-time">11:30 AM</span><span class="schedule-activity">Recess</span></div>
            <div class="schedule-item"><span class="schedule-time">01:30 PM</span><span class="schedule-activity">School gets over</span></div>
            <div class="schedule-item"><span class="schedule-time">01:45 PM</span><span class="schedule-activity">Lunch for Boarders</span></div>
            <div class="schedule-item"><span class="schedule-time">02:15 PM</span><span class="schedule-activity">Rest</span></div>
            <div class="schedule-item"><span class="schedule-time">03:30 PM</span><span class="schedule-activity">Supervised Study</span></div>
            <div class="schedule-item"><span class="schedule-time">05:00 PM</span><span class="schedule-activity">Tea & Snacks / Sports & Games</span></div>
            <div class="schedule-item"><span class="schedule-time">07:00 PM</span><span class="schedule-activity">Supervised Prep Hours</span></div>
            <div class="schedule-item"><span class="schedule-time">08:30 PM</span><span class="schedule-activity">Dinner</span></div>
            <div class="schedule-item"><span class="schedule-time">09:00 PM</span><span class="schedule-activity">TV time / Self study</span></div>
            <div class="schedule-item"><span class="schedule-time">10:00 PM</span><span class="schedule-activity">Lights Out</span></div>
        </div>
        <div class="schedule" style="margin-top:2rem">
            <h3>Saturday Schedule</h3>
            <div class="schedule-item"><span class="schedule-time">06:00 AM</span><span class="schedule-activity">Wake–up bell & Freshening up</span></div>
            <div class="schedule-item"><span class="schedule-time">06:00 AM</span><span class="schedule-activity">Jogging / Yoga / Gym</span></div>
            <div class="schedule-item"><span class="schedule-time">07:10 AM</span><span class="schedule-activity">Milk time</span></div>
            <div class="schedule-item"><span class="schedule-time">07:40 AM</span><span class="schedule-activity">Weekly Test</span></div>
            <div class="schedule-item"><span class="schedule-time">09:00 AM</span><span class="schedule-activity">Activity / Sports Block at School</span></div>
            <div class="schedule-item"><span class="schedule-time">01:30 PM</span><span class="schedule-activity">Lunch for Boarders</span></div>
            <div class="schedule-item"><span class="schedule-time">02:00 PM</span><span class="schedule-activity">Rest / Personal Work / Leisure</span></div>
            <div class="schedule-item"><span class="schedule-time">05:00 PM</span><span class="schedule-activity">Tea & Snacks</span></div>
            <div class="schedule-item"><span class="schedule-time">05:30 PM</span><span class="schedule-activity">Games & Sports</span></div>
            <div class="schedule-item"><span class="schedule-time">07:00 PM</span><span class="schedule-activity">Evening Prep</span></div>
            <div class="schedule-item"><span class="schedule-time">08:30 PM</span><span class="schedule-activity">Dinner</span></div>
            <div class="schedule-item"><span class="schedule-time">10:00 PM</span><span class="schedule-activity">Lights Out</span></div>
        </div>
        <div class="schedule" style="margin-top:2rem">
            <h3>Sunday & Holiday Schedule</h3>
            <div class="schedule-item"><span class="schedule-time">07:00 AM</span><span class="schedule-activity">Wake–up bell</span></div>
            <div class="schedule-item"><span class="schedule-time">08:30 AM</span><span class="schedule-activity">Breakfast</span></div>
            <div class="schedule-item"><span class="schedule-time">09:30 AM</span><span class="schedule-activity">Personal time / House chores</span></div>
            <div class="schedule-item"><span class="schedule-time">10:00 AM</span><span class="schedule-activity">Library / Prep</span></div>
            <div class="schedule-item"><span class="schedule-time">11:00 AM</span><span class="schedule-activity">Activity & Project</span></div>
            <div class="schedule-item"><span class="schedule-time">12:00 PM</span><span class="schedule-activity">Entertainment</span></div>
            <div class="schedule-item"><span class="schedule-time">01:30 PM</span><span class="schedule-activity">Lunch</span></div>
            <div class="schedule-item"><span class="schedule-time">02:10 PM</span><span class="schedule-activity">Rest / Personal Work / Leisure</span></div>
            <div class="schedule-item"><span class="schedule-time">05:00 PM</span><span class="schedule-activity">Tea & Snacks</span></div>
            <div class="schedule-item"><span class="schedule-time">05:30 PM</span><span class="schedule-activity">Games & Sports</span></div>
            <div class="schedule-item"><span class="schedule-time">07:00 PM</span><span class="schedule-activity">Evening Prep</span></div>
            <div class="schedule-item"><span class="schedule-time">08:30 PM</span><span class="schedule-activity">Dinner</span></div>
            <div class="schedule-item"><span class="schedule-time">10:00 PM</span><span class="schedule-activity">Lights Out</span></div>
        </div>
    </div></section>`
};

// ============ GALLERY ============
PAGES['gallery'] = {
    title: 'Gallery | Rungta Public School',
    tag: 'Gallery', heading: 'Our Gallery', sub: 'Capture the moments. Explore the milestones.',
    render: () => `
    <section class="section"><div class="container">
        <div class="section-header"><span class="section-tag">Photo Albums</span><h2 class="section-title">Photos & <em>Albums</em></h2></div>
        <div class="gallery-filter"><button class="gallery-filter-btn active" data-filter="all">All</button><button class="gallery-filter-btn" data-filter="sports">Sports</button><button class="gallery-filter-btn" data-filter="cultural">Cultural</button><button class="gallery-filter-btn" data-filter="academic">Academic</button><button class="gallery-filter-btn" data-filter="celebration">Celebrations</button><button class="gallery-filter-btn" data-filter="trip">Trips</button></div>
        <div class="gallery-grid">
            <div class="gallery-item stagger" data-category="cultural" data-tilt><div class="gallery-placeholder" style="background:linear-gradient(135deg,#f13023,#d91900)"><span class="gallery-emoji">🎤</span><span class="gallery-label">Hindi Recitation 2025</span></div></div>
            <div class="gallery-item stagger" data-category="cultural" data-tilt><div class="gallery-placeholder" style="background:linear-gradient(135deg,#007efd,#4174c5)"><span class="gallery-emoji">📖</span><span class="gallery-label">English Recitation 2025</span></div></div>
            <div class="gallery-item stagger" data-category="celebration" data-tilt><div class="gallery-placeholder" style="background:linear-gradient(135deg,#ffc107,#ffd45d)"><span class="gallery-emoji">🥛</span><span class="gallery-label">Dahi Handi 2025</span></div></div>
            <div class="gallery-item stagger" data-category="sports" data-tilt><div class="gallery-placeholder" style="background:linear-gradient(135deg,#41604d,#677b6e)"><span class="gallery-emoji">🏸</span><span class="gallery-label">Badminton 2025</span></div></div>
            <div class="gallery-item stagger" data-category="cultural" data-tilt><div class="gallery-placeholder" style="background:linear-gradient(135deg,#7e694c,#a7766f)"><span class="gallery-emoji">💃</span><span class="gallery-label">Solo Dance 2025</span></div></div>
            <div class="gallery-item stagger" data-category="cultural" data-tilt><div class="gallery-placeholder" style="background:linear-gradient(135deg,#f13023,#d91900)"><span class="gallery-emoji">🎵</span><span class="gallery-label">Music Competition 2025</span></div></div>
            <div class="gallery-item stagger" data-category="academic" data-tilt><div class="gallery-placeholder" style="background:linear-gradient(135deg,#007efd,#4174c5)"><span class="gallery-emoji">🎨</span><span class="gallery-label">Poster Making 2025</span></div></div>
            <div class="gallery-item stagger" data-category="academic" data-tilt><div class="gallery-placeholder" style="background:linear-gradient(135deg,#ffc107,#ffd45d)"><span class="gallery-emoji">📊</span><span class="gallery-label">PPT Competition 2025</span></div></div>
            <div class="gallery-item stagger" data-category="academic" data-tilt><div class="gallery-placeholder" style="background:linear-gradient(135deg,#41604d,#677b6e)"><span class="gallery-emoji">🧠</span><span class="gallery-label">Quiz Competition 2025</span></div></div>
            <div class="gallery-item stagger" data-category="trip" data-tilt><div class="gallery-placeholder" style="background:linear-gradient(135deg,#7e694c,#a7766f)"><span class="gallery-emoji">🎢</span><span class="gallery-label">Primary Picnic Maitri Bagh</span></div></div>
            <div class="gallery-item stagger" data-category="academic" data-tilt><div class="gallery-placeholder" style="background:linear-gradient(135deg,#f13023,#d91900)"><span class="gallery-emoji">🗣️</span><span class="gallery-label">Inter School Debate 2025</span></div></div>
            <div class="gallery-item stagger" data-category="sports" data-tilt><div class="gallery-placeholder" style="background:linear-gradient(135deg,#007efd,#4174c5)"><span class="gallery-emoji">🎯</span><span class="gallery-label">Carrom Competition 2025</span></div></div>
            <div class="gallery-item stagger" data-category="celebration" data-tilt><div class="gallery-placeholder" style="background:linear-gradient(135deg,#ffc107,#ffd45d)"><span class="gallery-emoji">👶</span><span class="gallery-label">Children's Day 2025</span></div></div>
            <div class="gallery-item stagger" data-category="celebration" data-tilt><div class="gallery-placeholder" style="background:linear-gradient(135deg,#41604d,#677b6e)"><span class="gallery-emoji">🐘</span><span class="gallery-label">Ganesh Chaturthi 2025</span></div></div>
            <div class="gallery-item stagger" data-category="celebration" data-tilt><div class="gallery-placeholder" style="background:linear-gradient(135deg,#7e694c,#a7766f)"><span class="gallery-emoji">💃</span><span class="gallery-label">Navratri 2025</span></div></div>
            <div class="gallery-item stagger" data-category="celebration" data-tilt><div class="gallery-placeholder" style="background:linear-gradient(135deg,#f13023,#d91900)"><span class="gallery-emoji">🌳</span><span class="gallery-label">Van Mahotsav 2025</span></div></div>
            <div class="gallery-item stagger" data-category="trip" data-tilt><div class="gallery-placeholder" style="background:linear-gradient(135deg,#007efd,#4174c5)"><span class="gallery-emoji">🦷</span><span class="gallery-label">Visit to Dental Clinic</span></div></div>
            <div class="gallery-item stagger" data-category="trip" data-tilt><div class="gallery-placeholder" style="background:linear-gradient(135deg,#ffc107,#ffd45d)"><span class="gallery-emoji">🔬</span><span class="gallery-label">Visit to RSR Lab</span></div></div>
            <div class="gallery-item stagger" data-category="celebration" data-tilt><div class="gallery-placeholder" style="background:linear-gradient(135deg,#41604d,#677b6e)"><span class="gallery-emoji">🪈</span><span class="gallery-label">Janmashtami 2025</span></div></div>
            <div class="gallery-item stagger" data-category="academic" data-tilt><div class="gallery-placeholder" style="background:linear-gradient(135deg,#7e694c,#a7766f)"><span class="gallery-emoji">🏛️</span><span class="gallery-label">MUN 2025</span></div></div>
            <div class="gallery-item stagger" data-category="academic" data-tilt><div class="gallery-placeholder" style="background:linear-gradient(135deg,#f13023,#d91900)"><span class="gallery-emoji">⚠️</span><span class="gallery-label">Session on Drug Abuse</span></div></div>
            <div class="gallery-item stagger" data-category="celebration" data-tilt><div class="gallery-placeholder" style="background:linear-gradient(135deg,#007efd,#4174c5)"><span class="gallery-emoji">🧘</span><span class="gallery-label">International Yoga Day 2025</span></div></div>
            <div class="gallery-item stagger" data-category="celebration" data-tilt><div class="gallery-placeholder" style="background:linear-gradient(135deg,#ffc107,#ffd45d)"><span class="gallery-emoji">👩</span><span class="gallery-label">Women's Day 2025</span></div></div>
            <div class="gallery-item stagger" data-category="celebration" data-tilt><div class="gallery-placeholder" style="background:linear-gradient(135deg,#41604d,#677b6e)"><span class="gallery-emoji">🇮🇳</span><span class="gallery-label">Independence Day 2025</span></div></div>
            <div class="gallery-item stagger" data-category="cultural" data-tilt><div class="gallery-placeholder" style="background:linear-gradient(135deg,#7e694c,#a7766f)"><span class="gallery-emoji">🍳</span><span class="gallery-label">Fireless Cooking 2025</span></div></div>
            <div class="gallery-item stagger" data-category="celebration" data-tilt><div class="gallery-placeholder" style="background:linear-gradient(135deg,#f13023,#d91900)"><span class="gallery-emoji">👨</span><span class="gallery-label">Father's Day 2025</span></div></div>
            <div class="gallery-item stagger" data-category="trip" data-tilt><div class="gallery-placeholder" style="background:linear-gradient(135deg,#007efd,#4174c5)"><span class="gallery-emoji">🚌</span><span class="gallery-label">Educational Trip</span></div></div>
            <div class="gallery-item stagger" data-category="academic" data-tilt><div class="gallery-placeholder" style="background:linear-gradient(135deg,#ffc107,#ffd45d)"><span class="gallery-emoji">📝</span><span class="gallery-label">CBSE Active Learning Workshop</span></div></div>
            <div class="gallery-item stagger" data-category="academic" data-tilt><div class="gallery-placeholder" style="background:linear-gradient(135deg,#41604d,#677b6e)"><span class="gallery-emoji">🌿</span><span class="gallery-label">CBP Environmental Education</span></div></div>
            <div class="gallery-item stagger" data-category="celebration" data-tilt><div class="gallery-placeholder" style="background:linear-gradient(135deg,#7e694c,#a7766f)"><span class="gallery-emoji">🎓</span><span class="gallery-label">Graduation Day</span></div></div>
            <div class="gallery-item stagger" data-category="academic" data-tilt><div class="gallery-placeholder" style="background:linear-gradient(135deg,#f13023,#d91900)"><span class="gallery-emoji">🏅</span><span class="gallery-label">RPS Achievers</span></div></div>
            <div class="gallery-item stagger" data-category="celebration" data-tilt><div class="gallery-placeholder" style="background:linear-gradient(135deg,#007efd,#4174c5)"><span class="gallery-emoji">🎖️</span><span class="gallery-label">Investiture Ceremony 2025</span></div></div>
            <div class="gallery-item stagger" data-category="celebration" data-tilt><div class="gallery-placeholder" style="background:linear-gradient(135deg,#ffc107,#ffd45d)"><span class="gallery-emoji">🎂</span><span class="gallery-label">Foundation Day</span></div></div>
            <div class="gallery-item stagger" data-category="celebration" data-tilt><div class="gallery-placeholder" style="background:linear-gradient(135deg,#41604d,#677b6e)"><span class="gallery-emoji">👋</span><span class="gallery-label">Farewell 2026</span></div></div>
            <div class="gallery-item stagger" data-category="academic" data-tilt><div class="gallery-placeholder" style="background:linear-gradient(135deg,#7e694c,#a7766f)"><span class="gallery-emoji">🏆</span><span class="gallery-label">Achievements</span></div></div>
            <div class="gallery-item stagger" data-category="academic" data-tilt><div class="gallery-placeholder" style="background:linear-gradient(135deg,#f13023,#d91900)"><span class="gallery-emoji">🔬</span><span class="gallery-label">Annual Exhibition</span></div></div>
            <div class="gallery-item stagger" data-category="celebration" data-tilt><div class="gallery-placeholder" style="background:linear-gradient(135deg,#007efd,#4174c5)"><span class="gallery-emoji">🎭</span><span class="gallery-label">Annual Day</span></div></div>
            <div class="gallery-item stagger" data-category="celebration" data-tilt><div class="gallery-placeholder" style="background:linear-gradient(135deg,#ffc107,#ffd45d)"><span class="gallery-emoji">👴</span><span class="gallery-label">Grand Parent's Day</span></div></div>
            <div class="gallery-item stagger" data-category="sports" data-tilt><div class="gallery-placeholder" style="background:linear-gradient(135deg,#41604d,#677b6e)"><span class="gallery-emoji">🏏</span><span class="gallery-label">Indoor & Outdoor Sports</span></div></div>
            <div class="gallery-item stagger" data-category="celebration" data-tilt><div class="gallery-placeholder" style="background:linear-gradient(135deg,#7e694c,#a7766f)"><span class="gallery-emoji">👩‍🏫</span><span class="gallery-label">Teacher's Day</span></div></div>
            <div class="gallery-item stagger" data-category="cultural" data-tilt><div class="gallery-placeholder" style="background:linear-gradient(135deg,#f13023,#d91900)"><span class="gallery-emoji">💃</span><span class="gallery-label">Cultural Events</span></div></div>
            <div class="gallery-item stagger" data-category="cultural" data-tilt><div class="gallery-placeholder" style="background:linear-gradient(135deg,#007efd,#4174c5)"><span class="gallery-emoji">🎬</span><span class="gallery-label">Videos</span></div></div>
        </div>
    </div></section>`
};

// ============ ACHIEVEMENTS ============
PAGES['achievements'] = {
    title: 'Achievements | Rungta Public School',
    tag: 'Achievements', heading: 'Our Achievements', sub: 'Milestones of excellence',
    render: () => `
    <section class="section"><div class="container">
        <div class="section-header"><span class="section-tag">Achievements</span><h2 class="section-title">Student <em>Achievements</em></h2></div>
        <div class="content-card"><h3>Pre-Primary</h3><ul class="content-list"><li>Prisha Goel, received second prize in Dance at Agrasen Samaj, Durg</li><li>Aahana Goel, received first prize in Fancy dress, second prize in Dance and Jumbled word competitions at Agrasen Samaj, Durg</li><li>Sara Kapil, received first prize in Dance and Orange Belt in Karate organized by BIMS</li></ul></div>
        <div class="content-card"><h3>Primary</h3><ul class="content-list"><li>Sanskar Jaiswal, qualified for National level SpellQuest Competition and marked his position among top 10 qualifiers</li><li>Darsh Sinha, qualified for National level SpellQuest Competition and bagged the 3rd position</li><li>Prisha Srivastava and Hriddhima Thawre qualified for the Zonal Wild Wisdom quiz Competition organized by WWF in Bhopal and bagged 3rd position defeating 52 teams</li></ul></div>
        <div class="content-card"><h3>Secondary</h3><ul class="content-list"><li>Ashwini Singh Chouhan and Abhishek Arya outshines at Seth Bal Krishna Gupta Smriti, State Level Hindi Debate Competition</li><li>Ashwini Singh Chouhan and Adarsh Tiwari outshines at inter school Hindi Debate Competition at Shankaracharya Vidyalaya</li><li>Abhishek Arya outshines at Inter School English Debate Competition at KPS, Durg</li><li>RPS Students bag first position in the inter school group song competition, organized by Vishwadeep Senior Secondary School, Durg</li></ul></div>
        <div class="achievements-grid" style="margin-top:3rem">
            <div class="achievement-card stagger" data-tilt><div class="achievement-icon">🏆</div><div class="achievement-number" data-target="100">0</div><div class="achievement-suffix">%</div><h4>Board Results</h4><p>Consistent 100% pass rate</p></div>
            <div class="achievement-card stagger" data-tilt><div class="achievement-icon">🥇</div><div class="achievement-number" data-target="4000">0</div><div class="achievement-suffix">+</div><h4>Students</h4><p>From across the country</p></div>
            <div class="achievement-card stagger" data-tilt><div class="achievement-icon">🌟</div><div class="achievement-number" data-target="25">0</div><div class="achievement-suffix">+</div><h4>Years</h4><p>Of educational excellence</p></div>
            <div class="achievement-card stagger" data-tilt><div class="achievement-icon">🎖️</div><div class="achievement-number" data-target="10">0</div><div class="achievement-suffix">:1</div><h4>Teacher Ratio</h4><p>Student to teacher ratio</p></div>
        </div>
    </div></section>`
};

// ============ FAQ ============
PAGES['faq'] = {
    title: 'FAQ | Rungta Public School',
    tag: 'FAQ', heading: 'Frequently Asked Questions', sub: 'Find answers to common queries',
    render: () => `
    <section class="section"><div class="container">
        <div class="section-header"><span class="section-tag">FAQ</span><h2 class="section-title">Frequently Asked <em>Questions</em></h2></div>
        <div class="faq-list">
            <div class="faq-item"><button class="faq-question"><span>Which educational board is RPS affiliated to?</span><i data-lucide="chevron-down"></i></button><div class="faq-answer"><p>The school is affiliated to the CBSE (Central Board of Secondary Education), New Delhi vide affiliation no. 3330201. We also offer Cambridge Assessment International Education (CAIE), Registration No. IA036.</p></div></div>
            <div class="faq-item"><button class="faq-question"><span>What is the medium of Instruction?</span><i data-lucide="chevron-down"></i></button><div class="faq-answer"><p>The medium of Instruction is English.</p></div></div>
            <div class="faq-item"><button class="faq-question"><span>Which are the classes for which admission can be sought?</span><i data-lucide="chevron-down"></i></button><div class="faq-answer"><p>Admission will be available for Classes Nursery to IX & XI. Admission to classes X & XII is considered provisionally only for transfer cases and is subject to CBSE approval.</p></div></div>
            <div class="faq-item"><button class="faq-question"><span>What are the various streams taught at +2 level?</span><i data-lucide="chevron-down"></i></button><div class="faq-answer"><p>The school has both Science (Engineering & Medicine) & Commerce streams.</p></div></div>
            <div class="faq-item"><button class="faq-question"><span>Is the Boarding facility available at RPS?</span><i data-lucide="chevron-down"></i></button><div class="faq-answer"><p>Yes, AC Boarding facility, separately for Boys and Girls, is available from Class VI onward.</p></div></div>
            <div class="faq-item"><button class="faq-question"><span>Does the school have AC Classrooms & Transport Facility?</span><i data-lucide="chevron-down"></i></button><div class="faq-answer"><p>Yes. The class-rooms and the school busses have AC Facility.</p></div></div>
            <div class="faq-item"><button class="faq-question"><span>What is the Class Size and teacher-taught ratio?</span><i data-lucide="chevron-down"></i></button><div class="faq-answer"><p>The optimum strength of a class is 25-30. The teacher-taught ratio at RPS is 1:10.</p></div></div>
            <div class="faq-item"><button class="faq-question"><span>Does the school give scholarships?</span><i data-lucide="chevron-down"></i></button><div class="faq-answer"><p>Yes, the school gives scholarships to meritorious students of classes XI & XII. Apart from that there are various concessions given to different categories of students.</p></div></div>
            <div class="faq-item"><button class="faq-question"><span>When does the academic session start?</span><i data-lucide="chevron-down"></i></button><div class="faq-answer"><p>The academic session starts in April.</p></div></div>
            <div class="faq-item"><button class="faq-question"><span>How can I pay fees online?</span><i data-lucide="chevron-down"></i></button><div class="faq-answer"><p>Visit <a href="http://myrungta.com/erp/studentindex_rps.php" target="_blank" style="color:var(--primary);font-weight:600">myrungta.com</a> for online fee payment.</p></div></div>
            <div class="faq-item"><button class="faq-question"><span>How well can students cope with CBSE syllabus if from a different board?</span><i data-lucide="chevron-down"></i></button><div class="faq-answer"><p>There will not be any difficulty as the syllabus of the CBSE is on a par with other Boards. This has been experienced by a large number of students with the help of the dedicated teachers.</p></div></div>
            <div class="faq-item"><button class="faq-question"><span>How can I register my ward's name for admission?</span><i data-lucide="chevron-down"></i></button><div class="faq-answer"><p>Application forms can be collected from our school office. The duly filled in application form along with the Registration fees, photocopy of the previous three years report cards and other required documents is to be submitted at the school office for the registration.</p></div></div>
            <div class="faq-item"><button class="faq-question"><span>On what criteria is the admission considered at RPS?</span><i data-lucide="chevron-down"></i></button><div class="faq-answer"><p>RPS welcomes students from India and abroad. The admission is granted on the basis of the last three years academic record.</p></div></div>
            <div class="faq-item"><button class="faq-question"><span>What are the documents required for admission?</span><i data-lucide="chevron-down"></i></button><div class="faq-answer"><ul><li>Duly filled in Application form</li><li>3 recent passport size photographs of the student & one each of both parents</li><li>Copy of Birth Certificate</li><li>Copy of Aadhar Card</li><li>Non-refundable Registration Fee</li><li>Photocopies of previous two years and half yearly report card</li><li>Transfer Certificate (for class II onwards)</li><li>Character Certificate from previous school</li><li>Bank Account details of the child</li><li>CBSE Registration Card (for classes X, XI, XII)</li></ul></div></div>
        </div>
    </div></section>`
};

// ============ CONTACT ============
PAGES['contact'] = {
    title: 'Contact Us | Rungta Public School',
    tag: 'Contact', heading: 'Contact Us', sub: 'Get in touch',
    render: () => `
    <section class="section"><div class="container">
        <div class="section-header"><span class="section-tag">Get In Touch</span><h2 class="section-title">Contact <em>Us</em></h2></div>
        <div class="contact-grid">
            <div class="contact-info-card" data-tilt>
                <div class="contact-info-item"><div class="contact-info-icon"><i data-lucide="map-pin"></i></div><div><h4>Address</h4><p>Rungta Public School<br>Rungta Knowledge City<br>Kohka-Kurud Road, Bhilai (C.G.)<br>India - 490024</p></div></div>
                <div class="contact-info-item"><div class="contact-info-icon"><i data-lucide="phone"></i></div><div><h4>Phone</h4><p><a href="tel:+918085111555">+91 808 511 1555</a></p><p><a href="tel:+917882960666">+91 788 296 0666</a></p><p><a href="tel:+919229344486">+91 922 934 4486</a></p></div></div>
                <div class="contact-info-item"><div class="contact-info-icon"><i data-lucide="mail"></i></div><div><h4>Email</h4><p><a href="mailto:info@rungtapublicschool.ac.in">info@rungtapublicschool.ac.in</a></p></div></div>
                <div class="contact-social"><a href="https://www.facebook.com/rungtapublicschool/" target="_blank" class="social-link"><i data-lucide="facebook"></i></a><a href="https://in.linkedin.com/company/rungta-public-school" target="_blank" class="social-link"><i data-lucide="linkedin"></i></a><a href="https://www.youtube.com/channel/UCLFKF4aEnl0MbTG_n_waYSw" target="_blank" class="social-link"><i data-lucide="youtube"></i></a></div>
            </div>
            <form class="contact-form" id="contactForm">
                <div class="form-group"><label>Full Name</label><input type="text" placeholder="Enter your name" required><div class="form-line"></div></div>
                <div class="form-row"><div class="form-group"><label>Email</label><input type="email" placeholder="Enter your email" required><div class="form-line"></div></div><div class="form-group"><label>Phone</label><input type="tel" placeholder="Enter your phone"><div class="form-line"></div></div></div>
                <div class="form-group"><label>Query Type</label><select><option value="">Select</option><option>General Enquiry</option><option>Admission</option><option>Career</option></select><div class="form-line"></div></div>
                <div class="form-group"><label>Message</label><textarea rows="4" placeholder="Your message..."></textarea><div class="form-line"></div></div>
                <button type="submit" class="btn btn-primary" style="width:100%;justify-content:center"><span>Send Message</span><i data-lucide="send"></i></button>
            </form>
        </div>
        <div class="contact-map"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.5!2d81.3!3d21.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDEyJzAwLjAiTiA4McKwMTgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1" width="100%" height="400" style="border:0;border-radius:16px" allowfullscreen loading="lazy"></iframe></div>
    </div></section>`
};

// ============ DOWNLOADS ============
PAGES['downloads'] = {
    title: 'Downloads | Rungta Public School',
    tag: 'Resources', heading: 'Important Downloads', sub: 'Prospectus, Fee Structure, Calendar & more',
    render: () => `
    <section class="section"><div class="container">
        <div class="section-header"><span class="section-tag">Resources</span><h2 class="section-title">Important <em>Downloads</em></h2></div>
        <div class="card-grid">
            <a href="https://rungtapublicschool.ac.in/downloads/RPS Prospectus 2023 SP.pdf" target="_blank" class="card stagger" data-tilt><div class="card-icon">📄</div><h3>Prospectus</h3><p>Download the RPS Prospectus for complete information about the school.</p></a>
            <a href="https://rungtapublicschool.ac.in/downloads/RPS_fee_2026.pdf" target="_blank" class="card stagger" data-tilt><div class="card-icon">💰</div><h3>Fee Structure 2026-27</h3><p>Detailed fee structure for Indian students (CBSE).</p></a>
            <a href="https://rungtapublicschool.ac.in/downloads/RPS-school-calendar-2026-27.pdf" target="_blank" class="card stagger" data-tilt><div class="card-icon">📅</div><h3>School Calendar 2026-27</h3><p>Academic calendar with holidays and important dates.</p></a>
            <a href="https://rungtapublicschool.ac.in/downloads/book_list.pdf" target="_blank" class="card stagger" data-tilt><div class="card-icon">📚</div><h3>Book List</h3><p>Complete book list for all classes.</p></a>
            <a href="https://rungtapublicschool.ac.in/downloads/RPS_Newsletter2020.pdf" target="_blank" class="card stagger" data-tilt><div class="card-icon">📰</div><h3>Newsletter</h3><p>RPS Newsletter with latest updates and achievements.</p></a>
            <a href="https://rungtapublicschool.ac.in/downloads/HANDBOOK__2020-21.pdf" target="_blank" class="card stagger" data-tilt><div class="card-icon">📖</div><h3>Handbook for Parents</h3><p>Parent handbook with guidelines and policies.</p></a>
            <a href="https://rungtapublicschool.ac.in/downloads/RPSboarderDailySchedule.pdf" target="_blank" class="card stagger" data-tilt><div class="card-icon">⏰</div><h3>Boarder's Daily Schedule</h3><p>Detailed daily schedule for boarding students.</p></a>
            <a href="https://rungtapublicschool.ac.in/downloads/Tournament Details and Formats.pdf" target="_blank" class="card stagger" data-tilt><div class="card-icon">🏆</div><h3>Tournament Details</h3><p>Details and formats for sports tournaments.</p></a>
            <a href="https://rungtapublicschool.ac.in/downloads/result-of-last-three-years.pdf" target="_blank" class="card stagger" data-tilt><div class="card-icon">📊</div><h3>Results (Last 3 Years)</h3><p>Board examination results of last three years.</p></a>
            <a href="https://rungtapublicschool.ac.in/downloads/PTA MEMBERS.pdf" target="_blank" class="card stagger" data-tilt><div class="card-icon">👥</div><h3>PTA Members</h3><p>List of Parent-Teacher Association members.</p></a>
            <a href="http://myrungta.com/erp/studentindex_rps.php" target="_blank" class="card stagger" data-tilt><div class="card-icon">💳</div><h3>Online Fee Payment</h3><p>Pay school fees online through the ERP portal.</p></a>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSedSXjN7MioScm3T0EMpqvWgIH7-OtNX12MlHQwE-sWs4urVg/viewform" target="_blank" class="card stagger" data-tilt><div class="card-icon">📝</div><h3>Admission Enquiry Form</h3><p>Fill the online admission enquiry form.</p></a>
        </div>
    </div></section>`
};

// ============ MANDATORY DISCLOSURE ============
PAGES['disclosure'] = {
    title: 'Mandatory Disclosure | Rungta Public School',
    tag: 'Disclosure', heading: 'Mandatory Public Disclosure', sub: 'As per CBSE guidelines',
    render: () => `
    <section class="section"><div class="container">
        <div class="section-header"><span class="section-tag">CBSE Compliance</span><h2 class="section-title">Mandatory Public <em>Disclosure</em></h2></div>
        <div class="card-grid">
            <a href="https://rungtapublicschool.ac.in/downloads/self-declaration.pdf" target="_blank" class="card stagger" data-tilt><div class="card-icon">📋</div><h3>Self Declaration</h3><p>School's self-declaration document.</p></a>
            <a href="https://rungtapublicschool.ac.in/downloads/extension-afflication.pdf" target="_blank" class="card stagger" data-tilt><div class="card-icon">🏛️</div><h3>CBSE Extension of Affiliation</h3><p>CBSE affiliation extension certificate.</p></a>
            <a href="https://rungtapublicschool.ac.in/downloads/RPS_fee_2026.pdf" target="_blank" class="card stagger" data-tilt><div class="card-icon">💰</div><h3>CBSE Fee Structure 2026-27</h3><p>Fee structure as per CBSE guidelines.</p></a>
            <a href="https://rungtapublicschool.ac.in/downloads/Mandatory Disclosure Details.pdf" target="_blank" class="card stagger" data-tilt><div class="card-icon">📄</div><h3>Mandatory Disclosure Details</h3><p>Complete mandatory disclosure document.</p></a>
            <a href="https://rungtapublicschool.ac.in/downloads/No_objection_certificate.pdf" target="_blank" class="card stagger" data-tilt><div class="card-icon">✅</div><h3>No Objection Certificate</h3><p>NOC from the state government.</p></a>
            <a href="https://rungtapublicschool.ac.in/downloads/rps-fire-2026.pdf" target="_blank" class="card stagger" data-tilt><div class="card-icon">🔥</div><h3>Fire Safety Certificate</h3><p>Fire safety compliance certificate.</p></a>
            <a href="https://rungtapublicschool.ac.in/downloads/safe-drinking-water-and-sanitation-certification.pdf" target="_blank" class="card stagger" data-tilt><div class="card-icon">💧</div><h3>Water & Sanitation Certificate</h3><p>Safe drinking water and sanitation certification.</p></a>
            <a href="https://rungtapublicschool.ac.in/downloads/building-safety-certificate.pdf" target="_blank" class="card stagger" data-tilt><div class="card-icon">🏗️</div><h3>Building Safety Certificate</h3><p>Building safety compliance certificate.</p></a>
            <a href="https://rungtapublicschool.ac.in/downloads/land certificate.pdf" target="_blank" class="card stagger" data-tilt><div class="card-icon">🏞️</div><h3>Land Certificate</h3><p>School land ownership certificate.</p></a>
            <a href="https://rungtapublicschool.ac.in/downloads/GDR Registration.pdf" target="_blank" class="card stagger" data-tilt><div class="card-icon">📝</div><h3>GDR Registration</h3><p>G.D. Rungta Educational Society registration.</p></a>
            <a href="https://rungtapublicschool.ac.in/downloads/extension-afflication.pdf" target="_blank" class="card stagger" data-tilt><div class="card-icon">🔗</div><h3>CBSE Affiliation</h3><p>CBSE affiliation document (No. 3330201).</p></a>
        </div>
    </div></section>`
};
