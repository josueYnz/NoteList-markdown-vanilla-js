import notes from "../../Classes/Notes";
import { noteList } from "../components/dynamics/noteList";
import { selectCategories } from "../components/subComponents/selectCategories";
import categories from "../../Classes/Categories";
export const noteListPage = () => {
  const existNotes = notes.getNotes();

  const searchDiv = document.createElement("div");

  const title = document.createElement("h1");
  title.classList.add("text-center");
  title.textContent = "NoteList Markdown.";
  const form = document.createElement("form");
  form.action = "#";
  form.classList.add("grid-container", "gap-2");

  const formDiv = document.createElement("div");
  formDiv.classList.add("form-group", "flex-column");

  const formDiv2 = document.createElement("div");
  formDiv2.classList.add("form-group", "flex-column");

  const labelSearch = document.createElement("label");
  labelSearch.classList.add("question");
  labelSearch.for = "search-input";
  labelSearch.textContent = "Search your notes";

  const inputSearch = document.createElement("input");
  inputSearch.classList.add("control");
  inputSearch.name = "search";
  inputSearch.id = "search-input";
  inputSearch.placeholder = "Insert here a search keyword";
  inputSearch.oninput = (e) => {
    const searchResult = notes.searchNotes({ word: e.target.value });
    noteList(searchResult);
  };

  const labelCategory = document.createElement("label");
  labelCategory.classList.add("question");
  labelCategory.for = "select-category";
  labelCategory.textContent = "Search your notes by categories";

  const allCategories = categories.getCategories();
  const selectCategory = selectCategories(allCategories)();
  selectCategory.onchange = (e) => {
    const searchResult = notes.searchNotes({ category: e.target.value });
    noteList(searchResult);
  };

  const divNotes = document.createElement("div");
  const allNotes = noteList(existNotes)();

  divNotes.appendChild(allNotes);

  formDiv.appendChild(labelSearch);
  formDiv.appendChild(inputSearch);
  formDiv2.appendChild(labelCategory);
  formDiv2.appendChild(selectCategory);

  searchDiv.appendChild(title);
  searchDiv.appendChild(form);

  form.appendChild(formDiv);
  form.appendChild(formDiv2);

  searchDiv.appendChild(divNotes);

  return searchDiv;
};
