const board = document.querySelectorAll<HTMLButtonElement>("[data-value]");

let player: "x" | "o" = "x";
let gameBoard: string[] = Array(9).fill("");
let xWins = 0;
let oWins = 0;

const winning: number[][] = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 7], [2, 4, 6]
];

board.forEach(cell => {
    cell.addEventListener("click", event => {
        const button = event.target as HTMLButtonElement;
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
            } else {
                oWins++;
                alert("o wins!");
            }
            reset();
        } else {
            player = player === "x" ? "o" : "x";
        }
    });
});

function winner(player: "x" | "o") : boolean{
    return winning.some(win => win.every(index => gameBoard[index] === player));
};

function reset() : void {
    gameBoard.fill("");
    board.forEach(cell => cell.textContent = "");
    player = "x";
}