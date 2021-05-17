import './styles.css';
import apiCalls from './apiCalls';

// ***** QUERY SELECTORS *****

// NAV BARS

const homeNavBar = document.querySelector('#homeNavBar');
const allRecipeNavBar = document.querySelector('#allRecipeNavBar');
const favoritesNavBar = document.querySelector('#favoritesNavBar');
const menuRecipeNavBar = document.querySelector('#menuRecipeNavBar');
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

console.log('Hello world');
