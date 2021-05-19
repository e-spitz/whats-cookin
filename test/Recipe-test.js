import { expect } from 'chai';
import Recipe from '../src/classes/Recipe';

describe('Recipe', () => {
  let recipe;

  beforeEach(() => {
    recipe = new Recipe({
      "id": 595736,
      "image": "https://spoonacular.com/recipeImages/595736-556x370.jpg",
      "ingredients": [
        {
          "id": 20081,
          "quantity": {
            "amount": 1.5,
            "unit": "c"
          }
        },
        {
          "id": 18372,
          "quantity": {
            "amount": 0.5,
            "unit": "tsp"
          }
        },
        {
          "id": 1123,
          "quantity": {
            "amount": 1,
            "unit": "large"
          }
        },
      ],
      "instructions": [
        {
          "instruction": "In a large mixing bowl, whisk together the dry ingredients (flour, pudding mix, soda and salt). Set aside.In a large mixing bowl of a stand mixer, cream butter for 30 seconds. Gradually add granulated sugar and brown sugar and cream until light and fluffy.",
          "number": 1
        },
        {
          "instruction": "Add egg and vanilla and mix until combined.",
          "number": 2
        },
        {
          "instruction": "Add dry ingredients and mix on low just until incorporated. Stir in chocolate chips.Scoop the dough into 1,5 tablespoon size balls and place on a plate or sheet. Cover with saran wrap and chill at least 2 hours or overnight.When ready to bake, preheat oven to 350 degrees.",
          "number": 3
        },
      ],
      "name": "Loaded Chocolate Chip Pudding Cookie Cups",
      "tags": [
        "antipasti",
        "starter",
        "snack",
        "appetizer",
        "antipasto",
        "hor d'oeuvre"
      ]
    });
  });
  
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
