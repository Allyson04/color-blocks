function changeColor(e) {
    let rdmColor = "#" + Math.random().toString(16).substr(2, 6)
    console.log(rdmColor)

    // document.querySelector(".squareTable").style.background = rdmColor
    event.target.style.background = rdmColor
}

function whiteOn() {
    event.target.style.background = "#fff"
}

function createSquareBlocks(squareSide) {
    templateBlock = `
    <td onmouseover="changeColor()" onmouseout="whiteOn()" class="squareTable"></td>
    `

    table = document.createElement("table")
    document.querySelector("main").appendChild(table)
    
    createTableRow(squareSide)
}

function createTableRow(squareSide) {
    
    for(i=0;i<squareSide;i++) {
        tableRow = document.createElement("tr")
    
        document.querySelector("table").appendChild(createTableData(squareSide))
    }
}

function createTableData(squareSide) {
    for(y=0;y<squareSide;y++) {
        td = document.createElement("td")
        td.classList.add("squareTable")
        tableRow.appendChild(td)
    }

    return tableRow
}

createSquareBlocks(5)