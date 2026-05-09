document.addEventListener('DOMContentLoaded', () => {
    const authForm = document.querySelector('.auth-form');
    
    if (authForm) {
        authForm.addEventListener('submit', (e) => {
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            if (!email.includes('@')) {
                e.preventDefault();
                alert('Please enter a valid email address');
            } else if (password.length < 6) {
                e.preventDefault();
                alert('Password must be at least 6 characters');
            }
        });
    }
});