
# Day 7: Introduction , JavaScript Principles , Functions and Callbacks

This README file summarizes the JavaScript lesson on JavaScript Principles, Functions, and Callbacks.

## Lesson Summary

In this lesson, we explored JavaScript Principles , functions, and Callbacks in JavaScript. Here are the key points covered:
- JavaScript code runs line by line and runs or executes each line, known as the thread of execution.
- JavaScript keeps track of what function is currently running by using the call stack.
  (we keep track of the functions we are running and where our execution is using our call stack.)
- When a function is run, it is added to the call stack, and when we hit return, it is removed.
- Functions:
   - We can assign them to variables.
   - They can be stored as properties of other objects where they are known as methods
   - They can be passed as inputs as arguments into other functions by reference back to where they were born.
   - They can be declared , saved inside of function of another function not used there but instead return out (closure)
-The negative effects of using the arrow function on understanding and readability in general.
- Pair Programming : is a method of software development where two programmers collaborate; one writes the code and types on the keyboard while the other reviews, suggests changes, and finds problems the positions can frequently change.
  


## Coding Exercises

### [Use Higher-Order Functions map, filter, or reduce to Solve a Complex Problem](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/use-higher-order-functions-map-filter-or-reduce-to-solve-a-complex-problem)

#### My Solution


```javascript
const squareList = arr => {
  // Only change code below this line
   arr=arr.filter((item)=>item>=0 && Number.isInteger(item));
  arr=arr.map((item)=>{
  
    
      return item*item;
    
   
  });
  return arr;
  // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);
```




### [Apply Functional Programming to Convert Strings to URL Slugs](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/apply-functional-programming-to-convert-strings-to-url-slugs)

#### My Solution


```javascript
// Only change code below this line
function urlSlug(title) {
title=title.toLowerCase();
title=title.trim();
let result="";
let flag=true;
for(let item of title){
  if(item===" " && flag ){
result=result+"-";
flag=false;
  }
  else if (item!=" "){
    flag=true;
result=result+item;
  }

}
return result;
}
// Only change code above this line
console.log(urlSlug(" Winter Is  Coming"));
```



### [Question 1: Functions and Callbacks](https://github.com/orjwan-alrajaby/gsg-QA-Nablus-training-2023/blob/main/learning-sprint-1/week2%20-%20javaScript-the-hard-parts-v2/day%201/tasks.md)

#### My Solution


```javascript
function increment(arr){
   return arr.map((item,index)=>item+1);
}
 async  function mapAsync (arr,func){
  let myPromise = new Promise(  function(resolve) {
          resolve(func(arr));
  });
   let result = await myPromise;
  
   return result;
//
}

async function asyncCall() {

  const result = await mapAsync([1,2,3],increment); 
  console.log("New Array : ",result); // New Array : [2, 3, 4]
}
asyncCall();
```








### [Question 2: Call Stack and Recursion](https://github.com/orjwan-alrajaby/gsg-QA-Nablus-training-2023/blob/main/learning-sprint-1/week2%20-%20javaScript-the-hard-parts-v2/day%201/tasks.md)

#### My Solution


```javascript
function sumRange (start,end,arr,index){
if(index>=arr.length)
return 0;
let num=0;
if(arr[index]>=start && arr[index]<=end){
num=arr[index];
}
return sumRange(start,end,arr,index+1)+num;
}
// Log to console
console.log(sumRange(1,4,[1,2,3,4,5,6,1,2,3,1],0))//17
```

