let SHIP_MANUFACTURE = "USG";
let SHIP_ASSIGNED_NAME = "Ishimura";
let SHIP_MISSION = "MISSION: Aegis-7 minerals extraction, Colony contact"

let SHIP_CONCAT = SHIP_MANUFACTURE + " " + SHIP_ASSIGNED_NAME;
SHIP_CONCAT += ", CLASS: Planet Cracker";

SHIP_CONCAT = SHIP_CONCAT.concat(", ", SHIP_MISSION);
console.log(SHIP_CONCAT);
console.log(SHIP_ASSIGNED_NAME.length);
console.log(SHIP_ASSIGNED_NAME[SHIP_ASSIGNED_NAME.length - 1]);

SHIP_ASSIGNED_NAME = "Kellion";
let firstThree = SHIP_ASSIGNED_NAME[0] + SHIP_ASSIGNED_NAME[1] + SHIP_ASSIGNED_NAME[2];
console.log(firstThree);

let shielded_poem = "Roses are red, \nViolets are blue, \nЯ ваше мнение \"вертел на хую...\"\nWhat\'s a beautiful day!";
console.log(shielded_poem);

let roses = "Roses"
let color_red = "red";
let violets = "Violets";
let color_blue = "blue";

let literal_interpolation_poem = `
${roses} are ${color_red},
${violets} are ${color_blue},
JavaScript is fun,
And so are you.
`;
console.log(literal_interpolation_poem);

const song = "Bohemian Rhapsody";
const score = 9.5;
const highestScore = 10;
const compute_msg = `One of my favorite songs is "${song}". I rated it ${
  (score / highestScore) * 100
}%.`;
console.log(compute_msg);

let sentence = "This is (method) a letter for sub-string indexOf method.";
let indexOf_check = sentence.indexOf("letter"); // 19
let another_check = sentence.indexOf("method",15); // 49
console.log(indexOf_check, another_check);

const btn = document.getElementById("prompt-btn");
const output = document.getElementById("output");
btn.addEventListener("click", () => {
  const userName = prompt("What is your name?", "Guest");
  output.textContent = "Hello, " + userName + "!";
});
