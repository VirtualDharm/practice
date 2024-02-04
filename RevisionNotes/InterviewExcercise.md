# function removeDuplicates(array) {
  return [...new Set(array)]
}
# function removeDuplicates(array) { return [...new Set(array)] }
function isAnagram(stringA, stringB) {
    const normalize = (str) => { return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('') }
  return normalize(stringA) === normalize(stringB);
}
# Capitalize : words.push(word[0].toUpperCase() + word.slice(1));
<!-- https://dev.to/frontendengineer/js-coding-question-9-get-max-character-in-a-string-challenging-4njj -->
<!-- https://youtu.be/npcNFM9SQTg -->