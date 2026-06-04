const passwordInput = document.getElementById('password');
const togglePassword = document.getElementById('toggle-password');
const eyeIcon = document.getElementById('eye-icon');

togglePassword?.addEventListener('click', () => {
    if (!passwordInput || !eyeIcon) return;

    const isPassword = passwordInput.type === 'password';
    passwordInput.type = isPassword ? 'text' : 'password';
    eyeIcon.src = isPassword
        ? togglePassword.dataset.closedSrc
        : togglePassword.dataset.openSrc;
});
