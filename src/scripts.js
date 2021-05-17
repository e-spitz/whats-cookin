import './styles.css';
import apiCalls from './apiCalls';

// ***** QUERY SELECTORS *****

// NAV BARS

const homeNavBar = document.querySelector('#homeNavBar');
const allRecipeNavBar = document.querySelector('#allRecipeNavBar');
const favoritesNavBar = document.querySelector('#favoritesNavBar');
const menuNavBar = document.querySelector('#menuNavBar');
const recipeNavBar = document.querySelector('#recipeNavBar');

// TABS

const homeTab = document.querySelector('#homeTab');
const browseTab = document.querySelector('#browseTab');
const favoritesTab = document.querySelector('#favoritesTab');
const menuTab = document.querySelector('#menuTab');

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
  show([homeNavBar, browseTab, favoritesTab, menuTab]);
  hide([allRecipeNavBar, favoritesNavBar, menuNavBar, recipeNavBar, homeTab]);
}

function showAllRecipesDisplay() {
  show([allRecipeNavBar, homeTab, favoritesTab, menuTab]);
  hide([homeNavBar, favoritesNavBar, menuNavBar, recipeNavBar, browseTab]);
}

function showFavoritesDisplay() {
  show([favoritesNavBar, homeTab, browseTab, menuTab]);
  hide([homeNavBar, allRecipeNavBar, menuNavBar, recipeNavBar, favoritesTab]);
}

function showMenuDisplay() {
  show([menuNavBar, homeTab, browseTab, favoritesTab]);
  hide([homeNavBar, allRecipeNavBar, favoritesNavBar, recipeNavBar, menuTab]);
}

function showRecipeDisplay() {
  show([recipeNavBar, homeTab, browseTab, favoritesTab, menuTab]);
  hide([homeNavBar, allRecipeNavBar, favoritesNavBar, menuNavBar]);
}

console.log('Hello world');
