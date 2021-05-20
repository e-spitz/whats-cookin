import { expect } from 'chai';
import Ingredient from '../src/classes/Ingredient';

describe('Ingredient', () => {
  let ingredient;

  beforeEach(() => {
    ingredient = new Ingredient({
      "id": 20081,
      "name": "wheat flour",
      "estimatedCostInCents": 142
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

  it('should have the name of the ingredient', () => {
    expect(ingredient.name).to.equal('wheat flour');
  });

  it('should have an estimated cost in cents', () => {
    expect(ingredient.estimatedCostInCents).to.equal(142);
  });
});
