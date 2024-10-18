
//Box GSAP animation

document.addEventListener("DOMContentLoaded", (event) => {
    //gsap code goes here
   
    gsap.registerPlugin(ScrollTrigger);

    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: "body",
            start: "top top",
            end: "bottom bottom",
            markers: true,
            scrub: true,
            // pin: true,
            // toggleActions: "restart pause reverse pause"
        },
    });

    tl.to(".emblem-trigger", {
        rotation: 360,
        duration: 2,
        ease: 'none',
    })

});