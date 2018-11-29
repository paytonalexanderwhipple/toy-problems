
// Write a function that, given a string, returns the number of vowels in that string.

// We will consider that a, e, i, o and u are vowels for the sake of this problem.

var vowelString = "Bob Ross can see the 4th dimension"; // -> 10

function vowelCounter(str) {
  str = str.split('')
  let total = 0;
  str.forEach(item => {
    switch (item.toUpperCase()) {
      case 'A':
        total++
        break;
      case 'E':
        total++
        break;
      case 'I':
        total++
        break;
      case 'O':
        total++
        break;
      case 'U':
        total++
        break;
    }
  })
  return total
}
console.log(vowelCounter(vowelString));


//After fixing bonus work

let regexVowelCounter = (str) => {
    return str
      .match(/[aeiou]/gi)
      .length
}

console.log(regexVowelCounter(vowelString))