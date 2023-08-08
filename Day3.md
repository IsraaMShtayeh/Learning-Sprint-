
# Day 3: Arrays , Objects , Quiz Project

This README file summarizes the JavaScript lesson on Arrays , Objects . 

## Lesson Summary

In this lesson, we explored Arrays and Objects  in JavaScript. Here are the key points covered:
- Arrays keep multiple values together in a single collection.
- Unlike Strings we can modify array in JavaScript (mutable).
- Array in JavaScript can hold any type of items or mix e.g [1,"text",true,document].
- Arrays are objects (typeof array return "object").
- array elements that are located at a given index can be accessed  arrayname[index].
- - Arrays in JavaScript provide multiple inbuilt functions:
  - length//return the size of the array
  - sort()//sort based on strings (elements are converted to strings before sorting them).
  - join(string) // join all array elements into a string
  - indexOf(string)
  - pop() // pop the last element (remove) and return it 
  - push(element) // add the element to the end of the array
  - shift() // remove the first array element and return it 
  - unshift(element) // add new element to the start of the array
  - array1.concat(array2)//combining arrays 1 and 2 without making any changes to the original arrays (creating a new merged array).
- Objects Collect multiple value together to describe more complex data
- Objects have Properties (Property Name and Property Value)
- Objects are mutable (you can assign new property).
- Object elements can be accessed objectName["propertyName"] or objectName.propertyName
- Objects can also have methods (property value) objectName.propertyName()
- The object is referenced by this Keyword inside the object.
- ###[Quiz:](https://anjana.dev/javascript-first-steps/2-jsquiz-fancy.html)

  
## Coding Examples

```javascript
// Example 1: Arrays 
const names = ["Israa", "sara", "Reem", "lina"];
console.log(names[1]);//sara
console.log(names.indexOf("Israa"));//0
console.log(names.pop());//lina
names.push("lama")
console.log(names);//[ 'Israa', 'sara', 'Reem', 'lama' ]
console.log(names.length);//4
const newNames=names.concat(["salma","sanaa"]);//
console.log(newNames);//[ 'Israa', 'sara', 'Reem', 'lama', 'salma', 'sanaa' ]
console.log(names);//[ 'Israa', 'sara', 'Reem', 'lama' ]
console.log(names.sort());//[ 'Israa', 'Reem', 'lama', 'sara' ]
console.log(names.join("&"));//Israa&Reem&lama&sara


// Example 2: Objects
const user={
   "first name":"Israa",
    hobbies:["travel","climbing","gaming"],
    speak:function(){
        console.log("My name is ",this["first name"]);
    }
    
}
console.log(user);
/*
{
  'first name': 'Israa',
  hobbies: [ 'travel', 'climbing', 'gaming' ],
  speak: [Function: speak]
}
*/
user.age=22;
console.log(user);
/*
{
  'first name': 'Israa',
  hobbies: [ 'travel', 'climbing', 'gaming' ],
  speak: [Function: speak],
  age: 22
}

*/
console.log(user["first name"]);//Israa
console.log(user.age);//22
user.speak();//My name is  Israa

```

Notes
```javascript
const obj={
x:1,
y:2,
}
Object.freeze(obj);// Make Object Immutable 
obj.z=5;//undefined

```



## Coding Exercises

### [Copy Array Items Using slice()](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/copy-array-items-using-slice)

#### My Solution


```javascript
function forecast(arr) {
  // Only change code below this line
return arr.slice(2,4);

}

// Only change code above this line
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));
```


### [Combine Arrays with the Spread Operator](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/combine-arrays-with-the-spread-operator)

#### My Solution


```javascript
function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence=['learning', ...fragment, 'is', 'fun']; 
  return sentence;
}

console.log(spreadOut());
```




### [Profile Lookup](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/profile-lookup)

#### My Solution


```javascript
// Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",

  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  // Only change code below this line
let result= contacts.filter(item=>item.firstName===name);
 if(result.length==0){
 return "No such contact"
 }

if(result[0][prop]===undefined){
   
  return "No such property";
}
return result[0][prop];

  // Only change code above this line
}

lookUpProfile("Akira", "likes");
```






### [Write Reusable JavaScript with Functions](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/write-reusable-javascript-with-functions)

#### My Solution


```javascript
function reusableFunction () {
  console.log("Hi World");
}
reusableFunction ();

```



### [Understanding Undefined Value returned from a Function](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/understanding-undefined-value-returned-from-a-function)

#### My Solution


```javascript
// Setup
let sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive() {
  sum = sum + 5;
}

// Only change code above this line

addThree();
addFive();

```



### [Return a Value from a Function with Return](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/return-a-value-from-a-function-with-return)

#### My Solution


```javascript
function timesFive(num) {
  return num *5;
}
```
