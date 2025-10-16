let main_menu = $(".main-menu");
let game_panel = $(".game-panel");
let game_over = $(".game-over");
let leaderboards = $(".leaderboards");

let level = 1;          // level determines the dimensions of grid
let lives = 3;
let playing = false;    // display game-panel
let paused = false;     // diplay main-menu
let gameOver = false;   // display game-over
let gameloopID = 0;     // main game loop ID

let currentUser = 0;
let currscore = 0;
let userName = [];
let scores = [];

let current_seq = [];
let user_seq = [];
let colors = ["red", "blue", "green", "yellow"];

function showSequence(level){
    animated = 0;

    for(let i=0; i<level; i++){
        let randColor = Math.floor(Math.random()*4);
        current_seq[i] = colors[randColor];
        setTimeout(function()
        {
            $("."+colors[randColor]).addClass("flashWhite");
            playAudio("./sounds/" + colors[randColor] + ".mp3");

            setTimeout(function(){
                $("."+colors[randColor]).removeClass("flashWhite");
            }, 400);

            animated++;
        }, 1000*(i+1))
    }
}

function validateSequence(){
    let verified = 0;
    user_seq = [];

    let verifyLoopID = setInterval(function()      // user input check loop
    {         
        if(verified == level)
        {                       // when all inputs are correct increment the level and break out
            level++;
            currscore += level*level;
            playAudio("./sounds/correct.mp3");
            clearInterval(verifyLoopID);
        }

        if(user_seq.length > verified)
        {                                                                   // if user entered new seq, compare with displayed seq
            if(user_seq[verified] == current_seq[verified]) verified++;     // if matches then continue else gameover
            else
            {
                $("body").addClass("flashRed");
                setTimeout(function(){
                    $("body").removeClass("flashRed");
                }, 1000)
                lives--;
                
                if(!lives){
                    gameOver = true;
                    updateLeaderboard();
                    playAudio("./sounds/wrong.mp3");
                    scores[currentUser] = Math.max(scores[currentUser], currscore);
                    changeWindow();
                    clearInterval(verifyLoopID);
                }
                clearInterval(verifyLoopID);
            }
        }
    }, 1000);
}

$(document).ready(function(){
    main_menu.addClass("container-active")

    let newGameButton = $(".new-game");
    let exitButton = $(".exit");
    let continueButton = $(".continue");
    let restartButton = $(".restart");
    let scoreButton = $(".highscore");
    let menuButton = $(".menu");
    let gameButtons = $(".red > button, .blue > button, .green > button, .yellow > button");
    
    addPointerListener(newGameButton, "new-game");
    addPointerListener(exitButton, "exit");
    addPointerListener(continueButton, "continue");
    addPointerListener(restartButton, "restart")
    addPointerListener(scoreButton, "highscore")
    addPointerListener(menuButton, "menu")
    addPointerListener(gameButtons, "audio");

    $(document).on("keydown", function(event)
    {
        if(playing && game_panel.hasClass("container-active") && !gameloopID)
        {
            paused = gameOver = false;
            let prevlevel = 0;
            let prevlives = lives;
            continueButton.removeClass("disabled");
            gameloopID = setInterval(function()                     // main game loop
            {
                if((prevlevel != level || prevlives != lives) && !gameOver)
                {
                    prevlevel = level;
                    prevlives = lives;
                    $(".game-panel > .level").text("Level : "+level);
                    $(".game-panel > .lives").text("Lives:" +lives);
                    showSequence(level);
                    setTimeout(function(){
                        validateSequence();
                    }, level*1000)
                }

                if(gameOver){
                    continueButton.addClass("disabled");
                    clearInterval(gameloopID);
                    gameloopID = 0;
                }
            }, 1000)
        }
        else if(gameloopID && game_panel.hasClass("container-active") && event.key == 'Escape')
        {
            gameOver = false;
            paused = true;
            changeWindow();
        }
    })
});

function addPointerListener(object, task)
{
    if(task == "audio")
    {
        $(object).on("pointerdown", function(event){
            $("."+$(this).text()).css("background-color", "white");
            playAudio("./sounds/" + $(this).text().toLowerCase() + ".mp3");

            if(playing){        // logging inputs
                user_seq[user_seq.length] = $(this).text().toLowerCase();
            }
        });
        
        $(object).on("pointerup", function(event){ 
            $("." + $(this).text()).css("background-color", $(this).text());
        });
    }
    else if(task == "new-game")
    {
        $(object).on("pointerdown", function(event){
            level = 1;
            lives = 3;
            currscore = 0;
            let username = prompt("Enter your Name :");
            let userIdx = userName.indexOf(username);

            if(userIdx == -1)
            {
                userName[userName.length] = username;
                scores[userName.length-1] = 0;
                currentUser = userName.length-1;
            }
            else currentUser = userIdx;
            paused = gameOver = false;
            playing = true;
            changeWindow();
        });
    }
    else if(task == "highscore")
    {
        $(object).on("pointerdown", function(event){
            leaderboards.addClass("container-active");
            main_menu.css("opacity", "0%");
        });

        $(object).on("pointerup", function(event){
            leaderboards.removeClass("container-active");
            main_menu.css("opacity", "100%");
        });
    }
    else if(task == "continue")
    {
        $(object).on("click", function(event){
            paused = gameOver = false;
            playing = true;
            changeWindow();
        });
    }
    else if(task == "restart"){
        $(object).on("click", function(event){
            level = 1;
            lives = 3;
            paused = gameOver = false;
            playing = true;
            changeWindow();
            $(".game-panel > .level").text("Press Any Key to Start");
            clearInterval(gameloopID);
            gameloopID = 0;
        });
    }
    else if(task == "menu"){
        $(object).on("click", function(event){
            console.log("true")
            level = 1;
            lives = 3;
            paused = true;
            playing = gameOver = false;
            changeWindow();
            clearInterval(gameloopID);
            gameloopID = 0;
        });
    }
    else if(task == "exit")
    {
        $(object).on("click", function(event){
            window.close();
        });
    }
}

function changeWindow(){
    if(gameOver)
    {
        setTimeout(function()
        {
            paused = playing = false;
            main_menu.removeClass("container-active")
            game_panel.removeClass("container-active");
            game_over.addClass("container-active");
        }, 2000)
    }
    else if(paused)
    {
        playing = gameOver = false;
        main_menu.addClass("container-active")
        game_panel.removeClass("container-active");
        game_over.removeClass("container-active");
    }

    else if(playing)
    {
        paused = gameOver = false;
        main_menu.removeClass("container-active")
        game_panel.addClass("container-active");
        game_over.removeClass("container-active");
    }

}

function updateLeaderboard(){
    let table = $(".leaderboards table");
    for(let i=0; i<Math.min(5,scores.length); i++){
        let entry = $("<tr><td>"+(i+1)+"</td><td>"+userName[i]+"</td><td>"+scores[i]+"</td></tr>");
        console.log("<tr><td>"+(i+1)+"</td><td>"+userName[i]+"</td><td>"+scores[i]+"</td></tr>");
        table.append(entry);
    }
}

function playAudio(path){
    let audio = new Audio(path);
    audio.play();
}