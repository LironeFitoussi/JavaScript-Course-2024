// Model View Controller (MVC) Architecture
// Model Import
import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import bookmarksView from './views/bookmarksView.js';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';
import addRecipeView from './views/addRecipeView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
// import { async } from 'regenerator-runtime/runtime';

if (module.hot) {
  module.hot.accept();
}

///////////////////////////////////////

// Recipes Controller
const controlRecipes = async function () {
  try {
    // 1. Get recipe id from URL
    const id = window.location.hash.slice(1);
    if (!id) return;

    // 2. Loading spinner
    recipeView.renderSpinner();

    // 2. Update results view to mark selected search result
    resultsView.update(model.loadSearchResultsPage());
    bookmarksView.update(model.state.bookmarks);

    // 3. Loading recipe
    await model.loadRecipe(id);
    const { recipe } = model.state;

    // 4. Rendering recipe
    recipeView.render(recipe);

    //// TESTING
    // controlServings(8);
  } catch (err) {
    // alert(err);
    console.error(err);
    recipeView.renderError();
  }
};

// Search Controller
const controlSearchResults = async function () {
  try {
    resultsView.renderSpinner();

    // 1. Get search query
    const query = searchView.getQuery();
    if (!query) return;

    // 2. Loading search results
    await model.loadSearchResults(query);
    //? await model.loadSearchResults('pizza');

    // 3. Rendering search results
    //? console.log(model.state.search.results);
    // console.log(model.loadSearchResultsPage(1));

    resultsView.render(model.loadSearchResultsPage());

    // 4. Rendering pagination buttons
    paginationView.render(model.state.search);
  } catch (err) {
    console.error(err);
  }
};

// Pagination Controller
const controlPagination = function (goToPage) {
  // 1. Rendering NEW results
  resultsView.render(model.loadSearchResultsPage(goToPage));

  // 2. Rendering NEW pagination buttons
  paginationView.render(model.state.search);
};

// Serving Controller
const controlServings = function (newServings) {
  // Update the recipe servings (in state)
  model.updateServings(newServings);

  // Update the recipe view
  // recipeView.render(model.state.recipe);
  recipeView.update(model.state.recipe);
};

// ADD/REMOVE Bookmark Controller
const controlAddBookmark = function () {
  // Add or remove bookmark
  if (!model.state.recipe.bookmarked) model.addBookmark(model.state.recipe);
  else model.deleteBookmark(model.state.recipe.id);

  // Update recipe view
  recipeView.update(model.state.recipe);

  // Render bookmarks
  bookmarksView.render(model.state.bookmarks);

  // console.log(model.state.bookmarks);
  // console.log(model.state.recipe);
};

// Control Bookmarks on Page Load
const controlBookmarks = function () {
  bookmarksView.render(model.state.bookmarks);
};

// Control Add Recipe Form
const controlAddRecipe = async function (newRecipe) {
  console.log(newRecipe);
};

(function () {
  bookmarksView.addHandlerRender(controlBookmarks);
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerUpdateServings(controlServings);
  recipeView.addHandlerAddBookmark(controlAddBookmark);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
  addRecipeView.addHandlerUpload(controlAddRecipe);
})();
