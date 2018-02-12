import React, { Component } from 'react';
import RecipeList from './RecipeList';
import RecipeInput from './RecipeInput';
import Navbar from './Navbar';

class RecipeApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [
        {
          id: 0,
          title: 'Fried Cauliflowers',
          ingredients: ['1 head cauliflower, broken into small florets',
            '1 cup cracker crumbs',
            '1 egg'
          ],
          instructions: 'Place cauliflower into a pan of lightly salted boiling water. Cook for 5 to 8 minutes',
          img: 'img/fried_cauliflower.jpg'
        },
        {
          id: 1,
          title: 'Hamburger',
          ingredients: ['2 pounds ground beef',
            '2 tablespoons Worcestershire sauce',
            '1 egg, beaten'
          ],
          instructions: 'Preheat grill for high heat. In a large bowl, mix the ground beef, egg, bread crumbs, evaporated milk, Worcestershire sauce, cayenne pepper, and garlic using your hands. Form the mixture into 8 hamburger patties.',
          img: 'img/hamburger.jpg'
        },
        {
          id: 2,
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
      showForm: false,
    }
    this.handleSave = this.handleSave.bind(this);
  }

  handleSave(recipe) {
    this.setState((prevState, props) => {
      const newRecipe = {...recipe, id:this.state.nextRecipeId};
      return {
        nextRecipeId: prevState.nextRecipeId + 1,
        recipes: [...this.state.recipes, newRecipe],
        showForm: false,
      }
    });
  }

  render() {
    const {showForm} = this.state;
    return (
      <div className="recipe-app">
        <Navbar onNewRecipe={() => this.setState({showForm: true})} />
        {showForm ?
          <RecipeInput
            onSave={this.handleSave}
            onClose={() => this.setState({showForm: false})}
          />
          : null}
        <div className="recipe-cards">
          <RecipeList recipes={this.state.recipes} />
        </div>
      </div>
    );
  }
}

export default RecipeApp;
