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
  }
  
  // Ensure the DOM is fully loaded before running the script
  document.addEventListener('DOMContentLoaded', () => {
    createGridLines();
    window.addEventListener('resize', createGridLines);
  });
  