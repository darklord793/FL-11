if (confirm('Do you want to play a game?')) {
    let startGame=true;
    let totalPrize=0;
    let basePrize=100;
    let prizes=new Array();
    let maxRange=8;
    let range=maxRange;
    const baseWinRatio=1;
    let winRatio=baseWinRatio;
    const maxRangeStep=4;
		let round =false;
    while (startGame){
        prizes[3]=basePrize*winRatio;
        for (let i=3;i>0;i--){
            prizes[i-1]=prizes[i]/2;
        }
        let trueNumber=parseInt(Math.random()*range);
        for (let i=3;i>0;i--){
            let leftAttempts=i;
            let playerNumber=+prompt('Choose a roulette pocket number from 0 to '+range+
            '\nAttempts left: '+leftAttempts
            +'\nTotal prize: '+totalPrize+'$'
            +'\nPossible prize: '+prizes[i]+'$'
            +'\n'+trueNumber);
            if(playerNumber===trueNumber){
               totalPrize+=prizes[i];
               round=true;
               if (confirm('Congratulation, you won! Your prize is: '+prizes[i]+'$ Do you want to continue?')) {
                 winRatio+=winRatio;
                 range+=maxRangeStep;
               }else {
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
              winRatio=baseWinRatio;
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
