import React, { Component } from 'react';
import RecipeList from './RecipeList';
import Navbar from './Navbar';

class RecipeApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [
        {
          id: 1,
          title: 'Fried Cauliflowers',
          ingredients: ['1 head cauliflower, broken into small florets',
            '1 cup cracker crumbs',
            '1 egg'
          ],
          instructions: 'Place cauliflower into a pan of lightly salted boiling water. Cook for 5 to 8 minutes',
          img: 'img/fried_cauliflower.jpg'
        },
        {
          id: 2,
          title: 'Hamburger',
          ingredients: ['2 pounds ground beef',
            '2 tablespoons Worcestershire sauce',
            '1 egg, beaten'
          ],
          instructions: 'Preheat grill for high heat. In a large bowl, mix the ground beef, egg, bread crumbs, evaporated milk, Worcestershire sauce, cayenne pepper, and garlic using your hands. Form the mixture into 8 hamburger patties.',
          img: 'img/hamburger.jpg'
        },
        {
          id: 3,
          title: 'Noodles',
          ingredients: ['7 ounces steam fried Chinese noodles',
            '6 slices ginger',
            '2 stalks green onions(cut in 1 - inch strips)'
          ],
          instructions: 'Put noodles in 4 cups of salted boiling water. Cook 1-2 minutes. Stir occasionally.',
          img: 'img/noodles.jpg'
        },
      ],
      nextRecipeId: 3,
    }
  }

  render() {
    return (
      <div className="recipe-app">
        <Navbar />
        <div className="recipe-cards">
          <RecipeList recipes={this.state.recipes} />          
        </div>        
      </div>
    );
  }
}

export default RecipeApp;
