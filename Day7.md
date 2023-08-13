
# Day 7: Introduction , JavaScript Principles , Functions and Callbacks

This README file summarizes the JavaScript lesson on JavaScript Principles , Functions and Callbacks. 

## Lesson Summary

In this lesson, we explored JavaScript Principles , Functions and Callbacks in JavaScript. Here are the key points covered:

- 


## Coding Examples

```javascript


```


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

