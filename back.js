





//function to get computer choice 
function getComputerchoice(max){
    return Math.floor(Math.random() * max)
}



//function to get human choice from promt
function getHumanchoice(){
    let sign = prompt("rock, paper or scissor?").toLocaleLowerCase();
    if(sign == "rock"){
        return 0
    }else if(sign == "paper"){
        return 1
    }else if(sign == "scissor"){
        return 2
    }/*else{
        alert("please input the one requested")
        //so i got it to work, buuuut the consolog at the bottom become useless. let it go first i guess
    }*/

}

//function where the game is play for 1 round
function winLose(pc1, sign){
    
    if(pc1 == sign )
        return 0 ;

    else if((pc1 == 0 && sign == 2) || (pc1 == 1 && sign == 0) || (pc1 == 2 && sign == 1)) {        
        return 1               
    } 
        
    else if((sign == 0 && pc1 == 2) || (sign == 1 && pc1 == 0) || (sign == 2 && pc1 == 1))  {
       return 2
        
    }
    
}


//function where the game is played
function playGame(){
    
   
    let gameCount = 0
    let compScore = 0
    let humanScore = 0


    while(gameCount != 5){
        let winner = winLose(getComputerchoice(3),getHumanchoice());
        if(winner == 0){
            console.log("its a draw");        
            
    }   else if(winner == 1 ){
            console.log("computer win")
            compScore = compScore + 1
            console.log(compScore)
            gameCount = gameCount + 1 
            
            
        
    }   else{
            console.log("human win")
            humanScore = humanScore + 1
            console.log(humanScore)
            gameCount = gameCount + 1            
    }

}
if(gameCount == 5){
        if(compScore > humanScore){
            console.log("The game won by computer")
            console.log("Human score: "+humanScore)
            console.log("Computer score: "+compScore)
        }else {
            console.log("The game won by human")
            console.log("Human score: "+humanScore)
            console.log("Computer score: "+compScore)
        }
        
}
    
}






playGame();
