
# Day 10: Classes and Prototypes.

This README file summarizes the JavaScript lesson on Classes and Prototypes.

## Lesson Summary

In this lesson, we explored classes and Prototypes in JavaScript. Here are the key points covered:

- Object properties can be both primitive values, other objects, and functions.

```javascript
const user ={
name : "Israa",
score: 6,
increment : function (){ user.score ++ ;}
};
user.increment();
console.log(user.score);//7
// or
const user=Object.create(null);
user.name="israa";
user.score=6;
user.increment=function(){user.score++;}
user.increment();
console.log(user.score);//7
//or
function userCreator(name,score){
const newUser={};
newUser.name=name;
newUser.score=score;
newUser.increment=function(){
newUser.score++;
}
return newUser;
}

const user=userCreator("Israa",6);
user.increment();
console.log(user.score);//7
```
-
```javaScript
function userCreator(name,score){
const newUser=Object.create(userFunctionStore);
newUser.name=name;
newUser.score=score;
return newUser;
}
const userFunctionStore={
increment:function(){this.score++;}
}

const user=userCreator("Israa",6);
user.increment();
console.log(user.score);//7
```


## Coding Exercises

### [Object Oriented Programming in FreeCodeCamp](https://github.com/orjwan-alrajaby/gsg-QA-Nablus-training-2023/blob/main/learning-sprint-1/week2%20-%20javaScript-the-hard-parts-v2/day%204/task.md)



