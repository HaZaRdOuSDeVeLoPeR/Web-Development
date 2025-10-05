$(document).ready(function() {
    
    // generic function to add generic event listener to jQuery object
    function addListener(object, event_type){
        // add listeners to all the objects without looping
        $(object).on(event_type, async function(event) 
        {
            event.preventDefault();
            $(this).addClass("button-active");
            let audio = new Audio("./sounds/"+$(this).text().toLowerCase()+".mp3");
            audio.play();
            setTimeout(
                () => {
                    $(this).removeClass("button-active");
                }, 100
            )
        });
    }

    // select all the button objects (in same order which is defined in HTML document)
    let buttons = $("button");

    // add click and touch event listeners to all buttons
    addListener(buttons, "pointerdown");

    // keypress lookup map
    const keyMap = {"w":0, "a":1, "s":2, "d":3, "j":4, "k":5, "l":6}
    
    // add keyboard keypress event listener to the whole document
    $(document).on("keydown", async function(event) 
    {
        let keypressed = event.key.toLowerCase();
        let idx = keyMap[keypressed];

        if(idx != undefined)
        {
            $(buttons[idx]).addClass("button-active");
            let audio = new Audio("./sounds/" + keypressed + ".mp3");
            audio.play();
            setTimeout(
                () => {
                    $(buttons[idx]).removeClass("button-active");
                }, 100
            )
        }
    });
});