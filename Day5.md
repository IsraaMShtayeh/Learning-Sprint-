
# Day 5: Conditionals , Map & filter 

This README file summarizes the JavaScript lesson on Conditionals and Map & filter. 
## Lesson Summary

In this lesson, we explored Conditionals and Map & filter in JavaScript. Here are the key points covered:
- If statement let us execute code under a certain condition (code in the if block only Runs if the condition is true )
- We can use else to run other code if (condition) is false.
- We can chain else and if blocks to account for multiple conditions.
- The condition is usually an expression that evaluate to a boolean if its given some other value JavaScript will convert it to a boolean
   - if("false") // true nonempty strings are truthy
   - if(0) //false
   - if(undefined) //false
   - if(null) //false
   - if("") //false
   - if([]) //true  objects are truthy
- Boolean logical operator:
   - The ! operator negates a boolean !true=false
   - The && we care about truthiness  of more than one value
   - The || requires only one value to be truthy .
- Conditional ternary operator ( JavaScript has a shortcut operator for writing quick conditionals if we need 3 values to work).
   - let x= condition ? value if true : value if false 
- Loops let us run the same chunk of code multiple times
   - for( initialize loop counter , condition (to keep the loop running ) ,how to change the counter ){ chunk of code }
   - while(condition ){chunk of code) // let us run code over and over if condition is true
   - for ...of loops let us more easily iterate over items in a collection ,and we can use it to  iterate over characters in a string
      - for (let char of "ALOHA")
      - for(let num of numbers) // array of numbers
- maps and filter : methods let us process all the items  in the array.
- filter calls a true\false function and creates a new array with only the items where the function return true .
- spread we can use it to put all the items from one array inside another array
- JavaScript can only do one task at a time ("single-threaded").
- When we give JavaScript a task that takes a while it doesnot stop and wait it adds the slow task to a TODO list and keeps on running our program the task runs sometimes later (Async) somethings take time:
   - waiting for user events.
   - asking a user to pick a file.
   - getting permission access camera/mic.
   - loading data from the interwebs .
- String templates are useful tool make them eith backticks and ${} e.g :
    - ` My name is ${VariableName} `.
    - `1 plus 2 equal ${1+2}`.
 
## Coding Examples

```html
// Example 1:
<style>
.myStyle {
  background-color: coral;
  padding: 16px;
}
</style>
......
 const list = document.getElementById("myDIV").classList;
list.add("myStyle");//add the "myStyle" class to myDIV.
```


## Coding Exercises

### []()

#### My Solution


```javascript


```
