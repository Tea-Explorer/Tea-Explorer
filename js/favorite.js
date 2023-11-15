'use strict';

const manageFavoritesList = document.getElementById('manageFavoritesList');

////// Manage Favorites //////

// create list of favorite teas in manage favorites
function renderManageFavoritesList() {
  for (const teaObject of Tea.teaObjects) {
    if (teaObject.favorite) {
      const teaItem = document.createElement('div');
      manageFavoritesList.appendChild(teaItem);
      teaItem.classList.add('manageFavoritesListItem');
      // image
      const teaImage = document.createElement('img');
      teaItem.appendChild(teaImage);
      teaImage.setAttribute('src', `${teaObject.imgSrc}`);
      console.log(teaObject.imgSrc);
      // name
      const teaName = document.createElement('dt');
      teaItem.appendChild(teaName);
      teaName.textContent = teaObject.name;
      // type
      const teaType = document.createElement('dd');
      teaItem.appendChild(teaType);
      teaType.textContent = `Type: ${teaObject.type}`;
      // link
      const teaLink = document.createElement('dd');
      teaItem.appendChild(teaLink);
      const teaAnchor = document.createElement('a');
      teaLink.appendChild(teaAnchor);
      teaAnchor.textContent = 'Learn More';
      teaAnchor.setAttribute('href', `${teaObject.link}`);
    }
  }
}

// run app
renderManageFavoritesList();
