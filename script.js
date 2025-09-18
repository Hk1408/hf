// --------- SLOTJE LOGICA ----------
const unlockBtn = document.getElementById('unlock-btn');
const codeInput = document.getElementById('code-input');
const lockScreen = document.getElementById('lock-screen');
const envelopeScreen = document.getElementById('envelope-screen');
const lock = document.getElementById('lock');
const envelope = document.getElementById('envelope');
const options = document.getElementById('options');

const CORRECT_CODE = "1408";

unlockBtn.addEventListener('click', () => {
  if (codeInput.value === CORRECT_CODE) {
    lock.style.transform = "rotate(20deg) scale(0)";
    lock.style.opacity = "0";

    setTimeout(() => {
      lockScreen.classList.add('hidden');
      envelopeScreen.classList.remove('hidden');

      setTimeout(() => {
        envelope.style.opacity = "1";
        envelope.style.transform = "scale(1)";
      }, 200);

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
const menuScreen = document.getElementById('menu-screen');

noBtn.addEventListener('mouseenter', () => {
  noBtn.style.transform = "scale(0.7)";
  yesBtn.style.transform = "scale(1.3)";
});

yesBtn.addEventListener('click', () => {
  envelopeScreen.classList.add('hidden');
  menuScreen.classList.remove('hidden');
});

// --------- MENU LOGICA ----------
const statsBtn = document.getElementById('stats-btn');
const photosBtn = document.getElementById('photos-btn');
const messagesBtn = document.getElementById('messages-btn');

const statsScreen = document.getElementById('stats-screen');
const photosScreen = document.getElementById('photos-screen');
const messagesScreen = document.getElementById('messages-screen');

function showScreen(show, hideList) {
  hideList.forEach(s => s.classList.add('hidden'));
  show.classList.remove('hidden');
}

statsBtn.addEventListener('click', () => showScreen(statsScreen, [menuScreen]));
photosBtn.addEventListener('click', () => showScreen(photosScreen, [menuScreen]));
messagesBtn.addEventListener('click', () => showScreen(messagesScreen, [menuScreen]));

document.querySelectorAll('.back-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    showScreen(menuScreen, [statsScreen, photosScreen, messagesScreen]);
  });
});

// --------- VALLENDE HARTJES ----------
const heartEmojis = ["♥️", "♥️", "♥️", "♥️", "♥️"];

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerText = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 6 + Math.random() * 5 + "s";
  heart.style.fontSize = 15 + Math.random() * 30 + "px";
  document.body.appendChild(heart);

  heart.addEventListener("animationend", () => {
    heart.remove();
  });
}

setInterval(createHeart, 200);
