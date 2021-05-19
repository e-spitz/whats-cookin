import { expect } from 'chai';
import Recipe from '../src/classes/Recipe';

describe('Recipe', () => {
  it('Should be a function', () => {
    expect(Recipe).to.be.a('function');
  });

  it.skip('should be an instance of Recipe'), () => {
    expect(recipe).to.be.an.instanceof(Recipe);
  }
  it.skip('should determine ingredients'), () => {
    // expect(recipe.determineIngredients().to.equal(______);
  }
  it.skip('should calculate ingredients by cost'), () => {
    // expect(calculateIngredientCost().to.equal(______);
  }
  it.skip('should return instructions'), () => {
    // expect(returnInstructions().to.equal(______);
  }  
})
