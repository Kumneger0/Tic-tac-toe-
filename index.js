const playAgain = document.querySelector(".playAgain")
let isPlayer1 = true;
let isTimeToCheck = true;
let isGameOver = false;
const firstRow = document.querySelectorAll(".firstRow")
const secondRow = document.querySelectorAll(".secondRow")
const thirdRow = document.querySelectorAll(".thirdRow")
const firstColumn = document.querySelectorAll(".firstColumn")
const secondColumn = document.querySelectorAll(".secondColumn")
const thirdColumn = document.querySelectorAll(".thirdColumn")
const firstDiagonal = document.querySelectorAll(".firstDiagonal")
const secondDiagonal = document.querySelectorAll(".secondDiagonal")
const elements = document.querySelectorAll(".parent>div")
elements.forEach(ele=> {
ele.onclick = () => {
if (ele.innerText || isGameOver) return
ele.innerText = isPlayer1 ? "X": "O"
isPlayer1 = !isPlayer1
checkIfFinished(firstRow);
checkIfFinished(secondRow);
checkIfFinished(thirdRow);
checkIfFinished(firstColumn);
checkIfFinished(secondColumn);
checkIfFinished(thirdColumn);
checkIfFinished(firstDiagonal);
checkIfFinished(secondDiagonal)
draw()
}
})

function checkIfFinished(rowOrCol = []) {
let i = 0;
if (rowOrCol[i].innerText === rowOrCol[i+1].innerText && rowOrCol[i].innerText === rowOrCol[i+2].innerText && !isGameOver) {
if (!rowOrCol[i].innerText) return
document.querySelector(".gameState").innerText = "Game Over"
rowOrCol.forEach(element => element.style.backgroundColor = "#ff9bfeb7")
playAgain.innerHTML = `Player ${rowOrCol[i].innerText} Wins <button onclick = "restartGame()">play Again</button>`
isGameOver = true
}
return isGameOver;
}

function draw() {
let isDraw;
elements.forEach(ele=> {
if (!ele.innerText) {
isDraw = true
return
};
})
if (isGameOver || isDraw) return
document.querySelector(".gameState").innerText = "Draw";
playAgain.innerHTML = `Draw <button onclick = "restartGame()">play Again</button>`
isDraw = true
}
function restartGame() {
location.reload();
}