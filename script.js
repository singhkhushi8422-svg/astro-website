const messages = [
  "तेरी बहुत जल्द ही गांड़ फटने वाली है।  Very soon",
  "आपको बहुत जल्द ही कोई सुंदर सुशील लड़की मेरी तरह मिलने वाली है जिस से आपकी शादी होगी भविष्य में ।। Congratulations!!",
  "आज रात को तेरे बिस्तर पे आऊंगा तेरे साथ सोने और अपना हथियार तेरे हाथ में दूंगा तैयार रहना Good night sweet little gay boy !",
  "आपका भविष्य हमारे साथ है भविष्य में आपको हमारे साथ ही काम करना पड़ेगा इसलिए बदलाव को अपनाना सीखे । Good luck for the future",
  "बहुत जल्द आपको कोई लंबी और आपकी मनपसंदीदा चीज मिलने वाली है । जी हां आप जो देख रहे है वोही मिलने वाला है आपको बहुत जल्द तैयार रहना। Be prepare for your favourite thing !"
];

const cardImages = [
  "card1.jpg",
  "card2.jpg",
  "card3.jpg",
  "card4.jpg",
  "card5.jpg"
];

const flap = document.querySelector('.flap');
const card = document.getElementById('card');
const cardImg = document.getElementById('card-img');
const message = document.getElementById('message');
const openBtn = document.getElementById('open-btn');

let isOpened = false;

openBtn.addEventListener('click', () => {
  if (isOpened) return; // Prevent multiple clicks
  isOpened = true;

  // Pick a random index
  const index = Math.floor(Math.random() * messages.length);

  // Use the same index for both image and message
  cardImg.src = cardImages[index];
  message.textContent = messages[index];

  // Open the envelope flap
  flap.classList.add('open');

  // Show the card after flap animation completes
  setTimeout(() => {
    card.classList.remove('hidden');
    card.classList.add('pop');
  }, 700);
});