import { refreshCurrentUser } from "../../backend/backend.mjs";

const user = await refreshCurrentUser();

if (user) {
    const points = user.points || 0;
    const niveau = Math.floor(points / 250) + 1;
    const maxXp = niveau * 250;
    const currentXp = points;
    const progress = (currentXp / maxXp) * 100;

    document.getElementById("username").textContent = `${user.username} !`;
    document.getElementById("level").textContent = `Niveau ${niveau}`;
    document.getElementById("points").textContent = `${currentXp} / ${maxXp} points`;
    document.getElementById("progress-bar").style.width = `${progress}%`;

    if (user.premium) {
        document.getElementById("premium-badge").classList.remove("hidden");
    }
}
