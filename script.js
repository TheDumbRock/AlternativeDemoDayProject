const menuBtn = document.getElementById('menu-btn');
const navMenu = document.getElementById('nav-menu');

menuBtn.addEventListener('click', function () {
  navMenu.classList.toggle('show');
});

const creatorBtn = document.getElementById('creator-btn');
const brandBtn = document.getElementById('brand-btn');
const creatorInfo = document.getElementById('creator-info');
const brandInfo = document.getElementById('brand-info');

creatorBtn.addEventListener('click', function () {
  creatorBtn.classList.add('active');
  brandBtn.classList.remove('active');
  creatorInfo.classList.remove('hidden');
  brandInfo.classList.add('hidden');
});

brandBtn.addEventListener('click', function () {
  brandBtn.classList.add('active');
  creatorBtn.classList.remove('active');
  brandInfo.classList.remove('hidden');
  creatorInfo.classList.add('hidden');
});

const joinBtn = document.getElementById('join-btn');
const joinMessage = document.getElementById('join-message');

joinBtn.addEventListener('click', function () {
  joinMessage.textContent = "Thanks for joining! We'll be in touch soon.";
});
