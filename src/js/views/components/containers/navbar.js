import { createNote } from "../createNoteForm";
import * as event from "../../../functions/simpleEvents";
import { categoryForm } from "./formCategories";

export const Navbar = () => {
  const nav = document.createElement("nav");
  nav.classList.add("navbar", "navbar-items", "items-center");

  const brand = document.createElement("a");
  brand.classList.add("brand");
  brand.href = "#";
  brand.textContent = "NotesList markdown";
  nav.appendChild(brand);

  const btnShowMenu = document.createElement("button");
  btnShowMenu.classList.add("btn", "btn-blue", "btn-circle", "show-menu");
  btnShowMenu.id = "show";
  btnShowMenu.innerHTML = `
    <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    `;
  btnShowMenu.onclick = (e) => {
    event.showMenu(e);
  };
  nav.appendChild(btnShowMenu);

  const responsiveDiv = document.createElement("div");
  responsiveDiv.classList.add(
    "flex-row",
    "items-center",
    "justify-center",
    "ml-auto",
    "responsive-content"
  );
  responsiveDiv.id = "resp-content";

  const searchLink = document.createElement("a");
  searchLink.textContent = "Search";
  searchLink.href = "#/search";
  responsiveDiv.appendChild(searchLink);

  const categoryModal = document.createElement("button");
  categoryModal.textContent = "Create category";
  categoryModal.onclick = (e) => {
    categoryForm();
  };
  responsiveDiv.appendChild(categoryModal);

  const createNoteNav = document.createElement("button");
  createNoteNav.textContent = "Create note";
  createNoteNav.onclick = (e) => {
    createNote();
  };
  responsiveDiv.appendChild(createNoteNav);


  // crear form modal con scripting
  const btnClose = document.createElement("button");
  btnClose.classList.add("btn", "btn-danger", "btn-circle", "close-menu");
  btnClose.innerHTML = `
    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd"
      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
      clip-rule="evenodd"></path>
    </svg>
    `;
  btnClose.onclick = (e) => {
    event.closeMenu(e);
  };
  responsiveDiv.appendChild(btnClose);

  nav.appendChild(responsiveDiv);

  return nav;
};
