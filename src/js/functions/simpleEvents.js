import { cleanDom } from "./helpers";
import notes from "../Classes/Notes";
import ui from "../Classes/UI";
import { noteCard } from "../views/components/containers/noteCard";


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

export { showMenu, closeMenu, randomContent };
