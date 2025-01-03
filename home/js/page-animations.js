// -------------------------------------------------
// GSAP Animations start after everything is loaded
// -------------------------------------------------

document.addEventListener("DOMContentLoaded", (event) => {
    //gsap code goes here

    gsap.registerPlugin(ScrollTrigger);

    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".case-study-wrapper",
            start: "top 75%",
            end: "bottom -200px",
            // markers: true,
            scrub: 1,
        },
    });

    tl.to(".case-study-col", { duration: 4, y: 0 });


    let stl = gsap.timeline({
        scrollTrigger: {
            trigger: ".services-wrapper",
            start: "bottom 120%",
            end: "bottom -400px",
            // markers: true,
            scrub: 1,
        },
    });

    stl.to(".sc", {
        duration: 4,
        y: 0,
    });

}); //Do not delete

// ---------------------------------------------------------------------------------
// APPLY SCROLL TRIGGER PARALLAX WITH GSAP BY ADDING [data-speed] ATTRIBUTE IN HTML
// ---------------------------------------------------------------------------------

gsap.to("[data-speed]", {
    y: (i, el) => (1 - parseFloat(el.getAttribute("data-speed"))) * ScrollTrigger.maxScroll(window),
    ease: "none",
    scrollTrigger: {
        start: 0,
        end: "max",
        invalidateOnRefresh: true,
        scrub: 0
    }
});

// ---------------------------------
// Preloader Logo Animation
// ---------------------------------

gsap.from(".preloader-logo", {
    opacity: 0,
    rotation: -270,
    scale: 0,
    duration: 1,
    ease: "power3.inOut",
    /**
     * Called when the animation is complete.
     * Hides the preloader logo after animation is done.
     */
    onComplete: () => {
        gsap.to(".preloader-logo", {
            opacity: 0,
            scale: 0,
            duration: 0.5,
            ease: "power3.in",
        });
    },
});

// ---------------------------------
// Hero Text Animation
// ---------------------------------

const introTl = gsap.timeline({ delay: 2.25 });

introTl.from(
    ".nav",
    {
        opacity: 0,
        y: -50,
        ease: "easeOut",
        duration: 0.5,
    })
    .from(".home-heading .title-01", {
    opacity: 0,
    y: 50,
    ease: "elastic.out(1, 0.75)",
    duration: 0.75,
})
    .from(
        ".home-heading .title-02",
        {
            opacity: 0,
            y: 50,
            ease: "elastic.out(1, 0.75)",
            duration: 0.75,
        },
        "<0.1"
    )
    .from(
        ".home-heading .title-03",
        {
            opacity: 0,
            y: 50,
            ease: "elastic.out(1, 0.75)",
            duration: 0.75,
        },
        "<0.1"
    )
    .from(
        ".home-heading .title-04",
        {
            opacity: 0,
            y: 50,
            ease: "elastic.out(1, 0.75)",
            duration: 0.75,
        },
        "<0.1"
    )
    .from(
        ".home-heading .title-05",
        {
            opacity: 0,
            y: 50,
            ease: "elastic.out(1, 0.75)",
            duration: 0.75,
        },
        "<0.1"
    )
    .from(
        ".home-heading .title-06",
        {
            opacity: 0,
            y: 50,
            ease: "elastic.out(1, 0.75)",
            duration: 0.75,
        },
        "<0.1"
    )
    .from(
        ".home-heading .title-07",
        {
            opacity: 0,
            y: 50,
            ease: "elastic.out(1, 0.75)",
            duration: 0.75,
        },
        "<0.1"
    )
    .from(
        ".home-heading .period-title",
        {
            scale: 0,
            opacity: 0,
            y: 50,
            ease: "elastic.out(1, 0.75)",
            duration: 0.5,
        },
        "<0.1"
    )
    .fromTo(
        ".btn .btn-click .btn-line.left",
        {
            scale: 0,
            height: 0,
        },
        {
            scale: 1,
            height: "100%",
            transformOrigin: "top",
            ease: "none",
            duration: .2,
            stagger: 0,
        },
        "<0.1" 
    )
    .from(
        ".btn-content",
        {
            opacity: 0,
            delay: 0.5,
            x: -20,
            ease: "power2.out",
            duration: 0.75,
            stagger: 0,
        },
        "<0.1" 
    )
    .from(
        ".btn-content i",
        {
            opacity: 0,
            delay: 0,
            x: -20,
            ease: "power2.out",
            duration: 1,
            stagger: 0,
        },
        ">-0.75"
    )
    .from(
        ".intro-content",
        {
            opacity: 0,
            x: 50,
            ease: "easyEase",
            duration: 0.5,
        },
        ">-0.5"
    );

// ---------------------------------------
// Logo Path Bounce on Hover Animation
// ---------------------------------------

const logoPaths = document.querySelectorAll(".logo path");
const lastPath = logoPaths[logoPaths.length - 1];
let colorIndex = 0;
const colors = [
    getComputedStyle(document.documentElement).getPropertyValue("--secondary-color"),
    getComputedStyle(document.documentElement).getPropertyValue("--tertiary-color"),
    getComputedStyle(document.documentElement).getPropertyValue("--primary-color"),
];

document.querySelector(".logo").addEventListener("mouseenter", () => {
    logoPaths.forEach((path, index) => {
        gsap.to(path, {
            y: -8, // Bounce up by 10px
            duration: 0.4,
            ease: "easeOut",
            delay: index * 0.1, // Stagger effect
            onComplete: () => {
                gsap.to(path, {
                    y: 0, // Return to the original position
                    duration: 0.2,
                    ease: "elastic.out(1, 2)",
                });
            }
        });
    });
    
    // Rotate the fill color of the last path
    gsap.to(lastPath, {
        fill: colors[colorIndex],
        duration: 0.8,
        ease: "power2.inOut",
        onComplete: () => {
            colorIndex = (colorIndex + 1) % colors.length;
        }
    });
});

// ---------------------------------------
// Customer Logo Scroll Animation
// ---------------------------------------

let logoTl = gsap.timeline({
    scrollTrigger: {
        trigger: ".customer-logo",
        start: "top center",
        toggleActions: "play none none reverse",
        ease: "power1.inOut"
        // markers: true, // Commented out for production
    }
});

logoTl.to(".customer-logo", {
    opacity: 0,
    x: 50,
    duration: 0.4,
    display: "none",
    stagger: 0.1,
})
.fromTo(".customer-logo-2", {
    opacity: 0,
    x: -50,
    display: "none"
},
{
    opacity: 1,
    x: 0,
    duration: 0.4,
    display: "block",
    stagger: 0.05,
}, "-=0.1");

// ---------------------------------------
// Nav Scroll Out and In Animation
// ---------------------------------------

let lastScrollTop = 0;
const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  if (Math.abs(scrollTop - lastScrollTop) > window.innerHeight * 0.6) {
    if (scrollTop > lastScrollTop) {
      // Scrolling down
      gsap.to(nav, {
        y: -100, // Hide nav
        duration: 0.4,
        ease: 'power1.inOut'
      });
    } else {
      // Scrolling up
      gsap.to(nav, {
        y: 0, // Show nav
        duration: 0.4,
        ease: 'power1.inOut'
      });
    }
    lastScrollTop = scrollTop;
  }
});

// ---------------------------------------
// NBD Monogram Animation
// ---------------------------------------

document.addEventListener("DOMContentLoaded", () => {
    const svg = document.querySelector(".nbd-monogram");
    const paths = svg.querySelectorAll('path');
    
    // Set custom properties for each path length
    paths.forEach(path => {
      const pathLength = path.getTotalLength() / 3;
      path.style.setProperty('--path-length', pathLength);  // Store path length for each path
      path.style.strokeDasharray = pathLength;  // Set the dash array to the path length to hide the stroke
    });

  gsap.to(paths, {
    scrollTrigger: {
        trigger: ".philosophy-wrapper",
        start: "top center",
        end: "bottom 75%",
        scrub: 1.5,
        markers: false,
    },
    strokeDashoffset: 0,  // Animate the stroke to reveal
    strokeDasharray: "var(--path-length)",
    stroke: "rgba(225, 6, 0, 0.5)",
    fill: "rgba(163, 163, 163, 0.02)",
    ease: "none",
});
});

// ---------------------------------------
// Philosophy Text Fade Animation
// ---------------------------------------

gsap.from(".col-philosophy", {
    scrollTrigger: {
        trigger: ".philosophy-wrapper",
        start: "top 35%",
        end: "bottom 75%",
        markers: false,
    },
            opacity: 0,
            y: 100,
            ease: "easyEase",
            duration: 1.5,

});

// ---------------------------------------
// Selection Color Change Function
// ---------------------------------------

let isSelecting = false;

document.addEventListener("selectionchange", () => {
    const selection = window.getSelection();
    const selectedText = selection.toString();

    if (!isSelecting && selectedText) {
        // User starts selecting text
        isSelecting = true;
    } else if (isSelecting && !selectedText) {
        // User has completed and deselected text
        const colors = [
            getComputedStyle(document.documentElement).getPropertyValue("--primary-color").trim(),
            getComputedStyle(document.documentElement).getPropertyValue("--secondary-color").trim(),
            getComputedStyle(document.documentElement).getPropertyValue("--tertiary-color").trim()
        ];

        const currentColor = getComputedStyle(document.documentElement).getPropertyValue("--selection-color").trim();
        const nextColor = colors[(colors.indexOf(currentColor) + 1) % colors.length];
        document.documentElement.style.setProperty("--selection-color", nextColor);

        isSelecting = false;
    }
});

// ---------------------------------------
// Change Word Animation
// ---------------------------------------

// Define the list of words and colors  
const words = ["businesses.", "startups.", "entreprenuers.", "non-profits."];  
const wordColors = ["var(--primary-color)", "var(--secondary-color)", "var(--tertiary-color)"];  
  
// Initialize variables  
let wordIndex = 0;  
let wordColorIndex = 0;  
let isTyping = false;  
  
// Get the change word element  
const changeWordElement = document.querySelector(".change-word");  
  
// Function to type the word  
function typeWord(word) {  
   let typedWord = "";  
   const typeInterval = setInterval(() => {  
      if (typedWord.length < word.length) {  
        typedWord += word[typedWord.length];  
        changeWordElement.textContent = typedWord;  
      } else {  
        clearInterval(typeInterval);  
        setTimeout(() => {  
           backspaceWord(word);  
        }, 1075);  
      }  
   }, 125);  
}  
  
// Function to backspace the word  
function backspaceWord(word) {  
   let typedWord = word;  
   const backspaceInterval = setInterval(() => {  
      if (typedWord.length > 0) {  
        typedWord = typedWord.substring(0, typedWord.length - 1);  
        changeWordElement.textContent = typedWord;  
      } else {  
        clearInterval(backspaceInterval);  
        changeWord();  
      }  
   }, 75);  
}  
  
// Function to change the word  
function changeWord() {  
   wordIndex = (wordIndex + 1) % words.length;  
   wordColorIndex = (wordColorIndex + 1) % wordColors.length;  
   changeWordElement.style.color = wordColors[wordColorIndex];  
   typeWord(words[wordIndex]);  
}  
  
// Start typing the first word  
setTimeout(() => {  
   changeWordElement.style.color = wordColors[wordColorIndex];  
   typeWord(words[wordIndex]);  
}, 2500);


// ---------------------------------------
// Case Study Hover Color Change
// ---------------------------------------

// Rotate through different background colors on hover state
let bgColors = [  
    "var(--primary-color)",  
    "var(--secondary-color)",  
    "var(--tertiary-color)",  
];  
let bgIndex = 0;  
  
document.querySelectorAll(".case-study-card").forEach(card => {  
    card.addEventListener("mouseover", () => {  
        card.style.setProperty("--hover-bg-color", bgColors[bgIndex]);  
        bgIndex = (bgIndex + 1) % bgColors.length;  
    });  
});

