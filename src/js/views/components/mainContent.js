// import notes from "../../Classes/Notes";
// import { noteList } from "./noteList";
import { cleanDom } from "../../functions/helpers";


export const mainContent = (content) => {

  const main = document.createElement("main");
  main.classList.add("container");
  cleanDom(main);


    // const noteContent = noteList(notes.getNotes())();

    main.appendChild(content);
  return main;
};
