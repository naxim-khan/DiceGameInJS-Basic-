
function player1(){
    var Score=Math.floor(Math.random()*6)+1;
    var Img=document.getElementById('p1-img');
    Img.src=`images/dice${Score}.png`;
    return Score
}

function player2(){
    let Score=Math.floor(Math.random()*6)+1;
    var Img=document.getElementById('p2-img');
    Img.src=`images/dice${Score}.png`;
    return Score
}


let playAgainButton = document.querySelector('.btn');


playAgainButton.addEventListener('click', function(event) {
    playAgainButton.innerHTML="Play Again!"
    let result=document.querySelector('.heading h1');
    let p1heading=document.querySelector('.player-1 h3');
    let p2heading=document.querySelector('.player-2 h3');
    let p1score=player1();
    let p2score=player2();

    if (p1score>p2score){
        result.innerHTML="Player 1 win";
        p1heading.innerHTML="You Win 🎉";
        p2heading.innerHTML="You Lose😢";
    }else if (p1score<p2score){
        result.innerHTML="Player 2 win"
        p2heading.innerHTML="You Win 🎉";
        p1heading.innerHTML="You Lose😢";
    }else{
        result.innerHTML="Draw!😊"
        p1heading.innerHTML="Draw!😊";
        p2heading.innerHTML="Draw!😊";
    }
});

