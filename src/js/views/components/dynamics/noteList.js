import ui from "../../../Classes/UI";
import { noteCard } from "../containers/noteCard";

export const noteList = (notes) => {


  const noteListContainer = document.getElementById("note-list");

  let createNoteList;
  if (!noteListContainer) {
    createNoteList = document.createElement("div");
    createNoteList.classList.add("grid-container", "gap-2");
    createNoteList.id = "note-list";
  }

  const noteContent = noteListContainer ? noteListContainer : createNoteList;



  ui.printNotes(notes, noteCard, noteContent);
  return () => {
    return noteContent;
  };
};
