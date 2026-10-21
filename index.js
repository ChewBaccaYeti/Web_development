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

function myUserName() {
    document.getElementById("submitUserName").onclick = function () {
        let userName = document.getElementById("inputUserName").value;
        document.getElementById("myH2").textContent = `Hello ${userName}`

        console.log(userName);
    };
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

function constantsCheck() {
    const pi = Math.PI;
    let radius;
    let circumFerence;

    document.getElementById("inputRadius").onclick = function () {
        // radius = window.prompt("Enter the radius of a circle");
        radius = document.getElementById("inputRadius").value;
        radius = Number(radius);
        circumFerence = 2 * pi * radius;
        document.getElementById("headerRadius").textContent = `The Radius is: ${circumFerence}`;
        console.log(circumFerence);
    }
};

function myCounter() {
    const decreaseBtn = document.getElementById("decreaseBtn");
    const resetBtn = document.getElementById("resetBtn");
    const increaseBtn = document.getElementById("increaseBtn");
    const labelCounter = document.getElementById("labelCounter");
    let count = 0;

    decreaseBtn.onclick = function () {
        count--;
        labelCounter.textContent = count;
    };

    resetBtn.onclick = function () {
        count = 0;
        labelCounter.textContent = count;
    };

    increaseBtn.onclick = function () {
        count++;
        labelCounter.textContent = count;
    };
};

function getRandomNum() {
    let min = 0;
    let max = 1000;
    let randomNum;

    const labels = document.getElementsByClassName("labelGetRandomNum");
    const btnGetRandomNum = document.getElementById("btnGetRandomNum");

    btnGetRandomNum.onclick = function () {
        for (let i = 0; i < labels.length; i++) {
            randomNum = Math.floor(Math.random() * max) + min;
            labels[i].textContent = randomNum;
        }
    };

    console.log(randomNum);
};

myGPA();
// myPrompt();
myUserName();
// myAge();
checkType();
constantsCheck();
myCounter();
getRandomNum();
