
let letterArray = ["w", "a", "s", "d", "j","k","l"];

for(let count = 0; count < letterArray.length; count++)
{
    document.getElementById(letterArray[count] +'_drum').addEventListener("click", function()
    {
       var audio = new Audio("sounds/tom-1.mp3");
       audio.play();
    })
}

