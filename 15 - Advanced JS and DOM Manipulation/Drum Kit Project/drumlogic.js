// select all the button objects (in same order which is defined in HTML document)
let buttons = document.querySelectorAll("button");

// generic function to add generic event listener to generic object
function addListener(object, event_type){
    object.addEventListener(event_type, async function(event) 
        {
            event.preventDefault();
            object.classList.add("button-active");
            let audio = new Audio("./sounds/"+object.textContent.toLowerCase()+".mp3");
            audio.play();
            setTimeout(
                () => {
                    object.classList.remove("button-active");
                }, 100
            )
        }
    );
}

// add click and touch event listeners to all buttons
for(const button of buttons)
{
    // addListener(button, "click");
    // addListener(button, "touchstart");

    // can also use morder version "pointerdown" event which works on both desktop and mobile devices [pointerdown = mousedown + touchstart + click]
    addListener(button, "pointerdown");
}

// keypress lookup map
const keyMap = {"w":0, "a":1, "s":2, "d":3, "j":4, "k":5, "l":6}

// add keyboard keypress event listener to the whole document
document.addEventListener("keypress", async function(event) 
{
    let keypressed = event.key;
    let idx = keyMap[keypressed];

    if(idx != undefined)
    {
        buttons[idx].classList.add("button-active");
        let audio = new Audio("./sounds/"+keypressed.toLowerCase()+".mp3");
        audio.play();
        setTimeout(() => {
            buttons[idx].classList.remove("button-active");
        }, 100)
    }
});