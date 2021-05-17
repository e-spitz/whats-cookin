class Recipe {
  constructor() {
    this.id = id;
    this.image = image;
    this.ingredients = ingredients;
    this.instructions = instructions;
    this.name = name;
    this.tags = tags;
  }

  // determineIngredients(recipeID) {
  // // there needs to be a lot but, but this should be the last line
  // return RecipeRepository.recipeData.ingredients
  // }

  // calculateIngredientCost(recipeID) {
  // // there needs to be a lot more here, but this is a start
  // const recipeID = _______.ingredientsData.id  <<<of a certain recipe>>>
  // // ^^ we need to reference that somewhere
  // const priceInCents = RecipeRepository.ingredients.price * _____.ingredientsData.estimatedCostInCents;
  // const priceInDollars = priceInCents / 10;
  // return priceInDollars;
  // }

//   returnInstructions(instructions) {
//   // there needs to be a lot more here, but this is a start
//   const instructions = _______.ingredientsData.instructions <<<of a certain recipe>>>
//   // ^^ we need to reference that somewhere
//   return instructions;
//   }
// }

module.exports = Recipe;
