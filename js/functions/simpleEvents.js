import { cleanDom } from "./helpers.js";
import Notes from "../Classes/Notes.js";
import UI from "../Classes/UI.js";

const notes = new Notes();

const ui = new UI();

function showMenu(e) {
  e.preventDefault();
  const responsiveContent = document.getElementById("resp-content");

  responsiveContent.classList.remove("responsive-content");
}
function closeMenu(e) {
  e.preventDefault();
  const responsiveContent = document.getElementById("resp-content");

  responsiveContent.classList.add("responsive-content");
}
function randomContent() {
  cleanDom(document.getElementById("random-content"));
  // random notes
  const randomNotes = document.createElement("div");
  randomNotes.id = "random-notes";
  document.getElementById("random-content").appendChild(randomNotes);

  ui.printNotes(notes.getRandomNote(), randomNotes);
}
export {
  showMenu,
  closeMenu,
  randomContent
};
