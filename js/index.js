window.addEventListener('scroll', _ => {
    document.body.style.cssText += `--scrollTop=${ window.scrollY }px`
})
