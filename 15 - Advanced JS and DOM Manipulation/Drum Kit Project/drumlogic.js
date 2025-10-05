// select all the button objects (in same order which is defined in HTML document)
let buttons = document.querySelectorAll("button");

// generic function to add generic event listener to generic object
function addListener(object, event_type){
    object.addEventListener(event_type, async function(event) 
        {
            // this gives the instance of the object which tiggered the function
            event.preventDefault();
            this.classList.add("button-active");
            let audio = new Audio("./sounds/" + this.textContent.toLowerCase() + ".mp3");
            audio.play();
            setTimeout(
                () => {
                    this.classList.remove("button-active");
                }, 100
            )
        }
    );
}

// add click and touch event listeners to all buttons
for(const button of buttons)
{
    addListener(button, "pointerdown");
}

// keypress lookup map
const keyMap = {"w":0, "a":1, "s":2, "d":3, "j":4, "k":5, "l":6}

// add keyboard keypress event listener to the whole document
document.addEventListener("keydown", async function(event) 
{
    let keypressed = event.key;
    let idx = keyMap[keypressed];

    if(idx != undefined)
    {
        this.classList.add("button-active");
        let audio = new Audio("./sounds/"+ keypressed.toLowerCase() + ".mp3");
        audio.play();
        setTimeout(() => {
            this.classList.remove("button-active");
        }, 100)
    }
});