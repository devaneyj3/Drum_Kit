
let letterArray = ["w", "a", "s", "d", "j","k","l"];

for(let count = 0; count < letterArray.length; count++)
{
    document.getElementById(letterArray[count] +'_drum').addEventListener("click", function()
    {
        alert("I got clicked");
    })
}

