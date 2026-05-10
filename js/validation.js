document.addEventListener('DOMContentLoaded', () => {
    
    const loginForm = document.querySelector('.auth-form');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value;

            if (!email.includes('@')) {
                alert('Please enter a valid email address');
                return;
            }
            if (password.length < 6) {
                alert('Password must be at least 6 characters');
                return;
            }
            window.location.href = "index.html";
        });
    }

    const registerForm = document.querySelector('.register-form');
    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name     = document.getElementById('name').value.trim();
            const email    = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value;
            const confirm  = document.getElementById('confirm').value;

            if (!name || !email || !password || !confirm) {
                alert('Please fill in all fields.');
                return;
            }

            if (password !== confirm) {
                alert('Passwords do not match.');
                return;
            }

            if (password.length < 8) {
                alert('Password must be at least 8 characters.');
                return;
            }

            alert('Account created successfully! (demo)');
            window.location.href = "login.html";
        });
    }
});