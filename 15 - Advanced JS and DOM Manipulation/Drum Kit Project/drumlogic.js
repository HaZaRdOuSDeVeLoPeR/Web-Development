// select all the button objects (in same order which is defined in HTML document)
let buttons = document.querySelectorAll("button");

// add click event listeners to all buttons
for(let i=0; i<buttons.length; i++)
{
    buttons[i].addEventListener(
        "click", 
        async function() 
        {
            buttons[i].classList.add("button-active");
            let audio = new Audio("./sounds/"+buttons[i].textContent.toLowerCase()+".mp3");
            audio.play();
            setTimeout(
                () => {
                    buttons[i].classList.remove("button-active");
                }, 100
            )
        }
    );
}

// keypress lookup map
const keyMap = {"w":0, "a":1, "s":2, "d":3, "j":4, "k":5, "l":6}

// add keyboard keypress event listener to the whole document
document.addEventListener("keypress", async function(event) {
    let keypressed = event.key;
    let idx = keyMap[keypressed];
    console.log(idx);

    if(idx != undefined)
    {
        buttons[i].classList.add("button-active");
        let audio = new Audio("./sounds/"+keypressed.toLowerCase()+".mp3");
        audio.play();
        setTimeout(() => {
            buttons[i].classList.remove("button-active");
        }, 100)
    }

});