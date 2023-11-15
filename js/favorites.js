'use strict';

const teaLocalStorageKey = 'tea-key';
const favoritesList = document.querySelector('#favoritesList');

// tea data
// [name[0], type[1], imgFile[2], link[3], ID[4]]
const teaDataList = [
  ['Green Tea', 'Green', 'greentea.jpg', '#', 'green'],
  ['Earl Grey Tea', 'Black', 'earl-grey-tea.jpg', '#', 'earl'],
  ['Chamomile Tea', 'Herbal', 'chamomile.jpg', '#', 'chamomile'],
  ['Yerba Mate', 'Herbal', 'yerba-mate-tea.jpg', '#', 'yerba'],
  ['Rooibos', 'Herbal', 'South-African-Rooibos-tea.jpg', '#', 'rooibos'],
  ['Lemon Myrtle Tea', 'Herbal', 'Australian-Lemon-Myrtle-Tea.jpg', '#', 'lemon']
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
  const self = this;
  favoriteButton.addEventListener('click', function () {
    checkFavoritesList(self);
  });
};

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
function checkFavoritesList(teaObject) {
  if (teaObject.favorite === false) {
    teaObject.favorite = true;
    addToFavoritesList(teaObject);
  } else if (teaObject.favorite === true) {
    teaObject.favorite = false;
    removeFromFavoritesList(teaObject);
  }
}

// add tea to favorites list
function addToFavoritesList(teaObject) {
  const listItem = document.createElement('li');
  favoritesList.appendChild(listItem);
  listItem.textContent = teaObject.name;
  listItem.setAttribute('id', `${teaObject.id}-list`);
}

// remove tea from favorites list
function removeFromFavoritesList(teaObject) {

}

// run app
initTeaObjects();
