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
    this.ingredients.forEach(ingredient => {
      let foundIng = (newIng.find(ing => ing.id === ingredient.id));
      ingredient.name = foundIng.name;
      ingredient.estimatedCostInCents = foundIng.estimatedCostInCents;
    });
  }

  getIngredientsNames() {
    this.findIngredients();
    let matchIng = this.ingredients.map(ingredient => {
      return ingredient.name;
    });
    return matchIng;
  }

  getIngredientsCost() {
    this.findIngredients();
    const totalCost = this.ingredients.reduce((sum, item) => {
      sum += item.estimatedCostInCents * item.quantity.amount;
      return sum;
    }, 0);
      return `$${totalCost/100}`
  }

  getRecipeInstructions() {
    return this.instructions;
  }
}

export default Recipe;
