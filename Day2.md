
# Day 2: Values & Data Types , Operators , Expressions 


## Lesson Summary

In this lesson, we explored Values & Data Types , Operators , Expressions in JavaScript. Here are the key points covered:

- In JavaScript there are two types
  of data types primitive data types
  (null,undefined,numbers (decimal,positive,negative,infinity...),string,boolean(false or true ))
   or Object such as document.
    
- typeof is a javaScript operator that return the type of the operand in form string.
  
- A string in JavaScript stores a series of characters (The first character is in index = 0).
  
- There is many built in string methode such as
   indexOf(string ), includes(string) , toLowerCase() , startsWith(string) etc.
  
- A string can be any text inside "" or '' or ``.
  
- There is different type of operator in JavaScript Arithmatic Operator (+ - * / ** ..),comparison operator (> >= < <= == === != !=== ...) ...
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

### [Learning sprint (1), week (3), day (2) delieverables](https://github.com/orjwan-alrajaby/gsg-QA-Nablus-training-2023/blob/main/learning-sprint-1/week1%20-%20javascript-from-first-steps-to-professional/day%202/tasks.md)

#### My Solution

QUESTION #1
```javascript
let a = 0;
let b = "0";
let c = false;
let d = "false";

console.log(a == b); 
console.log(b === c);
console.log(!!d);
```
Solution:

true // a and b have the same value (type-conversion done by == operator )

false // b and c have the same value but different type 

true //

!!"false": 

"false"=true // non empty string are truthy

!!true:

first : !true=false

second : !false=true


QUESTION #2
```javascript
console.log(4 + 5 * "7"); 
```
Solution:
39

multiplication is done first so convert "7" to number 5*7=35 then 35+4=39

Note : 4 + 5 + "7" in this case the result is 97 the second plus does concatenation operations.


QUESTION #3
```javascript
let result = 5 + 2 * 3 - 1;
```
Solution:
10

multiplication is done first so 2*3=6 The precedence for (+) and (-) is the same so are computed from left to right:

5+6-1=11-1=10



QUESTION #4
```javascript
let x = 10;
let y = '10';
console.log(x == y);
console.log(x === y);
```
Solution:
true ( x and y have the same value regardless the type )

false ( x and y have the same value but different type)

QUESTION #5
```javascript
let num = "15";
let isPositive = true;
let result = (num > 10 && isPositive) || num < 0;
console.log(result);
```
Solution:

true 

num>10 true convert string "15" to number 15  15>10 

&&

isPositive=true 

so true && true = true 

||

 Logical operators in JavaScript is that they evaluate from left to right, and they short-circuit.
 so in this case : an OR expression, if the first operand is true, JavaScript with short-circuit and not even look at the second operand.

