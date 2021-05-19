import { expect } from 'chai';
import RecipeRepository from '../src/classes/RecipeRepository';
import Recipe from '../src/classes/Recipe';

describe('RecipeRepository', () => {
  let recipe, recipeRepo;

  beforeEach(() => {
    recipe = new Recipe(678353, "https://spoonacular.com/recipeImages/678353-556x370.jpg", [{ "instruction": "Season the pork chops with salt and pepper", "number": 1}], "Maple Dijon Apple Cider Grilled Pork Chops", "starter");
    recipeRepo = new RecipeRepository(recipe);
  });

  it('Should be a function', () => {
    expect(RecipeRepository).to.be.a('function');
  });

  it('should be an instance of RecipeRepository', () => {
    expect(recipeRepo).to.be.an.instanceof(RecipeRepository);
  });

  it('should be able to take in recipe data', () => {
    expect(recipeRepo.recipeData).to.equal(recipe);
  });

  // it('should filter recipes by tag name', () => {
  //   let recipeTags = recipe.filterRecipesByTag('starter');
  //   expect(recipeTags.length).to.equal(0);
  // });
  // it.skip('should filter by ingredient'), () => {
  //   // expect(recipeRepository.filterRecipesByIngredient(______)).to.equal(______);
  // }
  // it.skip('should filter by name'), () => {
  //   // expect(recipeRepository.filterRecipesByName(______)).to.equal(______);
  // }
});
