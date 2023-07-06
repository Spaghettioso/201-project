"use strict";
let paragraph1 =
  "Hail traveller! Pull up a stool and warm yourself by the fire";
let paragraph2 = "Paragraph 2 - Click to continue...";
let paragraph3 = "Paragraph 3.";
let paragraph4 = "Enter your name:";
let paragraph5 = "Choose your race:";
let paragraph6 = "choose your stats";
let textBox = document.getElementById("textBox");
let nameForm = document.getElementById("nameForm");
let statForm = document.getElementById("statForm");
let textElement = document.getElementById("text");
let raceForm = document.getElementById("raceForm");

console.log(nameForm);
function nextParagraph() {
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
  document.getElementById("raceForm").style.display = "table";
  textElement.textContent = paragraph5;
  //create a varible for firstname + last name called charName then store it in local storage
}

function raceFunction(event) {
  event.preventDefault();
  let humanValue = event.target.human.value;
  let dwarfValue = event.target.dwarf.value;
  let elfValue = event.target.elf.value;
  document.getElementById("raceForm").style.display = "none";
  document.getElementById("statForm").style.display = "table";
  textElement.textContent = paragraph6;
}

function classFunction(event) {
  event.preventDefault();
  let fighterValue = event.target.fighter.value;
  let RogueValue = event.target.rogue.value;
  let clericValue = event.target.cleric.value;
  let wizardValue = event.target.wizard.value;
  let sorcererValue = event.target.sorcerer.value;
  document.getElementById("classForm").style.display = "none";
  document.getElementById("statForm").style.display = "table";
}

function statFunction(event) {
  event.preventDefault();
  let strValue = event.target.strength.value;
  let dexValue = event.target.dexterity.value;
  let conValue = event.target.constitution.value;
  let intValue = event.target.intelligence.value;
  let wisValue = event.target.wisdom.value;
  let chaValue = event.target.charisma.value;

  document.getElementById("textBox").style.display = "none";
  document.getElementById("scroll").style.display = "inline";
}

let firstName = document.getElementById("firstName");

textBox.addEventListener("click", nextParagraph);
nameForm.addEventListener("submit", nameFunction);
raceForm.addEventListener("submit", raceFunction);
classForm.addEventListener("submit", classFunction);
statForm.addEventListener("submit", statFunction);
