const indexB = document.querySelector('nav a[data-page="index"]');
const categoriesB = document.querySelector('nav a[data-page="categories"]');
const learnB = document.querySelector('nav a[data-page="teas"]');
const eventsB = document.querySelector('nav a[data-page="events"]');
const favsB = document.querySelector('nav a[data-page="favorite"]');
const aboutB = document.querySelector('nav a[data-page="about-us"]');

const index = document.getElementById('mapContainer');
const categories = document.getElementById('teaInformation');
const learn = document.getElementById('purchaselink');
const events = document.getElementById('eventInfo');
const favs = document.getElementById('tea-advisor');
const about = document.getElementById('mission');

if (index) {
  indexB.classList.add('active');
} else if (categories) {
  categoriesB.classList.add('active');
} else if (learn) {
  learnB.classList.add('active');
} else if (events) {
  eventsB.classList.add('active');
} else if (favs) {
  favsB.classList.add('active');
} else if (about) {
  aboutB.classList.add('active');
}
