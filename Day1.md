
# Day 1: Introduction and DOM 
JavaScript : is a dynamic programming language that can interact and modify HTML to create interactive websites. 
Document Object Model abbreviated as the DOM: In order to access and modify documents, JavaScript constructs an object that represents an HTML document. 

## Lesson Summary

In this lesson, we explored Introduction in JavaScript and the DOM . Here are the key points covered:

- We can write JavaScript using any text Editor , IDE such as VS Code ... , JavaScript Console in the browser.
- document is a built-in object that represents the whole Document (Page), allowing us to find and modify the page's elements.
- MDN ( Mozilla Developer Network ) is an open source documentation on web standards (https://developer.mozilla.org/en-US/) .
  

## Coding Examples

```javascript
// Example 1:Finding Elements in a web page 

1- Get the element with the specified id=x:
 const element = document.getElementById("x")   or document.querySelector("#x")
      
2- Get all elements with class="y":
const collection =  document.getElementByClassName("y")  or document.querySelectorAll(".y")

3- Get all elements with the tag name "p":
 const collection = document.getElementByTagName("p")
  
4-Get all elements with the name="z":
 const collection = document.getElementByName("z")
```

// Example 2: .length

```html
<input name="version" type="checkbox" value="v1">
<input name="version " type="checkbox" value="v2">
``` 
```javascript
let num = document.getElementsByName("version").length // return 2
```

// Example 3: .textContent
```html
<p id="name"></p>
```
```javascript
document.getElementById("name").textContent ="Israa";  //<p id="name">Israa</p>
```

// Example 4: .append
```html
<p id="name">Israa </p>
```
```javascript
document.getElementById("name").append ="Shtayeh";  // <p id="name">Israa Shtayeh </p>
```

//Example 5 : Get a collection of the <body> element's children
```html
<!DOCTYPE html>
<html>
<body>
<h1>children1/h>
<p>children2</p>
</body>
</html>
```
```javascript
const collection = document.body.children
collection[0].tagName // h1
collection[1].tagName // p
```
## Note
If there are two elements with the same ID, it will return the first one; however, you shouldn't do so. Instead, the id should be unique and only correspond to one element. 

```javascript
document.getElementtById("x")
```
## Coding Exercises

### [Compound Assignment With Augmented Multiplication](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/compound-assignment-with-augmented-multiplication)

#### My Solution


```javascript
let a = 5;
let b = 12;
let c = 4.6;
a *= 5;
b  *= 3;
c *= 10;
```


### [Concatenating Strings with the Plus Equals Operator](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/concatenating-strings-with-the-plus-equals-operator)

#### My Solution


```javascript
let myStr="This is the first sentence.";
myStr +=" This is the second sentence.";
```

### [Use Bracket Notation to Find the Nth-to-Last Character in a String](freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/use-bracket-notation-to-find-the-nth-to-last-character-in-a-string)

#### My Solution

```javascript
const lastName = "Lovelace";
const secondToLastLetterOfLastName = lastName[lastName.length - 2]; 

```
