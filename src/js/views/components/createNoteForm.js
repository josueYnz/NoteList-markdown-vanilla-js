import { setState, addNote } from "../../functions/Actions";
import categoriesInstance from "../../Classes/Categories";
import { selectCategories } from "./subComponents/selectCategories";
import Modal from "./subComponents/modal";
export const createNote = () => {


  const card = document.createElement("div");
  card.classList.add("card", "bg-white");

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");
  cardBody.id = "modal-body";

  const title = document.createElement("h2");
  title.classList.add("text-center");
  title.id = "form-title";
  title.textContent = "Create note";

  const form = document.createElement("form");
  form.action = "#";
  form.id = "create-note";

  form.onsubmit = (e) => {
    e.preventDefault();
    addNote();
  };

  const formGroup = document.createElement("div");
  formGroup.classList.add("form-group", "flex-column");

  const label = document.createElement("label");
  label.classList.add("question");
  label.htmlFor = "name";
  label.textContent = "Note name";

  const input = document.createElement("input");
  input.type = "text";
  input.classList.add("control");
  input.name = "name";
  input.id = "name";
  input.placeholder = "Note name here.";
  input.oninput = (e) => {
    setState(e);
  };

  const divCategories = document.createElement("div");
  divCategories.classList.add("form-group", "flex-column");

  const labelCategories = document.createElement("label");
  labelCategories.htmlFor = "select-category";
  labelCategories.textContent = "Select a category";

  const categories = selectCategories(categoriesInstance.getCategories())();
  categories.oninput = (e) => {
    setState(e);
  };

  const divNote = document.createElement("div");
  divNote.classList.add("form-group", "flex-column");

  const noteTitle = document.createElement("p");
  noteTitle.classList.add("question");
  noteTitle.textContent = "Note:";

  const noteTextarea = document.createElement("textarea");
  noteTextarea.name = "content";
  noteTextarea.id = "editor";
  noteTextarea.oninput = (e) => {
    setState(e);
  };

  const btnSubmitDiv = document.createElement("div");
  btnSubmitDiv.classList.add("form-group", "flex-column");
  btnSubmitDiv.id = "btn-container";

  const btnSubmit = document.createElement("button");
  btnSubmit.classList.add("btn", "btn-lg", "btn-success", "btn-full");
  btnSubmit.type = "submit";
  btnSubmit.id = "submit";
  btnSubmit.textContent = "Create note";


  card.appendChild(cardBody);
  cardBody.appendChild(title);
  cardBody.appendChild(form);

  form.appendChild(formGroup);
  formGroup.appendChild(label);
  formGroup.appendChild(input);

  form.appendChild(divCategories);
  divCategories.appendChild(labelCategories);
  divCategories.appendChild(categories);

  form.appendChild(divNote);
  divNote.appendChild(noteTitle);
  divNote.appendChild(noteTextarea);

  form.appendChild(btnSubmitDiv);
  btnSubmitDiv.appendChild(btnSubmit);

  const modalDiv = Modal(card);


  document.querySelector("main").appendChild(modalDiv);
};
