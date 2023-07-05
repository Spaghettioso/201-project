"use strict";
let paragraph1 =
  "Hail traveller! Pull up a stool and warm yourself by the fire";
let paragraph2 = "Paragraph 2 - Click to continue...";
let paragraph3 = "Paragraph 3.";
let paragraph4 = "Enter your name:";
let textBox = document.getElementById("textBox");
let nameForm = document.getElementById("nameForm").value;
document.getElementById("nameForm").style.display = "none";

function nextParagraph() {
  let textElement = document.getElementById("text");
  //   document.getElementById("nameForm").style.display = "none";

  if (textElement.textContent === paragraph1) {
    textElement.textContent = paragraph2;
  } else if (textElement.textContent === paragraph2) {
    textElement.textContent = paragraph3;
  } else if (textElement.textContent === paragraph3) {
    textElement.textContent = paragraph4;
    document.getElementById("nameForm").style.display = "block";
  }

  //else if (textElement.textContent === paragraph3) {
  //     document.getElementById("text").style.display = "none";
  //   }
}

let firstName = document.getElementById("firstName");
console.log(firstName);

textBox.addEventListener("click", nextParagraph);
console.log(nameForm);
