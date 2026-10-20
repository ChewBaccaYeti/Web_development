let SHIP_MANUFACTURE = 'USG';
let SHIP_ASSIGNED_NAME = 'Ishimura';
let SHIP_MISSION = 'MISSION: Aegis-7 minerals extraction, Colony contact';

let SHIP_CONCAT = SHIP_MANUFACTURE + ' ' + SHIP_ASSIGNED_NAME;
SHIP_CONCAT += ', CLASS: Planet Cracker';

SHIP_CONCAT = SHIP_CONCAT.concat(', ', SHIP_MISSION);
console.log(SHIP_CONCAT);
console.log(SHIP_ASSIGNED_NAME.length);
console.log(SHIP_ASSIGNED_NAME[SHIP_ASSIGNED_NAME.length - 1]);

SHIP_ASSIGNED_NAME = 'Kellion';
let firstThree =
    SHIP_ASSIGNED_NAME[0] + SHIP_ASSIGNED_NAME[1] + SHIP_ASSIGNED_NAME[2];
console.log(firstThree);

let shielded_poem =
    'Roses are red, \nViolets are blue, \nЯ ваше мнение "вертел на хую..."\nWhat\'s a beautiful day!';
console.log(shielded_poem);

let roses = 'Roses';
let color_red = 'red';
let violets = 'Violets';
let color_blue = 'blue';

let literal_interpolation_poem = `
${roses} are ${color_red},
${violets} are ${color_blue},
JavaScript is fun,
And so are you.
`;
console.log(literal_interpolation_poem);

const song = 'Bohemian Rhapsody';
const score = 9.5;
const highestScore = 10;
const compute_msg = `One of my favorite songs is "${song}". I rated it ${
    (score / highestScore) * 100
}%.`;
console.log(compute_msg);

let sentence = 'This is (method) a letter for sub-string indexOf method.';
let indexOf_check = sentence.indexOf('letter'); // 19
let another_check = sentence.indexOf('method', 15); // 49
console.log(indexOf_check, another_check);

console.log('Hi there!');

const botName = 'teacherBot';

const greeting = `My name is ${botName}.`;
console.log(greeting);

const subject = 'JavaScript';
const topic = 'strings';

const Sentence = `Today, you will learn about ${topic} in ${subject}.`;
console.log(Sentence);

const strLengthIntro = `Here is an example of using the length property on the word ${subject}.`;
console.log(strLengthIntro);

console.log(subject.length);

console.log(
    `Here is an example of using the length property on the word ${topic}.`,
);
console.log(topic.length);

console.log(
    `Here is an example of accessing the first letter in the word ${subject}.`,
);

console.log(subject[0]);

console.log(
    `Here is an example of accessing the second letter in the word ${subject}.`,
);
console.log(subject[1]);

console.log(
    `Here is an example of accessing the last letter in the word ${subject}.`,
);

const lastCharacter = subject[subject.length - 1];
console.log(lastCharacter);

const learningIsFunSentence = 'Learning is fun.';

console.log(
    'Here are examples of finding the positions of substrings in the sentence.',
);
console.log(learningIsFunSentence.indexOf('Learning'));

console.log(learningIsFunSentence.indexOf('fun'));
console.log(learningIsFunSentence.indexOf('learning'));

console.log('I hope you enjoyed learning today.');

const fccSentence = 'freeCodeCamp is a great place to learn web development.';
console.log('Here are some examples of the includes() method:');

const hasFreeCodeCamp = fccSentence.includes('freeCodeCamp');
console.log(
    `fccSentence.includes("freeCodeCamp") returns ${hasFreeCodeCamp} because the word "freeCodeCamp" is in the sentence.`,
);

const hasJavaScript = fccSentence.includes('JavaScript');
console.log(
    `fccSentence.includes("JavaScript") returns ${hasJavaScript} because the word "JavaScript" is not in the sentence.`,
);

const hasLowercaseFCC = fccSentence.includes('freecodecamp');
console.log(
    `fccSentence.includes("freecodecamp") returns ${hasLowercaseFCC} because includes is case-sensitive.`,
);

const message = 'Welcome to freeCodeCamp!';

console.log('Here are some examples of the slice() method:');

const platform = message.slice(11, 23);
console.log(`The word "${platform}" was sliced from the message.`);

const greetingWord = message.slice(0, 7);
console.log(`The first word is "${greetingWord}".`);

const endPunctuation = message.slice(-1);
console.log(`The ending punctuation mark is a "${endPunctuation}"`);

console.log(
    'Workshop complete! You now know how to use includes() and slice().',
);

const userInput = '   Hello World!   ';
console.log('Original input:');
console.log(userInput);

const cleanedInput = userInput.trim();
console.log('Result of trimming whitespace from both ends:');
console.log(cleanedInput);

const trimmedStart = userInput.trimStart();
console.log('After using the trimStart() method, leading spaces removed:');
console.log(trimmedStart);

const trimmedEnd = userInput.trimEnd();
console.log('After using the trimEnd() method, trailing spaces removed:');
console.log(trimmedEnd);

const upperCaseInput = cleanedInput.toUpperCase();
console.log('Result of using the toUpperCase() method:');
console.log(upperCaseInput);

const lowerCaseInput = cleanedInput.toLowerCase();
console.log('Result of using the toLowerCase() method:');
console.log(lowerCaseInput);

const lowercaseWord = 'camelcase';
const camelCasedVersion =
    lowercaseWord.slice(0, 5) +
    lowercaseWord[5].toUpperCase() +
    lowercaseWord.slice(-3);
console.log('Camel cased version:');
console.log(camelCasedVersion);

const originalString = 'I love cats.';
console.log('Original string:');
console.log(originalString);

const replacedString = originalString.replace('cats', 'dogs');
console.log('After using the replace() method:');
console.log(replacedString);

const exampleSentence = 'I love cats and cats are so much fun!';
console.log('Original sentence:');
console.log(exampleSentence);

const dogsOnlySentence = exampleSentence.replaceAll('cats', 'dogs');
console.log('Replacing all occurrences of cats with dogs:');
console.log(dogsOnlySentence);

const learningSentence = 'I love learning!';
console.log('Original learning sentence:');
console.log(learningSentence);

const repeatedLove = 'love '.repeat(3).trimEnd();
console.log(repeatedLove);

const newSentence = `I ${repeatedLove} learning.`;
console.log(newSentence);
