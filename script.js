'use strict';
//textContent method
/*

console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!💃';
console.log(document.querySelector('.message').textContent);

console.log(document.querySelector('.score').textContent);
console.log(document.querySelector('.number').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 19;

// value method

document.querySelector('.guess').value=23;
console.log(document.querySelector('.guess').value);

*/

// document.querySelector('.number').textContent=number;


let secretNumber = Math.trunc(Math.random()*20)+1;
let score=Number(document.querySelector('.score').textContent);
// document.querySelector('.number').textContent=secretNumber;
console.log(secretNumber);


document.querySelector('.check').addEventListener('click', ()=>{
    const guess=Number(document.querySelector('.guess').value);
    let highScore=Number(document.querySelector('.highscore').textContent);
if(score>0){
    /* no input */
    if(!guess){
        document.querySelector('.message').textContent = '⛔No Number!'
        score--;

    /* when player wins */    
    }else if(guess===secretNumber){
        document.querySelector('.message').textContent = '🎖️Correct Number';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').textContent=secretNumber;
        if(score>highScore){
            highScore=score;
            document.querySelector('.highscore').textContent=score;
        }
        
        /* Change CSS styles */

    /* when guess is high */
    }else if(secretNumber-guess<0){
        document.querySelector('.message').textContent='👇Select a low number';
        score--;

    /* when guess is low */    
    }else{
        document.querySelector('.message').textContent='👆Select a high number';
        score--;
    }
/* when player looses */    
}if(score===0){
    document.querySelector('.message').textContent='💥You Lost!! Better Luck next time!';
}

/* always print the score */
document.querySelector('.score').textContent=score;

    console.log(guess);
});

function reset(){
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.message').textContent='Start Guessing...';
    document.querySelector('.number').textContent='?';
    document.querySelector('.score').textContent='20';
    document.querySelector('.guess').value='';
    secretNumber = Math.trunc(Math.random()*20)+1;
    document.querySelector('.number').style.width = '15rem';
    console.log(secretNumber);
    score=20;
}

document.querySelector('.again').addEventListener('click',function (){
    reset();
})