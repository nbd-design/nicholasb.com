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


gsap.from(".preloader-logo", {
    opacity: 0,
    rotation: -180,
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
});

