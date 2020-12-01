class Categories {
  _categories = JSON.parse(localStorage.getItem("categories")) || [];

  setCategories(categorie) {
    this._categories = [...this._categories, categorie];
    localStorage.setItem("categories", JSON.stringify(this._categories));
  }
  getCategories() {
    return this._categories;
  }
  removeCategorie(name) {
    this._categories = this._categories.filter((c) => c !== name);
    localStorage.setItem("categories", JSON.stringify(this._categories));
  }
}
export default Categories;
