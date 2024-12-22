//GSAP Animations start after everything is loaded

document.addEventListener("DOMContentLoaded", (event) => {
    //gsap code goes here

    gsap.registerPlugin(ScrollTrigger);

    // HERO SCROLL ANIMATION
    // 3D rotation and z transform of grid on scroll

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


    // HERO SCROLL ANIMATION
    // 3D rotation and z transform of grid on scroll

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




// APPLY SCROLL TRIGGER PARALLAX WITH GSAP BY ADDING [data-speed] ATTRIBUTE IN HTML

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

introTl.from(".home-heading .say-title", {
    opacity: 0,
    y: 50,
    ease: "elastic.out(1, 0.75)",
    duration: 0.5,
})
    .from(
        ".home-heading .goodbye-title",
        {
            opacity: 0,
            y: 50,
            ease: "elastic.out(1, 0.75)",
            duration: 0.5,
        },
        "<0.1"
    )
    .from(
        ".home-heading .to-title",
        {
            opacity: 0,
            y: 50,
            ease: "elastic.out(1, 0.75)",
            duration: 0.5,
        },
        "<0.1"
    )
    .from(
        ".home-heading .boring-title",
        {
            opacity: 0,
            y: 50,
            ease: "elastic.out(1, 0.75)",
            duration: 0.5,
        },
        "<0.1"
    )
    .from(
        ".home-heading .design-title",
        {
            opacity: 0,
            y: 50,
            ease: "elastic.out(1, 0.75)",
            duration: 0.5,
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
    );

