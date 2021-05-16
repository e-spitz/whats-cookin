import { expect } from 'chai';
import RecipeRepository from '../src/classes/RecipeRepository';
import recipeTestData from '../src/data/recipes-test-data';
// import ingredientTestData from '../src/data/ingredients-test-data';
// import recipe from '../src/classes/Recipe';
// import ingredient from '../src/classes/Ingredient';



describe('RecipeRepository', () => {
  let recipeRepository;

  beforeEach(() => {
    recipeRepository = new RecipeRepository(recipeTestData);
  });

  it('Should be a function', () => {
    expect(RecipeRepository).to.be.a('function');
  });

  it('should be an instance of RecipeRepository'), () => {
    expect(recipeRepository).to.be.an.instanceof(RecipeRepository);
  }

})
