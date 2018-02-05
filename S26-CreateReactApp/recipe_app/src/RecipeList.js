import React, {Component} from 'react';
import RecipeCard from './RecipeCard';
import './RecipeList.css';

class RecipeList extends Component {
    static defaultProps = {
        recipes: [
            {
                title: 'Fried Cauliflower'
                instructions: 'Place cauliflower into a pan of lightly salted boiling water. Cook for 5 to 8 minutes',
                ingredients: ['1 head cauliflower', '1 cup cracker crumbs', '1 egg', '4 cups oil for deep frying'],
                img: 'img/friend_cauliflower.jpg'
            },
            {
                title: 'Hamburger'
                instructions: 'In a large bowl, mix the ground beef, egg, bread crumbs, evaporated milk, Worcestershire sauce, cayenne pepper, and garlic using your hands.',
                ingredients: ['2 pounds ground beef', '2 tablespoons Worcestershire sauce', '1 egg, beaten', '2 cloves garlic, minced'],
                img: 'img/hamburger.jpg'
            },
            {
                title: 'Noodles'
                instructions: 'Put noodles in 4 cups of salted boiling water. Cook 1-2 minutes. Stir occasionally.',
                ingredients: ['7 ounces steam fried Chinese noodles', '6 slices ginger', '2 stalks green onions (cut in 1-inch strips)'],
                img: 'img/noodles.jpg'
            }
        ]
    }

    

    render() {
    }
}

export default RecipeList;