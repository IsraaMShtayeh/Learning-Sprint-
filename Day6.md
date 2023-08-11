
# Day 6: Data Fetch and Promises ,Destructing Data , Async , Modules , Wrapping up  

This README file summarizes the JavaScript lesson on Data Fetch and Promises ,Destructing Data , Async , Modules , Wrapping up   . 

## Lesson Summary

In this lesson, we explored Data Fetch and Promises ,Destructing Data , Async , Modules , Wrapping up in JavaScript. Here are the key points covered:
- API (application programming interface) provide URL's that point at data wa care about.
- fetch() lets us use JavaScript to load data from API's .
- Promises: Promises are used to handle asynchronous operations ( when we work with operations that take along time like fetch) in JavaScript.
- Promises can be in 3 possible states:
   - pending: still waiting for the value
   - fullfilled : resolved finally got the value , all done .
   - rejected : sorry couldnot get the value , all done .
- await : let us tell JavaScript stop and wait for an Async operation to finish
  
  e.g let response=await fetch("URL");
  
   In this case of a promise await waits for it to resolve before cont with our code , the promise we get from fetch resolves to a response object.
    await calling .json() method on the response parses its body as a json object. 

  respone Object:
    -  status :  200 success , 404 notfound .
    - body : contains the data we care.
    - ...
- There is another way to tell JavaScript when promise done do something then(callback)  e.g  fetch().then((value that the promise resolve to ) =>{})
- Destructing Data is a fancy way of declaring multiple variables at once by extracting values from an object with their property name  , we can also destructure Arrays , assigning variables for their items
  (if we only care about some of the properties we can omit the others )
- await vaid only in Async functions,generators and async
- Async functions return promise .
- Modules let us split big codebases across multiple files (make it easier to work with it).
- import let us uses an exposed variable , functions ... from another module .
- export let us expose variables , functions  ... from our modules scope to the outside world.
- Code Debugging : It might be challenging to identify syntax mistakes in programming code.
Code debugging is the process of looking for (and resolving) mistakes in programming code.
   - console.log() , console.error() , console.warn() is one way to understanding waht's happening  when our program runs .
   - you can use the browsers debugger to pause and inspect what's happening (the debugger statement creates a  breakpoint where JavaScript will pause and let you look around and see what's going on ) .
- Error Handling:
    - try : lets us watch out for potential errors
    - catch : lets us manage errors when they occure 

   
## Coding Examples

```javascript
//Example1:

```


## Coding Exercises

### [Requirements:](https://github.com/orjwan-alrajaby/gsg-QA-Nablus-training-2023/blob/main/learning-sprint-1/week1%20-%20javascript-from-first-steps-to-professional/day%206/task.md)

#### My Solution
[**Code **](https://github.com/IsraaMShtayeh/Mastering-JavaScript-in-20-Days/tree/main/Task6)

![Solution](https://github.com/IsraaMShtayeh/Mastering-JavaScript-in-20-Days/blob/main/Images/Task6_IMG1.PNG)
![Solution](https://github.com/IsraaMShtayeh/Mastering-JavaScript-in-20-Days/blob/main/Images/Task6_IMG2.PNG)

