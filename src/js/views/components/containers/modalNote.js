import Modal from "../subComponents/modal";
export default function modalNote({ name, date, note }) {
    // const modalDiv = document.createElement("div");
    // modalDiv.classList.add("modal");
    // modalDiv.id = "note-container";

    // const modalContent = document.createElement("div");
    // modalContent.classList.add("modal-content");

    // const btnDiv = document.createElement("div");

    // btnDiv.classList.add("flex-row", "justify-end", "items-center");

    // const btnClose = document.createElement("button");
    // btnClose.classList.add("btn", "btn-danger", "btn-circle");

    // btnClose.innerHTML = `
    //   <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    //    <path fill-rule="evenodd"
    //      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
    //   </svg>
    //   `;
    // btnClose.onclick = (e) => {
    //   e.preventDefault();
    //   document.getElementById("note-container").remove();
    // };

    const card = document.createElement("div");
    card.classList.add("card", "bg-white");

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    const nameTitle = document.createElement("h2");
    nameTitle.classList.add("text-center");
    nameTitle.textContent = name;

    const createDate = document.createElement("p");
    createDate.classList.add("font-small");
    createDate.textContent = "Date " + date;

    const noteContent = document.createElement("div");
    noteContent.innerHTML = note;

    // modalDiv.appendChild(modalContent);
    // modalContent.appendChild(btnDiv);
    // btnDiv.appendChild(btnClose);
    card.appendChild(cardBody);
    cardBody.appendChild(nameTitle);
    cardBody.appendChild(createDate);
    cardBody.appendChild(noteContent);
    const modalContent = Modal(card);


    document.querySelector("main").appendChild(modalContent);
  }