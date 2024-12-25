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
    .from(".home-heading .say-title", {
    opacity: 0,
    y: 50,
    ease: "elastic.out(1, 0.75)",
    duration: 0.75,
})
    .from(
        ".home-heading .goodbye-title",
        {
            opacity: 0,
            y: 50,
            ease: "elastic.out(1, 0.75)",
            duration: 0.75,
        },
        "<0.1"
    )
    .from(
        ".home-heading .to-title",
        {
            opacity: 0,
            y: 50,
            ease: "elastic.out(1, 0.75)",
            duration: 0.75,
        },
        "<0.1"
    )
    .from(
        ".home-heading .boring-title",
        {
            opacity: 0,
            y: 50,
            ease: "elastic.out(1, 0.75)",
            duration: 0.75,
        },
        "<0.1"
    )
    .from(
        ".home-heading .design-title",
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
            stagger: 0.2,
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
            stagger: 0.2,
        },
        "<0.25"
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
// Philosophy Text Fade Mask Animation
// ---------------------------------------

gsap.from(".text-fade-mask", {
    scrollTrigger: {
        trigger: ".philosophy-wrapper",
        start: "top center",
        end: "bottom center",
        scrub: 2,
        markers: false,
    },
    x: "-57%", // Animate from -57% to 50%
    transformStyle: "preserve-3d",

});



// ---------------------------------------
// Logo Path Bounce on Hover Animation
// ---------------------------------------

const logoPaths = document.querySelectorAll(".logo path");

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
});

// ---------------------------------------
// Customer Logo Scroll Animation
// ---------------------------------------

let logoTl = gsap.timeline({
    scrollTrigger: {
        trigger: ".customer-logo",
        start: "top center",
        toggleActions: "play none none reverse",
        markers: true
    }
});

logoTl.to(".customer-logo", {
    opacity: 0,
    x: 50,
    duration: 0.4,
    display: "none",
    ease: "ease",
})
.fromTo(".customer-logo-2", {
    opacity: 0,
    x: -50,
    display: "none",
},
{
    opacity: 1,
    x: 0,
    duration: 0.4,
    display: "block",
    ease: "ease",
});

