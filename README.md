# js-classes

This project demonstrates two ways to create and use classes in JavaScript:

## Part 1: Constructor Function and Prototypes

- Defines a `PersonConstructor` function to create person objects.
- Adds a `greet` method to the prototype.
- Example usage:
  ```js
  const person1 = new PersonConstructor("Alice", 30);
  person1.greet(); // Output: Hi, I'm Alice and I'm 30 years old.
  ```

## Part 2: ES6 Classes

- Defines a `Person` class with `greet` and `haveBirthday` methods.
- Example usage:
  ```js
  const person2 = new Person("Alice", 30);
  person2.greet();         // Output: Hi, I'm Alice and I'm 30 years old.
  person2.haveBirthday();  // Output: Happy birthday Alice! You are now 31.
  ```

---

See `person.js` for the full code and examples.