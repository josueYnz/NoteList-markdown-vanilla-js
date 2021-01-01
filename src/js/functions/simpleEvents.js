import { cleanDom, dataIterator, arrayData } from "./helpers";
import notes from "../Classes/Notes";
import ui from "../Classes/UI";
import categories from "../Classes/Categories";
import { noteCard } from "../views/components/containers/noteCard";
import { noteList } from "../views/components/dynamics/noteList";


function showMenu(e) {
  e.preventDefault();
  const responsiveContent = document.getElementById("resp-content");
  const btnShow = document.getElementById("show");

  btnShow.classList.add("hidden");
  responsiveContent.classList.remove("responsive-content");
}
function closeMenu(e) {
  e.preventDefault();
  const responsiveContent = document.getElementById("resp-content");

  const btnShow = document.getElementById("show");
  btnShow.classList.remove("hidden");
  
  responsiveContent.classList.add("responsive-content");
}

function randomContent() {
  cleanDom(document.getElementById("random-content"));
  // random notes
  const randomNotes = document.createElement("div");
  randomNotes.id = "random-notes";
  document.getElementById("random-content").appendChild(randomNotes);

  ui.printNotes(notes.getRandomNote(), noteCard, randomNotes);
}
function searchEvent(e) {
  const searchParam = e.target.value;
  const searchResult = notes.searchNotes(searchParam);
  noteList(searchResult);
}
export { showMenu, closeMenu, randomContent, searchEvent };
