// import './styles.css';
// import apiCalls from './apiCalls';

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

// SECTIONS

const recipeSection = document.querySelector('#recipeSection');
const rectangleGallerySection = document.querySelector('#rectangleGallerySection');
const circleGallerySection = document.querySelector('#circleGallerySection');
const sortByCourseHeading = document.querySelector('sortByCourseHeading');

// IMAGES

// categories

const appetizerImg = document.querySelector('#appetizerImg');
const breakfastImg = document.querySelector('#breakfastImg');
const lunchImg = document.querySelector('#lunchImg');
const dinnerImg = document.querySelector('#dinnerImg');
const dessertImg = document.querySelector('#dessertImg');
const sideImg = document.querySelector('#sideImg');

// ***** EVENT LISTENERS *****

// TABS

homeTabBtn.addEventListener('click', showHomeDisplay);
browseTabBtn.addEventListener('click', showBrowseDisplay);
favoritesTabBtn.addEventListener('click', showFavoritesDisplay);
menuTabBtn.addEventListener('click', showMenuDisplay);

// IMAGES

appetizerImg.addEventListener('click', showRectangleGalleryDisplay);
breakfastImg.addEventListener('click', showRectangleGalleryDisplay);
lunchImg.addEventListener('click', showRectangleGalleryDisplay);
dinnerImg.addEventListener('click', showRectangleGalleryDisplay);
dessertImg.addEventListener('click', showRectangleGalleryDisplay);
sideImg.addEventListener('click', showRectangleGalleryDisplay);

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
  show([homeNavBar, browseTabBtn, favoritesTabBtn, menuTabBtn, sortByCourseHeading, rectangleGallerySection, circleGallerySection]);
  hide([browseNavBar, favoritesNavBar, menuNavBar, recipeNavBar, homeTabBtn]);
}

function showBrowseDisplay() {
  show([browseNavBar, homeTabBtn, favoritesTabBtn, menuTabBtn, rectangleGallerySection]);
  hide([homeNavBar, favoritesNavBar, menuNavBar, recipeNavBar, browseTabBtn, sortByCourseHeading, circleGallerySection]);
}

function showFavoritesDisplay() {
  show([favoritesNavBar, homeTabBtn, browseTabBtn, menuTabBtn, rectangleGallerySection]);
  hide([homeNavBar, browseNavBar, menuNavBar, recipeNavBar, favoritesTabBtn, sortByCourseHeading, circleGallerySection]);
}

function showMenuDisplay() {
  show([menuNavBar, homeTabBtn, browseTabBtn, favoritesTabBtn, rectangleGallerySection]);
  hide([homeNavBar, browseNavBar, favoritesNavBar, recipeNavBar, menuTabBtn, sortByCourseHeading, circleGallerySection]);
}

function showRecipeDisplay() {
  show([recipeNavBar, homeTabBtn, browseTabBtn, favoritesTabBtn, menuTabBtn, recipeSection]);
  hide([homeNavBar, browseNavBar, favoritesNavBar, menuNavBar, sortByCourseHeading, circleGallerySection, rectangleGallerySection]);
}

function showRectangleGalleryDisplay() {
  show([homeTabBtn, browseTabBtn, favoritesTabBtn, menuTabBtn, rectangleGallerySection]);
  hide([homeNavBar, browseNavBar, favoritesNavBar, menuNavBar, sortByCourseHeading, circleGallerySection, recipeSection]);
}

console.log('Hello world');
