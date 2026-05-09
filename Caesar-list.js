// Initial Array of Guests
let guests = ["ANTONY", "CICERO", "CASSIUS", "CLEOPATRA"];

// --- Step 1: Add "BRUTUS" to the beginning ---
guests.unshift("BRUTUS"); 
// Answer 1: Verify by checking guests[0]. It should now be "BRUTUS".

// --- Step 2: Add "AUGUSTUS" and "LUCIA" to the end ---
guests.push("AUGUSTUS", "LUCIA"); 
// The list is now: ["BRUTUS", "ANTONY", "CICERO", "CASSIUS", "CLEOPATRA", "AUGUSTUS", "LUCIA"]

// --- Step 3: Check for "SPARTACUS" ---
const spartacusIndex = guests.indexOf("SPARTACUS");
// Answer 2: spartacusIndex will be -1 because he is not in the array.

// --- Step 4: Remove "CASSIUS" ---
const indexToRemove = guests.indexOf("CASSIUS");
if (indexToRemove !== -1) {
    guests.splice(indexToRemove, 1); 
}
// Cassius was at index 3; splice removes him and shifts the following names up.

// --- Step 5: Extract first three guests ---
const specialGuests = guests.slice(0, 3);
// specialGuests now contains: ["BRUTUS", "ANTONY", "CICERO"]

// --- Step 6: Alphabetical sort, keeping the first guest at the top ---
const honoredGuests = guests.slice(0, 1); // "BRUTUS" stays here
const otherGuests = guests.slice(1);      // Everyone else
otherGuests.sort();                       // Sorts remaining guests alphabetically
const sortedGuests = honoredGuests.concat(otherGuests); 

// Final Verification
console.log("Final Guest List:", sortedGuests);