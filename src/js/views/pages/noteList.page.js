import notes from "../../Classes/Notes";
import { noteList } from "../components/dynamics/noteList";
import { searchEvent } from "../../functions/simpleEvents";
export const noteListPage = () => {

    const existNotes = notes.getNotes();

    const searchDiv = document.createElement("div");

    const title = document.createElement("h1");
    title.classList.add("text-center");
    title.textContent = "NoteList Markdown.";
    const form = document.createElement("form");
    form.action = "#";

    const formDiv = document.createElement("div");
    formDiv.classList.add("form-group", "flex-column");

    const labelSearch = document.createElement("label");
    labelSearch.classList.add("question");
    labelSearch.for = "search-input";

    const inputSearch = document.createElement("input");
    inputSearch.classList.add("control");
    inputSearch.name = "search";
    inputSearch.id = "search-input";
    inputSearch.placeholder = "Insert here a search keyword";
    inputSearch.oninput = (e) => {
        searchEvent(e);
    };

    const divNotes = document.createElement("div");
    const allNotes = noteList(existNotes)();


    divNotes.appendChild(allNotes);

    formDiv.appendChild(labelSearch);
    formDiv.appendChild(inputSearch);

    searchDiv.appendChild(title);
    searchDiv.appendChild(formDiv);
    searchDiv.appendChild(divNotes);

    return searchDiv;

}