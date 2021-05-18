// import { expect } from 'chai';
// import RecipeRepository from '../src/classes/RecipeRepository';
// import recipeTestData from '../src/data/recipes-test-data';
// import ingredientTestData from '../src/data/ingredients-test-data';
// import recipe from '../src/classes/Recipe';
// import ingredient from '../src/classes/Ingredient';



describe('RecipeRepository', () => {
  let recipeRepository;

  // beforeEach(() => {
  //   recipeRepository = new RecipeRepository(recipeTestData);
  // });

  it.skip('Should be a function', () => {
    expect(RecipeRepository).to.be.a('function');
  });

  it.skip('should be an instance of RecipeRepository'), () => {
    expect(recipeRepository).to.be.an.instanceof(RecipeRepository);
  }
  it.skip('should filter by tag'), () => {
    // expect(recipeRepository.filterRecipesByTag(______)).to.equal(______);
  }  
  it.skip('should filter by ingredient'), () => {
    // expect(recipeRepository.filterRecipesByIngredient(______)).to.equal(______);
  }
  it.skip('should filter by name'), () => {
    // expect(recipeRepository.filterRecipesByName(______)).to.equal(______);
  }  
})
