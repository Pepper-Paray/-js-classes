// === Part 1: Constructor Function and Prototypes ===

// Constructor Function
function PersonConstructor(name, age) {
  this.name = name;
  this.age = age;
}

// Add a method to the prototype
PersonConstructor.prototype.greet = function () {
  console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
};

// Create an instance and call the method
const person1 = new PersonConstructor("Alice", 30);
person1.greet(); // Output: Hi, I'm Alice and I'm 30 years old.


// === Part 2: Introduction to Classes ===

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
  }

  haveBirthday() {
    this.age += 1;
    console.log(`Happy birthday ${this.name}! You are now ${this.age}.`);
  }
}

// Create an instance and call the methods
const person2 = new Person("Alice", 30);
person2.greet();         // Output: Hi, I'm Alice and I'm 30 years old.
person2.haveBirthday();  // Output: Happy birthday Alice! You are now 31.
