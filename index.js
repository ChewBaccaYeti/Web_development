// window.alert(`This is web alert.`);

document.getElementById("myH1").textContent = `This is my JS header.`;
document.getElementById("myP").textContent = `This is my JS paragraph.`;

function myGPA() {
    let x = 3;
    let y = 5;
    let z = 7;
    let gpa = ((x * y * z) / 3) / 10;
    console.log(`Data type of your GPA(${gpa}) is a:`, typeof gpa);
};
function myPrompt() {
    let prompt_ = window.prompt("What's on your mind?");
    document.getElementById("mySpan").textContent = prompt_;
    console.log(prompt_);
};
document.getElementById("mySubmit").onclick = function () {
    let userName = document.getElementById("myInput").value;
    document.getElementById("myH2").textContent = `Hello ${userName}`

    console.log(userName);
};
function myAge() {
    let age = window.prompt("How old are you?");
    console.log(age, typeof age);
    age = Number(age);
    age += 1;
    console.log(age, typeof age);
};
function checkType() {
    let x = "__PROTOTYPE__*";
    x = Number(x);
    console.log(x, typeof x);
    x = String(x);
    console.log(x, typeof x);
    x = Boolean(x);
    console.log(x, typeof x);
};

myGPA();
myPrompt()
myAge();
checkType();


