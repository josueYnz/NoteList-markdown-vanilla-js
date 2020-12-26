import Notes from "../../../Classes/Notes";
import UI from "../../../Classes/UI";

import { noteCard } from "./noteCard";
const notes = new Notes();
const ui = new UI();
export const randomNote = () => {
  // random notes
  const random = notes.getRandomNote();

  return noteCard(random);
}