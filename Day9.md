
# Day 9: Async JavaScript and Promises 

This README file summarizes the JavaScript lesson on Async JavaScript and Promises.

## Lesson Summary

In this lesson, we explored Async JavaScript and Promises in JavaScript. Here are the key points covered:
- JavaScript is a single threaded language  (one command runs at a time)
- Synchronously executed (each line is run in order the code appear).
- Our core JavaScript engine has 3 main parts
   - Thread of execution
   - Memory / variable environment
   - callstack
- JavaScript engin part of web browser.
- JavaScript doesn't have the feature of a timer the browser provides the timer feature which JavaScript takes advantage of by using setTimeOut.
- Some Javascript features are actually Browser APIs e.g (document , setTimeout , console , fetch ).
- Functions that need to be asynchronously executed, are pushed onto the callback queue .
- When the callstack is empty, the functions in the callback ( keep track of multiple function calls) queue are execute (when the event loop finds an empty call stack).
- 


## Coding Examples

```javascript
// Example 1: setTimeout
function print(){
  console.log("After 0ms ");
}
setTimeout(print,0);
console.log("First");

/*
First 
After 0ms 
*/
```


## Coding Exercises

### [Factorialize a Number](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/factorialize-a-number)

#### My Solution


```javascript


```
