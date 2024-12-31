// function play(){
//     // step-1 hide the home screen . to hide the screen add the class hidden to the home section
//     const homeSection = document.getElementById('home-screen')
//     homeSection.classList.add('hidden')
//     // show the playground
//     const playgroundSection = document.getElementById('play-ground')
//     playgroundSection.classList.remove('hidden')
// }


function handleKeyboardPress(e){
    const playerPressed = e.key;
    // console.log('player pressed',playerPressed)

    // stop the game if player press escape
    if(playerPressed === 'Escape'){
        gameOver();
    }

    // get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet')
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    // console.log(playerPressed, expectedAlphabet)
    //  update score:
    // 1. get the current score
   
    // check matched or not
    if (playerPressed === expectedAlphabet){
        console.log('you got a point')

        const currentScore = getTextElementById('current-score')
        const updatedScore = currentScore + 1 ;
        setTextElementById('current-score',updatedScore)

        // const currentScoreElement = document.getElementById('current-score')
        // const currentScoreText = currentScoreElement.innerText
        // const currentScore = parseInt(currentScoreText)

        // const currentScore = getTextElementById('current-score')
        // // // increase the score
        // const newScore = currentScore + 1;
        // // show score
        // currentScoreElement.innerText = newScore;

      
        

        removeBackgroundColorById(expectedAlphabet)
        continueGame();
        
    }
    else {
        console.log("you lost a life")
        const currentLife = getTextElementById('current-life')
        const updatedLife = currentLife - 1;
        setTextElementById ('current-life', updatedLife)

        if(updatedLife===0){
            gameOver()
        }

        // step 1 : get the current life
        // const currentLifeElement = document.getElementById('current-life')
        // const currentLifeText = currentLifeElement.innerHTML
        // const currentLife = parseInt(currentLifeText)
        // // reduce the current life 
        // const newLife = currentLife - 1
        // // display the update life count
        // currentLifeElement.innerText = newLife
    
}
}
document.addEventListener('keyup' , handleKeyboardPress)

function continueGame(){
    const alphabet = getARandomAlphabet();
    // console.log("Your Random Number is:",alphabet)

    const showdisplayKey = document.getElementById('current-alphabet')
    showdisplayKey.innerText = alphabet;

    setBackgroundColorById(alphabet)
    
}
function play(){
    hideElementById('home-screen')
    hideElementById('final-score')
    showElementById('play-ground')

    // reset score and life
    setTextElementById('current-life',5)
    setTextElementById('current-score',0)

    continueGame();
}

function gameOver(){
    hideElementById('play-ground')
    showElementById('final-score')

    // update final score

    const lastScore = getTextElementById('current-score')
    setTextElementById('game-score',lastScore)

    // clear previous game
    const currentAlphabet = getElementTextById('current-alphabet')
    removeBackgroundColorById(currentAlphabet)
}