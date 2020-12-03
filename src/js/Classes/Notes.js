import { arrayData } from "../functions/helpers";
import marked from "marked";
import DOMPurify from "dompurify";

// notes controller
class Notes {
  _notesElements = JSON.parse(localStorage.getItem("notes")) || [];

  addNote({ name, note, date, id, category }) {
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
    this._notesElements = [userNote, ...this._notesElements];
    // notesElements to localStorage
    localStorage.setItem("notes", JSON.stringify(this._notesElements));
  }
  getNotes() {
    return this._notesElements;
  }
  getRandomNote() {
    const arrHaveData = arrayData(this._notesElements);
    if (arrHaveData) {
      const randomPoint = Math.floor(
        Math.random() * this._notesElements.length
      );
      return [this._notesElements[randomPoint]];
    } else {
      return [];
    }
  }
  searchNotes(word) {
    // Create a new array with the params of search
    return this._notesElements.filter((note) => {
      // Create a regEx global
      const regex = new RegExp(word, "gi");
      // Search the params in name and note
      return note.name.match(regex) || note.note.match(regex);
    });
  }
  sortNotes(type) {
    const result = Array.from(this._notesElements);
    switch (type) {
      case "asc":
        return result.sort((a, b) => {
          return a.name[0].localeCompare(b.name[0]);
        });

      case "desc":
        return result.sort((a, b) => {
          return b.name[0].localeCompare(a.name[0]);
        });

      case "recent":
        return result.sort((a, b) => {
          return a.id - b.id;
        });

      case "last":
        return result.sort((a, b) => {
          return b.id - a.id;
        });

      default:
        return this._notesElements;
    }
  }
  filterByCategory(category) {
    if (category === "") {
      return this._notesElements;
    }
    const arrCt = this._notesElements.filter((n) => n.category === category);
    return arrCt;
  }
  removeNote(id) {
    // delete select note-id and make a new array
    this._notesElements = this._notesElements.filter((n) => n.id !== id);
    // set to localStorage the new array
    localStorage.setItem("notes", JSON.stringify(this._notesElements));
  }
  editNote(edited) {
    this._notesElements = this._notesElements.map((n) =>{
      if(n.id === edited.id) {
        const html = DOMPurify.sanitize(marked(edited.markdown));
        edited.note = html;
        return edited;
      } else {
        return n;
      }
    } );
    localStorage.setItem("notes", JSON.stringify(this._notesElements));
  }
}
export default Notes;
