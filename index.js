// window.alert(`This is web alert.`);

// let x = 3;
// let y = 5;
// let z = 7;
// let gpa = ((x * y * z) / 3) / 10;
let userName;
let prompt_ = window.prompt("What's on your mind?");

document.getElementById("mySpan").textContent = prompt_;

document.getElementById("myH1").textContent = `This is my JS header.`;
document.getElementById("myP").textContent = `This is my JS paragraph.`;

document.getElementById("mySubmit").onclick = function () {
    userName = document.getElementById("myInput").value;
    document.getElementById("myH2").textContent = `Hello ${userName}`

    console.log(userName);
};

// console.log(`Data type of your GPA(${gpa}) is a:`, typeof gpa);
console.log(prompt_);
