// --- PROJECT CAESAR: EMBLEM DECIPHERER ---

const emblemClue1 = "Eagle";
const emblemClue2 = "Laurel";
const emblemClue3 = 7;

let locationStart = "";

// Step 1: Basic branching logic
if (emblemClue1 === "Eagle") {
  locationStart = "Forum";
} else if (emblemClue1 === "Lion") {
  locationStart = "Colosseum";
} else {
  locationStart = "Villa";
}

// Step 2: Boolean logic (AND/OR operators)
if (emblemClue2 === "Laurel" && locationStart === "Forum") {
  locationStart += " of Augustus";
} else if (emblemClue2 === "Grapes" || locationStart === "Villa") {
  locationStart += " of Pompey";
}

// Step 3: The Switch Statement 
switch (emblemClue3) {
  case 7:
    locationStart += " North";
    break;
  case 3:
    locationStart += " South";
    break;
  case 9:
    locationStart += " East";
    break;
  case 4:
    locationStart += " West";
    break;
}

/* 
 * Question: Why be careful with == vs ===?
 * Answer: Double equals (==) performs type coercion, attempting to convert 
 * operands to the same type before comparing. Triple equals (===) checks 
 * both value and type. Using == can lead to "false positives," like 
 * 7 == "7" being true, which can cause bugs in secure logic.
 */

console.log("Party Location Revealed:", locationStart);
