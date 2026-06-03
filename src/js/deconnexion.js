import { clearAuth } from "../../backend/backend.mjs";

const logoutBtn =
    document.getElementById("logout");

logoutBtn.addEventListener(
    "click",
    () => {

        clearAuth();

        console.log(
            "localStorage après clear :",
            localStorage
        );

        window.location.href =
            "/connexion";

    }
);