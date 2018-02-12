import React, {Component} from 'react';
import RecipeCard from './RecipeCard';
import PropTypes from 'prop-types';
import './RecipeList.css';

class RecipeList extends Component {
  static propTypes = {
    recipes: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
    onDelete: PropTypes.func.isRequired
  }
  
  render() {
    const {onDelete} = this.props;
    const recipes = this.props.recipes.map((r, index) => (
      <RecipeCard key={r.id} {...r} onDelete={onDelete} />
    ));
    
    return (
      <div className="recipe-cards">
        {recipes}
      </div>
    )        
  }
}

export default RecipeList;