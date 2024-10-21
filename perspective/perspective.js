// Register all GSAP Core Plugins
gsap.registerPlugin(CSSRulePlugin, CustomEase, Draggable, EaselPlugin, EasePack, Flip, MotionPathPlugin, Observer, PixiPlugin, ScrollToPlugin, ScrollTrigger, TextPlugin);

// Perspective by mouse position
$(document).mousemove(function(event){
    var xPos = (event.clientX/$(window).width())-0.5,
        yPos = (event.clientY/$(window).height())-0.5,
        box = $('.box'),
        coord = $('.coordinates');
   
   gsap.to(box, 0.6, {
     rotationY: 5 * xPos, 
     rotationX: 5 * yPos,
     ease: Power1.easeOut,
     transformPerspective: 900,
     transformOrigin: 'center'
   });
 });