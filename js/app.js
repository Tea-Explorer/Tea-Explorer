const aLinks = document.querySelectorAll('nav a');

for (let x of aLinks) {
  x.addEventListener('click', function () {
    aLinks.forEach(element => {
      element.classList.remove('active');
    });
    x.classList.add('active');
  });
}
