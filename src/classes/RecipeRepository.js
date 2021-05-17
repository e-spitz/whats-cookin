class RecipeRepository {
  constructor(recipeData) {
    this.recipeData = recipeData;
  }

  // filterRecipesByTag(recipeTag) {
  //   // hide all recipes that don't have a certain tag
  //     // tags are here: this.recipeData.tags.tagName
  //   if (
  //     // this.filterRecipesByTag() is called is called via a tagButton being clicked
  //   ) {
  //     hideRecipesWithoutTag(recipeTag);
  //     // ^^ function in dom manipulation file: scripts.js
  //       // this function will hide recipes based on a hide function in scripts.js
  //   }
  // }

  // filterRecipesByIngredient(recipeIngredient) {
  //   // hide all recipes that don't have a certain ingredient
  //     // ingredients are here: this.recipeData.tags.ingredients
  //   if (
  //     // this.filterRecipesByIngredient() is called via an ingredientButton being clicked
  //   ) {
  //     hideRecipesWithoutIngredient(recipeIngredient);
  //   // ^^ function in dom manipulation file: scripts.js
  //     // this function will hide recipes based on a hide function in scripts.js
  // }

//   filterRecipesByName(recipeName) {
//     // hide all recipes that don't have a certain name
//       // ingredients are here: this.recipeData.tags.name
//     if (
//       // this.filterRecipesByName() is called via a nameButton being clicked
//     ) {
//       hideRecipesWithoutName(recipeName);
//   }
// }

export default RecipeRepository;