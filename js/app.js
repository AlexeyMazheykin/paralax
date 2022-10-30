
const body = document.querySelector("body")

window.addEventListener("scroll", e=> {
    document.body.style.cssText = `--scrollTop: ${e.currentTarget.scrollY}px`
})
function aaa () {
    console.log(this)
}
aaa()