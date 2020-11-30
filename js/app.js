import Notes from "./Classes/Notes.js";
import * as action from "./functions/Actions.js";
import UI from "./Classes/UI.js";
import * as event from "./functions/simpleEvents.js";

// main function
/*##########################

 convertir todo esto en classes

############################*/
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

  // fill data in realtime
  nameInput.addEventListener("input", action.setState);
  noteInput.addEventListener("input", action.setState);

  // Select the form
  const form = document.getElementById("create-note");
  // Submit data and create a note
  form.addEventListener("submit", action.addNote);

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