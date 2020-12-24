import { cleanDom, arrayData } from "../../../functions/helpers";

export const selectCategories = (categoriesArr) => {

  const select = document.createElement("select");
  select.name = "category";
  select.id = "select-category";

  const existSelect = document.getElementById("select-category");

  const finalSelect = existSelect ? existSelect : select;

  cleanDom(finalSelect);
  
  const validateArr = arrayData(categoriesArr);
  const optionDefault = document.createElement("option");
  optionDefault.value = "";
  optionDefault.text = "--- Select a category ---";
  finalSelect.appendChild(optionDefault);

  if (validateArr) {
    for (const category of categoriesArr) {
      const option = document.createElement("option");
      option.value = category;
      option.text = category;
      finalSelect.appendChild(option);
    }
  }
  return () => {
    return finalSelect;
  };
};
