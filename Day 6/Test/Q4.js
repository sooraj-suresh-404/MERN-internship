// 4. Write a JavaScript program to convert a string into camel case.
// Examples :-
// “bridgeon solutions” ➞ “Bridgeon Solutions”
// “How Are You?” ➞ “How Are You?”
// “HELLO WORLD” ➞ “Hello World”

function toCamelCaseAlt(str) {
    return str
      .split(/\s+/) // Split by spaces (or multiple spaces)
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  }
  
  console.log(toCamelCaseAlt("bridgeon solutions")); // Output: Bridgeon Solutions
  console.log(toCamelCaseAlt("How Are You?"));       // Output: How Are You?
  console.log(toCamelCaseAlt("HELLO WORLD"));        // Output: Hello World
  