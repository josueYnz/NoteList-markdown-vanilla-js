import Notes from "../Classes/Notes.js";
import UI from "../Classes/UI.js";

const ui = new UI();
const notes = new Notes();

let state = { name: "", content: "" };
let editMode;
const notesContainer = document.getElementById("notes");

function restoreState() {
  Object.assign(state, { name: "", content: "" });
  const nameInput = document.getElementById("name");
  const noteInput = document.getElementById("editor");

  nameInput.value = "";
  noteInput.value = "";
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
  const modal = document.getElementById("modal");

  modal.classList.remove("block");
  modal.classList.add("hidden");
  if (document.getElementById("id-input")) {
    document.getElementById("id-input").remove();
    document.getElementById("id-label").remove();
  }
  editMode = false;
  document.getElementById("form-title").textContent = "Crear nota";
  document.getElementById("submit").textContent = "Crear nota";
  restoreState();
}
function addNote(e) {
  e.preventDefault();
  // date
  const dayNumb = new Date().getDate();
  const month = new Date().getMonth() + 1;
  const year = new Date().getFullYear();
  const hour = new Date().getHours();
  const minutes = new Date().getMinutes();

  const validateInput = Object.values(state).some((value) => value === "");

  const main = document.querySelector("main");

  const form = document.getElementById("create-note");
  const modalBody = document.getElementById("modal-body");
  if (validateInput) {
    // create alert element
    ui.alertMsg({
      msg: "Debes llenar todos los campos",
      container: modalBody,
      beforeElm: form,
      type: "error",
      aditionalClass: ["block"],
    });
    return;
  }
  if (editMode) {
    // create alert element
    ui.alertMsg({
      msg: "Elemento editado exitosamente...",
      container: document.body,
      beforeElm: main,
      type: "success",
      aditionalClass: ["block"],
    });
    const id = document.getElementById("id-input");
    const noteTransformed = DOMPurify.sanitize(marked(state.content));
    notes.editNote({
      name: state.name,
      note: noteTransformed,
      markdown: state.content,
      author: "User",
      date: `${dayNumb}-${month}-${year} ${hour}:${minutes} Edited`,
      id: parseInt(id.value),
    });
    document.getElementById("form-title").textContent = "Crear nota";
    document.getElementById("submit").textContent = "Crear nota";
    document.getElementById("id-label").remove();
    id.remove();
    editMode = false;
  } else {
    ui.alertMsg({
      msg: "Elemento creado exitosamente...",
      container: document.body,
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
    };
    notes.addNote(userNote);
  }

  restoreState();
  form.reset();
  requestAnimationFrame(closeModal);
  const getNotes = notes.getNotes();
  ui.printNotes(getNotes, notesContainer);
}
function loadEdition({ name, markdown, id }) {
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
  requestAnimationFrame(showModal);
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

  ui.printNotes(notes.sortNotes(order), notesContainer);
}
function deleteNote(id) {
  const confirmAction = confirm("¿Estas seguro?");
  if (confirmAction) {
    notes.removeNote(id);
    const main = document.querySelector("main");

    ui.alertMsg({
      msg: "Borrado...",
      container: document.body,
      beforeElm: main,
      type: "success",
      aditionalClass: ["block"],
    });
    ui.printNotes(notes.getNotes(), notesContainer);
    return;
  }
}
export {
  setState,
  showModal,
  closeModal,
  addNote,
  loadEdition,
  deleteNote,
  order,
};
