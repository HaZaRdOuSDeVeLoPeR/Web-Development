function Worker(name, age, experience){             // constructor function
    this.name = name;
    this.age = age;
    this.experience = experience;

    // every object will have an anonymous function linked to it
    this.work = () => {
        console.log(this.name, "is Working...");
    }
}

let worker1 = new Worker("Aditya", 21, 3);
console.log(typeof(worker1));
console.log(worker1);
worker1.work();

// callback function (function passed as an parameter)
// real-life example - event listeners
function greet(name, callback){
    console.log("Hello", name);
    callback(name);                     // here callback is a function which is passed as an argument
}

function sayBye(name){
    console.log("Goodbye", name);
}

greet(worker1.name, sayBye)