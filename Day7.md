
# Day 1: Hoisting

This README file summarizes the JavaScript lesson on hoisting. Hoisting is a behavior in JavaScript where variable and function declarations are moved to the top of their scope during the compilation phase.

## Lesson Summary

In this lesson, we explored hoisting in JavaScript. Here are the key points covered:

- Hoisting is the process of moving variable and function declarations to the top of their scope.
- Variable declarations are hoisted but not their assignments. They are accessible but have an initial value of `undefined`.
- Function declarations are also hoisted, allowing them to be called before they are defined.
- Hoisting does not apply to function expressions, arrow functions, or variables declared with `let` or `const`.

## Coding Examples

```javascript
// Example 1: Variable Hoisting
console.log(x); // Output: undefined
var x = 10;
console.log(x); // Output: 10

// Example 2: Function Hoisting
hoistedFunction(); // Output: "Hello, World!"

function hoistedFunction() {
  console.log("Hello, World!");
}

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

```

