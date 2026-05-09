function letterCount(word) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  // 1. String Validation
  if (typeof word !== "string") {
    console.error("Error");
    return;
  }

  // 2. Alphabetical Character Validation
  for (const letter of word) {
    if (!alphabet.includes(letter.toLowerCase())) {
      console.error("Error"); // Catches things like "Caesar42"
      return;
    }
  }

  // 3. Counting Logic using an Object
  let letterCounts = {};

  for (let letter of word) {
    let lowerCaseLetter = letter.toLowerCase();

    // If key exists, increment. If not, initialize to 1.
    if (letterCounts[lowerCaseLetter] !== undefined) {
      letterCounts[lowerCaseLetter]++;
    } else {
      letterCounts[lowerCaseLetter] = 1;
    }
  }

  return letterCounts;
}

// Test a normal word
const result1 = letterCount("Javascript");
console.log("Word: Javascript", result1);

// Test a word with repeated letters
const result2 = letterCount("Mississippi");
console.log("Word: Mississippi", result2);

// Test a string with a space (Should show Error based on your code)
console.log("--- Testing 'Hello World' ---");
letterCount("Hello World");