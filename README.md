# Master-JavaScript


![1-Array Methods](https://github.com/user-attachments/assets/924c489c-4101-4913-80ef-2f209d01c0fc)
![2-ArrayMethods](https://github.com/user-attachments/assets/444e0ca6-073f-4d22-b8d4-c876193a0842)
![3-Date Methods](https://github.com/user-attachments/assets/f1f865bb-6809-46c0-97d3-2190ca895eaf)
![4-GetMethods_SetMethods](https://github.com/user-attachments/assets/24fd5a23-8809-49ff-8a16-14431337f714)
![5-DOM_Methods](https://github.com/user-attachments/assets/227848de-3c7c-4cbe-95ad-0a23b294445b)
![6-DOM_Events](https://github.com/user-attachments/assets/58f1964f-115e-4693-8248-371abf123c22)
![7-MouseEvents](https://github.com/user-attachments/assets/efc2df5e-07ce-48b7-9c84-1440336d9aa0)
![8-SiblingRelations_ModifyingAttribute Elements](https://github.com/user-attachments/assets/35e8cb78-62c8-4cd4-ad8c-ec4bbf355584)
![9-Conversions](https://github.com/user-attachments/assets/7ebe986e-2b1e-4053-987b-a502a0095e03)


## console class

**The JavaScript console is a feature in web browsers that allows developers to interact with and debug their JavaScript code. It's a part of the browser's developer tools, and it provides a way to log information, inspect variables, run JavaScript commands, and diagnose issues in your web applications. You can access the JavaScript console by opening your browser's developer tools**

> log()

> info() 

## document class

- write();

- getElementById('');

## window class

- alert()

- window.alert()

- conform()

- prompt() 

# javaScript Introduction 

## Js Varibale with descriptive name Convension

## var 

**var: var is the oldest keyword for variable declaration in JavaScript. It has function scope or global scope, but it does not have block scope. Variables declared with var are hoisted, meaning they are moved to the top of their scope during the compilation phase. This allows you to access and assign values to them before they are declared in the code. var variables can be redeclared and reassigned.**


## const

**const: const is also introduced in ES6 and has block scope like let. However, const is used for declaring constants, meaning their values cannot be reassigned once they are assigned. const variables must be assigned a value at the time of declaration and cannot be left uninitialized. Like let, const variables are not hoisted and are limited to the block scope.**


## let 

**let: let was introduced in ECMAScript 6 (ES6) and has block scope. Variables declared with let are limited to the block in which they are declared (e.g., inside a loop or if statement). They are not hoisted like var variables, so you must declare them before using them. let variables can be reassigned but not redeclared within the same scope.**

<hr>

```
///////////////////////////////////////////////
var data = 1;
console.log(data);
{
    var data = "hello";
    console.log(data);
}
console.log(data);
///////////////////////////////////////////////
var data1 = 100;
console.log(data1);
{
    let data1 = 2;
    console.log(data1);
}
console.log(data1);
////////////////////////////////////////////////
const data2 = 200;
console.log(data2);
{
    const data2 = 201;
    console.log(data2);
}
console.log(data2);

```

# javaScript Data Type

## Primitive Data Types:

> **Number:** Represents numeric values. It can be an integer or a floating-point number.

> **String:** Represents sequences of characters. It is enclosed in single quotes (' ') or double quotes (" ").

> **Boolean:** Represents either true or false. It is used for logical operations and conditional statements.

> **Null:** Represents the intentional absence of any object value.

> **Undefined:** Represents an uninitialized variable or an object property that does not exist.

> **Symbol:** Represents a unique and immutable value that can be used as an identifier for object properties.

## Complex Data Types:

> **Array:** Represents an ordered list of values. Arrays can contain any combination of data types and are created using square brackets [ ].

> **Object:** Represents a collection of key-value pairs and is used to store more complex data. Objects can be created using the new Object( ) syntax or object literals { }.

> **Function:** Represents a reusable block of code that performs a specific task. Functions can be defined using the function keyword or as arrow functions (( ) => { }).

## Array methods

```
const array1 = [5, 12, 8, 130, 44];

const found = array1.find((element) => element > 10);

console.log(found);
// Expected output: 12
```

# javascript Loops

> while : 

> do while

> for

> for in

> for of

```
<script>
        const persons = [
            { name: 'John', age: 30, job: 'developer' },
            { name: 'Jane', age: 25, job: 'designer' },
            { name: 'Bob', age: 35, job: 'manager' }
        ];

        for (let person in persons) {
            // console.log(person.name, person.age, person.job);
            console.log(persons[person].name);
        }

    </script>
```

## forEach

```
<p id="demo"></p>

<script>
let text = "";
const fruits = ["apple", "orange", "cherry"];
fruits.forEach(myFunction);

document.getElementById("demo").innerHTML = text;
 
function myFunction(item, index) {
  text += index + ": " + item + "<br>"; 
}
</script>
```

# Javascript Conditional Statements

> if and else ( true : false )

## Syntax :

```
if(){

}
else{

}

```

## oprater with

> & , | , !


```
else{
    if(user[0]==userEmail & user[1]==userPass){
        res="Welcome";
    }
    else{
        res="Id Password Do Not Match";

    }
}
console.log(res);
```

# JavaScript Function

**Functions are a fundamental concept in JavaScript, and they play a role in structuring and organizing code. Functions are blocks of reusable code that can be defined once and executed (called) multiple times.**

## Function Type
 
> Pre Define Function  Ex. log() , write() , map()

> User Define function 

## Function Rules 💬.

> Define The Function

> Call The Function

> Passing The Argument

> Setting Default Value Parameter

> Return The Value

> Multiple Return With Array And Object

## Adnvance ES6 

> Anontmous Function

> Arrow Function
# Function : block of statement 

## Define the function 😎

**A function in JavaScript can be declared using the function keyword, followed by the function name, a list of parameters enclosed in parentheses, and the function body**

```
function name(){
    
    // block of statement

}
```

## Call The function 😊

```
name();
```






       
> IFFE 


# javaScript Module Integration 🏆

> The ECMAScript module system is a standardized way of organizing and structuring code in JavaScript applications.

> It allows developers to create reusable pieces of code (modules) that can be imported and used in other parts of their applications.

> ECMAScript modules were introduced as part of ECMAScript 6 (ES6) to address the need for a more scalable and modular approach.

## 1. Module Definition

> A module is a file that contains JavaScript code and may include variables, functions, classes, or any other JavaScript constructs.

> Each module has its own scope, which means that the variables and functions declared in a module are not automatically visible in other modules.
>

## 2. Export and Import Statements

> The export statement is used to explicitly export variables, functions, or classes from a module.

> The import statement is used to import exports from other modules.


```
// Exporting from a module
// File: myModule.js
export const variable1 = 'Some value';
export function function1() {
  // function1 logic
}

// Importing in another module
// File: AnotherModule.js
import { variable1, function1 } from './myModule';
```

## 3.Default Exports

**A module can have a default export, which is the main export of the module. It is imported without using curly braces {} and can be given any name when imported.**

```
// Default export in a module
// File: myModule.js
const variable1 = 'Some value';
export default variable1;

// Importing the default export
// File: AnotherModule.js
import myVariable from './myModule';
```

## 4.Module Dependency Graph

**The ECMAScript module system relies on a module dependency graph to manage the relationships between modules. When one module depends on another, the module loader ensures that dependencies are loaded and executed in the correct order.**

## 5.Asynchronous Loading

**Modules are loaded asynchronously, which can improve the performance of web applications. This is in contrast to the CommonJS module system, where modules are loaded synchronously.**

## 6.Strict Mode by Default

**Modules are automatically in strict mode, which enforces a stricter set of rules and helps catch common coding errors.**

## 7.Browser Support

**Modern web browsers support ECMAScript modules. You can use the type="module" attribute in script tags to indicate that a script should be treated as a module.**








## javaScript Fetch API

```
fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(response => response.json())
.then(json => console.log(json))
```

# JS And ES6 Module

```
class Application {
    // gobal variable type
    name = "Ducat India";
    //method

    constructor() {
        console.log("Hello Devloper");
    }
    hello() {
        return "Hello In Method of Application";
    }
    // hello();
}

let app = new Application;


console.log(app);
console.log(app.name);
console.log(app.hello());

```

**A module is a self-contained unit of code that can be reused and imported into other programs. Modules help to organize code and avoid naming conflicts by keeping variables and functions local to the module.**

# ES6 module approach.

## 1.User Module

```
export let name = "Developer";
export function hello()
{
    console.log("Hello");
}
```

## 2.App Module

```
import { name } from './module/user.js';
console.log(name);
```

## 3.Template Module

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tech Punit | Js Application</title>
</head>
<body>
    <div id="root"></div>
<script src="./app.js" type="module"></script>
</body>
</html>
```


```
// class and object
class Welcome{
    uname = "Punit";
    uemail = "punit.kat@gmail.com";
    #upass = 123456;
    arr = ["html", 'css', 'javascript'];
    obj = { data1: "HTML 5", data2: "CSS 3", data3: 'jquery' };
    hello(title) {
        return (`${title} ${this.uname}`); 
    }
}
// console.log(uname);
const app = new Welcome;
console.log(app.uname);
console.log(app.uemail);
console.log(app.upass);
console.log(app.arr);
console.log(app.arr[0]);
console.log(app.obj);
console.log(app.obj.data1);
console.log(app.hello('Welcome to Function inside the class'));














////////////////////////////////////////////////////////////////////
// basic function
// function hello() {
//         return (`Welcome to Function Outside the class`);
        
// }
// console.log(hello());


```
# JavaScript DOM

### The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. In JavaScript, the DOM is available through the document object.

## Here are some basic concepts and methods you should know when working with the DOM:

### Selecting Elements

> getElementById

> getElementsByClassName

> getElementsByTagName

> querySelector

> querySelectorAll

#### Example 

```
const header = document.getElementById("header");
const paragraphs = document.getElementsByClassName("paragraph");
const images = document.getElementsByTagName("img");
const navLinks = document.querySelectorAll("nav a");
```

## HTML Code Like

```
<div id="myDiv">Hello, world!</div>
```

## Control using Javascript

```
// Get the element by its ID
const myDiv = document.getElementById("myDiv");

// Change the text content of the element
myDiv.textContent = "Goodbye, world!";

// Add a new attribute to the element
myDiv.setAttribute("class", "highlight");

// Add a new child element to the div
const newElement = document.createElement("p");
newElement.textContent = "This is a new paragraph.";
myDiv.appendChild(newElement);
```

## Interval in javascript

```
<p id="demo"></p>

<script>
setInterval(displayHello, 1000);

function displayHello() {
  document.getElementById("demo").innerHTML += "Hello";
}
</script>
```
# Window: localStorage property

**The localStorage read-only property of the window interface allows you to access a Storage object for the Document's origin; the stored data is saved across browser sessions.**

> localStorage.setItem("myCat", "Tom");

> const cat = localStorage.getItem("myCat");

> localStorage.removeItem("myCat");

> localStorage.clear();

# Jquery Master Guide 

- **jQuery is a popular open-source JavaScript library that simplifies the process of creating interactive web pages. It provides a simple and concise way to manipulate HTML documents, handle events, create animations, and make AJAX requests to server-side scripts.**


<hr>

## jQuery Effects

> hide () , show () , toggle()

## jQuery HTML 

> Get 

> Set

> Add

> Remove 

> css

> Dimensions


## jQuery Traversing

## jQuery AJAX



https://swiperjs.com/

# Live Server Using Node JS

**install node js First nodejs.org/en**

  ## 1.Create A Package using [ npm init ] Command
  
```
C:\live-server>node -v
v18.17.1

C:\live-server>npm -v
9.8.1

C:\live-server>npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (live-server)
version: (1.0.0)
description: Network app
entry point: (index.js)
test command:
git repository:
keywords: network app
author: Punit Katiyar
license: (ISC) MIT
About to write to C:\live-server\package.json:

{
  "name": "live-server",
  "version": "1.0.0",
  "description": "Network app",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [
    "network",
    "app"
  ],
  "author": "Punit Katiyar",
  "license": "MIT"
}

Is this OK? (yes) y

C:\live-server>
```

## 2.Install lite-server [ npm install lite-server ]

```
C:\live-server>npm install lite-server

added 157 packages, and audited 158 packages in 11s

8 packages are looking for funding
  run `npm fund` for details

1 high severity vulnerability

Some issues need review, and may require choosing
a different dependency.

Run `npm audit` for details.

C:\live-server>
```

## 3.Add Command To Package.json File Under scripts

```
{
  "name": "live-server",
  "version": "1.0.0",
  "description": "Network app",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start":"lite-server"
  },
  "keywords": [
    "network",
    "app"
  ],
  "author": "Punit Katiyar",
  "license": "MIT",
  "dependencies": {
    "lite-server": "^2.6.1"
  }
}
```

## 4.Run The Server Type npm start

# finish


# CMS using Javascript

## website

> header

> navigation

> banner

> mid : post : aside

> Product

> footer

```
// Copy text to clipboard
function copyText() {
  const copyInput = document.getElementById('copyInput');
  copyInput.select();
  document.execCommand('copy');
}

// Paste text from clipboard
function pasteText() {
  const pasteInput = document.getElementById('copyInput');
  pasteInput.select();
  document.execCommand('paste');
  const pastedText = pasteInput.value;
  console.log('Pasted text:', pastedText);
}

// Attach event listeners to copy and paste buttons
const copyBtn = document.getElementById('copyBtn');
const pasteBtn = document.getElementById('pasteBtn');

copyBtn.addEventListener('click', copyText);
pasteBtn.addEventListener('click', pasteText);

```
# TypeScript Guide 

| TypeScript is a programming language that is a superset of JavaScript. It adds static typing and other features to JavaScript, providing additional tools for building large-scale, maintainable applications. It is designed and maintained by Microsoft. | <pre>
C:\node>node -v
v18.16.1
C:\node>npm -v
9.7.2
C:\node>npm install -g typescript
added 1 package in 3s
C:\node>tsc -v
Version 5.1.6
C:\node>  
</pre>

| <img src="setup-typescript.jpg" width="100%"> | <img src="setup-typescript.jpg" width="100%"> |
|---------------|-------------|

```json
{
  "firstName": "Punit",
  "lastName": "Katiyar",
  "email": "punit@techunitbook.com" 
}
```




```
class Ducat extends HTMLElement {
    constructor() {
        super();
        if (this.getAttribute('data')) {
            this.innerHTML = this.getAttribute('data');
        }
        else {
            this.innerHTML = "Hello In Ducat India";
        }
    }
}
window.customElements.define('ducat-india', Ducat);
```


```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Web Component</title>
    <style>
        ducat-india {
            display: block;
            padding: 1%;
            background-color: gold;
            margin-bottom: 1vh;
        }
    </style>
</head>

<body>

    <ducat-india data="HTML">

    </ducat-india>
    <ducat-india data="CSS"></ducat-india>
    <ducat-india data="JavaScript"></ducat-india>
    <ducat-india data="React"></ducat-india>
    <ducat-india></ducat-india>
    <script src="Ducat.js"></script>
</body>

</html>
```

