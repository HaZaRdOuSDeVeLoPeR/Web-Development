let start = 4;
let end = 20;

for(let i=0; i<100; i++){
    let rand = Math.random();       // Random number in intervak [0, 1)
    rand = rand*(end-start+1);      // Random number in interval [0, 'end-start+1')    [Scale the range]
    rand += start;                  // Random number in interval [start, end+1)        [Shift the range]

    console.log("Random Number :", Math.floor(rand));
}