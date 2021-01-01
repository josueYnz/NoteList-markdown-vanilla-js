import { addCategory } from "../../../functions/Actions";
import Modal from "../subComponents/modal";
export const categoryForm = () => {

    const card = document.createElement("div");
    card.classList.add("card", "bg-white");

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    cardBody.id = "card-category";

    const title = document.createElement("h2");
    title.classList.add("text-center");
    title.textContent = "Create category";

    const form = document.createElement("form");
    form.action = "#";
    form.id = "form-category";

    form.onsubmit = (e) => {
        e.preventDefault();
        addCategory();
    };

    const formGroup = document.createElement("div");
    formGroup.classList.add("form-group", "flex-column");

    const label = document.createElement("label");
    label.classList.add("question");
    label.htmlFor = "new-category";
    label.textContent = "Category";
    
    const input = document.createElement("input");
    input.type = "text";
    input.classList.add("control");
    input.id = "new-category";
    input.placeholder = "Input a new category here"

    const formGroupTwo = document.createElement("div");
    formGroupTwo.classList.add("form-group", "flex-column");

    const btnSubmit = document.createElement("button");
    btnSubmit.classList.add("btn", "btn-lg", "btn-success", "btn-full");
    btnSubmit.type = "submit";
    btnSubmit.textContent = "Create category";


    cardBody.appendChild(title);
    cardBody.appendChild(form);
    form.appendChild(formGroup);
    formGroup.appendChild(label);
    formGroup.appendChild(input);

    form.appendChild(formGroupTwo);
    formGroupTwo.appendChild(btnSubmit);
    card.appendChild(cardBody);

    const modalDiv = Modal(card);


    document.querySelector("main").appendChild(modalDiv);
  }