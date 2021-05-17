import './styles.css';
import apiCalls from './apiCalls';

// ***** QUERY SELECTORS *****

// NAV BARS

const homeNavBar = document.querySelector('#homeNavBar');
const browseNavBar = document.querySelector('#browseNavBar');
const favoritesNavBar = document.querySelector('#favoritesNavBar');
const menuNavBar = document.querySelector('#menuNavBar');
const recipeNavBar = document.querySelector('#recipeNavBar');

// TABS

const homeTabBtn = document.querySelector('#homeTabBtn');
const browseTabBtn = document.querySelector('#browseTabBtn');
const favoritesTabBtn = document.querySelector('#favoritesTabBtn');
const menuTabBtn = document.querySelector('#menuTabBtn');

// ***** EVENT LISTENERS *****

// TABS

homeTabBtn.addEventListener('click', showHomeDisplay);
browseTabBtn.addEventListener('click', showBrowseDisplay);
favoritesTabBtn.addEventListener('click', showFavoritesDisplay);
menuTabBtn.addEventListener('click', showMenuDisplay);

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
  show([homeNavBar, browseTabBtn, favoritesTabBtn, menuTabBtn]);
  hide([browseNavBar, favoritesNavBar, menuNavBar, recipeNavBar, homeTabBtn]);
}

function showBrowseDisplay() {
  show([browseNavBar, homeTabBtn, favoritesTabBtn, menuTabBtn]);
  hide([homeNavBar, favoritesNavBar, menuNavBar, recipeNavBar, browseTabBtn]);
}

function showFavoritesDisplay() {
  show([favoritesNavBar, homeTabBtn, browseTabBtn, menuTabBtn]);
  hide([homeNavBar, browseNavBar, menuNavBar, recipeNavBar, favoritesTabBtn]);
}

function showMenuDisplay() {
  show([menuNavBar, homeTabBtn, browseTabBtn, favoritesTabBtn]);
  hide([homeNavBar, browseNavBar, favoritesNavBar, recipeNavBar, menuTabBtn]);
}

function showRecipeDisplay() {
  show([recipeNavBar, homeTabBtn, browseTabBtn, favoritesTabBtn, menuTabBtn]);
  hide([homeNavBar, browseNavBar, favoritesNavBar, menuNavBar]);
}

console.log('Hello world');
