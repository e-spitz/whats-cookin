import { expect } from 'chai';
import Ingredient from '../src/classes/Ingredient';

describe('Ingredient', () => {
  let ingredient;

  beforeEach(() => {
    ingredient = new Ingredient({
      "id": 20081,
      "quantity": {
        "amount": 1.5,
        "unit": "c"
      }
    });
  });

  it('should be a function', () => {
    expect(Ingredient).to.be.a('function');
  });

  it('should be an instance of an Ingredient', () => {
    expect(ingredient).to.be.an.instanceof(Ingredient);
  });

  it('should have an id', () => {
    expect(ingredient.id).to.equal(20081);
  });
});
