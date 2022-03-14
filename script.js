/*
DOM stands for Document Object model. Structured representation of html document.
JavaScript can be used to read/write/manipulate to the DOM.
Object oriented representation
*/

const heading = document.getElementById("heading");
console.log(heading);  //prints---> <h1 id="heading">Hi There!</h1>

//Every element in DOM is an object.
console.log(typeof heading);   //prints "object"

//If there is more than one element with the same id attribute, the getElementbyId method returns only the first element.
const heading2 = document.getElementById("heading");
console.log(heading2);  //prints---> <h1 id="heading">Hi There!</h1> 



const list = document.getElementById("list");

//Text content property. It sets or returns the textual content of the specified node and all sentence. 
//Sentence means the children of the element, grand-children and so on.
console.log(list.textContent);  //prints all the listed items i.e. home, about us, contact.

// we can change the text content of the element dynamically.
list.textContent = "Hi There!";
console.log(list.textContent); //changes/replaces text content to "Hi There!"

//innerHTML:- sets or returns html content of an element. It returns whole html content including the tags, attriutes and tags notes.
console.log(list.innerHTML); //prints <li>Home</li>, <li>About Us</li>, <li>contact</li>

//we can change the content dynamically in innerHTML and we can specify the html tags.
list.innerHTML = "<h1>Hi There!</h1>";
console.log(list.innerHTML); //prints <h1>Hi There!</h1>


//querySelector method:- returns the first element that matches specified css selector in the document. 
//It only returns the first element that matches the specified selector. If querySelector does not find the relevent element then it returns NULL.

const list1 = document.querySelector("#list"); // inside the parenthesis we can specify either the attribute('#list') or the tagname itself ('ul').
console.log(list1); // prints ul element

// if we change "id" attribute to the "class" then we need to use .list instead of #list (list--->name of attribute).
const list2 = document.querySelector(".list");
console.log(list2);


//Using the querySelector method we are unable to select all the multiple element.
//This is when querySelectorAll method is used. It returns all the elements and documents that matchs specified css selctor.

const list3 = document.querySelectorAll("li");
console.log(list3); // we get all li elements representend in nodelist. (nodelist is an array like object, but not an array)

//After adding class attribute to the first two li :-
const listItems = document.querySelectorAll(".list-item");
console.log(listItems); //prints only the first two li elements because only these matches with the class=list-items.



//DOM allows to use javaScript in order to change styles of the html elements dynamically.
//in orer to change style of an element, we need to use style object with its properties. 
const heading1 = document.getElementById("heading");
heading1.style.color = "blue"; 
heading1.style.backgroundColor = "grey"; //use "backgroundColor" instead of background-color as in css.

const list4 = document.querySelectorAll("li");
console.log(list4);

//to change style of any li element:-
list4[1].style.backgroundColor = "yellow";  //[1]---> 2nd element in nodelist.

//to change style of all li elements we need to use for loop or change nodelist to an array:-
//here, we use for loop;

for(let i=0; i<list4.length; i++){
    list4[i].style.backgroundColor = "red";
}

//csstext property:- allows us to add multiple styles at the same time to an element. It removes all default inline styles and add nw styles. 

list4[0].style.cssText = "background-color:coral; color:white; font-size:30px"

//classname property:- it sets or returns the classname of an element. In other words, it sets or returns the value of "class" attribute.
//Always returns string value. In order to use it, we need to create css styles in index.html.

heading.className = "changeBG"; //(line 60) changes the background color of heading to brown.
heading.className = "changeFT"; // it change the font but Bg color disappears. In order to make both chnges to work, we need to use "+= 'space changeFT'".
heading.className += " changeFT";

//classList property:- created new stylename in style tag.
console.log(heading.classList); //we get DOMTokenList.
heading.classList.add("changeCL"); //need to use add method followed by parenthesis with a classname as string without '.'
heading.classList.remove("changeCL"); //removes the changeCL.



//EVENTS: actions that happens on the webpage.

const heading = document.querySelector(".heading");
const btn = document.querySelector(".btn");

//Attaching an event handler to the button.
btn.onclick = () => {
    console.log("clicked");
}; 

//if we want to change the bg color of heading after we hover our mouse:-
btn.onmouseover = () => {
    heading.style.cssText = "background-color : brown; color : white";
}

//if we want to remove above style after we take the mouse out of button:-
btn.onmouseout = () => {
    heading.style.cssText = "background-color : transparent; color : black";
}


//Next way to attach event handler to an element:
//should give attribute to btn in html document: onclick="clickButton()"
<button class="btn" //[onclick="clickButton()"]>Click here</button>

// const clickButton = () => {
//     console.log("clicked!");
// };

// //eventlistener:-
// btn.addEventListener("click", () => {
//     heading.style.cssText = "background-color:brown; color:white";
// });


//event object:- 
//when the event occurs, the event object is created automatically. 
//when event object is passed into a function, it is often given as a parameter 'e' or 'evemt'.

// btn.addEventListener("click", (e) => {
//     console.log(e.target);

// })

//get and set the attributes of the element. check if the element has the specified attribute or not and how to remove them.

//get attribute: it returns the value of the attribute with the specified name of the element. 
//the value that is returned is a string. first,creating a paragraph in html document.

// const paragraph = document.querySelector(".paragraph");
// console.log(paragraph.getAttribute("id"));
// console.log(paragraph.getAttribute("class"));
// //if we specify the attribute which does not exist:-
// console.log(paragraph.getAttribute("title")); //title does not exist in document, returns "null"

// //set attribute:- it sets the value of an attribute for the specified element. if the sttibute already exists, value is updated.
// //otherwise, new attribute is added with the specified name and the value.
// //Set attribute uses two parameters:- 1st-->attribute name and 2nd--->attribute value. should pass both of them as a string.

// //for example:- to change the background color of the paragraph.addin attribute style with background color.
// paragraph.setAttribute("style", "background-color: coral"); //attribute name:-style; attribute value:-bg-color.

// //to remove attribute:- (style attribute)
// paragraph.removeAttribute("style");

// //has attribute:-to check whether an element has the attribute or not.
// console.log(paragraph.hasAttribute("style")); //returns false bcoz it's removed.
// console.log(paragraph.hasAttribute("class")); //returns true bcoz paragraph has the class attribute.


//DOM navigation:-

//prentNode:-

// const listItem = document.getElementById("list-item");
// console.log(listItem.parentNode); //prints the parent of <li>i.e. <ul>
// console.log(listItem.parentNode.parentNode); //double parentNode prints grandparent of <li> i.e. <div>.
// we can also use parentElement intead of parentNode. gives the same result.


//childNode:-

// const list = document.querySelector(".list");
// console.log(list.childNodes); //returns a nodelist. we get text nodes, they are the white space between elements. chidNode property treats it as a text nodes.
//to get rid of text nodes, we can use "children" property.
// console.log(list.children); //returns htmlcollections instead of nodelist and no text nodes.

//first-child:-
// console.log(list.firstChild);//returns first text node (white space).
// console.log(list.firstElementChild); //returns the 1st li element.

// //last child:-
// console.log(list.lastChild);
// console.log(list.lastElementChild);

//getting access to siblings.

// console.log(listItem.previousSibling); //we get "text" again.
// console.log(listItem.previousElementSibling); //we get li item.

// console.log(listItem.nextSibling);
// console.log(listItem.nextElementSibling);


//In DOM, we are able to create the element using couple of methods.

//for example, if we want to create next li element with text in it:-
//first, need to create an empty li:-

// const newElement = document.createElement("li");
// console.log(newElement); // new empty li elelment created.

//next, create a textual content:-

// const text = document.createTextNode("Blog");
// console.log(text); //content created

//need to connect empty li elelment and content;-
// newElement.appendChild(text);

// console.log(newElement); // Element is ready.

//need to add to list items:-

// list.appendChild(newElement);
// console.log(list); 

//new element is added to the list. By default, it's added at the bottom. To change the position:-

// list.insertBefore(newElement, list.children[2]);
// console.log(list); //new item is placed in index number 2. 

//deleting the element:-

// list.removeChild(newElement);
// console.log(list); //new element gets deleted.
