// ----------------------------------------------------------------
// `createGridLines` FUNCTION
// ----------------------------------------------------------------

let hasAnimated = false; // Flag to track animation state

function createGridLines(triggerAnimation = false) {  
  const container = document.querySelector('.grid');  
  if (!container) {  
    console.error('Grid container not found!');  
    return;  
  }  
  
  const viewportWidth = window.innerWidth;  
  
  // Determine the number of grid lines based on viewport width  
  let gridLineCount;  
  if (viewportWidth >= 1121) {  
    gridLineCount = 5;  
  } else if (viewportWidth >= 881) {  
    gridLineCount = 4;  
  } else if (viewportWidth >= 601) {  
    gridLineCount = 3;  
  } else {  
    gridLineCount = 2;  
  }  
  
  // Clear existing grid lines  
  container.innerHTML = '';  
  
  // Create and append new grid lines  
  for (let i = 0; i < gridLineCount; i++) {  
    const gridLine = document.createElement('div');  
    gridLine.classList.add('grid-line');  
    if (!triggerAnimation) {  
      gridLine.style.transform = 'scaleY(1)';  
    }  
    container.appendChild(gridLine);  
  }  
  
  // Add animation only on the first page load  
  if (triggerAnimation && !hasAnimated) {  
    gsap.from(".grid-line", {  
      scaleY: 0,  
      transformOrigin: "top",  
      delay: 1.9,  
      duration: 1,  
      stagger: 0.2,  
      ease: "power2.out"  
    });  
    hasAnimated = true; // Prevent future animations
  }  
}  
  
// Ensure the DOM is fully loaded before running the script  
document.addEventListener('DOMContentLoaded', () => {  
  createGridLines(true);  
  window.addEventListener('resize', () => createGridLines(false));  
});

// ----------------------------------------------------------------
// Mobile Menu
// ----------------------------------------------------------------

document.addEventListener('DOMContentLoaded', () => {
  const hamburgerMenuIcon = document.querySelector('.hamburger-menu-icon');
  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileMenuItem = document.querySelector('.mm-item');
  const body = document.body; // Get the body element

  hamburgerMenuIcon.addEventListener('click', () => {
    hamburgerMenuIcon.classList.toggle('active');
    mobileMenu.classList.toggle('active');

    // Toggle no-scroll class on the body to disable/enable scrolling
    body.classList.toggle('no-scroll');
  });
});

// ----------------------------------------------------------------
//JS FUNCTION TO TOGGLE LIGHT AND DARK THEME
// ----------------------------------------------------------------

// Select the toggle button and the root element
const toggleButton = document.getElementById('theme-toggle');
const rootElement = document.documentElement;

// Set the initial theme
rootElement.setAttribute('data-theme', 'dark');

// Add an event listener to toggle the theme
toggleButton.addEventListener('click', () => {
  if (rootElement.getAttribute('data-theme') === 'dark') {
    rootElement.setAttribute('data-theme', 'light');
  } else {
    rootElement.setAttribute('data-theme', 'dark');
  }
});

// ----------------------------------------------------------------
// -------------------------- UTILITY------------------------------
// ----------------------------------------------------------------

if ('ontouchstart' in window) {
  document.querySelectorAll('.element').forEach((element) => {
    element.classList.remove('hover-effect');
  });
}