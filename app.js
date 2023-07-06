"use strict";
let paragraph1 =
  "Hail traveller! Pull up a stool and warm yourself by the fire";
let paragraph2 = "Paragraph 2 - Click to continue...";
let paragraph3 = "Paragraph 3.";
let paragraph4 = "Enter your name:";
let paragraph5 = "To choose your s";
let textBox = document.getElementById("textBox");
let nameForm = document.getElementById("nameForm");
let statForm = document.getElementById("statForm");
console.log(nameForm);
function nextParagraph() {
  let textElement = document.getElementById("text");

  if (textElement.textContent === paragraph1) {
    textElement.textContent = paragraph2;
  } else if (textElement.textContent === paragraph2) {
    textElement.textContent = paragraph3;
  } else if (textElement.textContent === paragraph3) {
    textElement.textContent = paragraph4;
    textBox.removeEventListener("click", nextParagraph);
    document.getElementById("nameForm").style.display = "block";
  }
}

function nameFunction(event) {
  event.preventDefault();
  let firstNameValue = event.target.firstName.value;
  let lastNameValue = event.target.lastName.value;
  console.log(firstNameValue + lastNameValue);
  document.getElementById("nameForm").style.display = "none";
  document.getElementById("statForm").style.display = "table";
  //create a varible for firstname + last name called charName then store it in local storage
}

function statFunction(event) {
  event.preventDefault();
  let strValue = event.target.strength.value;
  // let agiValue = event.target.agility.value;
  let conValue = event.target.constitution.value;
  let intValue = event.target.intelligence.value;
  let wisValue = event.target.wisdom.value;
  let chaValue = event.target.charisma.value;

  document.getElementById("statForm").style.display = "none";
}

let firstName = document.getElementById("firstName");

textBox.addEventListener("click", nextParagraph);
nameForm.addEventListener("submit", nameFunction);
statForm.addEventListener("submit", statFunction);
