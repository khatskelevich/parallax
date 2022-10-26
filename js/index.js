window.addEventListener('scroll', _ => {
    document.body.style.setProperty('--scrollTop', `${ window.scrollY }px`)
})
