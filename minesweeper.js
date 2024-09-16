var elementButtonPlay = document.getElementById("btn-play")
var elementButtonReset = document.getElementById("btn-reset")
var elementLabelBombs = document.getElementById('lblBombs')

var elementButton00 = document.getElementById('btn00')
var elementButton01 = document.getElementById('btn01')
var elementButton02 = document.getElementById('btn02')
var elementButton10 = document.getElementById('btn10')
var elementButton11 = document.getElementById('btn11')
var elementButton12 = document.getElementById('btn12')
var elementButton20 = document.getElementById('btn20')
var elementButton21 = document.getElementById('btn21')
var elementButton22 = document.getElementById('btn22')

var canPlay = false

var tileValue = 0
var bombCount = 0
var playerScore = 0
var winScore = 0

var boardGame = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
var boardRows = 3, boardColumns = 3
var tileBombValue = 1, tileStarValue = 0

function Play(){

    SetButtonsPlay()
    CreateBoard()

}

function Reset(){

    SetButtonsReset()
    RestartButtons()

}

function SetButtonsPlay(){

    canPlay = true
    elementButtonPlay.disabled = true
    elementButtonReset.disabled = false
    elementButtonPlay.style.background = '#5E5E5E'
    elementButtonReset.style.background = '#303030'

}

function SetButtonsReset(){

    canPlay = false
    elementButtonReset.disabled = true
    elementButtonPlay.disabled = false
    elementButtonReset.style.background = '#5E5E5E'
    elementButtonPlay.style.background = '#303030'
    lblBombs.innerHTML = 'Inicie o jogo para sortear o tabuleiro!'

}

function CreateBoard(){

    bombCount = 0
    playerScore = 0

    for(i=0; i < boardRows; i++){
  
        for(j=0; j < boardColumns; j++){
       
            tileValue = Math.floor(Math.random() * 2)
            boardGame[i][j] = tileValue
    
            if(tileValue == tileBombValue){

                bombCount++

            }
    
        }
    
    }

    winScore = (boardRows * boardColumns) - bombCount 

    lblBombs.innerHTML = 'O tabuleiro possui ' + bombCount + ' bombas!'
    console.table(boardGame)
    
}

function RestartButtons(){

    elementButton00.disabled = false
    elementButton00.innerHTML = '?'
    elementButton00.style.backgroundImage = "none";

    elementButton01.disabled = false
    elementButton01.innerHTML = '?'
    elementButton01.style.backgroundImage = "none";

    elementButton02.disabled = false
    elementButton02.innerHTML = '?'
    elementButton02.style.backgroundImage = "none";

    elementButton10.disabled = false
    elementButton10.innerHTML = '?'
    elementButton10.style.backgroundImage = "none";
    
    elementButton11.disabled = false
    elementButton11.innerHTML = '?'
    elementButton11.style.backgroundImage = "none";

    elementButton12.disabled = false
    elementButton12.innerHTML = '?'
    elementButton12.style.backgroundImage = "none";

    elementButton20.disabled = false
    elementButton20.innerHTML = '?'
    elementButton20.style.backgroundImage = "none";

    elementButton21.disabled = false
    elementButton21.innerHTML = '?'
    elementButton21.style.backgroundImage = "none";

    elementButton22.disabled = false
    elementButton22.innerHTML = '?'
    elementButton22.style.backgroundImage = "none";

}

function VerifyButton00(){

    if(canPlay){

        elementButton00.disabled = true
        elementButton00.innerHTML = ''
    
        if(boardGame[0][0] == tileBombValue){
    
            elementButton00.style.backgroundImage = "url('btn-bg-bomb.png')";
            lblBombs.innerHTML = 'Você perdeu, hahaha! Inicie novamente!'
            canPlay = false
            alert("BOOM!")
    
        }else{
    
            elementButton00.style.backgroundImage = "url('btn-bg-star.png')";
            playerScore++
            alert('YAH!')
    
        }
    
        if(playerScore == winScore){
    
            lblBombs.innerHTML = 'UOUUUUUUUU! Isso você é incrível! :D'
            canPlay = false
    
        }

    }

}

function VerifyButton01(){

    if(canPlay){

        elementButton01.disabled = true
        elementButton01.innerHTML = ''
    
        if(boardGame[0][1] == tileBombValue){
    
            elementButton01.style.backgroundImage = "url('btn-bg-bomb.png')";
            lblBombs.innerHTML = 'Você perdeu, hahaha! Inicie novamente!'
            canPlay = false
            alert("BOOM!")
    
        }else{
    
            elementButton01.style.backgroundImage = "url('btn-bg-star.png')";
            playerScore++
            alert('YAH!')
    
        }
    
        if(playerScore == winScore){
    
            lblBombs.innerHTML = 'UOUUUUUUUU! Isso você é incrível! :D'
            canPlay = false
    
        }

    }

}

function VerifyButton02(){

    if(canPlay){

        elementButton02.disabled = true
        elementButton02.innerHTML = ''
    
        if(boardGame[0][2] == tileBombValue){
    
            elementButton02.style.backgroundImage = "url('btn-bg-bomb.png')";
            lblBombs.innerHTML = 'Você perdeu, hahaha! Inicie novamente!'
            canPlay = false
            alert("BOOM!")
    
        }else{
    
            elementButton02.style.backgroundImage = "url('btn-bg-star.png')";
            playerScore++
            alert('YAH!')
    
        }
    
        if(playerScore == winScore){
    
            lblBombs.innerHTML = 'UOUUUUUUUU! Isso você é incrível! :D'
            canPlay = false
    
        }

    }

}

function VerifyButton10(){

    if(canPlay){

        elementButton10.disabled = true
        elementButton10.innerHTML = ''
    
        if(boardGame[1][0] == tileBombValue){
    
            elementButton10.style.backgroundImage = "url('btn-bg-bomb.png')";
            lblBombs.innerHTML = 'Você perdeu, hahaha! Inicie novamente!'
            canPlay = false
            alert("BOOM!")
    
        }else{
    
            elementButton10.style.backgroundImage = "url('btn-bg-star.png')";
            playerScore++
            alert('YAH!')
    
        }
    
        if(playerScore == winScore){
    
            lblBombs.innerHTML = 'UOUUUUUUUU! Isso você é incrível! :D'
            canPlay = false
    
        }

    }

}

function VerifyButton11(){

    if(canPlay){

        elementButton11.disabled = true
        elementButton11.innerHTML = ''
    
        if(boardGame[1][1] == tileBombValue){
    
            elementButton11.style.backgroundImage = "url('btn-bg-bomb.png')";
            lblBombs.innerHTML = 'Você perdeu, hahaha! Inicie novamente!'
            canPlay = false
            alert("BOOM!")
    
        }else{
    
            elementButton11.style.backgroundImage = "url('btn-bg-star.png')";
            playerScore++
            alert('YAH!')
    
        }
    
        if(playerScore == winScore){
    
            lblBombs.innerHTML = 'UOUUUUUUUU! Isso você é incrível! :D'
            canPlay = false
    
        }

    }

}

function VerifyButton12(){

    if(canPlay){

        elementButton12.disabled = true
        elementButton12.innerHTML = ''
    
        if(boardGame[1][2] == tileBombValue){
    
            elementButton12.style.backgroundImage = "url('btn-bg-bomb.png')";
            lblBombs.innerHTML = 'Você perdeu, hahaha! Inicie novamente!'
            canPlay = false
            alert("BOOM!")
    
        }else{
    
            elementButton12.style.backgroundImage = "url('btn-bg-star.png')";
            playerScore++
            alert('YAH!')
    
        }
    
        if(playerScore == winScore){
    
            lblBombs.innerHTML = 'UOUUUUUUUU! Isso você é incrível! :D'
            canPlay = false
    
        }

    }

}

function VerifyButton20(){

    if(canPlay){

        elementButton20.disabled = true
        elementButton20.innerHTML = ''
    
        if(boardGame[2][0] == tileBombValue){
    
            elementButton20.style.backgroundImage = "url('btn-bg-bomb.png')";
            lblBombs.innerHTML = 'Você perdeu, hahaha! Inicie novamente!'
            canPlay = false
            alert("BOOM!")
    
        }else{
    
            elementButton20.style.backgroundImage = "url('btn-bg-star.png')";
            playerScore++
            alert('YAH!')
    
        }
    
        if(playerScore == winScore){
    
            lblBombs.innerHTML = 'UOUUUUUUUU! Isso você é incrível! :D'
            canPlay = false
    
        }

    }

}

function VerifyButton21(){

    if(canPlay){

        elementButton21.disabled = true
        elementButton21.innerHTML = ''
    
        if(boardGame[2][1] == tileBombValue){
    
            elementButton21.style.backgroundImage = "url('btn-bg-bomb.png')";
            lblBombs.innerHTML = 'Você perdeu, hahaha! Inicie novamente!'
            canPlay = false
            alert("BOOM!")
    
        }else{
    
            elementButton21.style.backgroundImage = "url('btn-bg-star.png')";
            playerScore++
            alert('YAH!')
    
        }
    
        if(playerScore == winScore){
    
            lblBombs.innerHTML = 'UOUUUUUUUU! Isso você é incrível! :D'
            canPlay = false
    
        }

    }

}

function VerifyButton22(){

    if(canPlay){

        elementButton22.disabled = true
        elementButton22.innerHTML = ''
    
        if(boardGame[2][2] == tileBombValue){
    
            elementButton22.style.backgroundImage = "url('btn-bg-bomb.png')";
            lblBombs.innerHTML = 'Você perdeu, hahaha! Inicie novamente!'
            canPlay = false
            alert("BOOM!")
    
        }else{
    
            elementButton22.style.backgroundImage = "url('btn-bg-star.png')";
            playerScore++
            alert('YAH!')
    
        }
    
        if(playerScore == winScore){
    
            lblBombs.innerHTML = 'UOUUUUUUUU! Isso você é incrível! :D'
            canPlay = false
    
        }

    }

}