import {
    addNewUser,
    loginUser,
    isAuthValid
} from "../../backend/backend.mjs";

const form = document.getElementById("form-register");
const retour = document.getElementById("retour-register");
const btn = document.getElementById("btn-register");

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

function showRetour(ok, msg) {

    retour.textContent = msg;

    retour.className = ok
        ? "font-semibold px-4 py-3 rounded-xl bg-green-100 text-green-700"
        : "font-semibold px-4 py-3 rounded-xl bg-red-100 text-red-700";

    retour.classList.remove("hidden");
}

if (isAuthValid()) {
    window.location.href = "/";
}

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const fd = new FormData(form);

    btn.disabled = true;
    btn.textContent = "Création...";

    try {

        await addNewUser({
            email: fd.get("email"),
            password: fd.get("password"),
            passwordConfirm: fd.get("password"),
            username: fd.get("username"),
            nom: fd.get("nom"),
            prenom: fd.get("prenom")
        });

        await loginUser(
            fd.get("email"),
            fd.get("password")
        );

        showRetour(true, "Compte créé. Redirection...");

        setTimeout(() => {
            window.location.href = "/";
        }, 800);

    } catch (err) {

        console.error(err);

        showRetour(
            false,
            err?.data?.message || "Erreur lors de l'inscription."
        );

        btn.disabled = false;
        btn.textContent = "Me connecter";
    }
});