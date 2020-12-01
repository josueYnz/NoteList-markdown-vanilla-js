import { arrayData } from "../functions/helpers.js";
// notes controller
class Notes {
  constructor(categories = "") {
    // tomar un enfoque más reactivo.
    // if exist notes in localStorage
    this.notesElements = JSON.parse(localStorage.getItem("notes")) || [];
    this.categories = categories;
  }

  addNote({ name, note, date, id }) {
    // markdow to html
    const convertToHTML = marked(note);
    // purify the new html
    const purifyHTML = DOMPurify.sanitize(convertToHTML);

    const upperCaseLetter = name.charAt(0).toUpperCase();
    const formated = upperCaseLetter + name.slice(1, name.length) + ".";
    const newName = formated.trim();

    const userNote = {
      name: newName,
      note: purifyHTML,
      markdown: note,
      date,
      id,
    };

    // add objects in notesElements
    this.notesElements = [...this.notesElements, userNote];
    // notesElements to localStorage
    localStorage.setItem("notes", JSON.stringify(this.notesElements));
  }
  getNotes() {
    return this.notesElements;
  }
  getRandomNote() {
    const arrHaveData = arrayData(this.notesElements);
    if (arrHaveData) {
      const randomPoint = Math.floor(Math.random() * this.notesElements.length);
      return [this.notesElements[randomPoint]];
    } else {
      return [];
    }
  }
  searchNotes(word) {
    // Create a new array with the params of search
    return this.notesElements.filter((note) => {
      // Create a regEx global
      const regex = new RegExp(word, "gi");
      // Search the params in name and note
      return note.name.match(regex) || note.note.match(regex);
    });
  }
  sortNotes(type) {
    const result = Array.from(this.notesElements);
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
        return this.notesElements;
    }
  }
  removeNote(id) {
    // delete select note-id and make a new array
    this.notesElements = this.notesElements.filter((n) => n.id !== id);
    // set to localStorage the new array
    localStorage.setItem("notes", JSON.stringify(this.notesElements));
  }
  editNote(edited) {
    this.notesElements = this.notesElements.map((n) =>
      n.id === edited.id ? edited : n
    );
    localStorage.setItem("notes", JSON.stringify(this.notesElements));
  }
}

export default Notes;
