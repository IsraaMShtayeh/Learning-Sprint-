
# Day 8: Closures and Async JS 

This README file summarizes the JavaScript lesson on Closures and Async JS . 

## Lesson Summary

In this lesson, we explored Closures and Async in JavaScript. Here are the key points covered:

- When the function finishes executing, it's local memory is deleted (except the return value).
- function can be returned form another fuction.
- The function return will have a special property attached with it called backpack which contains a reference to all the variables in the local memory of the main function that returned that function.
- what can we call this backpack?
    - P.L.S.R.D (Persistance,Lexical,Scope ,Referenced,Data)
    - Closure
    - C.O.V.E (Closed over Variable Environment)
- Examples of where closure is used?
   - Iterators and generators :handling arays  in JavaScript
   - modules pattern :  we want to have data that persists for the lifespan of app without polluting the global memory
   - Async JS : to persist state in an asynchronous environment
   - helper Function like ‘once’ .
     

## Coding Examples

```javascript


```


## Coding Exercises

### [Exercises for closures](https://github.com/orjwan-alrajaby/gsg-QA-Nablus-training-2023/blob/main/learning-sprint-1/week2%20-%20javaScript-the-hard-parts-v2/day%202/tasks.md)

#### My Solution Q1:
```javascript
function createCounter(start){
  let counter=start;
  return increment =()=>{
    counter++;
    return counter;
  }
}

const newFunction=createCounter(5);

console.log(newFunction());//6
console.log(newFunction());//7
console.log(newFunction());//8

```

#### My Solution Q2:
```javascript
function calculateAverage(numbers){
let nums=numbers;
  return average =()=>{
    let sum=0;
     nums.forEach((item)=>{
      sum=sum+item;
     });
     return sum/nums.length;
   
  }
}

const newFunction=calculateAverage([2,7,3]);

console.log(newFunction());//4
```


#### My Solution Q3:
```javascript
function powerOf (base){
let b=base;
  return (exp)=>{
   
     return base**exp;
   
  }
}

const newFunction=powerOf(2);

console.log(newFunction(8));//256

```



#### My Solution Q4:
```javascript
function compose  (...params){
let func=params.reverse();
  return ()=>{
    let value=0;
  func.forEach((item)=>{
    value=item(value);
  })
   return value;
  }
}
function increment(num){
  num++;
  return num;
}
function multiplyByTwo(num){
  return num*2;
}
function square(num){
  return num*num;
}
function returnTwo(){
  return 2;
}
const newFunction= compose(square,multiplyByTwo,increment,returnTwo);
console.log(newFunction());//36    
```
