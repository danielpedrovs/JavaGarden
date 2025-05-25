// Find Partner Form Interaction
document.getElementById('find-partner-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const postcode = document.getElementById('postcode').value.trim();
    alert(`Searching for partners near: ${postcode}`);
    // Here, you could integrate an API or backend service for searching local partners
  });

  // Get elements
const hamburgerMenu = document.getElementById('hamburger-menu');
const headerButtons = document.getElementById('header-buttons');

// Toggle the active class on click
hamburgerMenu.addEventListener('click', function() {
  headerButtons.classList.toggle('active');
});