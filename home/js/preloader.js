// ----------------------------------------------------------------
// `createPreloaderColumns` FUNCTION
// ----------------------------------------------------------------

// Run the preloader as early as possible
window.onload = function () {
    createPreloaderColumns();
    window.addEventListener('resize', createPreloaderColumns);
};

function createPreloaderColumns() {
    const container = document.querySelector('.preloader');
    if (!container) {
        console.error('Preloader container not found!');
        return;
    }

    // Prevent scrolling during preloader animation
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

    // Create a GSAP timeline for better control
    const preloaderTl = gsap.timeline();

    // Phase 1: Animate the background color fading out
    preloaderTl.to(".preloader", {
        backgroundColor: "rgba(255, 0, 0, 0)",  // Fade out red background to transparent
        duration: 1.75,
        ease: "power2.out"
    }, 0); // Start at time 0

// Add logo animation to the timeline, starting at time 0.75
preloaderTl.add(gsap.to(".preloader-logo", {
    rotation: 360,
    scale: 1,
    opacity: 1, // Animate opacity from 0 to 1
    duration: 1,
    ease: "power3.inOut",
    onComplete: () => {
      gsap.to(".preloader-logo", {
        opacity: 0,
        scale: 0,
        duration: 0.5,
        ease: "power3.in",
      });
    },
  }), 0.25);

    // Phase 2: Animate the columns AFTER the background fades
    preloaderTl.to(".preloader-column", {
        scaleY: 0,
        transformOrigin: "top",
        duration: 1,
        stagger: 0.15,
        ease: "power2.out"
    }, "-=0.3");  // Start columns animation slightly before background completes for overlap effect

    // Phase 3: Scale the entire preloader container away
    preloaderTl.to(".preloader", {
        scaleY: 0,
        transformOrigin: "top",
        duration: 0.8,
        ease: "power2.out",
        onComplete: () => {
            document.body.style.overflow = 'auto';
            document.querySelector('.preloader').style.display = 'none';  // Remove preloader completely
        }
    });
}

