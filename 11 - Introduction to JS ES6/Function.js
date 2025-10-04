sayName_Classic("Aditya Vimal");
console.log("Eligibility :", check_Classic(21));

// 1. Function Declaration is hoisted
function sayName_Classic(name){
    console.log("Your Name is :", name);
}
function check_Classic(age){
    if(age >=18) return "Eliible to Vote";
    else return "Not Eligible to Vote";
}


// 2. Function Expression :- function stored in variable (not hoisted)
const sayName_Expression = function(name){
    console.log("Your Name is :", name);
}
const check_Expression = function(age){
    if(age >=18) return "Eliible to Vote";
    else return "Not Eligible to Vote";
}

sayName_Expression("Harsh Raj");
console.log("Eligibility :", check_Expression(17));


// 3. Arrow Function :- function stored in variable with omitted 'function' keyword (not hoisted)
const sayName_Arrow = (name) => {
    console.log("Your Name is :", name);
}
const check_Arrow = (age) => {
    if(age >=18) return "Eliible to Vote";
    else return "Not Eligible to Vote";
}

sayName_Arrow("Ankit Kumar");
console.log("Eligibility :", check_Arrow(22));


// 4. Anonymous Function :- function defined inline (not available outside its the scope)

