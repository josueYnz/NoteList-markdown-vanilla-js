import notes from "../../Classes/Notes";
import { noteList } from "../components/dynamics/noteList";
export const indexPage = () => {

    const existNotes = notes.getNotes();

    const index = document.createElement("div");

    const title = document.createElement("h1");
    title.classList.add("text-center");
    title.textContent = "NoteList Markdown.";
   
    const divNotes = document.createElement("div");
    const allNotes = noteList(existNotes)();

    divNotes.appendChild(allNotes);

    index.appendChild(title);

    index.appendChild(divNotes);

    return index;

}