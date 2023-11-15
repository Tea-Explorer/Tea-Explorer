'use strict';

const teaLocalStorageKey = 'tea-key';
const favoritesTabList = document.querySelector('#favoritesList');

// tea data
// [name[0], type[1], imgFile[2], link[3], ID[4]]
const teaDataList = [
  ['Japanese Green Tea', 'Green', 'greentea.jpg', '#', 'green'],
  ['Earl Grey Tea', 'Black', 'earl-grey-tea.jpg', '#', 'earl'],
  ['Chamomile Tea', 'Herbal', 'chamomile.jpg', '#', 'chamomile'],
  ['Yerba Mate', 'Herbal', 'yerba-mate-tea.jpg', '#', 'yerba'],
  ['South African Rooibos', 'Herbal', 'South-African-Rooibos-tea.jpg', '#', 'rooibos'],
  ['Australian Lemon Myrtle Tea', 'Herbal', 'Australian-Lemon-Myrtle-Tea.jpg', '#', 'lemon']
];

////// Tea objects //////

// Tea constructor function
function Tea(name, type, imgFile, link, id, favorite = false) {
  this.name = name;
  this.type = type;
  this.imgSrc = `img/assets/${imgFile}`;
  this.link = link;
  this.id = id;
  this.favorite = favorite;
  this.favoriteButtonListener = this.favoriteButtonListener();
}
Tea.teaObjects = [];

// Tea object methods
Tea.prototype.favoriteButtonListener = function () { // favorite button click event listener
  const favoriteButton = document.getElementById(`${this.id}`);
  favoriteButton.addEventListener('click', updateFavorites);
}

// create tea instances
function createTeaObjects() {
  for (const teaData of teaDataList) {
    const currentTea = new Tea(teaData[0], teaData[1], teaData[2], teaData[3], teaData[4]);
    Tea.teaObjects.push(currentTea);
  }
}

// load tea objects from local storage
function loadTeaObjects(storedTeaObjects) {
  const TeaObjects = JSON.parse(storedTeaObjects);
  for (const TeaObject of TeaObjects) {
    const currentTeaObject = new Tea(TeaObject.name, TeaObject.type, TeaObject.imgFile, TeaObject.link, TeaObject.id, TeaObject.favorite);
    Tea.teaObjects.push(currentTeaObject);
  }
}

// Save tea objects to local storage
function saveTeaObjects() { //eslint-disable-line
  localStorage.removeItem(teaLocalStorageKey);
  localStorage.setItem(teaLocalStorageKey, JSON.stringify(Tea.teaObjects));
}

// initialize tea objects from local storage or create them
function initTeaObjects() {
  const storedTeaObjects = localStorage.getItem(teaLocalStorageKey);
  if (storedTeaObjects) {
    loadTeaObjects();
  } else {
    createTeaObjects();
  }
}

////// Favorites List //////

// check if a tea is favorite'd to add to or remove from the favorites list
// function checkFavorites(teaObject) {
//   if (teaObject.favorite === false) {
//     teaObject.favorite = true;
//     updateFavorites();
//   } else if (teaObject.favorite === true) {
//     teaObject.favorite = false;
//     updateFavorites();
//   }

// add tea to favorites list
// function addToFavorites(teaObject) {
//   const tabListItem = document.createElement('li');
//   favoritesTabList.appendChild(tabListItem);
//   tabListItem.textContent = teaObject.name;
//   tabListItem.setAttribute('id', `${teaObject.id}-tab-list`);
// }

// remove tea from favorites list
// function removeFromFavorites(teaObject) {
//   const tabListItem = document.getElementById(`${teaObject.id}-tab-list`);
//   favoritesTabList.removeChild(tabListItem);
// }

// update favorites tab list and favorites button
function updateFavorites() {
  favoritesTabList.innerHTML = '';

  for (const teaObject of Tea.teaObjects) {
    const favoriteButton = document.getElementById(`${teaObject.id}`);

    if (teaObject.favorite === false) {
      teaObject.favorite === true;
      // add to favorite tab list
      const tabListItem = document.createElement('li');
      favoritesTabList.appendChild(tabListItem);
      tabListItem.textContent = teaObject.name;
      tabListItem.setAttribute('id', `${teaObject.id}-tab-list`);
      // update favorite button to solid
      // favoriteButton.classList.remove('fa-regular');
      // favoriteButton.classList.add('fa-solid');
      favoriteButton.classList.replace('fa-regular', 'fa-solid');

    } else if (teaObject.favorite === true) {
      teaObject.favorite = false;
      // add to favorite tab list
      const tabListItem = document.getElementById(`${teaObject.id}-tab-list`);
      favoritesTabList.removeChild(tabListItem);
      // update favorite button to outline
      // favoriteButton.classList.remove('fa-solid');
      // favoriteButton.classList.add('fa-regular');
      favoriteButton.classList.replace('fa-solid', 'fa-regular');
    }
  }
}

// run app
initTeaObjects();
updateFavorites();
