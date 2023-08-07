
# Day 1: Values & Data Types , Operators , Expressions 


## Lesson Summary

In this lesson, we explored Values & Data Types , Operators , Expressions in JavaScript. Here are the key points covered:

- In JavaScript there are two types
  of data types primitive data types
  (null,undefined,numbers (decimal,positive,negative,infinity...),string,boolean(false or true ))
   or Object such as document.
    
- typeof is a javaScript operator that return the type of the operand in form string.
  
- A string in JavaScript stores a series of characters (The first character is in index = 0).
  
- There is many built in string methode such as
   indexOf(character or string ), includes(string or character) , toLowerCase() , startsWith(string or character) etc.
  
- A string can be any text inside double or single quotes.
  
- There is different type of operator in JavaScript Arithmatic Operator (+ - * / ..),comparison operator (> >= < <= == === != !=== ...) ...
- The Difference between == !=  (loosy-goosey ) and === !== (strict)
  
  == checks whether the two given operands have the same value or not (doing extra steps casting ).
  
  ===  checks whether the two given operands have the same value and type or not.
  
- The Difference between Expressions and Statement
  
  Statement:action we want javascript to take (eg for loop , conditional ...)
  
  Expression: ask javascript for particular value (anything that executes and ends up being a value).
  
- we can  declare a JavaScript variable with the var , the const or the let keyword
 
  let and const : are Block Scope {} , cannot be Redeclared
  
  const : cannot be  Reassigned (unchangable variable)
  
  var :  can be Redeclared and Reassigned.
  
-  Variable names (Camel Case such as validVariable) can contain letters, digits but cannot start with a digit 0-9.
  
  


## Coding Examples

```javascript
// Example 1: JS String Methods 
let text = "Israa";
console.log(text.length);//5
console.log(text.startsWith("Is"));//true
console.log(text.includes("raa"));//true
console.log(text.indexOf("a"));// 3 first index
console.log(text.indexOf("q"));// -1
console.log(text[0]);//I
console.log(text+" Shtayeh");//Israa Shtayeh
console.log(text.toLowerCase());//israa



// Example 2: Declare and assigning variables
let x=5;
let y=10;
let result=x+y*5;//55

let y=11;//Error 
const v=5;
v=7;//Error 

// Example 3: Operators
let num1="100";
let num2=100;
console.log(num1==num2);//true
console.log(num1===num2);//false
```


## Coding Exercises



#### My Solution


```javascript


```
