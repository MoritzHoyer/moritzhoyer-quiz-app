// Select DOM elements
const bodyElement = document.querySelector("[data-js=body]");
const darkModeButton = document.querySelector('[data-js="switch"]');

// Toggle dark mode when button is clicked
darkModeButton.addEventListener("click", () => {
  darkModeButton.classList.toggle("active");
  bodyElement.classList.toggle("dark-mode");
});
