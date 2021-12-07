
var playerOneScore = 0
var playerTwoScore = 0




function player1() {
    playerOneScore++
    document.getElementById('PlayerOne').innerText = `${playerOneScore}`
}

function player2() {
    playerTwoScore++
    document.getElementById('PlayerTwo').innerText = `${playerTwoScore}`
}

function decreasePlayer1() {
    playerOneScore--
    document.getElementById('PlayerOne').innerText = `${playerOneScore}`
}

function decreasePlayer2() {
    playerTwoScore--
    document.getElementById('PlayerTwo').innerText = `${playerTwoScore}`
}