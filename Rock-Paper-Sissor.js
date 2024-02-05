let score = {
    name: 'Adnan',
}
function result(move) {
    let compMove = getCompMove();
    if(move === compMove) {
        generateHTMLResult('draw');
    } else if(move ==="rock" && compMove === "sissors") {
        generateHTMLResult('win');
    } else if(move ==="sissors" && compMove ==="paper")  {
        generateHTMLResult('win');
    } else if(move == "paper" && compMove === "rock") {
        generateHTMLResult('win');
    } else {
        generateHTMLResult('lose');
    }

}

function getCompMove() {
    const frac = Math.random(); 
    if(frac <= 1/3) {
        return "rock";
    } else if(frac <= 2/3) {
        return "sissors";
    } else {
        return "paper";
    }
}

function generateHTMLResult(result) {
    let element = document.querySelector('.result');
    element.innerHTML = result;
}