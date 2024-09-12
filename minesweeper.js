var elementButtonPlay = document.getElementById("btn-play")
var elementButtonReset = document.getElementById("btn-reset")

function Play(){

    elementButtonPlay.disabled = true
    elementButtonReset.disabled = false
    elementButtonPlay.style.background = '#5E5E5E'
    elementButtonReset.style.background = '#303030'

}

function Reset(){

    elementButtonReset.disabled = true
    elementButtonPlay.disabled = false
    elementButtonReset.style.background = '#5E5E5E'
    elementButtonPlay.style.background = '#303030'

}