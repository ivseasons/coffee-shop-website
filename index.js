const tl = gsap.timeline();
const heroImageOne = document.querySelector('.hero-image1');


function heroAnimation() {
    const width = window.matchMedia("(max-width: 950px)");

    if(width.matches) {
        tl.from('.hero-logo-img', {scale: 1.25, duration: 1}, "+=3")
    } else {
        tl.from('.hero-logo-img', {scale: 1.5, x: 400, duration: 1}, "+=3")
    }
}
heroAnimation()
tl.from('.animate, .navbar', {duration: 2, opacity: 0}, "-=0.5" )

heroImageOne.addEventListener('mouseover', function(){
    tl.to('.hero-image1', {opacity: 0, duration: 1.5})
        .to('.hero-image2', {opacity: 0.8, duration: 1.5}, "-=1")
})

heroImageOne.addEventListener('mouseout', function(){
    tl.to('.hero-image1', {opacity: 0.8, duration: 1.5})
        .to('.hero-image2', {opacity: 0, duration: 1.5}, "-=1")
})

/* Scroll Trigger */

gsap.from('.stagger-text', {
    scrollTrigger: {
        trigger: '.info-text',
        start: 'top center'
    },
    y: -100,
    duration: 1,
    opacity: 0,
    stagger: 0.5
})

gsap.from('.stagger-img', {
    scrollTrigger: {
        trigger: '.info-images',
        start: 'top center'
    },
    duration: 1.5,
    x: -100,
    opacity: 0,
    stagger: 0.5
})
           
