'use strict';

const teaLocalStorageKey = 'tea-key';
const favoritesTabList = document.querySelector('#favoritesList');

// tea data
// [name[0], type[1], imgFile[2], link[3], ID[4]]
const teaDataList = [
  ['Japanese Green Tea', 'Green', 'greentea.jpg', '#', 'green'],
  ['Earl Grey Tea', 'Black', 'Earl-Grey-tea.jpg', '#', 'earl'],
  ['Chamomile Tea', 'Herbal', 'Chamomile.jpg', '#', 'chamomile'],
  ['Yerba Mate', 'Herbal', 'yerba-mate-tea.jpg', '#', 'yerba'],
  ['South African Rooibos', 'Herbal', 'South-African-Rooibos-tea.jpg', '#', 'rooibos'],
  ['Australian Lemon Myrtle Tea', 'Herbal', 'Australian-Lemon-Myrtle-Tea.jpg', '#', 'lemon']
];

////// Tea Objects //////

// Tea constructor function
function Tea(name, type, imgSrc, link, id, favorite = false) {
  this.name = name;
  this.type = type;
  this.imgSrc = imgSrc;
  this.link = link;
  this.id = id;
  this.favorite = favorite;
  this.favoriteButtonListener = this.favoriteButtonListener();
}
Tea.teaObjects = [];

// Tea object methods
Tea.prototype.favoriteButtonListener = function () { // favorite button click event listener
  
  const favoriteButton = document.getElementById(`${this.id}`);
  if (favoriteButton) {
    const self = this;
    favoriteButton.addEventListener('click', function () {
      checkFavorites(self);
    });
  }
};

// create tea instances
function createTeaObjects() {
  for (const teaData of teaDataList) {
    const currentTea = new Tea(teaData[0], teaData[1], `img/assets/${teaData[2]}`, teaData[3], teaData[4]);
    Tea.teaObjects.push(currentTea);
  }
}

// load tea objects from local storage
function loadTeaObjects(storedTeaObjects) {
  const TeaObjects = JSON.parse(storedTeaObjects);

  for (const TeaObject of TeaObjects) {
    const currentTeaObject = new Tea(TeaObject.name, TeaObject.type, TeaObject.imgSrc, TeaObject.link, TeaObject.id, TeaObject.favorite);
    Tea.teaObjects.push(currentTeaObject);
  }
}

// Save tea objects to local storage
function saveTeaObjects() {
  localStorage.removeItem(teaLocalStorageKey);
  const teaObjectsToStore = JSON.stringify(Tea.teaObjects);
  localStorage.setItem(teaLocalStorageKey, teaObjectsToStore);
}

// initialize tea objects from local storage or create them
function initTeaObjects() {
  const storedTeaObjects = localStorage.getItem(teaLocalStorageKey);
  if (storedTeaObjects) {
    loadTeaObjects(storedTeaObjects);
  } else {
    createTeaObjects();
  }
}

////// Favorites Tab List //////

// check if a tea is favorite'd to add to or remove from the favorites list
function checkFavorites(teaObject) {
  if (teaObject.favorite === false) {
    teaObject.favorite = true;
  } else if (teaObject.favorite === true) {
    teaObject.favorite = false;
  }
  saveTeaObjects();
  updateFavorites();
}

// update favorites tab list and favorites button
function updateFavorites() {
  favoritesTabList.innerHTML = ''; // reset favorite tab list

  for (const teaObject of Tea.teaObjects) {
    const favoriteButton = document.getElementById(`${teaObject.id}`);

    if (teaObject.favorite === true) {
      // add to favorite tab list
      const tabListItem = document.createElement('li');
      favoritesTabList.appendChild(tabListItem);
      tabListItem.textContent = teaObject.name;
      // update favorite button to solid
      if (favoriteButton.classList.contains('fa-heart')) {
        favoriteButton.classList.replace('fa-regular', 'fa-solid');
      }

    } else if (teaObject.favorite === false) {
      // update favorite button to outline
      if (favoriteButton.classList.contains('fa-heart')) {
        favoriteButton.classList.replace('fa-solid', 'fa-regular');
      }
    }
  }
}

// run app
initTeaObjects();
updateFavorites();
