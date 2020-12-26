import { arrayData } from "../functions/helpers";
import marked from "marked";
import DOMPurify from "dompurify";

// notes controller
const notes = (() => {
  let _notesElements = JSON.parse(localStorage.getItem("notes")) || [];

  function addNote({ name, note, date, id, category }) {
    // markdow to html
    const convertToHTML = marked(note);
    // purify the new html
    const purifyHTML = DOMPurify.sanitize(convertToHTML);

    const upperCaseLetter = name.charAt(0).toUpperCase();
    const formated = upperCaseLetter + name.slice(1, name.length);
    const newName = formated.trim();

    const userNote = {
      name: newName,
      note: purifyHTML,
      markdown: note,
      category,
      date,
      id,
    };

    // add objects in notesElements
    _notesElements = [userNote, ..._notesElements];
    // notesElements to localStorage
    localStorage.setItem("notes", JSON.stringify(_notesElements));
  }
  function getNotes() {
    return _notesElements;
  }
  function getRandomNote() {
    const arrHaveData = arrayData(_notesElements);
    if (arrHaveData) {
      const randomNumber = Math.random() * _notesElements.length;
      const numberRounded = Math.floor(randomNumber);
      return [_notesElements[numberRounded]];
    } else {
      return [];
    }
  }
  function searchNotes(word) {
    // Create a new array with the params of search
    return _notesElements.filter((note) => {
      // Create a regEx global
      const regex = new RegExp(word, "gi");
      // Search the params in name and note
      return note.name.match(regex) || note.note.match(regex);
    });
  }
  function sortNotes(type) {
    const result = Array.from(_notesElements);
    switch (type) {
      case "asc":
        return result.sort((a, b) => {
          return a.name[0].localeCompare(b.name[0]);
        });

      case "desc":
        return result.sort((a, b) => {
          return b.name[0].localeCompare(a.name[0]);
        });

      case "old":
        return result.sort((a, b) => {
          return a.id - b.id;
        });

      case "recent":
        return result.sort((a, b) => {
          return b.id - a.id;
        });

      default:
        return _notesElements;
    }
  }
  function filterByCategory(category) {
    if (category === "") {
      return _notesElements;
    }
    const arrCt = _notesElements.filter((n) => n.category === category);
    return arrCt;
  }
  function removeNote(id) {
    // delete select note-id and make a new array
    _notesElements = _notesElements.filter((n) => n.id !== id);
    // set to localStorage the new array
    localStorage.setItem("notes", JSON.stringify(_notesElements));
  }
  function editNote(edited) {
    _notesElements = _notesElements.map((n) => {
      if (n.id === edited.id) {
        const html = DOMPurify.sanitize(marked(edited.markdown));
        edited.note = html;
        return edited;
      } else {
        return n;
      }
    });
    localStorage.setItem("notes", JSON.stringify(_notesElements));
  }
  return { addNote, getNotes, getRandomNote, searchNotes, sortNotes, filterByCategory, removeNote, editNote, };
})();
export default notes;
