 
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
 - Undefined: the variable has no value.
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
  
  - ToPrimitive()  : The abstract operation ToPrimitive takes an input argument and an optional argument PreferredType.
     The abstract operation ToPrimitive converts its input argument to a non-Object type.
    
 Number Algorithm : If the hint is number , it calls the valueOf() function first, and if the returned value is primitive, it'll use it. If the object has no primitive value, valueOf() returns the object back then the toString() function gets called. Its value will be used if it is primitive; otherwise, it would result in a type error.

String Algorithm : If the hint is string , the order is reversed compared to the number algorithm. It calls the non-primitive toString() function first, and if it gets a string representation, it'll just use it; otherwise, it'll try the valueOf() method to see if the object has any primitive value.

  - ToString():This abstract operation takes any value and converts it to a representation of the value in string form.
  - If we call ToString(Object) it's going to invoke ToPrimitive() with the String hint (call toString() first and then it's going to call valueOf()).
    
    - null     ==>          "null"
    - undefined  ==>        "undefined"
    - true       ==>         "true"
    - false     ==>          "false"
    - 3.14      ==>          "3.14"
    - 0        ==>            "0"
    - -0       ==>            "0"
    - []        ==>            ""
    - [1,2,3]    ==>           "1,2,3"
    - [null,undefined]  ==>     ","
    - [,,,,]       ==>         ",,,"
    - [[[],[],[]],[]]  ==>     ",,,"
    - {}          ==>          "[object object ]"
    - {a:2}        ==>         "[object object ]"
    - {toString(){return x}}  ==> "x"   //override toString()
      

  - ToNumber() : will be invoked to convert it to a value of type number.
  -  If we call ToNumber(Object) it's going to invoke ToPrimitive() with the Number hint (call valueOf() first and then it's going to call toString()).
     - ""   ==>    0
     - "0"   ==>   0
     - "-0"  ==>   -0
     - "009"  ==>   9
     - "3.14" ==>  3.14
     - "0."  ==>   0
     - "."   ==>    NaN
     - "0xaF"  ==>    175
     - false   ==>    0
     - true    ==>   1
     - null  ==>     0
     - undefined  ==>  NaN
       
- For any array and object by default valueOf(){return this}
   - [""]  ==> 0
   - ["0"] ==>  0
   - ["-0"] ==>  -0
   - [null] ==>  0               //null become empty string 
   - [undefined] ==>  0        // undefined become empty string 
   - [1,2,3] ==> NaN
   - [[[[]]]] ==>  0
   - {...} ==> NaN
   - {valueOf(){return 3} ==> 3

    
- ToBoolean() :  is called to convert an argument to a Boolean type whenever we use a value that is not Boolean in a place that needs a Boolean
    - Falsy ( " ",0,-0,null,NaN,false,undefined)
    - Truthy ( "foo",23,{a:1},[1,2,3],true,function(){...})
- Corner Cases of Coersion
console.log(Number(""));//0
console.log(Number("\t\n"));//0
console.log(Number(null));//0
console.log(Number(undefined));//NaN
console.log(Number([]));//0
console.log(Number([1,2,3]));//NaN
console.log(Number([null]));//0
console.log(Number([undefined]));//0
console.log(Number({}));//NaN

console.log(String(-0));//0
console.log(String(null));//"null"
console.log(String(undefined));//undefined
console.log(String([null]));//""
console.log(String([undefined]));//""
console.log(String([null]));//""
console.log(String([undefined]));//""
console.log(Boolean(new Boolean(false)));//true


console.log(Number(true));//1
console.log(Number(false));//0
console.log(String(true>1));//false






### [SECTION'S EXERCISES	](https://github.com/orjwan-alrajaby/gsg-QA-Nablus-training-2023/blob/main/learning-sprint-1/week3%20-%20deep-javascript-foundations-v3/day%201/tasks.md)

#### My Solution
Q1:
```javascript
function convertStringToNumber(input) {
if(typeof input==="string"){
  return +input;
}
  return {type: typeof input ,
       value : input};
}
console.log(convertStringToNumber("5"));//5
console.log(convertStringToNumber(5));// {type: "number", value: "JS"}
```


Q2:
```javascript
const checkNaN = (value) => {
 if(isNaN(value))
 return true;
 return false;
}
console.log(checkNaN("Hello"));//true
console.log(checkNaN("3"));//false
```



Q3:
```javascript
function compareObjects(input1, input2) {
if(typeof input1 !== "object" || typeof input2 !== "object"){
  return [input1,input2];
}
let keys1 = Object.keys(input1);
let keys2= Object.keys(input2);
 if (keys1.length != keys2.length) return false;
 for (let key of keys1) {
    if (!keys2.includes(key) || input1[key]!==input2[key]) return false;
}
return true;

}
const obj1={
  x:5,
  y:4,
}
const obj2={
  x:5,
  y:4,
}
const obj3={
  x:5,
}
const obj4={
  x:5,
  y:10,
}
console.log(compareObjects(obj1,obj2));//true
console.log(compareObjects(obj1,obj3));//false
console.log(compareObjects(obj1,obj4));//false
console.log(compareObjects(obj1,"hello"));// [{...}, "hello"]
```


Q5:
```javascript
const complexCoercion = (input) => {
if(input === Object(input)){
return input;
}else{
    if(input===null || input===undefined){
    return false;
  }
if(typeof input==="number"){
  input=input.toString();
  
}
return Boolean(input);

}
}

console.log(complexCoercion(null));//false
console.log(complexCoercion(undefined));//false
console.log(complexCoercion("false"));//true
console.log(complexCoercion(5));//true
console.log(complexCoercion({a:5}));//{a:5}
```
