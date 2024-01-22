        playerScore=0
        dealerScore=0
        pull=0

        console.log("Welcome to Blackjack: Console Edition(Beta)")
        console.log("Type hit() to hit/start new game. Type stand() to stand. Type newGame() to reset. Type help() to see these again.")
        console.log("The beta version does not currently have soft hands nor splitting. Features may be added in future updates.")
        console.log("Game 1 will start below.")
        hit()
        function help() {
            console.log("Type hit() to hit. Type stand() to stand. Type newGame() to reset.")
        }
        function newGame() {
            playerScore=0
            dealerScore=0
            pull=0
        }
        function hit() {
            pull=Math.round((Math.random()*12+1))
            switch (pull) {
                case 1:
                if (playerScore+11>21) {
                    playerScore=playerScore+1
                }
                else {
                    playerScore=playerScore+11
                }
                break;
                case 2:
                playerScore=playerScore+2
                break;
                case 3:
                playerScore=playerScore+3
                break;
                case 4:
                playerScore=playerScore+4
                break;
                case 5:
                playerScore=playerScore+5
                break;
                case 6:
                playerScore=playerScore+6
                break;
                case 7:
                playerScore=playerScore+7
                break;
                case 8:
                playerScore=playerScore+8
                break;
                case 9:
                playerScore=playerScore+9
                break;
                case 10:
                playerScore=playerScore+10
                break;
                case 11:
                playerScore=playerScore+10
                break;
                case 12:
                playerScore=playerScore+10
                break;
                case 13:
                playerScore=playerScore+10
                break;
            }
            console.log(playerScore)
            if (playerScore>21) {
                console.log("Bust! ")
                newGame()
            }
            if (playerScore==21) {
                console.log("Blackjack! ")
            }
        }
        function stand() {
            console.log("Dealer:")
            pull=Math.round((Math.random()*12+1))
            switch (pull) {
                case 1:
                if (dealerScore+11>21) {
                    dealerScore=dealerScore+1
                }
                else {
                    dealerScore=dealerScore+11
                }
                break;
                case 2:
                dealerScore=dealerScore+2
                break;
                case 3:
                dealerScore=dealerScore+3
                break;
                case 4:
                dealerScore=dealerScore+4
                break;
                case 5:
                dealerScore=dealerScore+5
                break;
                case 6:
                dealerScore=dealerScore+6
                break;
                case 7:
                dealerScore=dealerScore+7
                break;
                case 8:
                dealerScore=dealerScore+8
                break;
                case 9:
                dealerScore=dealerScore+9
                break;
                case 10:
                dealerScore=dealerScore+10
                break;
                case 11:
                dealerScore=dealerScore+10
                break;
                case 12:
                dealerScore=dealerScore+10
                break;
                case 13:
                dealerScore=dealerScore+10
                break;
            }
            console.log(dealerScore)
            if (dealerScore==playerScore) {
                if (dealerScore>16) {
                    if (dealerScore>0) {
                        console.log("Push!")
                        newGame()
                    }
                }
            }
            if (playerScore>=dealerScore) {
                if (dealerScore<21) {
                    if (dealerScore>1) {
                    stand()
                    newGame()
                    }
                }
            }
            if (dealerScore>21) {
                console.log("Dealer Bust! You Win!")
                newGame()
            }
            else {if (dealerScore>playerScore) {
                console.log("You Lose!")
            }}
        }
