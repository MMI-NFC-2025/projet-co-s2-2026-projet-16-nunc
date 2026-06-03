const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("toggle-password");
const eyeIcon = document.getElementById("eye-icon");

togglePassword.addEventListener("click", () => {
    const isPassword = passwordInput.type === "password";
    passwordInput.type = isPassword ? "text" : "password";
    eyeIcon.src = isPassword
        ? "/src/assets/eye-close.svg"
        : "/src/assets/eye-open.svg";
});
