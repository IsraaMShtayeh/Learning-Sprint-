
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

### [Factorialize a Number](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/factorialize-a-number)

#### My Solution


```javascript

```
