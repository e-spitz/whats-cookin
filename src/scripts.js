import './styles.css';
import apiCalls from './apiCalls';

// ***** QUERY SELECTORS *****

// NAV BARS

const homeNavBar = document.querySelector('#homeNavBar');
const allRecipeNavBar = document.querySelector('#allRecipeNavBar');
const favoritesNavBar = document.querySelector('#favoritesNavBar');
const menuNavBar = document.querySelector('#menuNavBar');
const recipeNavBar = document.querySelector('#recipeNavBar');

// ***** EVENT LISTENERS *****

// ***** FUNCTIONS *****

// SHOW & HIDE HELPER FUNCTIONS

function hide(elements) {
  elements.forEach(element => {
    element.classList.add('hidden');
  });
}

function show(elements) {
  elements.forEach(element => {
    element.classList.remove('hidden');
  });
}

// SHOW & HIDE ITEMS

function showHomeDisplay() {
  show([homeNavBar]);
  hide([allRecipeNavBar, favoritesNavBar, menuNavBar, recipeNavBar]);
}

function showAllRecipesDisplay() {
  show([allRecipeNavBar]);
  hide([homeNavBar, favoritesNavBar, menuNavBar, recipeNavBar]);
}

function showFavoritesDisplay() {
  show([favoritesNavBar]);
  hide([homeNavBar, allRecipeNavBar, menuNavBar, recipeNavBar]);
}

function showMenuDisplay() {
  show([menuNavBar]);
  hide([homeNavBar, allRecipeNavBar, favoritesNavBar, recipeNavBar]);
}

function showRecipeDisplay() {
  show([recipeNavBar]);
  hide([homeNavBar, allRecipeNavBar, favoritesNavBar, menuNavBar]);
}

console.log('Hello world');
