
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
- Special Number:
   - NaN ( value indicates invalid number )
     ```javascript     
     var x= Number("n/a"); //NaN
     var y = Number("Hello"); //NaN
     var z=Number("39");//39 
     console.log(x==y);//false why?
     ```
- NaNs not equal to each other ( NaNs only value doesn't  have identity property (meaning is not equal to each other)
- 


## Coding Examples

```javascript
// Example 1:


```


## Coding Exercises

### []()

#### My Solution


```javascript
```
