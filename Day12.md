
# Day 12: Equality & Static Typing 💻 

This README file summarizes the JavaScript lesson on Equality & Static Typing.

## Lesson Summary

In this lesson, we explored Equality & Static Typing  in JavaScript. Here are the key points covered:
- == check value (loose) and allows coercion (types different).
- === check the value & type (strict) and  disallow coercion (types same). 
```javascript
var obj1={name:"kyle"}
var obj2={name: "kyle"}
console.log(obj1==obj2)//false
```
```javascript
let x=null;
let y=undefined;
console.log(x==y);//true
console.log(x===y);//false
```
-  == prefers numeric comparison
- == if you use it with something that's not a primitive Turn it into a primitive (we would invoke the ToPrimitive and come back to algorithm with two primitives and make a decision)
  
```javascript
var x=[42];
var y=42;
console.log(x==y);//true
console.log(x===y);//false 
```
- == summary
   - if types are the same its just gonna use triple equals
   - if null or undefined : equal
   - if non primitives: ToPrimitive
   - prefer ToNumber.

```javascript
var x=[];
var y=[];
console.log(x==!y);//true why?????
/*
![] convert to false
[] convert to ""
""== false
== prefers number
0==0 true 

*/

```
-
``` javascript
var x=[];
var y=[];
console.log(x!=y);//true why?????
/*
!([]==[]) 
!false = true 
*/
```
-
```javascript
var x=[];
if(x){
  //true Boolean(x)
}
if(x==true){
//false  "" == true not the same type then  0==1 false
}
if(x==false){
//true
}

```
- Avoid :
   - == with 0 or "" or even "  "
   - == with non-primitive
   - == true or == false allow ToBoolean or use ===.
- The case for double equals (the case for prefering ==)
   - Knowing types is always better than not Knowing them ( only use == when you know the types)
- if both types are the same == is identical to ===
- if the types are different using one === would be broken .
- since === pointless when the types don't match it's similarly unnecessary when they do match.
- Summary:
   - If you know the types in a comparison  whether the types match or not == is the more sensible choice
   - Not knowing the types means fully understanding that code so best to refactor so you can know the types .
   - Not knowing the types is equivalent to assuming type conversion because of corner cases the only safe choice is === (if you can't or won't use known and obvious types === is the only reasonable choice )
- Making types known and obvious leads to better code if types are known == is best otherwise fall back to ===.
- The core difference is that statically-typed languages perform type checking at compile time, while dynamically-typed languages perform type checking at runtime.
- Static type  checking  the type before running the program
- Dynamic type checking the type while running the program.
-  JavaScript is a dynamically-typed language, you can go about declaring variables, functions, objects and anything without declaring the type.
-   Flow and TypeScript have recently stepped in to give JavaScript developers the option to use static types.
-    Syntax for static types using Flow:
  
     ```
     var teacher:string = "kyle";
     teacher={name:"kyle"}; // Error cannt assign object to a String .
       
     ```
- Custome Type:
  
  ```
  type student={name:string}
  function getName(StudentRec:string){
  return StudentRec.name;
  }
  var  firstStudent:student ={name:"Frank"}
  var name:string = getName(firstStudent);
  ```
- Validating operand Types
  
  ```
  var studentName:string="Frank";
  var studentCount:number=16-studentName;//Error Can't subtract string 
  ```
- TypeScript and flow: helpful to solve typing issues and make your types more obvious.
- Static Typing pros:
   - They make types more obvious in code
   - Familiarity: they look like other language's type systems
   - Extremely popular these days
   - They're very sophisticated and good at what they do
- Static Typing cons:
   - They use "non-JS-standard" syntax (or code comments)
   - They require* a build process, which raises the barrier to entry
   - Their sophistication can be intimidating to those without prior formal types experience
   - They focus more on "static types" (variables, parameters, returns, properties, etc) than value types.
- Summary:
   - JavaScript has a (dynamic) type system, which uses various forms of coercion for value type conversion, including equality comparisons.
   - However, the prevailing response seems to be: avoid as much of this system as possible, and use === to "protect" from needing to worry about types.
   - Part of the problem with avoidance of whole swaths of JS, like pretending === saves you from needing to know types, is that it tends to systemically perpetuate bugs.
   - You simply cannot write quality JS programs without knowing the types involved in your operations
   - Alternately, many choose to adopt a different "static types" system layered on top
   - While certainly helpful in some respects, this is "avoidance" of a different sort
   - Apparently, JS's type system is inferior so it must be replaced,rather than learned and leveraged


     

## Coding Exercises

### [SECTION'S EXERCISES](https://github.com/orjwan-alrajaby/gsg-QA-Nablus-training-2023/blob/main/learning-sprint-1/week3%20-%20deep-javascript-foundations-v3/day%202/tasks.md)

#### My Solution
Q1:
``` javascript

```
Q2: c:
```javascript
function testScope1() {
  if (true) {
    var a = 1;
    let b = 2;
    const c = 3;
  }
  console.log(a);//1
  console.log(b);//Reference Error
 console.log(c);//Reference Error 
}

testScope1();
```
Q3:
```javascript
function testScope2() {
  console.log(a);//undefined
  console.log(b);//Reference Error 
  console.log(c);//Reference Error 
  if (true) {
    var a = 1;
    let b = 2;
    const c = 3;
  }
}

testScope2();

```

Q4: c
``` javascript
function testScope3() {
  var a = 36;
  let b = 100;
  const c = 45;

  console.log([a, b, c]);//[36,100,45]

  if (true) {
    var a = 1;
    let b = 2;
    const c = 3;

    console.log([a, b, c]);//[1,2,3]
  }

  console.log([a, b, c]);//[1,100,45]
}

testScope3();
```
