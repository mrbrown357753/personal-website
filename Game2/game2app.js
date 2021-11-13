var character = document.getElementById("character");
var block = document.getElementById("block");
var body = document.getElementById("body");
var container = document.querySelector('.container');
var btn = document.querySelector('.btn');
var playBtn = document.querySelector('.play-btn');

btn.style.display = 'none';
container.style.display = 'none';

playBtn.addEventListener('click',function(){
    counter=0;
    container.style.display = 'block';
    playBtn.style.display = 'none';
});



var counter=0;
container.addEventListener('click',function(){
    if(character.classList == "animate"){return}
    character.classList.add("animate");
    setTimeout(function(){
        character.classList.remove("animate");
    },300);
});
var checkDead = setInterval(function() {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<20 && blockLeft>-20 && characterTop>=130){
        // block.style.animation = "none";
        // alert("Game Over. You suck nigga. Score: "+Math.floor(counter/100));
        gameOver(Math.floor(counter/100));
        // counter=0;
        // block.style.animation = "block 1s infinite linear";
    }else{
        counter++;
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);
    }
}, 10);

function gameOver(score)
{
    block.style.animation = "none";
    // msg.textContent = 'you lose';
    alert("Game Over. You suck nigga. Your Score: "+ score);
    counter=0;
    block.style.animation = "block 1s infinite linear";
    container.style.display = 'none';
    btn.style.display = 'block';
}

btn.addEventListener('click', function()
{
    counter=0;
    container.style.display = 'block';
    btn.style.display = 'none';
    
});