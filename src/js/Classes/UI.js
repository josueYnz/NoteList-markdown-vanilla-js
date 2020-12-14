import * as Helper from "../functions/helpers";
import * as action from "../functions/Actions";
import modalNote from "../domElements/modalNote";

class UI {
  alertMsg({
    msg,
    container,
    beforeElm = "",
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
      if (beforeElm === "") {
        container.appendChild(divMsg);
      } else {
        container.insertBefore(divMsg, beforeElm);
      }
      setTimeout(() => {
        divMsg.remove();
      }, 2000);
    }
  }
  printNotes(container, arr, callback) {
    // Cleam Dom
    Helper.cleanDom(container);

    const arrData = Helper.arrayData(arr);

    if (arrData) {
      Helper.dataIterator(arr, (data) => {
        callback(data, container);
      });
      return;
    }

    const message = document.createElement("p");
    message.classList.add("text-center", "font-large-x");
    message.textContent = "There are no notes available, try creating one.";

    container.appendChild(message);
  }
}
export default UI;
