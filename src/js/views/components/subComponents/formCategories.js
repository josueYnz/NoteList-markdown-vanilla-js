import { addCategory } from "../../../functions/Actions";
export const categoryForm = () => {
    const modalDiv = document.createElement("div");
    modalDiv.classList.add("modal");
    modalDiv.id = "category-container";

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
      document.getElementById("category-container").remove();
    };

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

    modalDiv.appendChild(modalContent);
    modalContent.appendChild(btnDiv);
    btnDiv.appendChild(btnClose);
    modalContent.appendChild(card);
    card.appendChild(cardBody);

    cardBody.appendChild(title);
    cardBody.appendChild(form);
    form.appendChild(formGroup);
    formGroup.appendChild(label);
    formGroup.appendChild(input);

    form.appendChild(formGroupTwo);
    formGroupTwo.appendChild(btnSubmit);


    document.querySelector("main").appendChild(modalDiv);
  }