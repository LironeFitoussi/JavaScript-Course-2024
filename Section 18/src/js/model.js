import { async } from 'regenerator-runtime';
import { API_URL, RES_PER_PAGE } from './config.js';
import { getJSON } from './helpers.js';

export const state = {
  recipe: {},
  search: {
    query: '',
    results: [],
    page: 1,
    resultsPerPage: RES_PER_PAGE,
  },
  bookmarks: [],
};

// Recipe Model
export const loadRecipe = async function (id) {
  try {
    const data = await getJSON(`${API_URL}${id}`);
    const { recipe } = data.data;

    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
    };

    // Check for bookmarks
    if (state.bookmarks.some((bookmark) => bookmark.id === id)) {
      state.recipe.bookmarked = true;
    }

    // console.log(state.recipe);
  } catch (err) {
    console.error(`${err} 💥💥💥💥💥`);
    throw err;
    // alert('Something went wrong' + error);
  }
};

// Search Model
export const loadSearchResults = async function (query) {
  state.search.query = query;

  // Reset page to 1
  state.search.page = 1;
  try {
    const data = await getJSON(`${API_URL}?search=${query}`);
    //? console.log(data);

    // Destructure data
    const { recipes } = data.data;
    //? console.log(recipes);

    // Store data to state
    state.search.results = recipes.map((rec) => {
      return {
        id: rec.id,
        title: rec.title,
        publisher: rec.publisher,
        image: rec.image_url,
      };
    });

    //? console.log(state.search);
  } catch (err) {
    console.error(`${err} 💥💥💥💥💥`);
    throw err;
  }
};

// Load Results Model
export const loadSearchResultsPage = function (page = state.search.page) {
  state.search.page = page;

  const start = (page - 1) * state.search.resultsPerPage;
  const end = page * state.search.resultsPerPage;
  return state.search.results.slice(start, end);
};

// Update Servings Model
export const updateServings = function (newServings) {
  //? console.log(state.recipe.ingredients);

  if (!state.recipe.ingredients) return;

  state.recipe.ingredients.forEach((ing) => {
    ing.quantity = (ing.quantity * newServings) / state.recipe.servings;
  });

  state.recipe.servings = newServings;
};

const persistBookmarks = function () {
  localStorage.setItem('bookmarks', JSON.stringify(state.bookmarks));
};

// Bookmark Model
export const addBookmark = function (recipe) {
  // Add bookmark to bookmarks array
  state.bookmarks.push(recipe);

  // Add bookmark to recipe
  state.recipe.bookmarked = true;

  // Persist bookmarks in localStorage
  persistBookmarks();
};

export const deleteBookmark = function (id) {
  // Delete bookmark from bookmarks array
  const index = state.bookmarks.findIndex((bkmrk) => bkmrk.id === id);
  state.bookmarks.splice(index, 1);

  // Delete bookmark from recipe
  state.recipe.bookmarked = false;

  // Persist bookmarks in localStorage
  persistBookmarks();
};

(function () {
  const storage = localStorage.getItem('bookmarks');
  if (storage) state.bookmarks = JSON.parse(storage);
})();
// console.log(state.bookmarks);
