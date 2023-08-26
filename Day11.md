 
# Day 11: Introduction, Types, and Coercion.
This README file summarizes the JavaScript lesson on Introduction, Types, and Coercion.

## Lesson Summary

In this lesson, we explored Introduction, Types, and Coercion in JavaScript. Here are the key points covered:
- "Everything in JavaScript is an object" is a false statement (e.g. false is not object).
- Primitive data types: undefined,string,number,boolean,symbol,null,bigint.
- Non-primirive data types : Function,array, object.
- In JavaScript, variables don't have types,values do.
- type of operator :
```javascript
  v=2;
  typeof v; // (type of the value that is currently in v ).
```   
- Undefined vs. Undeclared vs. uninitialized:
Undefined: the variable has no value.
 - Undeclared: never been created in any scope that we have access to.
 - Uninitialized: The idea is that certain variables, like block scope ones, don't get initialized; they never initially get set to - 
  Undefined. When something is in an uninitialized state, it is off limits you're not allowed to touch it in any way shape or form or 
  you'll get an error, and the error you get is the TDZ (Temporal Dead Zone) error.
- Special Number: NaN ( value indicates invalid number )
     ```javascript     
     var x= Number("n/a"); //NaN
     var y = Number("Hello"); //NaN
     var z=Number("39");//39 
     console.log(x==y);//false why?
     ```
- NaNs not equal to each other ( NaNs only value doesn't  have identity property (meaning is not equal to each other)
- isNaN() function first converts the argument to a number, and then returns true if the resulting value is NaN
- Number.isNaN() returns true if and only if the argument is of type Number and the value equals to NaN.
- Number.isNaN : doesn't do any coercion for us.
```javascript
var x = "n/a"; //NaN
var y = "Hello";
console.log(isNaN(x));//true
console.log(isNaN(y));//true

console.log(Number.isNaN(x));//false
console.log(Number.isNaN(y));//false
```
- Special Number: Negative Zero

 ```javascript
    var x=-0;
console.log(x===-0);//true
console.log(x===0);//true
console.log(x.toString());//"0"
console.log(x<0);//false
console.log(x>0);//false
console.log(Object.is(x,0));//false
console.log(Object.is(x,-0));//true

console.log(Math.sign(-3));//-1
console.log(Math.sign(3));//1
console.log(Math.sign(-0));//0
console.log(Math.sign(0));//0

```
## fix Math.sign
```javascript
function sign(v){
  return v!==0?Math.sign(v):Object.is(v,-0)?-1:1;
}
console.log(sign(-0));//-1
console.log(sign(0));//1
console.log(sign(-3));//-1
console.log(sign(3));//1
```
- Javascript automatically converts primitive values (String, Boolean, Number )into objects when necessary, so we can just create primitive values directly and use them with the same utilities as though they were objects.
- Dates have no corresponding primitive value and can only be created with new Date().
- Array, Function, and RegExp all have some extra features when created with their constructors. However, unless those features are specifically needed, the literal form is preferable.
- Don't use new with ( String, Boolean, Number ) you should absolutely never do that.
- Use new with ( Object, Array, Function, Date, RegExp, Error ).
 ```javascript
  var date = new Date("March 5 , 2023");
console.log(date.toUTCString());//Sat, 04 Mar 2023 22:00:00 GMT
```

- Abstract Operations are responsible for performing type conversion in Javascript, Whenever coercion (implicit or explicit) occurs, one or more internal operations, known as abstract operations, are performed.
- primary abstract operations:
  
  - ToPrimitive()
    
  - ToString()
  ![toString()](https://github.com/IsraaMShtayeh/Mastering-JavaScript-in-20-Days/blob/main/Images/toString.PNG)
  - ToNumber()
      ![toNumber()](https://github.com/IsraaMShtayeh/Mastering-JavaScript-in-20-Days/blob/main/Images/toNumber.PNG)
  - ToBoolean()
    ![ToBoolean()](https://github.com/IsraaMShtayeh/Mastering-JavaScript-in-20-Days/blob/main/Images/toBoolean.PNG)






  





```javascript



```


## Coding Exercises

### []()

#### My Solution


```javascript
```
