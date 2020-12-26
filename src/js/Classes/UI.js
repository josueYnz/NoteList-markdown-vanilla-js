import * as Helper from "../functions/helpers";
import { notAvailable } from "../views/notAvailable";

const ui = (() => {
  function alertMsg({
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
  function printNotes(arr, callback, container = "") {
    // Cleam Dom
    if (container) {
      Helper.cleanDom(container);
    }

    const arrData = Helper.arrayData(arr);

    if (arrData) {
      // Helper.dataIterator(arr, (data) => callback(data, container));
      for (const data of arr) {
        callback(data, container);
      }
      return;
    }

    notAvailable(container);
  }
  return { alertMsg, printNotes };
})();
export default ui;
