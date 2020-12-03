import "./css/custom.css";
import {Notes} from "./js/Classes/Notes";
import * as action from "./js/functions/Actions";
import {UI} from "./js/Classes/UI";
import * as event from "./js/functions/simpleEvents";
import { categoryForm } from "./js/domElements/formCategories";

// main function
/*##########################

 convertir todo esto en classes

############################*/
const select = document.getElementById("select-category");
event.selectCategory(select);
(() => {
  const notes = new Notes();
  const ui = new UI();
  // Modal events
  const formNote = document.getElementById("form-note");
  const deleteButton = document.getElementById("delete-button");
  formNote.addEventListener("click", action.showModal);
  deleteButton.addEventListener("click", (e) => {
    e.preventDefault();
    requestAnimationFrame(action.closeModal);
  });
  // category modal
  const createCategoryModal = document.getElementById("create-category-modal");
  createCategoryModal.addEventListener("click", categoryForm);
  // Main notes container.
  const notesContainer = document.getElementById("notes");

  // Navbar events
  const showBtn = document.getElementById("show");
  const closeBtn = document.getElementById("close");

  showBtn.addEventListener("click", event.showMenu);
  closeBtn.addEventListener("click", event.closeMenu);

  // Inputs
  const nameInput = document.getElementById("name");
  const noteInput = document.getElementById("editor");
  const categorySelect = document.getElementById("select-category");


  // fill data in realtime
  nameInput.addEventListener("input", action.setState);
  noteInput.addEventListener("input", action.setState);
  categorySelect.addEventListener("change", action.setState);

  // Select the form
  const form = document.getElementById("create-note");
  // Submit data and create a note
  form.addEventListener("submit", action.addNote);

  const filterSelect = document.getElementById("filter-category");
  event.selectCategory(filterSelect);
  filterSelect.addEventListener("change", action.filterCategoryAct)

  // show a random note
  event.randomContent();

  // print notes when the window browser load
  ui.printNotes(notes.getNotes(), notesContainer);

  const orderNotes = document.getElementById("notes-sort");
  orderNotes.addEventListener("change", action.order);


  // select the search input
  const searchInput = document.getElementById("search-input");
  // When the user entry elements to input
  searchInput.addEventListener("input", (e) => {
    const searchParam = e.target.value;
    // search the param and return a new array
    const searchResult = notes.searchNotes(searchParam);
    // Print the new array
    ui.printNotes(searchResult, notesContainer);

    if (searchParam === "") {
      if (!document.getElementById("random-notes")) {
        event.randomContent();
        return;
      }
    } else {
      if (document.getElementById("random-notes")) {
        document.getElementById("random-notes").remove();
        return;
      }
    }
  });
})();