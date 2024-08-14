import icons from 'url:../../img/icons.svg'; // Parcel 2

class SearchView {
  _parentElement = document.querySelector('.search');
  _errorMessage = 'No recipes found for your query. Please try another one!';
  _message = '';

  getQuery() {
    const query = this._parentElement.querySelector('.search__field').value;
    this.#clear();
    return query;
  }

  addHandlerSearch(handler) {
    this._parentElement.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  }

  #clear() {
    this._parentElement.querySelector('.search__field').value = '';
  }
}

export default new SearchView();
