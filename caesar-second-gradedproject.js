/**
 * Helping Caesar's Traditional Secret Party
 * This script handles encryption and decryption with alternating shifts 
 * and random letter injection.
 */

// The reference alphabet used for shifting
const ALPHABET = "abcdefghijklmnopqrstuvwxyz";

/**
 * HELPER FUNCTION: Pick a random letter
 * This keeps the main code clean and easy to read.
 */
const getRandomChar = () => {
    const randomIndex = Math.floor(Math.random() * ALPHABET.length);
    return ALPHABET[randomIndex];
};

/**
 * ENCRYPTION FUNCTION
 */
function encryptMessage(message, key) {
    let encrypted = "";
    // Convert to lowercase so we always match our ALPHABET string
    const lowerMsg = message.toLowerCase();

    for (let i = 0; i < lowerMsg.length; i++) {
        let char = lowerMsg[i];
        let charIndex = ALPHABET.indexOf(char);

        // Check if the character is actually a letter
        if (charIndex !== -1) {
            // STEP 1: Alternating Shift
            // If the position (i) is even, shift forward. If odd, shift backward.
            let shift = (i % 2 === 0) ? key : -key;
            
            // STEP 2: Calculate new position
            // We use % 26 to stay within the alphabet bounds
            let newIndex = (charIndex + shift) % 26;
            
            // Fix for negative results (JavaScript % can return negative numbers)
            if (newIndex < 0) {
                newIndex += 26;
            }

            // STEP 3: Build the string (Shifted Letter + Random Noise Letter)
            encrypted += ALPHABET[newIndex] + getRandomChar();
        } else {
            // If it's a space or symbol, just add it plus a noise letter
            encrypted += char + getRandomChar();
        }
    }
    return encrypted;
}

/**
 * DECRYPTION FUNCTION
 */
function decryptMessage(secret, key) {
    let decrypted = "";
    
    // STEP 1: Skip the noise
    // We use i += 2 because every second letter is just "random noise"
    for (let i = 0; i < secret.length; i += 2) {
        let char = secret[i];
        let charIndex = ALPHABET.indexOf(char);

        if (charIndex !== -1) {
            // STEP 2: Find the original parity
            // Since we are skipping noise, (i / 2) tells us the original position
            let originalPos = i / 2;
            let shift = (originalPos % 2 === 0) ? key : -key;

            // STEP 3: Reverse the shift
            let oldIndex = (charIndex - shift) % 26;
            if (oldIndex < 0) {
                oldIndex += 26;
            }

            decrypted += ALPHABET[oldIndex];
        } else {
            // If it wasn't a letter (like a space), just add it back
            decrypted += char;
        }
    }
    return decrypted;
}

// --- TEST AREA ---
const myMessage = "come to my party brutus";
const myKey = 3;

const secret = encryptMessage(myMessage, myKey);
console.log("Secret Message: " + secret);

const original = decryptMessage(secret, myKey);
console.log("Decrypted Message: " + original);