
# Day 1: Closures and Async JS 

This README file summarizes the JavaScript lesson on Closures and Async JS . 

## Lesson Summary

In this lesson, we explored Closures and Async in JavaScript. Here are the key points covered:

- 

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
  return increment =()=>{
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
