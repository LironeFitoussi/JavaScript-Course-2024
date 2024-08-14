// Model View Controller (MVC) Architecture
// Model Import
import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

// const recipeContainer = document.querySelector('.recipe');

///////////////////////////////////////

// Controller
const controlRecipes = async function () {
  try {
    // 1. Loading spinner
    recipeView.renderSpinner();

    // 2. Get recipe id from URL
    const id = window.location.hash.slice(1);
    if (!id) return;

    // 3. Loading recipe
    await model.loadRecipe(id);
    const { recipe } = model.state;

    // 4. Rendering recipe
    recipeView.render(recipe);
  } catch (err) {
    // alert(err);
    // console.error(err);
    recipeView.renderError();
  }
};

// Search Controller
const controlSearchResults = async function () {
  try {
    // 1. Get search query
    const query = searchView.getQuery();
    if (!query) return;

    // 2. Loading search results
    await model.loadSearchResults(query);
    //? await model.loadSearchResults('pizza');

    // 3. Rendering search results
    console.log(model.state.search.results);
  } catch (err) {
    console.error(err);
  }
};

// controlSearchResults();

(function () {
  recipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchResults);
})();
