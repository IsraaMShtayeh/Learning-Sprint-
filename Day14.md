
# Day 14: Advanced Scope

This README file summarizes the JavaScript lesson on Advanced Scope. 

## Lesson Summary

In this lesson, we explored Advanced Scope in JavaScript. Here are the key points covered:

- Dynamic Scope: The idea of dynamic scope is that a function's references to its variable depend upon where that function was called Dynamic scope  exists in some languages (JavaScript is primarily a static-scoped language).
  
How dynamic scope  should works:
⚠️  Note:THEORETICAL EXAMPLE  
  ```javascript
var teacher="kyle";
function fun(){
console.log(teacher);
}
function fun2(){
var teacher="Frank";
fun();
}
fun2();  // Frank 
  ```
- Static scoping, also known as lexical scoping, is the most common way that variables are resolved in JavaScript. In static scoping, the value of a variable is determined by its location in the source code. Variables that are defined within a block of code, such as a function, are only accessible within that block of code and any nested blocks.
- Dynamic scope determined at run time.
- Lexical scope determined at compile time.

- Function Scope
Ex1:

```javascript
var teacher="kyle";
console.log(teacher) ;//Kyle
var teacher="Frank";
console.log(teacher) ;//Frank
```

Ex2: 
```javascript
 function fun(){
  var x=6;
  console.log(x);//
}
console.log(x);//null
fun();//6
console.log(x);//null
```
Ex3: 
```javascript
var x=5;
function fun(){
  var x=6;
  console.log(x);//
}
  console.log(x);//5
  fun();//6
    console.log(x);//5
```
IIFE Pattern
  
  Ex1:
  ```javascript
  var x=5;
(function fun(){
  var x=6;
  console.log(x);//6
})();
  console.log(x);//5
  // output 6 5 
   ```

Ex2:

```javascript
(function fun(str){
  console.log(str);//Hello
})("Hello");
```
Ex3:
```javascript

var x=(function fun(str){
  console.log("Result:")//Result:
return str;
})("Hello");
console.log(x);//Hello

```
- Block scoping {}
- if you have something that is naturally block scoped use let
  
```javascript
  var x=5;
{
  let x=6;
  console.log(x);//6
}
  console.log(x);//5
  ```
- var can be reused within a scope let cant.
- const variable cant be reassigned
  ```javascript
  const x=[1,3,4];
  x[0]=2;
  console.log(x);//[2,3,4]
  ```
in this case, I'm not trying to reassign the array so I get no error but I am actually still mutating the value which is totally allowed.
- Hoisting: it moved the function first and then it moved the variable declaration and then it  executed.



   Example1:
  ```javascript
  console.log(student,teacher);//undefined undefined 
  var student="Israa";
  var teacher="Kyle";
  ```
  
Example2:
 ```javascript
x=6;//TDZ error 
let x=5;
console.log(x);
 ```


Example3:
```javascript
var x=6;
{
 x=10;//TDZ Error 
  let x=5;  
}

```
- disprove the common saying "let doesn't hoist"

 ```javascript
console.log(number) //ReferenceError: Cannot access 'number' before initialization.
let number = 10
// or const number = 10
console.log(number);
/*
This means that JavaScript "knows" about the number variable.
How does it know? Because number is hoisted to the top of the global scope.
*/
```
 ```javascript
console.log(number2)//ReferenceError: number2 is not defined

let number = 10
```

- Variables declared with let or const are hoisted WITHOUT a default initialization. So accessing them before the line they were declared throws ReferenceError: Cannot access 'variable' before initialization.

But variables declared with var are hoisted WITH a default initialization of undefined. So accessing them before the line they were declared returns undefined.

- Temporal Dead Zone:
There's a name for the period during execution where let/const variables are hoisted but not accessible: it's called the Temporal Dead Zone.

```javascript
console.log(number)

let number = 10

console.log(number)
```
The number variable is in a temporal dead zone where JavaScript knows of its existence (because its declaration is hoisted) but it's not accessible (as it doesn't have an initialization).


## Coding Exercises

### []()

#### My Solution

Q1:
```javascript
for (let i = 0; i < 5; i++) {
    setTimeout(function() {
      console.log("value of [i] is: ", i);
    }, 100);
}
```
Q2:
```javascript
let   array = [];
for (let i = 0; i < 5; i++) {

   array.push(i);
}
   console.log("Current array is: ", array)


```
Q3:
```javascript

let functions = [];

for (let i = 0; i < 5; i++) {
  functions.push(() => {
    console.log("Current value of i is:", i);
  });
}

functions.forEach((func) => func());
```
