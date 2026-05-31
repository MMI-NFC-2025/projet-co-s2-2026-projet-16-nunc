import { addContact } from "../../backend/backend.mjs";

const form = document.getElementById("contact-form");
const retour = document.getElementById("retour-contact");
const btn = document.getElementById("btn-contact");

function showRetour(ok, msg) {
    retour.textContent = msg;
    retour.className = ok
        ? "rounded-lg px-4 py-3 font-semibold bg-green-100 text-green-700"
        : "rounded-lg px-4 py-3 font-semibold bg-red-100 text-red-700";
    retour.classList.remove("hidden");
}

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    btn.disabled = true;
    btn.textContent = "Envoi...";

    const fd = new FormData(form);

    try {
        await addContact({
            nom: fd.get("nom"),
            email: fd.get("email"),
            sujet: fd.get("sujet"),
            message: fd.get("message")
        });

        showRetour(true, "Message envoyé avec succès.");
        form.reset();

    } catch (err) {
        console.error(err);
        showRetour(false, "Erreur lors de l'envoi du message.");
    }

    btn.disabled = false;
    btn.textContent = "Envoyer le message";
});
