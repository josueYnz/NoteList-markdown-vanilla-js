import notes from "../Classes/Notes";
import ui from "../Classes/UI";
import categories from "../Classes/Categories";
import { createNote } from "../views/components/createNoteForm";
import { noteCard } from "../views/components/containers/noteCard";
import { noteList } from "../views/components/dynamics/noteList";
import { selectCategories } from "../views/components/subComponents/selectCategories";

let state = { name: "", content: "", category: "" };
let editMode;
const notesContainer = document.getElementById("notes");

function restoreState() {
  Object.assign(state, { name: "", content: "", category: "" });
}
function setState(e) {
  state[e.target.name] = e.target.value;
}

function showModal() {
  const modal = document.getElementById("modal");

  modal.classList.remove("hidden");
  modal.classList.add("block");
}
function closeModal() {
  document.getElementById("modal-id").remove();
  if (document.getElementById("id-input")) {
    document.getElementById("id-input").remove();
    document.getElementById("id-label").remove();
    editMode = false;
  // document.getElementById("form-title").textContent = "Create note";
  // document.getElementById("submit").textContent = "Create note";
  restoreState();
  }
  
}
function addNote() {
  // date
  const dayNumb = new Date().getDate();
  const month = new Date().getMonth() + 1;
  const year = new Date().getFullYear();
  const hour = new Date().getHours();
  const minutes = new Date().getMinutes();

  const validateInput = Object.values(state).some((value) => value === "");

  const main = document.querySelector("main");

  const form = document.getElementById("create-note");
  const btnContainer = document.getElementById("btn-container");
  if (validateInput) {
    // create alert element
    ui.alertMsg({
      msg: "You must fill all the fields",
      container: btnContainer,
      type: "error",
      aditionalClass: ["block"],
    });
    return;
  }
  if (editMode) {
    // create alert element
    ui.alertMsg({
      msg: "Item edited successfully...",
      container: document.getElementById("root"),
      beforeElm: main,
      type: "success",
      aditionalClass: ["block"],
    });
    const id = document.getElementById("id-input");
    
    notes.editNote({
      name: state.name,
      markdown: state.content,
      author: "User",
      date: `${dayNumb}-${month}-${year} ${hour}:${minutes} Edited`,
      id: parseInt(id.value),
      category: state.category,
    });
    document.getElementById("form-title").textContent = "Create note";
    document.getElementById("submit").textContent = "Create note";
    document.getElementById("id-label").remove();
    id.remove();
    editMode = false;
  } else {
    ui.alertMsg({
      msg: "Successfully created item...",
      container: document.getElementById("root"),
      beforeElm: main,
      type: "success",
      aditionalClass: ["block"],
    });
    const userNote = {
      name: state.name,
      note: state.content,
      author: "User",
      date: `${dayNumb}-${month}-${year} ${hour}:${minutes}`,
      id: Date.now(),
      category: state.category,
    };
    notes.addNote(userNote);
  }

  restoreState();
  form.reset();
  closeModal();
  noteList(notes.getNotes());
}
function loadEdition({ name, markdown, id }) {
  createNote();
  const form = document.getElementById("create-note");
  const content = form.querySelector(".form-group");

  document.getElementById("form-title").textContent = "Editar nota";
  document.getElementById("submit").textContent = "Editar nota";

  const idLabel = document.createElement("label");
  idLabel.setAttribute("for", "id-input");
  idLabel.textContent = "Id:";
  idLabel.classList.add("question");
  idLabel.id = "id-label";
  idLabel.style.paddingTop = "10px";

  const idInput = document.createElement("input");
  idInput.type = "number";
  idInput.value = id;
  idInput.id = "id-input";
  idInput.classList.add("control");
  idInput.disabled = true;

  content.appendChild(idLabel);
  content.appendChild(idInput);
  const nameInput = document.getElementById("name");
  const noteInput = document.getElementById("editor");

  nameInput.value = name;
  noteInput.value = markdown;

  state.name = name;
  state.content = markdown;

  editMode = true;
}
function order(e) {
  e.preventDefault();
  const order = document.getElementById("notes-sort").value;
  const randomNotesContainer = document.getElementById("random-notes");
  if (order !== "" && randomNotesContainer) {
    randomNotesContainer.remove();
  }
  const sortedNotes = notes.sortNotes(order);
  ui.printNotes(sortedNotes, noteCard, notesContainer);
}

function filterCategoryAct() {
  const selectValue = document.getElementById("filter-category").value;
  const randomNotesContainer = document.getElementById("random-notes");
  const arrNotes = notes.filterByCategory(selectValue);

  ui.printNotes(arrNotes, noteCard, notesContainer);

  if (selectValue !== "" && randomNotesContainer) {
    randomNotesContainer.remove();
  }
}
function deleteNote(id) {
  const confirmAction = confirm("¿Estas seguro?");
  if (confirmAction) {
    notes.removeNote(id);
    const main = document.querySelector("main");

    ui.alertMsg({
      msg: "Deleted...",
      container: document.getElementById("root"),
      beforeElm: main,
      type: "success",
      aditionalClass: ["block"],
    });

    noteList(notes.getNotes());
    
    return;
  }
}

function addCategory() {
  const newCategory = document.getElementById("new-category").value;
  if (newCategory === "") {
    ui.alertMsg({
      msg: "You must fill all the fields",
      container: document.getElementById("card-category"),
      beforeElm: document.getElementById("form-category"),
      type: "error",
      aditionalClass: ["block"],
    });
    return;
  }
  categories.setCategories(newCategory);
  closeModal();
  selectCategories(categories.getCategories());
}
export {
  setState,
  showModal,
  closeModal,
  addNote,
  loadEdition,
  deleteNote,
  order,
  filterCategoryAct,
  addCategory,
};
