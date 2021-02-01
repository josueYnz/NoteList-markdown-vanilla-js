import ui from "../../../Classes/UI";

export const selectCategories = (categoriesArr) => {
  const createSelect = document.createElement("select");
  createSelect.name = "category";
  createSelect.id = "select-category";


  const selectExist = document.querySelector('[name="select-category"]');

  const finalSelect = selectExist ? selectExist : createSelect;


  function categoryComponent(category, container) {
    const optionDefault = document.createElement("option");
    optionDefault.value = "";
    optionDefault.text = "-- Select a category --";
    container.appendChild(optionDefault);
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
