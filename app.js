// Function to load content into the div#app
function fetchComponent(component) {
    let hej = component + '.html';
    console.log(component);
    console.log(`${hej}`);  // This will log the value of the variable `hej`
    fetch(`${hej}`) // Assuming you have a content.html file
      .then(response => response.text()) // Convert the response to text
      .then(data => {
        // Apply the content to the div#app
        document.getElementById('app').innerHTML = data;
      })
      .catch(error => {
        console.error('Error loading the content:', error);
      });
  }

  // Load 'button.html' as default when the page is loaded
window.addEventListener('load', () => {
    fetchComponent('button'); // This will load button.html by default
});

// Select all links with the class 'nav-link'
const links = document.querySelectorAll('.nav-link');

// Function to set the active class on a clicked link
function setActiveLink(event) {
  // Remove 'active' class from all links
  links.forEach(link => link.classList.remove('active'));

  // Add 'active' class to the clicked link
  event.target.classList.add('active');
}

// Attach event listeners to each link
links.forEach(link => {
  link.addEventListener('click', setActiveLink);
});