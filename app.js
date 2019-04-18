const game =()=>{
    let pScore= 0;
    let cScore=0;

    //Start the Game
    const startGame=()=> {
        const playBtn = document.querySelector(".intro button");
        const introScreen= document.querySelector(".intro");
        const match= document.querySelector('.match');

        playBtn.addEventListener('click', () => {
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        });

    };

    //Play Match
    const playMatch= () => {
        const options= document.querySelectorAll(".options button");
        const playerHand= document.querySelector(".player-hand");
        const computerHand= document.querySelector(".computer-hand");
        const hands = document.querySelectorAll('.hands img');

        hands.forEach(hand => {
            hand.addEventListener('animationend', function(){
                this.style.animation='';
            })
        })
        
        //Computer Options
        const computerOptions = ["Rock", "Paper", "Scissors"];
        options.forEach(option=> {
            option.addEventListener("click", function(){
                //Computer Choice
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice= computerOptions[computerNumber]
                //Here is where we call compareHands
                setTimeout(()=>{
                    compareHands(this.textContent, computerChoice);
                    //update images
                    playerHand.src=`./assets/${this.textContent}.png`;
                    computerHand.src=`./assets/${computerChoice}.png`;

                }, 2000);

                
                playerHand.style.animation='shakePlayer 2s ease';
                computerHand.style.animation='shakeComputer 2s ease';
            });
        });

        const updateScore=()=> {
            const playerScore= document.querySelector('.player-score p');
            const computerScore= document.querySelector('.computer-score p');
            playerScore.textContent= pScore;
            computerScore.textContent= cScore;
        }
       
        
       const compareHands=(playerChoice, computerChoice)=> {
           //Update Text
           const winner= document.querySelector('.winner');

           //Checking for a Tie
        if(playerChoice===computerChoice){
            winner.textContent= 'It is a tie'
        }
        //Check for Rock
        else if(playerChoice==='Rock'){
            if(computerChoice==='Scissors'){
                winner.textContent='Player Wins'
                pScore++
                updateScore();
            } else {
                winner.textContent= 'Computer Wins'
                cScore++
                updateScore();
            }
        }
        //Check for Paper
        else if(playerChoice==='Paper'){
            if(computerChoice==='Scissors'){
                winner.textContent='Computer Won'
                cScore++
                updateScore();
            } else {
                winner.textContent= 'Player Wins'
                pScore++
                updateScore();
            }
        }

        //Check for Scissor 
        else if(playerChoice==='Scissors'){
            if(computerChoice==='Rock'){
                winner.textContent='Computer Wins'
                cScore++
                updateScore();
            } else {
                winner.textContent= 'Player Wins'
                pScore++
                updateScore();
            }
            return;
        }
        else {
            winner.textContent= 'Its a Tie'
        }
       }
        
     
        
    }
//Is call all the inner function

startGame();
playMatch();



};

//start the game function 
game();