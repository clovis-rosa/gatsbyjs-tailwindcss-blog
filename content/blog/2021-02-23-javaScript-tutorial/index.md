---
title: JavaScript Tutorial
date: "2021-02-23T18:09:37.121Z"
description: "A programming language is said to have First-class functions when functions in that language are treated like any other variable."
---

**JavaScript (JS)** is a lightweight, interpreted, or ([just-in-time](https://en.wikipedia.org/wiki/Just-in-time_compilation)) compiled programming language with ([first-class functions](https://developer.mozilla.org/en-US/docs/Glossary/First-class_Function)). While it is most well-known as the scripting language for Web pages, many ([non-browser environments](https://en.wikipedia.org/wiki/JavaScript#Uses_outside_Web_pages)) also use it, such as ([Node.js](https://developer.mozilla.org/en-US/docs/Glossary/Node.js)), ([Apache CouchDB](https://couchdb.apache.org/)) and ([Adobe Acrobat](http://www.adobe.com/devnet/acrobat/javascript.html/)). JavaScript is a ([prototype-based](https://developer.mozilla.org/en-US/docs/Glossary/Prototype-based_programming)), multi-paradigm, single-threaded, dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles. _Read more about JavaScript._

```javascript
function sayHello() {
  return "Hello, "
}
function greeting(helloMessage, name) {
  console.log(helloMessage() + name)
}
// Pass `sayHello` as an argument to `greeting` function
greeting(sayHello, "JavaScript!")
```

> This section is dedicated to the JavaScript language itself, and not the parts that are specific to Web pages or other host environments. For information about API specifics to Web pages, please see Web APIs and DOM.

The standard for JavaScript is ECMAScript. As of 2012, all modern browsers fully support ECMAScript 5.1. Older browsers support at least ECMAScript 3. On June 17, 2015, ECMA International published the sixth major version of ECMAScript, which is officially called ECMAScript 2015, and was initially referred to as ECMAScript 6 or ES6. Since then, ECMAScript standards are on yearly release cycles. This documentation refers to the latest draft version, which is currently ECMAScript 2020.

Do not confuse JavaScript with the Java programming language. Both "Java" and "JavaScript" are trademarks or registered trademarks of Oracle in the U.S. and other countries. However, the two programming languages have very different syntax, semantic, and use.

## Example | Assign a function to a variable

We assigned an Anonymous Function in a Variable, then we used that variable to invoke the function by adding parentheses () at the end.

> Even if your function was named, you can use the variable name to invoke it. Naming it will be helpful when debugging your code. But it won't affect the way we invoke it.

### Javascript

```javascript
const foo = function () {
  console.log("foobar")
}
// Invoke it using the variable
foo()
```

([First-class Function](https://developer.mozilla.org/en-US/docs/Glossary/First-class_Function))
