
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
- ........will be complete soon....... .................................
   
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

