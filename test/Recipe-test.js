import { expect } from 'chai';
import Recipe from '../src/classes/Recipe';

describe('Recipe', () => {
  let recipe1;

  beforeEach(() => {
    recipe1 = new Recipe(678353, "https://spoonacular.com/recipeImages/678353-556x370.jpg", [{ "instruction": "Season the pork chops with salt and pepper", "number": 1}], "Maple Dijon Apple Cider Grilled Pork Chops", "starter");
  });

  it('Should be a function', () => {
    expect(Recipe).to.be.a('function');
  });

  it('should be an instance of Recipe', () => {
    expect(recipe1).to.be.an.instanceof(Recipe);
  });
  // 
  // it('should have an id', () => {
  //   expect(recipe1.id).to.equal(678353);
  // });

  it.skip('should determine ingredients', () => {
    // expect(recipe.determineIngredients().to.equal(______);
  });
  it.skip('should calculate ingredients by cost', () => {
    // expect(calculateIngredientCost().to.equal(______);
  });
  it.skip('should return instructions', () => {
    // expect(returnInstructions().to.equal(______);
  });
})
