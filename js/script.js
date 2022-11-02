"use strict"
// seleziono il contenitore dei numeri
const boardContainer = document.querySelector(".board");
const playGame = document.querySelector(`.btn-play`);

playGame.addEventListener("cilck", function(){
    
    boardContainer.innerHTML = "";

    for( let i = 1; i <= 100; i++ ){
        const boardCell = document.createElement("div");
        boardCell.innerHTML = i;
        boardCell.classList.add("board-number");
        // aggiungo l'evento click
        boardCell.addEventListener("click", function(){
            boardCell.classList.add("select");
            console.log(this);
        });
        boardContainer.append(boardCell);
    }

    boardCell.classList.add("show");
})

