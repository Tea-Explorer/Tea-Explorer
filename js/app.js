// Check if there's a saved active link in local storage
const activeLink = localStorage.getItem('activeLink');
console.log(activeLink);
const aLinks = document.querySelectorAll('header nav a');

// If there's an active link, add the 'active' class
if (activeLink) {
  const activeElement = document.querySelector(`nav a[data-page="${activeLink}"]`);
  if (activeElement) {
    activeElement.classList.add('active');
  }
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
    console.log(localStorage.getItem('activeLink'));
  });
}
