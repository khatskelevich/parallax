window.addEventListener('scroll', _ => {
    document.body.style.setProperty('--scrollTop', `${window.scrollY}px`)
})

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

ScrollSmoother.create({
    smooth: 1,
    effects: true,
    smoothTouch: 0.1,
})
