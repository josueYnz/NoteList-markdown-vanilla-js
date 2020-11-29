import * as Helper from "../functions/helpers.js";
import * as action from "../functions/Actions.js";

class UI {
  alertMsg({
    msg,
    container,
    beforeElm,
    type = "error",
    aditionalClass: [...extraClass] = "",
  }) {
    const alertMsg = document.querySelector(".alert");
    if (!alertMsg) {
      const divMsg = document.createElement("div");

      divMsg.classList.add("alert", ...extraClass);
      if (type === "success") {
        divMsg.classList.add("bg-success");
      } else if (type === "warning") {
        divMsg.classList.add("bg-warning");
      } else {
        divMsg.classList.add("bg-danger");
      }
      divMsg.textContent = msg;
      container.insertBefore(divMsg, beforeElm);
      setTimeout(() => {
        divMsg.remove();
      }, 2000);
    }
  }
  printNotes(notes, container) {
    // Cleam Dom
    Helper.cleanDom(container);

    const arrData = Helper.arrayData(notes);

    if (arrData) {
      Helper.dataIterator(notes, (noteU) => {
        const { name, note, markdown, author, date, id } = noteU;

        const card = document.createElement("div");
        card.classList.add("card");

        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");

        const btnDiv = document.createElement("div");
        btnDiv.classList.add(
          "flex",
          "flex-d-row",
          "justify-beetwen",
          "items-center"
        );

        const btnEdit = document.createElement("button");
        btnEdit.classList.add("btn", "btn-blue", "btn-circle", "font-medium");
        btnEdit.innerHTML =
          'Edit <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path><path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd"></path></svg>';
        btnEdit.dataset.id = id;

        btnEdit.onclick = () => {
          action.loadEdition({ name, markdown, id });
        };

        const btnDelete = document.createElement("button");
        btnDelete.classList.add("btn", "btn-danger", "btn-circle");

        btnDelete.dataset.id = id;

        btnDelete.innerHTML = `
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"></path>
          </svg>
          `;
        btnDelete.onclick = (e) => {
          e.preventDefault();
          // if the clicked element have a "data-id"
          if (
            e.target.dataset.id ||
            e.target.parentElement.dataset.id ||
            e.target.parentElement.parentElement.dataset.id
          ) {
            // Make the convertion of string to number...
            const id = parseInt(e.target.parentElement.dataset.id);
            // ... and delete your note
            action.deleteNote(id);
          }
        };
        const nameTitle = document.createElement("h2");
        nameTitle.classList.add("text-center");
        nameTitle.textContent = name;

        const createDate = document.createElement("p");
        createDate.classList.add("font-small");
        createDate.textContent = date;

        const btnViewNote = document.createElement("button");
        btnViewNote.classList.add(
          "btn",
          "btn-orange",
          "btn-lg",
          "font-larger",
          "btn-full"
        );
        btnViewNote.style.marginTop = "auto";
        btnViewNote.textContent = "Open note";
        btnViewNote.onclick = (e) => {
          this.openNote({ name, date, note });
        };
        // const divCategories = document.createElement("div");
        // divCategories.classList.add(
        //   "flex-row",
        //   "justify-end",
        //   "items-center"
        // );

        // <a class="categorie" href="#">Programing</a>

        card.appendChild(cardBody);
        cardBody.appendChild(btnDiv);
        btnDiv.appendChild(btnEdit);

        btnDiv.appendChild(btnDelete);

        cardBody.appendChild(nameTitle);
        cardBody.appendChild(createDate);
        cardBody.appendChild(btnViewNote);

        container.appendChild(card);
      });
      return;
    }

    const message = document.createElement("p");
    message.classList.add("text-center", "font-large-x");
    message.textContent = "No hay elementos disponibles";

    container.appendChild(message);
  }
  openNote({ name, date, note }) {
    const modalDiv = document.createElement("div");
    modalDiv.classList.add("modal");
    modalDiv.id = "note-container";

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
      document.getElementById("note-container").remove();
    };

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

    modalDiv.appendChild(modalContent);
    modalContent.appendChild(btnDiv);
    btnDiv.appendChild(btnClose);
    modalContent.appendChild(card);
    card.appendChild(cardBody);
    cardBody.appendChild(nameTitle);
    cardBody.appendChild(createDate);

    cardBody.appendChild(noteContent);

    document.querySelector("main").appendChild(modalDiv);
  }
}
export default UI;
