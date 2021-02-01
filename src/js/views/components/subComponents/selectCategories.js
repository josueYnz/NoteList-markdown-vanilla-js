import { cleanDom, arrayData } from "../../../functions/helpers";
import ui from "../../../Classes/UI";

export const selectCategories = (categoriesArr) => {
  const createSelect = document.createElement("select");
  createSelect.name = "category";
  createSelect.id = "select-category";

  const selectExist = document.getElementById("select-category");

  const finalSelect = selectExist ? selectExist : createSelect;

  const optionDefault = document.createElement("option");
  optionDefault.value = "";
  optionDefault.text = "--- Select a category ---";
  finalSelect.appendChild(optionDefault);
  function categoryComponent(category, container) {
    const option = document.createElement("option");
    option.value = category;
    option.text = category;
    container.appendChild(option);
  }

  ui.printNotes(categoriesArr, categoryComponent, finalSelect);
  return () => {
    return finalSelect;
  };
};
