const categories = (() => {
  let _categories = JSON.parse(localStorage.getItem("categories")) || [];

  function setCategories(category) {
    const newCategory = category.toLowerCase();
    const exist = _categories.some((c) => c === newCategory);
    if (exist) {
      return;
    }
    _categories = [..._categories, newCategory];
    localStorage.setItem("categories", JSON.stringify(_categories));
  }
  function getCategories() {
    const newArrCategories = Array.from(_categories);
    // const modifiedArr = new Set(newArrCategories);
    return newArrCategories;
  }
  function removeCategorie(name) {
    _categories = _categories.filter((c) => c !== name);
    localStorage.setItem("categories", JSON.stringify(_categories));
  }
  return { setCategories, getCategories, removeCategorie };
})();
export default categories;
