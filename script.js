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
yesBtn.addEventListener('click', () => {
  envelopeScreen.classList.add('hidden');
  menuScreen.classList.remove('hidden');
});

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

// ========= Beweeg hartjes =========
const heartsContainer = document.querySelector('.hearts-container');
for (let i = 0; i < 10; i++) {
  const heart = document.createElement('div');
  heart.innerText = '❤️';
  heart.style.position = 'absolute';
  heart.style.left = Math.random() * 100 + '%';
  heart.style.top = Math.random() * 100 + '%';
  heart.style.fontSize = (Math.random() * 2 + 1) + 'rem';
  heart.style.opacity = Math.random();
  heartsContainer.appendChild(heart);
}

// ========= Countdown functionaliteit =========
function updateCountdown() {
  const startDate = new Date('2024-08-14T00:00:00');
  const now = new Date();
  let diff = Math.max(0, now - startDate); // verschil in ms

  // Bereken tijdseenheden
  const msInSecond = 1000;
  const msInMinute = msInSecond * 60;
  const msInHour = msInMinute * 60;
  const msInDay = msInHour * 24;
  const msInMonth = msInDay * 30.44; // gemiddelde maand
  const msInYear = msInDay * 365.25; // gemiddelde jaar

  const years = Math.floor(diff / msInYear);
  diff -= years * msInYear;

  const months = Math.floor(diff / msInMonth);
  diff -= months * msInMonth;

  const days = Math.floor(diff / msInDay);
  diff -= days * msInDay;

  const hours = Math.floor(diff / msInHour);
  diff -= hours * msInHour;

  const minutes = Math.floor(diff / msInMinute);
  diff -= minutes * msInMinute;

  const seconds = Math.floor(diff / msInSecond);

  // Vul alle countdown boxes
  document.querySelectorAll('.card').forEach(card => {
    if(card.querySelector('.countdown')){
      const boxes = card.querySelectorAll('.time-box');
      // Je kunt hier aanpassen welk box welke waarde krijgt
      boxes[0].querySelector('.number').innerText = years.toString().padStart(2,'0');
      boxes[1].querySelector('.number').innerText = months.toString().padStart(2,'0');
      boxes[2].querySelector('.number').innerText = days.toString().padStart(2,'0');
      boxes[3].querySelector('.number').innerText = hours.toString().padStart(2,'0');
      boxes[4].querySelector('.number').innerText = minutes.toString().padStart(2,'0');
      boxes[5].querySelector('.number').innerText = seconds.toString().padStart(2,'0');
    }
  });
}

// Update countdown elke seconde
setInterval(updateCountdown, 1000);
updateCountdown();

// ========= Confetti Reward klik =========
document.getElementById('confettiReward').addEventListener('click', () => {
  alert('Confetti! 🎉'); // Hier kun je later echte confetti code toevoegen
});

// ========= Slotje / share button =========
// Plaats een slotje rechtsboven in elke card
document.querySelectorAll('.card').forEach(card => {
  const btn = document.createElement('button');
  btn.innerHTML = '🔒'; // slotje
  btn.classList.add('lock-btn');
  card.appendChild(btn);

  btn.addEventListener('click', () => {
    alert('Slotje geklikt!'); // Hier kun je share functionaliteit of andere actie toevoegen
  });
});
