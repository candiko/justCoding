import React, {Component} from 'react';
import './RecipeCard.css';
import PropTypes from 'prop-types';

class RecipeCard extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
    instructions: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    onDelete: PropTypes.func.isRequired,
  }
    
  render() {
    const {title, ingredients, instructions, img, id, onDelete} = this.props;
    return(
      <div className="recipe-card">
        <img
          src={img}
          alt={title}
        />
        <h2>{title}</h2>
        <h4>Ingredients</h4>
        <ul>
          {ingredients.map((i, index) => (
            <li key={index}>{i}</li>
          ))}
        </ul>
        <h4>Directions</h4>
        <ul>
          <li>{instructions}</li>
        </ul>
        <button onClick={() => onDelete(id)}>DELETE</button>
      </div>
    );
  }
}

export default RecipeCard;