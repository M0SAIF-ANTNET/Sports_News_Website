
// M.Abdelsamea


document.addEventListener('DOMContentLoaded', () => {
    const themeBtn = document.querySelector('.theme-btn');
    const body = document.body;
    const navLinks = document.querySelectorAll('.nav-links a');
    const tabBtns = document.querySelectorAll('.tab-btn');
    const authForm = document.querySelector('.form-group');

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.classList.add(savedTheme);
    }

    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            body.classList.toggle('light-theme');
            const theme = body.classList.contains('light-theme') ? 'light-theme' : 'dark-theme';
            localStorage.setItem('theme', theme);
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const category = btn.textContent.trim();
            const items = document.querySelectorAll('.video-card, .player-card');
            
            items.forEach(item => {
                if ( category === 'All') {
                    item.style.display = 'block';
                } else {
                    item.style.display = item.dataset.category === category ? 'block' : 'none';
                }
            });
        });
    });

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                scrollObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.card, .player-card, .video-card, .mini-match-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease-out';
        scrollObserver.observe(el);
    });

    if (authForm) {
        authForm.addEventListener('submit', (e) => {
            const inputs = authForm.querySelectorAll('input[required]');
            let valid = true;

            inputs.forEach(input => {
                if (!input.value.trim()) {
                    valid = false;
                    input.style.borderColor = 'var(--color-primary)';
                } else {
                    input.style.borderColor = 'var(--color-border)';
                }
            });

            if (!valid) e.preventDefault();
        });
    }

    const tickerWrapper = document.querySelector('.ticker-wrapper');
    if (tickerWrapper) {
        tickerWrapper.addEventListener('mouseenter', () => {
            tickerWrapper.style.animationPlayState = 'paused';
        });
        tickerWrapper.addEventListener('mouseleave', () => {
            tickerWrapper.style.animationPlayState = 'running';
        });
    }
});

