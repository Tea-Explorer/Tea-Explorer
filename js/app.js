// Check if there's a saved active link in local storage
const activeLink = localStorage.getItem('activeLink');
// Get all nav links
const aLinks = document.querySelectorAll('#topHeader nav a');
// Get home page
const home = document.querySelector('nav a[data-page="index"]');

// If there's an active link, add the 'active' class
if (activeLink) {
  const activeElement = document.querySelector(`nav a[data-page="${activeLink}"]`);
  if (activeElement) {
    activeElement.classList.add('active');
  }
} else {
  home.classList.add('active');
}

// Add click event listener to update active link
for (let x of aLinks) {
  x.addEventListener('click', function () {
    aLinks.forEach(element => {
      element.classList.remove('active');
    });
    x.classList.add('active');

    // Save the active link to local storage
    localStorage.setItem('activeLink', x.getAttribute('data-page'));
  });
}

const logo = document.querySelector('#logoContainer img');

logo.addEventListener('click', function() {
  aLinks.forEach(element => {
    element.classList.remove('active');
  });
  home.classList.add('active');
  localStorage.setItem('activeLink', 'index');
});
