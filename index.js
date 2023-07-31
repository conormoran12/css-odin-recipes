const buttons = document.querySelectorAll("button")

function onHover(e, bool) {
    if (bool == true) {
        e.style.backgroundColor = "#CCCCCC"
    } else {
        e.style.backgroundColor = "#FFFFFF"
    }
}

buttons.forEach(e => {

    e.addEventListener("mouseover", function() {
        onHover(e, true)
    })

    e.addEventListener("mouseout", function() {
        onHover(e, false)
    })
})