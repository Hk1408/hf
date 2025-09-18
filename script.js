// --------- SLOTJE LOGICA ----------
const unlockBtn = document.getElementById('unlock-btn');
const codeInput = document.getElementById('code-input');
const lockScreen = document.getElementById('lock-screen');
const envelopeScreen = document.getElementById('envelope-screen');

const CORRECT_CODE = "1234"; // Pas hier de code aan

unlockBtn.addEventListener('click', () => {
    if (codeInput.value === CORRECT_CODE) {
        lockScreen.classList.add('hidden');
        envelopeScreen.classList.remove('hidden');
    } else {
        alert("Verkeerde code!");
        codeInput.value = "";
    }
});

// --------- ENVELOP LOGICA ----------
const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const contentScreen = document.getElementById('content-screen');

noBtn.addEventListener('mouseenter', () => {
    // Nee kleiner maken, Ja groter
    noBtn.style.transform = "scale(0.7)";
    yesBtn.style.transform = "scale(1.3)";
});

yesBtn.addEventListener('click', () => {
    envelopeScreen.classList.add('hidden');
    contentScreen.classList.remove('hidden');
});

// --------- VALLENDE HARTJES ----------
const heartEmojis = ["❤️", "💖", "💘", "💝", "💕"];
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerText = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = 3 + Math.random() * 5 + "s";
    heart.style.fontSize = 15 + Math.random() * 30 + "px";
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 8000);
}

setInterval(createHeart, 300);

// --------- TIMER (voorbeeld) ----------
let seconds = 0;
setInterval(() => {
    seconds++;
    const min = String(Math.floor(seconds / 60)).padStart(2, '0');
    const sec = String(seconds % 60).padStart(2, '0');
    const timerEl = document.getElementById('timer');
    if (timerEl) timerEl.textContent = `${min}:${sec}`;
}, 1000);
