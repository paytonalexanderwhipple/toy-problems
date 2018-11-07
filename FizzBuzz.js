// FizzBuzz - Bob Ross edition

// Write a function that takes in one number.
// Starting at 1, console log every number up to the number passed in.
// If the number being logged is divisible by 3 log 'Bob' instead.
// If the number is divisible by 5 we will log 'Ross' instead.
// If they are divisible by both 3 and 5 we will log 'Bob Ross'.

// Challenge Mode
// Use a 'while' or 'do while' loop.

function BobRoss(num){

    let count = 1
  
    do {
      if (count % 3 == 0 && count % 5 == 0) {
        console.log("Bob Ross")
      } else if (count % 3 == 0) {
        console.log("Bob")
      } else if (count % 5 == 0) { 
        console.log("Ross")
      } else {
        console.log(count)
      }
      count++;
    } while (count <= num);
  }
  
  //BobRoss(100)
  
  function ternaryBobRoss (num) {
    for (i = 1; i <= num; i++) {
      i % 3 == 0 && i % 5 == 0 ? 
        console.log("Bob Ross") : i % 3 == 0 ? 
        console.log("Bob") : i % 5 == 0 ? 
        console.log("Ross") : console.log(i)
    }
  }
  
  //ternaryBobRoss(100)
  