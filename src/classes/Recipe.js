import { ingredientsData } from '../data/ingredients';
const ingData = ingredientsData;
import Ingredient from '../classes/Ingredient.js';

class Recipe {
  constructor(recipe) {
    this.id = recipe.id;
    this.name = recipe.name;
    this.image = recipe.image;
    this.ingredients = recipe.ingredients;
    this.instructions = recipe.instructions;
    this.tags = recipe.tags;
  }

  findIngredients() {
    const newIng = ingData.map(item => {
      return new Ingredient(item);
    });
    // console.log(newIng); creating new ingredient instances for all ingredients
    this.ingredients.forEach(ingredient => {
      let foundIng = (newIng.find(ing => ing.id === ingredient.id));
      // console.log(foundIng);
      ingredient.name = foundIng.name;
      ingredient.estimatedCostInCents = foundIng.estimatedCostInCents;
    });
  }

  getIngredientsNames() {
    this.findIngredients();
    let matchIng = this.ingredients.map(ingredient => {
      return ingredient.name;
    });
    // console.log(matchIng);
    return matchIng;
  }

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

export default Recipe;
