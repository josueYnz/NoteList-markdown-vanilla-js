class Categories {
  _categories = JSON.parse(localStorage.getItem("categories")) || [];

  setCategories(category) {
    const newCategory = category.toLowerCase();
    const exist = this._categories.some((c) => c === newCategory);
    if (exist) {
      return;
    }
    this._categories = [...this._categories, newCategory];
    localStorage.setItem("categories", JSON.stringify(this._categories));
  }
  getCategories() {
    const newArrCategories = Array.from(this._categories);
    // const modifiedArr = new Set(newArrCategories);
    return newArrCategories;
  }
  removeCategorie(name) {
    this._categories = this._categories.filter((c) => c !== name);
    localStorage.setItem("categories", JSON.stringify(this._categories));
  }
}
export { Categories };
