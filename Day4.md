
# Day 4: Quiz Project Functions & Events and handlers

This README file summarizes the JavaScript lesson on Functions & Events and handlers. 
## Lesson Summary

In this lesson, we explored Functions & Events and handlers in JavaScript. Here are the key points covered:
- A JavaScript function is a block of code created to perform an action.
- Every function has a kind of default return that is undefined unless you specify it what function it should return.
- We may easily and quickly build an unnamed function using the arrow function.
- Scops are nested within the program the widest scope is the global scope .
- each functions gets its own new scope within the scope where it was declared .
- whithin each scope we can access variables declared in a wider scope (eg global scope) but not those declared in a narrower scope (eg function scope)
- variables declared with let can be modified from within a narrower scope .
- We can make our website interactive by using events and handling(the web browser fires events when certain things happen on the page).
- We can remove and set attribute of the element
   - Element.setAttribute("attributeName" , "attributeValue") e.g
       - button.setAttribute("name","SubmitButton")
       - button.setAttribute("disabled","")
    - Element.removeAttribute("attributeName") e.g
      -button.removeAttribute("disabled")
- We can detect event with JavaScript using addEventListener .
- addEventListener takes two parameters
  - The name of the event to listen to (e.g "click")
  - a handler function that JavaScript calls when that events is fiered on this element .
- JavaScript passes object (event) to the handler function with info about the event if we accept this as parameter we can use it to get details e.g
  - clientx and cienty (the X and Y coordinate of the touch point)
  - target ( which element was clicked event.target )
  - layerx
- there are many types of events we can handle e.g
   - "click"
   - "dblclick"
   - "mouseover"
   - "mouseout"
   - ... MDN
- The toString() method returns a string representing the object. e.g console.log(true.toString() === "true")//true
  
## Coding Examples

```javascript
// Example 1: Functions
function half(number){
return number/2;
}
//or
/*
const half = (number)=>{
return number/2;
}
*/
//or
/*
const half = number=> number/2;
*/
console.log(half());//NaN (number)
console.log(half(2,5));//1 (2/2 = 1) skip 5 
```



```javascript
// Example 2: let
let x=6;
function test(){
console.log(x);//6
x=7;
console.log(x);//7
}
test();
console.log(x);//7

```
```javascript
let x=6;
function test(){
//console.log(x);//Error
let x=7;
console.log(x);//7
}
test();
console.log(x);//6
```

```javascript
// Example 3: var 

var x=6;
function test(){
console.log(x);//6
x=7;
console.log(x);//7
}
test();
console.log(x);//7


```

```javascript
var x=6;
function test(){
console.log(x);//undefined
var x=7;
console.log(x);//7
}
test();
console.log(x);//6


```


## Coding Exercises

### [Global Scope and Functions](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/global-scope-and-functions)

#### My Solution


```javascript
// Declare the myGlobal variable below this line

let myGlobal=10;
function fun1() {
  // Assign 5 to oopsGlobal here
oopsGlobal=5;
}

// Only change code above this line

function fun2() {
  let output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

```


### [Local Scope and Functions](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/local-scope-and-functions)

#### My Solution


```javascript
function myLocalScope() {
  // Only change code below this line
let myVar ;
  console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);

```

### [Global vs. Local Scope in Functions](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/global-vs--local-scope-in-functions)

#### My Solution


```javascript
// Setup
const outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
const outerWear="sweater";
  // Only change code above this line
  return outerWear;
}

myOutfit();

```
### [Stand in Line](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/stand-in-line)

#### My Solution


```javascript
function nextInLine(arr, item) {
  // Only change code below this line
  arr.push(item);
item = arr.shift();
  return item;
  // Only change code above this line
}

// Setup
let testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

```
