<!-- js.md -->
## * Mid - Senior Level Questions and Answers

### Closure:
The inner function has access to the outer's function scope and parameters even after the outer function has returned.

### Differences between call, apply, and bind?
`call` and `apply` immediately call a function while `bind` creates a new function that can be invoked in the future. Arguments with `call` are passed in one by one, separated with a comma while `apply` expects an array as its argument.

```javascript
let nameObj = {name: "Tony"}
let PrintName = {name: "steve",sayHi: function (age) {console.log(this.name + " age is " + age)}}
let HiFun = PrintName.sayHi.bind(nameObj, 42)
HiFun()
```
### Event Loop:
Executing JavaScript code, collecting and processing events, and executing queued sub-tasks.

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

### What is prototype in JavaScript?
Prototypes are the mechanism by which JavaScript objects inherit from another object.

### Memoization:
By storing the result of expensive function calls and returning the cached results when the same inputs occur again for optimization.

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

// reduce ex:
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((accumulator, curVal) => {  
  return accumulator + curVal;
});
console.log(sum); // 10

// map ex:
const members = ["Taylor", "Donald", "Don", "Natasha", "Bobby"];
const announcements = members.map((member) => {
  return member + " joined the contest.";
});
console.log(announcements);

// forEach ex:
const numbers = [28, 77, 45, 99, 27];
numbers.forEach(number => {  
  console.log(number);
});

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

> delete person.age

// object creation ex:
const activity = 'Surfing';
const beach = { activity };
console.log(beach); // { activity: 'Surfing' }

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

// import/export ex:
export default function add(x,y)
export function subtract(x,y)
function multiply(x,y)
function duplicate(x)
export { multiply, duplicate }
import add, { subtract, multiply, duplicate } from './myMath.js';
const myMath = require('./myMath.js') => myMath.add()
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
  setTimeout(resolve, 100, 'foo');
});
Promise.all([pro1, pro2, pro3]).then((values) => {
  console.log(values);
});
// expected => Array [5, 44, "foo"]
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