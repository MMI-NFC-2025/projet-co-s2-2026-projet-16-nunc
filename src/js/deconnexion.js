import { clearAuth } from "../../backend/backend.mjs";

const logoutBtn = document.getElementById("logout");

logoutBtn.addEventListener("click", () => {

    clearAuth();

    window.location.href = "/connexion";
});