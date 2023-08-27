
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
x = 3.14;   
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
- LexicalScope
jkihefigiueooooooooooooooooooooooooo
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
- IIFE Pattern
  Ex1:
  ```javascript
    var x=5;
(function fun(){
  var x=6;
  console.log(x);//6
})();
  console.log(x);//6
  /*
  6
  5
  */
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

### []()

#### My Solution


```javascript


```
