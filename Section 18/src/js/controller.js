// Model View Controller (MVC) Architecture
// Model Import
import * as model from './model.js';
import recipeView from './views/recipeView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

// const recipeContainer = document.querySelector('.recipe');

///////////////////////////////////////

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

(function () {
  recipeView.addHandlerRender(controlRecipes);
})();
