
# Day 13: Scope and Function Expressions

This README file summarizes the JavaScript lesson on  Scope and Function Expressions.

## Lesson Summary

In this lesson, we explored  Scope and Function Expressions in JavaScript. Here are the key points covered:
- Scope: where to look for things.
- JavaScript organizes scopes with functions and blocks
- 
```javascript
var teacher="kyle";
function fun(){
  teacher="Frank";
  topic="JS";
}
fun();
console.log(teacher);//Frank
console.log(topic);//JS
```
-
```javascript
"use strict";
x = 3.14; //Reference Error 
```
```javascript
function outer(){
  function inner(str){
    console.log(str);
  }
  inner("Inside");
}
outer();//Inside
inner("Outside");//ReferenceError: inner is not defined
```

- Named Function Expressions Benefits:
1. Reliable function self-reference (recursion, etc)
2. More debuggable stack traces
3. More self-documenting code
   
 ```javascript
function x(){}
const y=function z(){
}
x();
y();
z();//ReferenceError: z is not defined
 ```
- Anonymous Arrow Functions:
  
  ```javascript
  var x=list.map(item=>item.id);
  // of
  var x=list.map(function getId(item){
  return item.id});
  ```
- Function Declaration :
 ```javascript
  function doStuff() {};
  ```
- Function Types Hierarchy :
(Named) Function Declaration >(has some benefits over) Named Function Expression >(has some benefits over) Anonymous Function Expression



### [SECTION'S EXERCISES](https://github.com/orjwan-alrajaby/gsg-QA-Nablus-training-2023/blob/main/learning-sprint-1/week3%20-%20deep-javascript-foundations-v3/day%203/tasks.md)

#### My Solution
Q1:
```javascript
function sum(x){
    return (function f(y){
        console.log(y);
    },5);
}

const exampleNormalFunc1 = (a, b, c) => {
  return a * (b + c);
}

const exampleNormalFunc2 = (x, y) => {
  return x * y;
}

const exampleNormalFunc3 = (string) => {
  return string + " " + string + " " + string + "!";
}


const arrowHOF = (normalFunc) => {
   
//return normalFunc;
return (...param)=>{
let r=normalFunc(...param);
    return (count=1)=>{
        let result="";
        for(let i=0;i<count;i++){
            result=result+" "+r;
        }
        return result;
    }
};
}

const hofNormalFunc1 = arrowHOF(exampleNormalFunc1);
const hofNormalFunc2 = arrowHOF(exampleNormalFunc2);
const hofNormalFunc3 = arrowHOF(exampleNormalFunc3);

console.log(hofNormalFunc1(3, 4, 5)(2)); // logs 27 twice
console.log(hofNormalFunc2(20, 35)(4)); // logs 700 four times
console.log(hofNormalFunc3("Meow")()); // logs "Meow Meow Meow!" once
```

Q2:
```javascript

// Example object
const obj = {
  name: 'John',
  greet: function (greeting) {
    console.log(`${greeting}, ${this.name}!`);
  }
};

const preserveThis = (func) => {
return func.bind(obj);
}

// Wrap the greet function using preserveThis
const preservedGreet = preserveThis(obj.greet);

// Call the wrapped function as a method of the object
preservedGreet('Hello'); // Output: "Hello, John!"


```
Q3:
Example 1
```javascript
function outer1() {
  var x = 10;

  var inner1 = function() {
    console.log(x);
  };

  inner1();
}

outer1(); // Output: 10
// x function scope so i can access it from the inner function 
```

Example2:
```javascript




```
