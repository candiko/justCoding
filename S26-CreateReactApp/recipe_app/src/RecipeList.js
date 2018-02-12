import React, {Component} from 'react';
import RecipeCard from './RecipeCard';
import PropTypes from 'prop-types';
import './RecipeList.css';

class RecipeList extends Component {
  static propTypes = {
    recipes: PropTypes.arrayOf(PropTypes.objectOf).isRequired
  }
  
  render() {
    const recipes = this.props.recipes.map((r, index) => (
      <RecipeCard key={r.id} {...r} />
    ));
    
    return (
      <div className="recipe-cards">
        {recipes}
      </div>
    )        
  }
}

export default RecipeList;