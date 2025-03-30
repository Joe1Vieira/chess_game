const initialBoard = [
    ["♜", "♞", "♝", "♛", "♚", "♝", "♞", "♜"], // Black major pieces
    ["♟", "♟", "♟", "♟", "♟", "♟", "♟", "♟"], // Black pawns
    ["", "", "", "", "", "", "", ""], // Empty row
    ["", "", "", "", "", "", "", ""], // Empty row
    ["", "", "", "", "", "", "", ""], // Empty row
    ["", "", "", "", "", "", "", ""], // Empty row
    ["♙", "♙", "♙", "♙", "♙", "♙", "♙", "♙"], // White pawns
    ["♖", "♘", "♗", "♕", "♔", "♗", "♘", "♖"], // White major pieces
];

const board = document.getElementById("chessBoard");

for (let row = 0; row < 8; row++){
    for(let col = 0; col < 8; col++){
        const square = document.createElement("div");
        square.classList.add("square");

        if ((row + col) % 2 === 0) {
            square.classList.add("white");
        } else{
            square.classList.add("black");
        }

        if (initialBoard[row][col] !== "") {
            square.textContent = initialBoard[row][col];
            square.style.cursor = "pointer";
        }

        board.appendChild(square);
    }
}