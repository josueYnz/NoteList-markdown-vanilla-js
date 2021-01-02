import notes from "../../Classes/Notes";
// import { noteList } from "./noteList";
import { cleanDom } from "../../functions/helpers";

export const mainContent = (content = "") => {
  const main = document.createElement("main");
  main.classList.add("container");
  const getMain = document.querySelector("main");
  const finalMain = getMain ? getMain : main;
  cleanDom(finalMain);

  // const allNotes = notes.getNotes();

  // const noteContent = noteList(allNotes)();

  finalMain.appendChild(content);
  return () => {
    return finalMain;
  }
};
