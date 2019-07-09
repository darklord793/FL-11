if (confirm('Do you want to play a game?')) {
    let startGame=true;
    let totalPrize=0;
    let basePrize=100;
    let prizeRatio=3;
    let prize=new Array();
    let forMinRatio=0;
    let forMaxRatio=3;
    let prizeDiv=2;
    let maxRange=8;
    let range=maxRange;
    let round;
    let winRatio=1;
    let ratio=winRatio;
    let maxRangeStep=4;
    while (startGame){
        prize[prizeRatio]=basePrize*ratio;
        for (let i=forMaxRatio;i>forMinRatio;i--){
            prize[i-1]=prize[i]/prizeDiv;
        }
        let trueNumber=parseInt(Math.random()*range);
        for (let i=forMaxRatio;i>forMinRatio;i--){
            let leftAttempts=i;
            let playerNumber=+prompt('Choose a roulette pocket number from 0 to '+range+
            '\nAttempts left: '+leftAttempts
            +'\nTotal prize: '+totalPrize+'$'
            +'\nPossible prize: '+prize[i]+'$'
            +'\n'+trueNumber);
            if(playerNumber===trueNumber){
               totalPrize+=prize[i];
               round=true;
               if (confirm('Congratulation, you won! Your prize is: '+prize[i]+'$ Do you want to continue?')) {
                 ratio+=ratio;
                 range+=maxRangeStep;
               } else {
                 round=false;
               }
               break;
            } else {
              round=false;
            }
        }
        if (!round) {
            alert('Thank you for your participation. Your prize is: '+totalPrize+'$');
            if (confirm('Do you want to play again?')) {
              ratio=winRatio;
              range=maxRange;
              totalPrize-=totalPrize;
            } else {
              break;
            }
        }
    }
} else {
    alert('You did not become a billionaire, but can.');
}
