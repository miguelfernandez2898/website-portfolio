gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// Scroll Smoother

let smoother = ScrollSmoother.create({
  wrapper: '#smooth-wrapper',
  content: '#smooth-content',
  smooth: 2,
  normalizeScroll: true, // prevents address bar from showing/hiding on most devices, solves various other browser inconsistencies
  ignoreMobileResize: true, // skips ScrollTrigger.refresh() on mobile resizes from address bar showing/hiding
  effects: true,
  preventDefault: true,
});

gsap.from(".border", {
    opacity: 0,
    duration: 1.5,
    delay: 1,
});

gsap.from(".navbar", {
    opacity: 0,
    duration: 1.5,
    delay: 1,
    y: -50
});


gsap.from(".hero-section .card-title", {
    opacity: 0,
    duration: 1.5,
    delay: 1,
    y: 50
});

gsap.from(".hero-section .card-subtitle", {
    opacity: 0,
    duration: 1.5,
    delay: 1.75,
    y: 50
});

gsap.from(".hero-section .card-text", {
    opacity: 0,
    duration: 1.5,
    delay: 1.75,
    y: 50
});
  
gsap.from(".hero-section .card-footer", {
    opacity: 0,
    duration: 1.5,
    delay: 2.5,
    y: 50
});

gsap.from(".skills-section", {
    opacity: 0,
    duration: 1.5,
    delay: 3,
    y: 50
});