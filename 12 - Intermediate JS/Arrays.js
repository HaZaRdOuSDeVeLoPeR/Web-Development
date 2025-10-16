let list = [3,4,2,1];
// Iterating over Array using index based-for loop
for(let i=0; i<list.length; i++){
    console.log("Index based loop :", list[i]);
}
// Iterating over Array values using for-of loop [in case of set and map, it iterates of values]
for(const entry of list){
    console.log("for-of-loop", entry);
}
// Iterating over Array keys and using it to access values using for-in loop [invalid in case of set since sets don't have keys]
for(const idx in list){
    console.log("Index =",idx, ":", "Value =", list[idx])
}

// Array Operations :- 
// (operations sort, push, pop, shift, unshift and reverse are mutable)
// 1. Length of array
console.log("==========================================================");
console.log("Size of Array :", list.length);


// 2. Sorting the array using function as a custom comparator [can also use anonymous function]
console.log("==========================================================");
const desc_comp = function(a,b){
    return b-a;
}
list.sort(desc_comp);
console.log("Sorted in descending Order :", list);


// 3. Adding an element at end of array using push(obj) method
console.log("==========================================================");
list.push(8);
console.log("Added an element in array at end :", list);


// 4. Removing an element from end using pop() method
console.log("==========================================================");
list.pop();
console.log("Removed one element from end : ", list);


// 5. Removing one element at front of array using shift() method
console.log("==========================================================");
list.shift();
console.log("Removed one element from front : ", list);


// 6. Adding an element at front of array using unshift(obj) method
console.log("==========================================================");
list.unshift(8);
console.log("Added an element in array at front :", list);


// 7. Concatenating two or more arrays using concat() function
console.log("==========================================================");
let list2 = ["My", "name", "is"];
let list3 = ["Aditya Vimal"];
let concatenated = list.concat(list2, list3);
console.log("Original Array :", list);              // concat doesn't modify original array
console.log("Concatenated Array :", concatenated);


// 8. Converting the array into string using a user-defined seperator [join() method]
// It is opposite of split() method in string
// string.split(seperator) <==> array.join(seperator)
console.log("==========================================================");
let list_to_string = list.join(" | ");
console.log("Original Array :", list);
console.log("Array Converted to String :", list_to_string);


// 9. Extracting Subarray from the Array using slice() function [similar to slice in string]
console.log("==========================================================");
let subarray = list.slice(1,3);     // subarray starting from index 1 to 2
console.log("Subarray from index 1 to 3 is :", subarray);


// 10. Searching for an element using indexOf()
console.log("==========================================================");
let mylist = [1,3,4,5,6,4,3,2];
console.log("Array being Searched :", mylist);

let first_occurence = mylist.indexOf(3, 0);
console.log("First occurence of 3 :" ,first_occurence);

let last_occurence = mylist.lastIndexOf(3, -1);
console.log("Last occurence of 3 :", last_occurence);

let occurence = mylist.indexOf(10);
console.log("Presence of 10 in Array at :", occurence);
console.log(mylist.includes(10));       // returns true/false

// 11. Reverse any array using reverse() function   [inplace reverse]
console.log("==========================================================");
mylist.reverse();
console.log("Reversed Array (Inplace) : ", mylist);

