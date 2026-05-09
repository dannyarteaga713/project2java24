// Initial Array of Guests
const guests = ["ANTONY", "CICERO", "CASSIUS", "CLEOPATRA"];

// --- Step 1 ---
// Add "BRUTUS" to the beginning of the list.
guests.unshift("BRUTUS"); 
// Question 1: How can you verify that "BRUTUS" was added?
// Answer: You can check the first element of the guests array using guests[0].

// --- Step 2 ---
// Add "AUGUSTUS" and "LUCIA" to the end of the guest list.
guests.push("AUGUSTUS", "LUCIA");

// --- Step 3 ---
// Check if "SPARTACUS" is on the list and find his position.
const spartacusIndex = guests.indexOf("SPARTACUS");
// Question 2: What would the value of spartacusIndex be if "SPARTACUS" wasn't invited?
// Answer: If "SPARTACUS" wasn't invited, the indexOf method would return -1.

// --- Step 4 ---
// Remove "CASSIUS" from the list.
const indexToRemove = guests.indexOf("CASSIUS");
if (indexToRemove !== -1) {
    guests.splice(indexToRemove, 1);
}

// --- Step 5 ---
// Extract the first three guests into a new array.
const specialGuests = guests.slice(0, 3);

// --- Step 6 ---
// Sort the guests alphabetically but keep the first honored guest at the top.
const honoredGuests = guests.slice(0, 1); // Extracts honored guests.
const otherGuests = guests.slice(1);      // Extracts the rest of the guests.
otherGuests.sort();                       // Sorts the other guests.
const sortedGuests = honoredGuests.concat(otherGuests); // Combines both arrays.

// Final output to verify in terminal
console.log("Final Sorted Guest List:", sortedGuests);