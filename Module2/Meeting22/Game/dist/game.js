const board = document.querySelectorAll("[data-value]");
let player = "x";
let gameBoard = Array(9).fill("");
let xWins = 0;
let oWins = 0;
const winning = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 7], [2, 4, 6]
];
board.forEach(cell => {
    cell.addEventListener("click", event => {
        const button = event.target;
        const index = Number(button.dataset.value);
        if (gameBoard[index]) {
            return;
        }
        gameBoard[index] = player;
        button.textContent = player;
        if (winner(player)) {
            if (player === "x") {
                xWins++;
                alert("x wins!");
            }
            else {
                oWins++;
                alert("o wins!");
            }
            reset();
        }
        else {
            player = player === "x" ? "o" : "x";
        }
    });
});
function winner(player) {
    return winning.some(win => win.every(index => gameBoard[index] === player));
}
;
function reset() {
    gameBoard.fill("");
    board.forEach(cell => cell.textContent = "");
    player = "x";
}
