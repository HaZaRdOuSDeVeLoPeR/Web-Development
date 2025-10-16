// using querySelector
let h1_object = document.querySelector("h1");

for(let i=0; i<1000; i++){
    text1 = "Hello World";
    text2 = "GoodBye World"
    setTimeout(
        () => {
            if(i%2 == 0) h1_object.innerHTML = "GoodBye World";
            else h1_object.innerHTML = "Hello World";
        }, i*1000
    );
}

// using getElementsBy 
let li1 = document.getElementById("1");
let li2 = document.getElementById("2");
let li3 = document.getElementById("3");

for(let i=0; i<1000; i++){
    setTimeout(
        () => {
            let temp = li1.innerHTML;
            li1.innerHTML = li2.innerHTML;
            li2.innerHTML = li3.innerHTML;
            li3.innerHTML = temp;
            
        }, i*1000
    );
}

// Altering styling of elements using JS (one at a time)
let list = document.getElementsByTagName("ul");
list[0].style.backgroundColor = "red";

// Altering css styling directly (multiple at a time)
let listitems = document.getElementsByTagName("li");

// getElementsBy returns a list of elements. Hence iterate over each element and change its cssText
for(const item of listitems){
    item.style.cssText = "margin: 10px; display: inline-block; background-color: blue";
    item.style.cssText += "padding: 5px; border: 5px solid gold;"
    
    let link = item.getElementsByTagName("a");
    link[0].style.cssText = "font-size: 1.5rem; color: white";
}

let divs = [];              // create 6 divs(elements)
for(let i=0; i<6; i++){
    divs[i] = document.createElement("div");
    divs[i].style.cssText = "margin: 10px; padding: 10px; width: 50%; height: 50%;"
}

divs[0].style.backgroundColor = "red";
divs[0].innerHTML = "Old Parent Container";
divs[1].style.backgroundColor = "green";
divs[1].innerHTML = "New Sibling Before";
divs[2].style.backgroundColor = "yellow";
divs[2].innerHTML = "New Sibling After";
divs[3].style.backgroundColor = "blue";
divs[3].innerHTML = "Old Child Container";
divs[4].style.backgroundColor = "pink";
divs[4].innerHTML = "New Child Before";
divs[5].style.backgroundColor = "aqua";
divs[5].innerHTML = "New Child After";

divs[0].append(divs[3]);
document.body.append(divs[0]);

// appending the siblings container
divs[0].before(divs[1]);
divs[0].after(divs[2]);

divs[0].append(divs[5]);
divs[0].prepend(divs[4]);

// Removing elements using remove() method of element
removeorder = [4, 5, 1, 2, 3, 0]
for(let i=0; i<6; i++){
    setTimeout(
        () => {
            divs[removeorder[i]].remove();
        }, (i+1)*5000
    );
}

// Adding class to an element
divs[0].classList.add("parent", "red", "50%");
console.log(divs[0].className);

// Removing class from an element
divs[0].classList.remove("50%");
console.log(divs[0].className);

// Creating an element
let image_container = document.createElement("img");
// Setting attribute
image_container.setAttribute("src", "./images/webdev.jpg");
image_container.setAttribute("alt", "webdev-image");
image_container.setAttribute("width", "300px");

// Removing an attribute
image_container.removeAttribute("alt");

// Append the container at end of body
document.body.append(image_container);

// Append the container at beginning of body 
// [finally element exists here(no duplicate of same element is allowed)]
document.body.prepend(image_container);