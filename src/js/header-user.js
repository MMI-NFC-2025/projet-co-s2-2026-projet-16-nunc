import { refreshCurrentUser } from "../../backend/backend.mjs";

const user = await refreshCurrentUser();

if (user) {
    const points = user.points || 0;
    const level = Math.floor(points / 250) + 1;

    const currentLevelMin = (level - 1) * 250;
    const nextLevelPoints = level * 250;

    const currentXp = points - currentLevelMin;
    const progress = (currentXp / 250) * 100;

    document.getElementById("username").textContent = `${user.username} !`;
    document.getElementById("level").textContent = `Niveau ${level}`;
    document.getElementById("points").textContent = `${points} / ${nextLevelPoints} points`;
    document.getElementById("progress-bar").style.width = `${progress}%`;

    if (user.premium) {
        document.getElementById("premium-badge").classList.remove("hidden");
    }
}
