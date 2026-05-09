// Initial Data
const friend = "BRUTUS";
const shiftValue = 3;

// Step 1: The Alphabet
const alphabet = "abcdefghijklmnopqrstuvwxyz";

// Step 2: Encryption Loop
let encryptedName = "";

for (let i = 0; i < friend.length; i++) {
  const currentLetter = friend[i];
  const currentIndex = alphabet.indexOf(currentLetter.toLowerCase());
  
  // Apply shift and use modulus to wrap around from Z to A
  const newIndex = (currentIndex + shiftValue) % alphabet.length;
  
  encryptedName += alphabet[newIndex].toUpperCase();
}

// Verification Output
console.log("Original Name:", friend);
console.log("Encrypted Name:", encryptedName);

/* 
Question 1: What advantage does using a loop provide over manually encrypting each letter?
Answer: Using a loop provides automation, enabling us to process each letter of the name consecutively 
without redundant code. It ensures consistent encryption and can easily adapt to names of any length.

Question 2: Explain the role of % alphabet.length in our loop.
Answer: The modulus operator ensures that if the shift surpasses the alphabet's length (26), 
it wraps around to the start (0). This guarantees that 'Z' shifts back to 'C' rather than 
returning an "undefined" error.
*/