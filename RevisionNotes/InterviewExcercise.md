# function getVowelsCount(sentence) {
  return sentence.match(/[aeuio]/gi) ? sentence.match(/[aeuio]/gi).length : 0;
}
# function reverseString(str) {
    return str.split("").reverse().join("");
}
# function isPalindrome(str) {
  return str.split('').reverse().join('') === str;
}
# function removeDuplicates(array) {
  return [...new Set(array)]
}
#5 se krne lg bhai.