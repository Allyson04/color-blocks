function changeColor(e) {
    let rdmColor = "#" + Math.random().toString(16).substr(2, 6)
    console.log(rdmColor)

    // document.querySelector(".squareTable").style.background = rdmColor
    event.target.style.background = rdmColor
}

function whiteOn() {
    event.target.style.background = "#fff"
}