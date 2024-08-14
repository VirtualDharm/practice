***https://dev.to/abhishekraj272/top-interview-questions-for-frontend-developers-3d5j***
***https://dev.to/akmaurya31/database-transactions-in-node-3d5n***

```javascript
function removeDuplicates(array) {
  return [...new Set(array)]
}
function removeDuplicates(array) { return [...new Set(array)] }
function isAnagram(stringA, stringB) {
    const normalize = (str) => { return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('') }
  return normalize(stringA) === normalize(stringB);
}
Capitalize : words.push(word[0].toUpperCase() + word.slice(1));
// https://dev.to/frontendengineer/js-coding-question-9-get-max-character-in-a-string-challenging-4njj
// https://youtu.be/npcNFM9SQTg
const sortString = (str) => str.split("").sort().join("")
function areTwoObjectsEqual(obj1, obj2) {
  const a = JSON.stringify(obj1);
  const b = JSON.stringify(obj2);
  // sort so it will handle object properties that are not in order
  return sortString(a) === sortString(b)
}
ReactJS Tic-Tac-Toe (💥Passed Job Interview💥) : https://dev.to/frontendengineer/reactjs-tic-tac-toe-passed-job-interview-1od8
CSS Interview Question: Create Responsive Design (1 Column / 3 Column) : https://dev.to/frontendengineer/css-interview-question-create-responsive-design-1-column-3-column-264i
CSS Interview Question: Center HTML Element (3 Approaches💥) : https://dev.to/frontendengineer/css-interview-question-center-html-element-3-approaches-58h5
```

Crazy:
use canvas when you want to build a game that has more than 30 fps.
deterministic games are same outcomes everytime(basically avoid precision errors).
