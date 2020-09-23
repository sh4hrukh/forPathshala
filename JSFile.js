
var scores, activePlayer, target=50;

function newGame(){
    document.getElementById('gameBoard').style.display='flex';
    document.getElementById('newGame').style.display='none';
    document.getElementById('winner').style.display='none';
    scores=[0,0];
    activePlayer=0;
    document.getElementById('scoreA').innerHTML=0;
    document.getElementById('scoreB').innerHTML=0;
    document.getElementById('player').innerHTML="Player A's Turn";

}

function win(){
    document.getElementById('winner').style.display='block';
    document.getElementById('newGame').style.display='block';
    document.getElementById('gameBoard').style.display='none';
    if(activePlayer==1)
        document.getElementById('winnerMessage').innerHTML='Player B Wins!!!';
    else
        document.getElementById('winnerMessage').innerHTML='Player A Wins!!!';
}

function rollDice()
{
    let dice= Math.floor(Math.random()*6)+1;
    let dot='<div class="dot"></div>';
    let dots='';
    for(var i=0;i<dice;i++)
        dots+=dot;
    document.getElementById('dice').innerHTML=dots;
    if(dice==6)
    {
        scores[activePlayer]=0;
        updateScore();
        switchPlayer();
    }
    else
    {
        scores[activePlayer]+=dice;
        if(scores[activePlayer]>=target)
            win();
        updateScore(); 
    }
}

function switchPlayer(){
    if(activePlayer==0)
    {
        document.getElementById('player').innerHTML="Player B's Turn";
        activePlayer=1;
    }
    else
    {
        document.getElementById('player').innerHTML="Player A's Turn";
        activePlayer=0;
    }
}

function updateScore(){
    if(activePlayer==1)
        document.getElementById('scoreB').innerHTML=scores[activePlayer];
    else
        document.getElementById('scoreA').innerHTML=scores[activePlayer];
}