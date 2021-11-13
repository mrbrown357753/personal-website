//game values
let min=1, max=10, winningNum=getwinningNum(min, max), guessesLeft=3;

// UI elements
const game = document.getElementById('game'), minNum = document.querySelector('.min-num'), maxNum = document.querySelector('.max-num'), guessBtn = document.querySelector('#guess-btn'), guessInput = document.querySelector('#guess-input'), message = document.querySelector('.message');

// assign min and max to UI
minNum.textContent = min;
maxNum.textContent = max;

// play again event listener (we will add the event listener to the parent class because it as added after the page is reloaded so this is called event delegation)
// we can't use click mouse event because it does'nt work try it out.
game.addEventListener('mousedown',function(e)
{
    if(e.target.className === 'play-again')
    {
        window.location.reload();
    }
});

// listen to guess
guessBtn.addEventListener('click',function()
{
    let guess = parseInt(guessInput.value);
    //validate
    if(isNaN(guess) || guess > max || guess < min)
    {
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');
        // setTimeout(setMessage, 2000);
    }
    // check if we won
    if(guess === winningNum)
    {
        // // disable the input
        // guessInput.disabled = true;
        // // change the border to green
        // guessInput.style.borderColor = 'green';
        // // display message
        // setMessage(`${winningNum} is correct, YOU WIN!`, 'green');

        gameOver(true, `${winningNum} is correct, YOU WIN!`)
    }
    else{
        // wrong answer
        guessesLeft--;
        if(guessesLeft === 0)
        {
            // game lost
            // disable the input
            // guessInput.disabled = true;
            // // disable the submit button after chances are over
            // guessBtn.disabled = true;
            // // change the border to red
            // guessInput.style.borderColor = 'red';
            // // display message
            // setMessage(`Game Over, you lost. The correct number was ${winningNum}`, 'red');

            gameOver(false, `Game Over, you lost. The correct number was ${winningNum}`);
        }
        else
        {
            // game continues

            // change the border to red
            guessInput.style.borderColor = 'red';

            // clear input
            guessInput.value = '';

            // give message
            setMessage(`${guess} is not correct. ${guessesLeft} guesses left.`, 'red');
        }
    }
});

// gameover function
function gameOver(won, msg)
{
    let color;
    won === true ? color = 'green' : color = 'red';

    // disable the input
    guessInput.disabled = true;
    
    // change the border to green
    guessInput.style.borderColor = color;

    // display message
    setMessage(msg, color);

    // play again after the game is over
    guessBtn.value = 'Play Again';
    guessBtn.className = 'play-again';
}

// set message function
function setMessage(msg, color)
{
    message.textContent = msg;
    message.style.color = color;
}

// function to get winning number(we will generate random number)
function getwinningNum(min, max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}