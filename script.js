// --------- SLOTJE LOGICA ----------
const unlockBtn = document.getElementById('unlock-btn');
const codeInput = document.getElementById('code-input');
const lockScreen = document.getElementById('lock-screen');
const envelopeScreen = document.getElementById('envelope-screen');
const lock = document.getElementById('lock');
const envelope = document.getElementById('envelope');
const options = document.getElementById('options');

const CORRECT_CODE = "1408"; // <-- pas hier jouw code aan

unlockBtn.addEventListener('click', () => {
  if (codeInput.value === CORRECT_CODE) {
    // slotje animatie
    lock.style.transform = "rotate(20deg) scale(0)";
    lock.style.opacity = "0";

    setTimeout(() => {
      lockScreen.classList.add('hidden');
      envelopeScreen.classList.remove('hidden');

      // envelop verschijnt
      setTimeout(() => {
        envelope.style.opacity = "1";
        envelope.style.transform = "scale(1)";
      }, 200);

      // knoppen verschijnen pas na envelop
      setTimeout(() => {
        options.classList.remove('hidden');
      }, 1200);
    }, 1000);
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
  heart.style.animationDuration = 20 + Math.random() * 5 + "s"; // langzamer vallen
  heart.style.fontSize = 15 + Math.random() * 30 + "px";
  document.body.appendChild(heart);

  // hartje weghalen na animatie
  heart.addEventListener("animationend", () => {
    heart.remove();
  });
}

// elke 300ms een hartje
setInterval(createHeart, 200);
