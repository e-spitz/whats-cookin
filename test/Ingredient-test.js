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

  it('Should be a function', () => {
    expect(Ingredient).to.be.a('function');
  });
  
})
