
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

### [Exercises for Async JS & Promises](https://github.com/orjwan-alrajaby/gsg-QA-Nablus-training-2023/blob/main/learning-sprint-1/week2%20-%20javaScript-the-hard-parts-v2/day%203/tasks.md)

#### My Solution : Q1
```javascript


```

#### My Solution : Q2
```javascript
const apis = [
  {
    apiName: "products", 
    apiUrl: "https://dummyjson.com/products",
  }, 
  {
    apiName: "users", 
    apiUrl: "https://dummyjson.com/users",
  }, 
  {
    apiName: "posts", 
    apiUrl: "https://dummyjson.com/posts",
  }, 
  {
    apiName: "comments", 
    apiUrl: "https://dummyjson.com/comments",
  }
]
const  display =function(data){
 console.log(data);

}

function doWork(result, data) {
result.data=data;
  console.log(result);
}
const executeInParallelWithPromises = (apis) => {
apis.forEach((api)=>{
 const FutureData=fetch(api.apiUrl);
let result={name:api.apiName , URL:api.apiUrl}
 FutureData.then(data => data.json()).then(doWork.bind(null, result));
})
}
executeInParallelWithPromises(apis);

```


