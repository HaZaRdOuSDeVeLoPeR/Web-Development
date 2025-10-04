let dices = [
    "<i class='fa-solid fa-7x fa-dice-one'></i>", 
    "<i class='fa-solid fa-7x fa-dice-two'></i>",
    "<i class='fa-solid fa-7x fa-dice-three'>", 
    "<i class='fa-solid fa-7x fa-dice-four'>", 
    "<i class='fa-solid fa-7x fa-dice-five'>", 
    "<i class='fa-solid fa-7x fa-dice-six'></i>"
];

let rand1 = Math.random();
let rand2 = Math.random();

rand1 = Math.floor((rand1*6) + 1);
rand2 = Math.floor((rand2*6) + 1);

let winner_msg = document.querySelector(".display-winner");
let dice1 = document.querySelector(".dice-img1");
let dice2 = document.querySelector(".dice-img2");

setTimeout(
    () => {
        dice1.innerHTML = dices[rand1-1];
        dice2.innerHTML = dices[rand2-1];

        if(rand1 == rand2){
            winner_msg.innerHTML = "Draw";
        }
        else if(rand1 > rand2){
            winner_msg.innerHTML = "Player 1 Wins !"
        }
        else{
            winner_msg.innerHTML = "Player 2 Wins !"
        }
    }, 2000
)