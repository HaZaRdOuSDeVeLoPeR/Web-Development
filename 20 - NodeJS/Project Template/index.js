const superheroes = require('superheroes');
const supervillains = require('supervillains');

for(let i=0; i<10; i++){
    setTimeout(function(){
        let superhero = superheroes.randomSuperhero();
        let supervillain = supervillains.randomSupervillain();

        console.log(superhero, "against", supervillain);
    }, 3000*i);
}