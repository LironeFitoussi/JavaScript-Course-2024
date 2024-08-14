import icons from 'url:../../img/icons.svg'; // Parcel 2

class SearchView {
  #parentElement = document.querySelector('.search');
  #errorMessage = 'No recipes found for your query. Please try another one!';
  #message = '';

  getQuery() {
    const query = this.#parentElement.querySelector('.search__field').value;
    this.#clear();
    return query;
  }

  addHandlerSearch(handler) {
    this.#parentElement.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  }

  #clear() {
    this.#parentElement.querySelector('.search__field').value = '';
  }
}

export default new SearchView();
