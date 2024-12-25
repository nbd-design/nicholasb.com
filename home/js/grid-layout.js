// ----------------------------------------------------------------
// `createPreloaderColumns` FUNCTION
// ----------------------------------------------------------------

function createPreloaderColumns() {
  const container = document.querySelector('.preloader');
  if (!container) {
    console.error('Preloader container not found!');
    return;
  }

  // Disable scroll
  document.body.style.overflow = 'hidden';

  const viewportWidth = window.innerWidth;

  // Determine the number of preloader columns based on viewport width
  let columnCount;
  if (viewportWidth >= 1121) {
    columnCount = 6; // XL screens
  } else if (viewportWidth >= 881) {
    columnCount = 5; // Large screens
  } else if (viewportWidth >= 601) {
    columnCount = 4; // Medium screens
  } else {
    columnCount = 3; // Small screens
  }

  // Clear existing preloader columns
  const existingColumns = container.querySelectorAll('.preloader-column');
  existingColumns.forEach(column => column.remove());
  

  // Create and append new preloader columns
  for (let i = 0; i < columnCount; i++) {
    const column = document.createElement('div');
    column.classList.add('preloader-column', `preloader-column-${i + 1}`);
    container.appendChild(column);
  }

  // Add animation to scale preloader columns vertically
  gsap.to(".preloader-column", {
    scaleY: 0,
    transformOrigin: "top",
    delay: 1.5,
    duration: 1,
    stagger: 0.15,
    ease: "power2.out"
  });

  // Add animation to scale the main .preloader container to 0
  gsap.to(".preloader", {
    scaleY: 0,
    transformOrigin: "top",
    delay: 2,
    duration: 0.8,
    ease: "power2.out",
    onComplete: () => {
      // Enable scroll
      document.body.style.overflow = 'auto';
    }
  });
}

// Ensure the DOM is fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
  createPreloaderColumns();
  window.addEventListener('resize', createPreloaderColumns);
});



// ----------------------------------------------------------------
// `createGridLines` FUNCTION
// ----------------------------------------------------------------

function createGridLines() {
  const container = document.querySelector('.grid');
  if (!container) {
    console.error('Grid container not found!');
    return;
  }

  const viewportWidth = window.innerWidth;

  // Determine the number of grid lines based on viewport width
  let gridLineCount;
  if (viewportWidth >= 1121) {
    gridLineCount = 5; // XL screens
  } else if (viewportWidth >= 881) {
    gridLineCount = 4; // Large screens
  } else if (viewportWidth >= 601) {
    gridLineCount = 3; // Medium screens
  } else {
    gridLineCount = 2; // Small screens
  }

  // Clear existing grid lines
  container.innerHTML = '';

  // Create and append new grid lines
  for (let i = 0; i < gridLineCount; i++) {
    const gridLine = document.createElement('div');
    gridLine.classList.add('grid-line');
    container.appendChild(gridLine);
  }

  // Add animation to scale grid lines vertically
  gsap.from(".grid-line", {
    scaleY: 0,
    transformOrigin: "top",
    delay: 1.9,
    duration: 1,
    stagger: 0.2,
    ease: "power2.out"
  });
}

// Ensure the DOM is fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
  createGridLines();
  window.addEventListener('resize', createGridLines);
});


// ----------------------------------------------------------------
// Mobile Menu
// ----------------------------------------------------------------

const hamburgerMenuIcon = document.querySelector('.hamburger-menu-icon');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuItem = document.querySelector('.mm-item');
const body = document.body; // Get the body element

hamburgerMenuIcon.addEventListener('click', () => {
  hamburgerMenuIcon.classList.toggle('active');
  mobileMenu.classList.toggle('active');
  mobileMenuItem.classList.toggle('active');

  // Toggle no-scroll class on the body to disable/enable scrolling
  body.classList.toggle('no-scroll');
});


// ----------------------------------------------------------------
//JS FUNCTION TO TOGGLE LIGHT AND DARK THEME
// ----------------------------------------------------------------


// Select the toggle button and the root element
const toggleButton = document.getElementById('theme-toggle');
const rootElement = document.documentElement;

// Add an event listener to toggle the theme
toggleButton.addEventListener('click', () => {
  if (rootElement.getAttribute('data-theme') === 'dark') {
    rootElement.setAttribute('data-theme', 'light');
  } else {
    rootElement.setAttribute('data-theme', 'dark');
  }
});




// ----------------------------------------------------------------
// ----------------------------------------------------------------