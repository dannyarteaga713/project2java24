function fizzBuzz(n) {
  // 1. Validation Logic
  if (!Number.isInteger(n) || n < 1 || n >= 100) {
    console.error("Error");
    return;
  }

  // 2. The Loop
  for (let i = 1; i <= n; i++) {
    const remainderBy3 = i % 3;
    const remainderBy5 = i % 5;

    // 3. Conditional Checks (Order Matters!)
    // We check for both 3 AND 5 first. 
    // If we checked for just 3 first, 15 would print "Fizz" and skip "FizzBuzz".
    if (remainderBy3 === 0 && remainderBy5 === 0) {
      console.log("FizzBuzz");
    } else if (remainderBy3 === 0) {
      console.log("Fizz");
    } else if (remainderBy5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

// Test with a small number
console.log("--- Testing 15 (Should see FizzBuzz) ---");
fizzBuzz(15);

// Test with a number not divisible by 3 or 5
console.log("--- Testing 7 (Should just see 7) ---");
fizzBuzz(7);

// Test the upper limit (Should show Error)
console.log("--- Testing 105 (Should show Error) ---");
fizzBuzz(105);

// Test with a decimal (Should show Error)
console.log("--- Testing 5.5 (Should show Error) ---");
fizzBuzz(5.5);