'use strict';

const manageFavoritesList = document.getElementById('manageFavoritesList');

////// Manage Favorites //////

// create list of favorite teas in manage favorites
function renderManageFavoritesList() {
  manageFavoritesList.innerHTML = '';

  for (const teaObject of Tea.teaObjects) { // eslint-disable-line
    if (teaObject.favorite) {
      // container for image and description
      const teaItem = document.createElement('div');
      manageFavoritesList.appendChild(teaItem);
      teaItem.classList.add('manageFavoritesListItem');
      // image
      const teaImage = document.createElement('img');
      teaItem.appendChild(teaImage);
      teaImage.setAttribute('src', `${teaObject.imgSrc}`);
      // container for tea description
      const teaDescription = document.createElement('div');
      teaItem.appendChild(teaDescription);
      teaDescription.classList.add('manageFavoritesListItemDescription');
      // name
      const teaName = document.createElement('dt');
      teaDescription.appendChild(teaName);
      teaName.textContent = teaObject.name;
      // type
      const teaType = document.createElement('dd');
      teaDescription.appendChild(teaType);
      teaType.textContent = `Type: ${teaObject.type}`;
      // link
      const teaLink = document.createElement('dd');
      teaDescription.appendChild(teaLink);
      const teaAnchor = document.createElement('a');
      teaLink.appendChild(teaAnchor);
      teaAnchor.textContent = 'Learn More';
      teaAnchor.setAttribute('href', `${teaObject.link}`);
      // remove from favorites button
      const teaRemove = document.createElement('i');
      teaDescription.appendChild(teaRemove);
      teaRemove.classList.add('fa-heart-circle-xmark');
      teaRemove.classList.add('fa-solid');
      teaRemove.classList.add('fa-xl');
    }
  }
}

// listen for favorite button changes on page to update manage favorites list
function updateManageFavoritesList() {
  for (const teaObject of Tea.teaObjects) { // eslint-disable-line
    const favoriteButton = document.getElementById(teaObject.id);
    if (favoriteButton) {
      favoriteButton.addEventListener('click', renderManageFavoritesList);
    }
  }
}


// run app
renderManageFavoritesList();
updateManageFavoritesList();
