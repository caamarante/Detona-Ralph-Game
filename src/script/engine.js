const state = {
    view: {
        squares: document.querySelectorAll(".square"),
        enemy: document.querySelector(".enemy"),
        timeLeft: document.querySelector("#time-left"),
        score: document.querySelector("#score"),
    },
    values: {},
};

function randomSquare() {
    state.view.squares.forEach((square)=>{
        square.classList.remove("enemy");
    })
}

function addListenerHitBox() {
    state.view.squares.forEach((square)=> {});
}

function init() {

}

init();