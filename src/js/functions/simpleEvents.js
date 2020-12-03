import { cleanDom, dataIterator, arrayData } from "./helpers";
import Notes from "../Classes/Notes";
import UI from "../Classes/UI";
import Categories from "../Classes/Categories";

const notes = new Notes();

const ui = new UI();

const categories = new Categories();

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

function selectCategory(select) {
  const categoriesArr = categories.getCategories();
  const validateArr = arrayData(categoriesArr);

  if (validateArr) {
    dataIterator(categoriesArr, (category) => {
      const option = document.createElement("option");
      option.value = category;
      option.text = category;
      select.appendChild(option);
    });
    return;
  }
}

function randomContent() {
  cleanDom(document.getElementById("random-content"));
  // random notes
  const randomNotes = document.createElement("div");
  randomNotes.id = "random-notes";
  document.getElementById("random-content").appendChild(randomNotes);

  ui.printNotes(notes.getRandomNote(), randomNotes);
}
export { showMenu, closeMenu, selectCategory, randomContent };
