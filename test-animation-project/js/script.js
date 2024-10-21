
//GSAP Animations start after everything is loaded

document.addEventListener("DOMContentLoaded", (event) => {
    //gsap code goes here

    gsap.registerPlugin(ScrollTrigger);

    // EMBLEM ROTATING ANIMATION ON SCROLL
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: "body",
            start: "top top",
            end: "bottom bottom",
            // markers: true,
            scrub: true,
            // pin: true,
            // toggleActions: "restart pause reverse pause"
        },
    });

    tl.to(".emblem-trigger", {
        rotation: 360,
        duration: 2,
        ease: 'none',
    });

    // HERO BACKGROUND TILE ANIMATION
    // Hero background tiles fade in and out animation
    gsap.timeline().from(".item-121", {
        opacity: 0,
        duration: 0.5,
        delay: 1,
        yoyo: true,
        repeat: -1,
        repeatDelay: 4.25,
    });

    gsap.timeline().from(".item-23", {
        opacity: 0,
        duration: 0.5,
        delay: 1.25,
        yoyo: true,
        repeat: -1,
        repeatDelay: 4,
    });

    gsap.timeline().from(".item-85", {
        opacity: 0,
        duration: 0.5,
        delay: 1.5,
        yoyo: true,
        repeat: -1,
        repeatDelay: 3.75,
    });

    gsap.timeline().from(".item-45", {
        opacity: 0,
        duration: 0.5,
        delay: 1.75,
        yoyo: true,
        repeat: -1,
        repeatDelay: 3.5,
    });

    gsap.timeline().from(".item-91", {
        opacity: 0,
        duration: 0.5,
        delay: 2,
        yoyo: true,
        repeat: -1,
        repeatDelay: 3.25,
    });

    gsap.timeline().from(".item-51", {
        opacity: 0,
        duration: 0.5,
        delay: 2.25,
        yoyo: true,
        repeat: -1,
        repeatDelay: 3,
    });

});


// HERO SCROLL ANIMATION
// 3D rotation and z transform of grid on scroll

let tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".grid-wrapper",
        start: "top top",
        end: "center top",
        scrub: true,
    },
});

tl.to(".grid-wrapper", {
    duration: 2,
    rotationX: -8,
    z: -50,
});


// HERO SCROLL ANIMATION
// Background grid blur filter on scroll

console.clear();
gsap.set(".grid-wrapper", { 
    filter: "blur(0px)", 
});

gsap.to(".grid-wrapper", {
    filter: "blur(5px)",
    scrollTrigger: {
        trigger: ".grid-wrapper",
        start: "10% top",
        end: "bottom top",
        scrub: true,
        ease: "power4",
    }
});


// Scroll Trigger Parallax with GSAP
// apply parallax effect to any element with a data-speed attribute

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

//EMBLEM ANIMATE IN ON-LOAD--->
gsap.set(".emblem-trigger", {
    scale: 0,
    opacity: 0,
});

gsap.to(".emblem-trigger", {
    scale: 1,
    opacity: 1,
    ease: 'back.inOut',
    delay: 3,
});


//WITH Timelines (cleaner, more versatile)
// let introTl = gsap.timeline({delay: 0.75});
gsap.from(".grid-parent-container", {filter: "blur(5px)", rotationX: -16, opacity: 1, duration: 2, delay: 0.1, ease: 'back.inOut'});
gsap.from(".say-title", {x: 100, opacity: 0, duration: 0.4, delay: 1, ease: 'back.inOut'});
gsap.from(".goodbye-title", {x: 100, opacity: 0, duration: 0.4, delay: 1.1, ease: 'back.inOut'});
gsap.from(".to-title", {x: 100, opacity: 0, duration: 0.4, delay: 1.2, ease: 'back.inOut'});
gsap.from(".boring-title", {x: 100, opacity: 0, duration: 0.4, delay: 1.3, ease: 'back.inOut'});
gsap.from(".period-title", {scale: 0, opacity: 0, duration: 0.5, delay: 1.4, ease: 'back.inOut'});
gsap.from(".services", {y: 100, opacity: 0, duration: 0.5, delay: 2.5, ease: 'back.inOut'});





// FUNCTION TO CREATE GRID ITEMS
// Create hero backgorund grid containers

var container = document.querySelector('.grid-parent-container')

for (var i = 0; i < 128; i++) {
    var el = document.createElement('div')
    el.classList.add('item-' + (i + 1))
    container.appendChild(el)
}

console.log(container.children.length) // 128



// 3D TRANSFORM ON POINTER MOVE

const main = document.querySelector("body");

gsap.set("main", { perspective: 650 });

const outerRX = gsap.quickTo(".grid-wrapper", "rotationX", { ease: "power3" });
const outerRY = gsap.quickTo(".grid-wrapper", "rotationY", { ease: "power3" });


main.addEventListener("pointermove", (e) => {
  outerRX(gsap.utils.interpolate(15, -15, e.y / window.innerHeight));
  outerRY(gsap.utils.interpolate(-15, 15, e.x / window.innerWidth));
});

main.addEventListener("pointerleave", (e) => {
  outerRX(0);
  outerRY(0);
});