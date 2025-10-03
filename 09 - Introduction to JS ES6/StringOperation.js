// Three Datatypes in JS
console.log(typeof("31"));  
console.log(typeof(31));
console.log(typeof(true));

// variable declaration
let age = 18;
console.log("Your age :", age);

// String Operations [Except conatenation, all operations are immutable]

// 1. Concatenation
console.log("==========================================================");
let myName = "Aditya" + " " + "Vimal"               
console.log("Concatenated Name :", myName);

// 2. Find length of string
console.log("==========================================================");
let characters = myName.length;                   
console.log("Name has :", characters, "characters");

// 3. Substring using slice function    
    // slice(x,y) same behaviour as .begin() and .end() iterator in C++ [index y is excluded] 
console.log("==========================================================");
let first_name = myName.slice(0,6);
console.log("First Name is :", first_name);

// 4. Changing case in string, use: toUpperCase() and toLowerCase();
console.log("==========================================================");
let upper_first = first_name.toUpperCase();
let lower_first = first_name.toLowerCase();
console.log("First Name in Upper Case :", upper_first);
console.log("First Name in Lower Case :", lower_first);

// 5. Trimming whitespaces from string
console.log("==========================================================");
let Name = "        Aditya Vimal        ";
let trimmed = Name.trim();                      // trim from both sides
let fronttrimmed = Name.trimStart();            // trim from start
let endtrimmed = Name.trimEnd();                // trim from end
console.log("Original String :", Name, "|")
console.log("Whitespace trimmed from both sides :", trimmed, "|");
console.log("Whitespace trimmed from start :", fronttrimmed, "|");
console.log("Whitespace trimmed from end :", endtrimmed, "|");

// 6. Padding String with specific characters
console.log("==========================================================");
let frontpadded = myName.padStart(20,"%");            // pad at start till length becomes 20
let endpadded = myName.padEnd(20,"%");                // pad at end till length becomes 20
console.log("Original String :", myName)
console.log("Padded at start :", frontpadded);
console.log("Padded at end :", endpadded);

// 7. Replace Instances of a substring in a string with another substring
console.log("==========================================================");
let example = "I like Programming. I like playing AAA games."
f_replaced = example.replace("like", "don't like");
all_replaced = example.replaceAll("like", "don't like");
console.log("Original String :", example);
console.log("First Replaced:", f_replaced);
console.log("All Replaced:", all_replaced);

// 8. Split the substring on given seperator
console.log("==========================================================");
let lines = example.split(".");
for(let i = 0; i<lines.length; i++){
    console.log("Line",i,":",lines[i]);
}
