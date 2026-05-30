import {
    isAuthValid
} from "../../backend/backend.mjs";

if (!isAuthValid()) {

    window.location.href =
        "/connexion";

}