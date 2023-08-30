
# Day 10: Classes and Prototypes.

This README file summarizes the JavaScript lesson on Classes and Prototypes.

## Lesson Summary

In this lesson, we explored classes and Prototypes in JavaScript. Here are the key points covered:

- Object properties can be both primitive values, other objects, and functions.
- The hasOwnProperty() method in JavaScript is used to check whether the object has the specified property as its own property. This is useful for checking if the object has inherited the property rather than being it’s own.
- this Keyword
```javascript
function userCreator(name, score) {
 const newUser = Object.create(userFunctionStore);
 newUser.name = name;
 newUser.score = score;
 return newUser;
};
const userFunctionStore = {
 increment: function() {
 this.score++;
 }
};
const user1 = userCreator("Will", 3);
const user2 = userCreator("Tim", 5);
user1.increment(); 
user2.increment(); 
console.log(user1.score);//4
console.log(user2.score);//6

```
```javascript
function userCreator(name, score) {
 const newUser = Object.create(userFunctionStore);
 newUser.name = name;
 newUser.score = score;
 return newUser;
};
const userFunctionStore = {
 increment: function() {
 function add1(){ this.score++; }
 add1()
 }
};
const user1 = userCreator("Will", 3);
const user2 = userCreator("Tim", 5);
user1.increment(); 
console.log(user1.score)//3 this(global window)
```
solution:Now our inner function gets its this set by where it
was saved - it’s a ‘lexically scoped this

```javascript
function userCreator(name, score) {
 const newUser = Object.create(userFunctionStore);
 newUser.name = name;
 newUser.score = score;
 return newUser;
};
const userFunctionStore = {
 increment: function() {
 const add1 = () => { this.score++; }
 add1()
 }
};
const user1 = userCreator("Will", 3);
const user2 = userCreator("Tim", 5);
user1.increment();
console.log(user1.score);//4
```
- new (create and return the object automatically)
```javascript
function userCreator(name, score) {
 this.name = name;
 this.score = score;
};

userCreator.prototype.increment = function () { this.score++; }

const user1 = new userCreator("Will", 3);
const user2 = new userCreator("Tim", 5);
user1.increment();
console.log(user1.score)//4

```
- class keyword
```javascript
class userCreator{
constructor(name, score){
 this.name = name;
 this.score = score;
    }
};

userCreator.prototype.increment = function () { this.score++; }

const user1 = new userCreator("Will", 3);
const user2 = new userCreator("Tim", 5);
user1.increment();
console.log(user1.score)//4
```


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



