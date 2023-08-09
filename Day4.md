
# Day 4: Quiz Project Functions & Events and handlers

This README file summarizes the JavaScript lesson on Functions & Events and handlers. 
## Lesson Summary

In this lesson, we explored Functions & Events and handlers in JavaScript. Here are the key points covered:
- A JavaScript function is a block of code created to perform an action.
- Every function has a kind of default return that is undefined unless you specify it what function it should return.
- We may easily and quickly build an unnamed function using the arrow function.
- Scops are nested within the program the widest scope is the global scope .
- each functions gets its own new scope within the scope where it was declared .
- whithin each scope we can access variables declared in a wider scope (eg global scope) but not those declared in a narrower scope (eg function scope).
- variables declared with let can be modified from within a narrower scope .
- We can make our website interactive by using events and handling(the web browser fires events when certain things happen on the page).
- We can remove and set attribute of the element
   - Element.setAttribute("attributeName" , "attributeValue") e.g
       - button.setAttribute("name","SubmitButton")
       - button.setAttribute("disabled","")
    - Element.removeAttribute("attributeName") e.g
      -button.removeAttribute("disabled")
- We can detect event with JavaScript using addEventListener .
- addEventListener takes two parameters
  - The name of the event to listen to (e.g "click")
  - a handler function that JavaScript calls when that events is fiered on this element .
- JavaScript passes object (event) to the handler function with info about the event if we accept this as parameter we can use it to get details e.g
  - clientx and cienty (the X and Y coordinate of the touch point)
  - target ( which element was clicked event.target )
  - layerx
- there are many types of events we can handle e.g
   - "click"
   - "dblclick"
   - "mouseover"
   - "mouseout"
   - ... MDN 
  
## Coding Examples

```javascript
// Example 1: 


```


## Coding Exercises

### []()

#### My Solution


```javascript


```
