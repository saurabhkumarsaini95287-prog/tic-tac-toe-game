let btns = document.querySelectorAll('.btn');
let resetBtn = document.querySelector('#reset');
let newbtn = document.querySelector('#newbtn');
let msgcontainer = document.querySelector('.msg-container');
let msg = document.querySelector('#msg');

let turno =true;//true = X, false = O

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
]

const resetGame = () => {
    turno = true;
    enablebtn();
    msgcontainer.classList.add('hide');
}

btns.forEach((btn) => {
    btn.addEventListener('click', () => {
     console.log("");
     if(turno){
        btn.innerText = "o";
        turno = false;
        btn.style.color = "red";
        }else{
            btn.innerText = "x";
            turno = true;
            btn.style.color = "blue";
        }
    
        btn.disabled = true;
        checkWinner();
    });
});

const disebleBtn = () => {
     for(let btn of btns){
        btn.disabled = true;
     }
    }

    const enablebtn = () => {
     for(let btn of btns){
        btn.disabled = false;
        btn.innerText = " " ;
     }
}

showWinner = (winner) => {
    msgcontainer.classList.remove('hide');
    msg.innerText = ` congratulation ,Winner is ${winner}`;
    disebleBtn();
}

const checkWinner = () => {
    let winnerFound = false;
    for (pattern of winPatterns){
            let pos1val = btns[pattern[0]].innerText;
            let pos2val = btns[pattern[1]].innerText;
            let pos3val = btns[pattern[2]].innerText;   
            if(pos1val != "" && pos2val != ""&& pos3val != ""){
                if(pos1val === pos2val && pos2val === pos3val){
            showWinner(pos1val);
            winnerFound = true;
        
     }
}
}
let filled = true;
for(let btn of btns){
    if(btn.innerText === ""){
        filled = false;
        break;
    }
}
if(filled && !winnerFound){
    msgcontainer.classList.remove('hide');
    msg.innerText = `Game is Tie`;
    disebleBtn();
}
}

resetBtn.addEventListener('click', resetGame);
newbtn.addEventListener('click', resetGame);
resetGame();