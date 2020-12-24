import Notes from "../../Classes/Notes";
import { noteList } from "./noteList";

export const mainContent = () => {
    const notes = new Notes();
    const main = document.createElement("main");
    main.classList.add("container");
    
    const noteContent = noteList(notes.getNotes())();

    main.appendChild(noteContent);
    
    return main;
};