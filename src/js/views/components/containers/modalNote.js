import Modal from "../subComponents/modal";
export default function modalNote({ name, date, note }) {
 
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

    card.appendChild(cardBody);
    cardBody.appendChild(nameTitle);
    cardBody.appendChild(createDate);
    cardBody.appendChild(noteContent);
    const modalContent = Modal(card);


    document.querySelector("main").appendChild(modalContent);
  }