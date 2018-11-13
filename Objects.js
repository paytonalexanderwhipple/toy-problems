const person = {
    firstName: 'Bob',
    lastName: 'Ross',
    age: '54',
    favoriteThings: ['Happy little Trees', 'Happy Accidents', 'Groves', 'Mountains'],
    children: [
      {
        firstName: 'Morgan',
        lastName: 'Ross',
        age: '32',
        favoriteThings: ['Hiking', 'singing'],
        children: [
          {
            firstName: 'Todd',
            lastName: 'Ross',
            age: '9',
            favoriteThings: ['Rain Dancing', 'Drawing'],
            birthday() {
              return ++this.age;
            },
            greet(greeter) {
              return `Hello ${greeter}, My name is ${this.firstName} ${this.lastName}. do you like ${
                this.favoriteThings[0]
              }?`;
            },
          },
          {
            firstName: 'Doug',
            lastName: 'Ross',
            age: '11',
            favoriteThings: ['Puddle Splashing', 'Getting Jiggy'],
            birthday() {
              return ++this.age;
            },
            greet(greeter) {
              return `Hello ${greeter}, My name is ${this.firstName} ${this.lastName}. do you like ${
                this.favoriteThings[0]
              }?`;
            },
          },
        ],
        birthday() {
          return ++this.age;
        },
        greet(greeter) {
          return `Hello ${greeter}, My name is ${this.firstName} ${this.lastName}. do you like ${
            this.favoriteThings[0]
          }?`;
        },
      },
      {
        firstName: 'Steve',
        lastName: 'Ross',
        age: '35',
        favoriteThings: ['Yodeling', 'Kareoke'],
        children: [],
        birthday() {
          return ++this.age;
        },
        greet(greeter) {
          return `Hello ${greeter}, My name is ${this.firstName} ${this.lastName}. do you like ${
            this.favoriteThings[0]
          }?`;
        },
      },
    ],
    birthday() {
      return ++this.age;
    },
    greet(greeter) {
      return `Hello ${greeter}, My name is ${this.firstName} ${this.lastName}. do you like ${this.favoriteThings[0]}?`;
    },
  };
  
  
  // Access 'Happy accidents' from Bob's favorite things.
  person.favoriteThings[1]
  // Run Bob Ross' greet method.
  person.greet("me")
  // Access Morgan Ross's age.
  person.children[0].age
  // Access 'Singing' from Morgan's favorite things.
  person.children[0].favoriteThings[1]
  // Run Morgans Birthday method.
  person.children[0].birthday()
  // Access 'Rain Dancing' from Todd Ross' favorite things.
  person.children[0].children[0].favoriteThings[0]
  // Run Doug Ross' Greet method.
  person.children[0].children[1].greet()
  // BONUS HARD MODE
  let {favoriteThings: [happy, accidents]} = person
  accidents
  let {greet()} = person
  greet()
  
  // redo all the above items but use nested destructuring to access the items.
  
  
  