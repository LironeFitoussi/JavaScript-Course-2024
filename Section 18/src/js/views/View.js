import icons from 'url:../../img/icons.svg'; // Parcel 2

export default class View {
  render(data, render = true) {
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderError();
    this._data = data;
    const markup = this._generateMarkup();

    if (!render) return markup;

    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  update(data) {
    // if (!data || (Array.isArray(data) && data.length === 0))
    //   return this.renderError();

    this._data = data;
    const newMarkup = this._generateMarkup();

    const newDOM = document.createRange().createContextualFragment(newMarkup);
    // Creating a "Virtual DOM" and convert to an Array
    const newElements = Array.from(newDOM.querySelectorAll('*'));
    //? console.log(newElements);

    // Selecting Current DOM
    const curElements = Array.from(this._parentElement.querySelectorAll('*'));

    //? console.log(curElements);
    //? console.log(newElements);

    // Compare DOM Elements
    newElements.forEach((newEl, i) => {
      const curEl = curElements[i];
      //? console.log(curEl, newEl.isEqualNode(curEl));

      // Update Changed TEXT
      if (
        !newEl.isEqualNode(curEl) &&
        newEl.firstChild?.nodeValue.trim() !== ''
      ) {
        //? console.log('Precise DOM Manipulation');
        curEl.textContent = newEl.textContent;
      }

      // Updates Changed ATTRIBUTE
      if (!newEl.isEqualNode(curEl)) {
        // console.log(Array.from(newEl.attributes));
        Array.from(newEl.attributes).forEach((attr) => {
          if (attr !== curEl) {
            curEl.setAttribute(attr.name, attr.value);
          }
        });
      }
    });
  }

  _clear() {
    // console.log(this._parentElement);
    this._parentElement.innerHTML = '';
  }

  renderSpinner() {
    const markup = `
          <div class="spinner">
            <svg>
              <use href="${icons}#icon-loader"></use>
            </svg>
          </div>
        `;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  renderError(message = this._errorMessage) {
    const markup = `
      <div class="error">
        <div>
          <svg>
            <use href="${icons}#icon-alert-triangle"></use>
          </svg>
        </div>
        <p>${message}</p>
      </div>
    `;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  renderMessage(message = this._message) {
    const markup = `
      <div class="message">
        <div>
          <svg>
            <use href="${icons}#icon-smile"></use>
          </svg>
        </div>
        <p>${message}</p>
      </div>
    `;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }
}
