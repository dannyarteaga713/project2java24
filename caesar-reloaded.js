// Initial Data
const friend = "BRUTUS";
const shiftValue = 3;
const alphabet = "abcdefghijklmnopqrstuvwxyz";

// Step 1: Encrypt a single letter
function encryptLetter(letter, shift) {
  const index = alphabet.indexOf(letter.toLowerCase());
  const newIndex = (index + shift) % alphabet.length;
  return alphabet[newIndex];
}

// Step 2: Encrypt an entire message
function encryptMessage(word, shift) {
  let encryptedMessage = "";
  for (let i = 0; i < word.length; i++) {
    // Calling our tool from Step 1
    encryptedMessage += encryptLetter(word[i], shift);
  }
  return encryptedMessage;
}

// Step 3: Decrypt a single letter
function decryptLetter(letter, shift) {
  const index = alphabet.indexOf(letter.toLowerCase());
  // We add alphabet.length before the modulus to handle negative numbers
  const newIndex = (index - shift + alphabet.length) % alphabet.length;
  return alphabet[newIndex];
}

// Step 4: Decrypt an entire message
function decryptMessage(word, shift) {
  let decryptedMessage = "";
  for (let i = 0; i < word.length; i++) {
    // Calling our tool from Step 3
    decryptedMessage += decryptLetter(word[i], shift);
  }
  return decryptedMessage;
}

// Verification Tests
const secret = encryptMessage(friend, shiftValue);
console.log("Encrypted:", secret); // "euxwxv"

const decoded = decryptMessage(secret, shiftValue);
console.log("Decrypted:", decoded.toUpperCase()); // "BRUTUS"

/* 
Question: Will Caesar get "BRUTUS" back? 
Answer: Yes, Caesar will get "BRUTUS" back. The decryption function is the inverse 
of the encryption function. When applied sequentially, they cancel each other out, 
restoring the original message.
*/