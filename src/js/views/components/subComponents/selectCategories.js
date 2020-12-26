import { cleanDom, arrayData } from "../../../functions/helpers";

export const selectCategories = (categoriesArr) => {

  const select = document.createElement("select");
  select.name = "category";
  // select.id = "select-category";

  cleanDom(select);
  
  const validateArr = arrayData(categoriesArr);
  const optionDefault = document.createElement("option");
  optionDefault.value = "";
  optionDefault.text = "--- Select a category ---";
  select.appendChild(optionDefault);

  if (validateArr) {
    for (const category of categoriesArr) {
      const option = document.createElement("option");
      option.value = category;
      option.text = category;
      select.appendChild(option);
    }
  }
  return () => {
    return select;
  };
};
