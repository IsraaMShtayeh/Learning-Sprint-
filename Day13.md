
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



### []()

#### My Solution


```javascript


```
