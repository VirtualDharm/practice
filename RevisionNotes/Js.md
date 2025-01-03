<!-- js.md -->
## * Mid - Senior Level Questions and Answers

this refers windows.doc. in "use strict" is undefined 

yeh bitiwse ki zarurat kya hai

Hoisting is JavaScript's default behavior of moving declarations to the top.

### Closure:
Closures in JavaScript are functions that retain access to variables from their containing scope even after the parent function has finished executing. Closure is the concept of inner function returning lexical environment values of function they are created in. 
```javascript
function foo(outer_arg) {
    function inner(inner_arg) {
        return outer_arg + inner_arg;
    }
    return inner;
}
let get_func_inner = foo(5);
console.log(get_func_inner(4));
console.log(get_func_inner(3));
```

Maintaining State: Closures help maintain state between events in event-driven JavaScript.      
Private Variables: You can create private variables by enclosing them within a closure.      
Callbacks and Asynchronous Code: Closures are essential for handling callbacks and asynchronous operations.     

### Differences between call, apply, and bind?
`call` and `apply` immediately call a function while `bind` creates a new function that can be invoked in the future. Arguments with `call` are passed in one by one, separated with a comma while `apply` expects an array as its argument.

call : ek object ke function pe another object call kr diya
const person = {
  fullName: function(city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  }
}
const person1 = {
  firstName:"John",
  lastName: "Doe"
}
person.fullName.call(person1, "Oslo", "Norway") vs .apply(person1, ["Oslo", "Norway"]) //arguments as an array.

```javascript
let nameObj = {name: "Tony"}
let person = {name: "steve",sayHi: function (age) {console.log(this.name + " age is " + age)}}
let HiFun = person.sayHi.bind(nameObj, 42)
HiFun()
```
### Event Loop:
Executing JavaScript code.      
collecting and processing events.    executing queued sub-tasks.    

### Currying Function:
A currying function is the process of taking a function with multiple arguments and turning it into a sequence of functions each with a single argument. Curried functions are a great way to improve code reusability and functional composition.

```javascript
function calculateVolume(length) {
  return function (breadth) {
    return function (height) {
      return length * breadth * height;
    }
  }
}
console.log(calculateVolume(4)(5)(6));
```

### Memoization:
By storing the result of expensive function calls and returning the cached results when the same inputs occur again for optimization.
to avoid getting cached data: "demo_get.asp?t=" + Math.random() in url

document.cookie = "username=John Doe";

### Higher-Order Function:
It is a function that accepts another function as an argument or returns a function as a return value or both of them.
exs include Map, filter, and reduce.

### Event Delegation:
It is a pattern of adding a single event listener to a parent element instead of multiple elements.

### Callback:
A function that is used to notify the calling instance.

### Promise:
It is an object representing the eventual completion or failure of an asynchronous operation. Callbacks are attached to the returned promises that make handling of asynchronous code easier and more readable.

### async/await:
It is a new addition to ES2017 which is syntactic sugar on top of promises and make asynchronous code look synchronous code.

### AJAX:
Send data to the server and get data without refreshing the page.

### Regex: 
It is one of the most important topic that should be paid more attention: `https://quickref.me/regex`
Regular expressions can be used to perform all types of text search and text replace operations.

> Case-insensitive(i), global search(g) with optional multiline(m) support
> Character ranges using brackets [abc]; [0-9];
> Alternatives using | (x|y);
> Metacharacters for digits, whitespace, word boundaries, and Unicode characters \d; \s; \b; \uxxxx;
> Quantifiers for one or more, zero or more, and zero or one occurrences n+; n*; n?;
Additional exs:
```javascript
// Anonymous function
const rocketToMars = function() {
  return 'BOOM!';
}
// Prints 3 thrice, not what we meant.
for (var i = 0; i < 3; i++) {
  setTimeout(_ => console.log(i), 10);
}

// Prints 0, 1 and 2, as expected.
for (let j = 0; j < 3; j++) {
  setTimeout(_ => console.log(j), 10);
}

(function () {
  console.log('hello world')
})();
```
> all because var retains the value   
> unshift enters into ==>   
> continue keyword   
> for (let index/fruit in fruits) { console.log(index,fruit); } ==> 0 apple, 1 peach, 2 pineapple   
```javascript
// callback ex:
const isEven = (n) => {
  return n % 2 == 0;
}
let printMsg = (evenFunc, num) => {
  const isNumEven = evenFunc(num);
  console.log(`${num} is an even number: ${isNumEven}.`)
}
printMsg(isEven, 4);

const [a,b, ...rest] = numbers 
[firstName, lastName] = [lastName, firstName]
for (let i = 0; i < arguments.length; i++) {}

for/in : properties
for/of : values

// forEach ex:
const numbers = [28, 77, 45, 99, 27];
numbers.forEach(number => {  
  console.log(number);
});

// map ex:
const members = ["Taylor", "Donald", "Don", "Natasha", "Bobby"];
const announcements = members.map((member) => {
  return member + " joined the contest.";
});
console.log(announcements);

// reduce ex:
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((accumulator, curVal) => {  
  return accumulator + curVal;
});
console.log(sum); // 10

const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myFunction);
function myFunction(value, index, array) {
  return value * 2;
}

// filter ex:
const randomNumbers = [4, 11, 42, 14, 39];
const filteredArray = randomNumbers.filter(n => {  
  return n > 5;
});

// extract the required values from keys
const person = {
  name: 'Tom',
  age: '22',
};
const {name, age} = person;
console.log(name); // 'Tom'
console.log(age); // '22'

// delete person.age

// object creation ex:
const activity = 'Surfing';
const beach = { activity };
console.log(beach); // { activity: 'Surfing' }

Object.keys(person)
Object.values(person)
Object.enteries(person)

### What is prototype in JavaScript?
Prototypes are the mechanism by which we can change the object constructor. It's easy to add in new property in object named say function Person(name){this.Username=name} myMother=new Person myMother.nationality="Indian"
Person.prototype.nationality = "English"; so now we can do myMother.nationality="Indian" // Add a new thing in object constructor 

// good example of encapsulation:
const cat = {
  name: 'Pipey',
  age: 8,
  whatName() {
    return this.name  
  }
};
console.log(cat.whatName()); // => Pipey

// super keyword ex:
// Parent class
class Media {
  constructor(info) {
    this.publishDate = info.publishDate;
    this.name = info.name;
  }
}
// Child class
class Song extends Media {
  constructor(songData) {
    super(songData);
    this.artist = songData.artist;
  }
}
const mySong = new Song({
  artist: 'Queen',
  name: 'Bohemian Rhapsody',
  publishDate: 1975
});

// import/export ex: 2 types named & default
export const name = "Jesse" //named inline
const name = "Jesse"
const age = 40
export { name, age } //named all in one
import { name, age } from "./person.js";

const message = () => { //default
  return 'my name is years old.';
};
export default message;
import message from "./message.js";
Named exports must be destructured using curly braces. Default exports do not.
```
### How to Write Promises:

### Basic Promise Creation:
```javascript
const promise = new Promise((resolve, reject) => {
  // An asynchronous operation.
  const res = true
  if (res) {
    resolve('Resolved!');
  } else {
    reject(new Error('Error'));
  }
});

promise.then(
  (result) => console.log(result),
  (error) => console.error(error)
);
```

### Promise Chaining:
```javascript
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(3);
  }, 300);
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(2);
  }, 200);
});
Promise.all([promise1, promise2]).then((res) => {
  console.log(res[0]);
  console.log(res[1]);
});
```
### Adding Multiple Functions to Promises:
```javascript
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('*');
  }, 1000);
});
const twoStars = (star) => {
  return (star + star);
};
const oneDot = (star) => {
  return (star + '.');
};
const print = (val) => {
  console.log(val);
};
// Chaining them all together
promise.then(twoStars).then(oneDot).then(print);
```
### HTTP Request ex:
```javascript
const mock = (success, timeout = 1000) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve({ status: 200, data: {} });
      } else {
        reject({ message: 'Error' });
      }
    }, timeout);
  });
};
const someEvent = async () => {
  try {
    await mock(true, 1000);
  } catch (error) {
    console.log(error.message);
  }
};
```
## example of Promises:
```javascript
let pro1 = Promise.resolve(5);
let pro2 = 44;
let pro3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');/setInterval/clearTimeout/
});
Promise.all([pro1, pro2, pro3]).then((values) => {
  console.log(values);
});
// expected => Array [5, 44, "foo"]
Promise.all(···)
Promise.race(···)
Promise.reject(···)
Promise.resolve(···)
```
### HTTP Request ex:
```javascript
const xhr = new XMLHttpRequest();
xhr.open('GET', 'mysite.com/getjson');
```
### AJAX example with Fetch API:
```javascript
const getSuggestions = async () => {
  const wordQuery = inputField.value;
  const endpoint = `${url}${queryParams}${wordQuery}`;
  try {
    const response = await fetch(endpoint, { cache: 'no-cache' });
    if (response.ok) {
      const jsonResponse = await response.json();
    }
  } catch (error) {
    console.log(error);
  }
};
```
### Run a express server
```javascript
const express = require('express')
const app = express()
const port = 3000
app.get('/', (req, res) => {
  res. send('Hello World!')
})
app.get('/user/:id', (req, res) => {
  res.send('OK')
  res.send('user' + req.params.id)
  res.status(500).json({ error: 'message' })
})
app. listen(port, () => {
  console.log(`Listening port on ${port}`)
})
```
### extra code 
```javascript
fn(...[1, 2, 3])
//same as fn(1, 2, 3)
readFile('text.txt', (err, data) => {
  ...
})
async function run () {
  const user = await getUser()
  const tweets = await getTweets(user)
  return [user, tweets]
}
for (let {title, artist} of songs) {
  ···
}
function* generatorFunction() {
  yield 1;
  yield 2;
}
const generator = generatorFunction();
console.log(generator.next().value); // Output: 1
console.log(generator.next().value); // Output: 2
console.log(generator.next().value); // Output: undefined
```

```javascript
REGEX in js
let text = "The best things in life are free";
let pattern = /e+/; /*/pattern(quantifer)/modifier(s);*/
let result = pattern.test(text);
.exec vs .match vs .test 
```


| **Feature**            | **Encore.ts**                                                                  | **Hono**                                                          | **Elysia**                                                        | **Nest.js**                                                       |
|------------------------|------------------------------------------------------------------------------- |------------------------------------------------------------------ |------------------------------------------------------------------ |------------------------------------------------------------------ |
| **Key Features**       | - Type-safe API schemas, infrastructure integration, and local development dashboard  <br> - Built-in features like tracing, automated testing, and structured logging <br> - Rust-based runtime for high performance | - Minimalist and ultra-lightweight (13KB) <br> - Multi-runtime support: Cloudflare Workers, Node.js, Bun, Deno <br> - Zero NPM dependencies | - Type-safe API handlers <br> - Uses TypeBox for request validation <br> - One-line Swagger documentation <br> - First-party OpenTelemetry support | - Opinionated, modular architecture (Controllers, Modules, Providers) <br> - Dependency injection, decorator-based APIs <br> - Choice between Express and Fastify |
| **Pros**               | - Fastest performance due to Rust runtime <br> - Type-safe infrastructure and microservice integration <br> - Automatic local infrastructure | - Extremely lightweight and easy to deploy <br> - Great for serverless and edge computing <br> - Flexible runtime support | - Fast and built with TypeScript in mind <br> - Type-safe APIs save time and reduce bugs <br> - Good built-in support for monitoring | - Great for large, enterprise-scale applications <br> - Structured code organization simplifies maintenance <br> - Broad ecosystem and community support |
| **Cons**               | - Heavier and more complex <br> - Learning curve due to extensive built-in features | - Limited built-in features; requires middleware <br> - Not as fast or feature-rich as Encore | - Performance overhead from JavaScript-based validation <br> - Limited compared to Encore for infrastructure management | - Steep learning curve <br> - Opinionated and potentially overkill for small projects <br> - Slower due to abstraction overhead |
| **Best Use Cases**     | - Projects needing high performance, microservice architectures, or extensive infrastructure integration | - Lightweight projects, serverless apps, or apps deploying to multiple runtimes like Cloudflare Workers | - TypeScript-heavy projects that need speed and type safety but not extensive infrastructure management | - Large-scale, long-term projects where maintainability and modular architecture are crucial |


let car = {type:"Fiat", model:"500", color:"white"};
car = "Fiat";      // Changes object to string 
that's why use const car & const means refference point will remain same

why arrow () : they dont have this & better syntax, why classes over functions : they are not hoisted.
method with static keyword can be called by functions not by their objects.
document.URL,cookie,readyState,screen.availWidth,colorDepth,pixelDepth,location.href,location.assign,window.history:history.back(),history.go(-2);,history.forward(),cookieEnabled,navigator:broswer's info:appCodeName,javaEnabled,onLine,geolocation.getCurrentPosition(),watchPosition(),document.cookie=""(goes with every request),localStorage.setItem("name", "John Doe"),sessionStorage.getItem(''),

document.getElementById("demo").childNodes[0].nodeValue,firstChild,lastChild,nextSibling,previousSibling, $("#id01"),$(".id01"),$("p"),$("p.intro")
insertBefore(),remove(),parent.replaceChild(para, child),
onload=func(),oninput,onchange,onmousedown,onmouseup,onclick

addEventListener {document.getElementById("myBtn").addEventListener("click", displayDate)},

Event Bubbling or Event Capturing?

Event propagation is a way of defining the element order when an event occurs. If you have a <p> element inside a <div> element, and the user clicks on the <p> element, which element's "click" event should be handled first?

In bubbling the inner most element's event is handled first and then the outer: the <p> element's click event is handled first, then the <div> element's click event.
In capturing the outer most element's event is handled first and then the inner: the <div> element's click event will be handled first, then the <p> element's click event.

addEventListener(event, function, useCapture='false');

A web worker is a JavaScript that runs in the background, independently of other scripts, without affecting the performance of the page. You can continue to do whatever you want: clicking, selecting things, etc., while the web worker runs in the background.
function startWorker() {
  if(typeof(w) == "undefined") {
    w = new Worker("demo_workers.js");
  }}
w.terminate();


json(faster)
{"employees":[
  { "firstName":"John", "lastName":"Doe" },
  { "firstName":"Anna", "lastName":"Smith" },
  { "firstName":"Peter", "lastName":"Jones" }
]}
xml 
<employees>
  <employee>
    <firstName>John</firstName> <lastName>Doe</lastName>
  </employee>
  <employee>
    <firstName>Anna</firstName> <lastName>Smith</lastName>
  </employee>

const text = '{"name":"John", "age":"function () {return 30;}", "city":"New York"}';
const obj = JSON.parse(text);
obj.age = eval("(" + obj.age + ")"); use eval() to convert text back into functions.
document.getElementById("demo").innerHTML = obj.name + ", " + obj.age();

JSONP is a method for sending JSON data without worrying about cross-domain issues. JSON with Padding.
JSONP does not use the XMLHttpRequest object. JSONP uses the <script> tag instead.