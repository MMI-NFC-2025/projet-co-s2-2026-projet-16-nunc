import {
    loginUser,
    isAuthValid
} from "../../backend/backend.mjs";

console.log("connexion.js chargé");

const form =
    document.getElementById("form-login");

const retour =
    document.getElementById("retour-login");

const btn =
    document.getElementById("btn-login");

const passwordInput =
    document.getElementById("password");

const togglePassword =
    document.getElementById("toggle-password");

const eyeIcon =
    document.getElementById("eye-icon");

togglePassword.addEventListener(
    "click",
    () => {

        const isPassword =
            passwordInput.type === "password";

        passwordInput.type =
            isPassword
                ? "text"
                : "password";

        eyeIcon.src =
            isPassword
                ? "/src/assets/eye-close.svg"
                : "/src/assets/eye-open.svg";

    }
);

function showRetour(
    ok,
    msg
) {

    retour.textContent = msg;

    retour.className = ok
        ? "font-semibold px-4 py-3 rounded-xl bg-green-100 text-green-700"
        : "font-semibold px-4 py-3 rounded-xl bg-red-100 text-red-700";

    retour.classList.remove(
        "hidden"
    );

}

if (isAuthValid()) {

    window.location.href = "/";

}

form.addEventListener(
    "submit",
    async (e) => {

        console.log(
            "submit détecté"
        );

        e.preventDefault();

        const email =
            document.getElementById(
                "email"
            ).value;

        const password =
            document.getElementById(
                "password"
            ).value;

        btn.disabled = true;
        btn.textContent =
            "Connexion...";

        try {

            await loginUser(
                email,
                password
            );

            showRetour(
                true,
                "Connexion réussie. Redirection..."
            );

            setTimeout(() => {

                window.location.href = "/";

            }, 800);

        } catch (err) {

            console.error(err);

            showRetour(
                false,
                "Identifiants incorrects"
            );

            btn.disabled = false;

            btn.textContent =
                "Se connecter";

        }

    }
);