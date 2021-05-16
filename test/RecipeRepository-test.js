import { expect } from 'chai';
import RecipeRepository from '../src/classes/RecipeRepository';
import recipeData from '../data/recipes-test-data';


describe('RecipeRepository', () => {
  let recipeRepository;

  beforeEach(() => {
    recipeRepository = new RecipeRepository(recipeData);
  });

  it('Should be a function', () => {
    expect(RecipeRepository).to.be.a('function');
  });

  it('should be an instance of RecipeRepository'), () => {
    expect(recipeRepository).to.be.an.instanceof(RecipeRepository);
  });

})
