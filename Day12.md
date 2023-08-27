
# Day 12: Equality & Static Typing .

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
-```javascript
let x=null;
let y=undefined;
console.log(x==y);//true
console.log(x===y);//false
```
-  == prefers numeric comparison
- == if you use it with something that's not a primitive Turn it into a primitive (we would invoke the ToPrimitive and come back to algorithm with two primitives and make a decision)
- ```javascript
var x=[42];
var y=42;
console.log(x==y);//true
console.log(x===y);//false 
```
- == summary
   - if types are the same its just gonna use triple equals
   - if null or undefined : equal
   - ifnon primitives : ToPrimitive
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
- if the typesare different using one === would be broken .
- since === pointess when the types don't match its similarly unnecessary when they do match .
- Summary:
   - If you know the types in a comparison whenever the types match or not == is the more sensible choice
   - Not knowing the types means fully understanding that code so best to refactor so you can know the types .
   - Not knowing the types is equivalent to assuming type conversion because of corner cases the only safe choice is === (if you can't or won't use known and obvious types === is the only reasonable choice )
- Making types known and obvious leads to better code if types are known == is best otherwise fall back to ===.
- 
     


## Coding Examples

```javascript
var obj1={name:"kyle"}
var obj2={name:"kyle"}
console.log(obj1==obj2)//false
```


## Coding Exercises

### []()

#### My Solution


```javascript

```
