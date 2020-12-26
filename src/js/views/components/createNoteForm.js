import { setState, closeModal, addNote } from "../../functions/Actions";
import categoriesInstance from "../../Classes/Categories";
import { selectCategories } from "./subComponents/selectCategories";
export const createNote = () => {
  const modalDiv = document.createElement("div");
  modalDiv.classList.add("modal");
  modalDiv.id = "create-note-modal";

  const modalContent = document.createElement("div");
  modalContent.classList.add("modal-content");

  const btnDiv = document.createElement("div");

  btnDiv.classList.add("flex-row", "justify-end", "items-center");

  const btnClose = document.createElement("button");
  btnClose.classList.add("btn", "btn-danger", "btn-circle");

  btnClose.innerHTML = `
      <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
       <path fill-rule="evenodd"
         d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
      </svg>
      `;
  btnClose.onclick = (e) => {
    e.preventDefault();
    closeModal();
  };

  btnDiv.appendChild(btnClose);
  modalContent.appendChild(btnDiv);

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

  modalDiv.appendChild(modalContent);

  modalContent.appendChild(card);
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

  document.querySelector("main").appendChild(modalDiv);
};
