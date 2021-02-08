const div = document.querySelector(".squareTable")

div.addEventListener("mouseover", (e) => changeColor(e))
div.addEventListener("mouseout", (e) => whiteOn(e))

function changeColor(e) {
    let rdmColor = "#" + Math.random().toString(16).substr(2, 6)
    console.log(rdmColor)

    // document.querySelector(".squareTable").style.background = rdmColor
    event.target.style.background = rdmColor
}

function whiteOn() {
    event.target.style.background = "#fff"
}