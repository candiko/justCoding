import React, {Component} from 'react';
import './RecipeCard.css';
import PropTypes from 'prop-types';

class RecipeCard extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
    instructions: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired
  }
    
  render() {
    return(
      <div className="recipe-card">
        <img
          src={this.props.img}
          alt={this.props.title}
        />
        <h2>{this.props.title}</h2>
        <h4>Ingredients</h4>
        <ul>
          {this.props.ingredients.map((i, index) => (
            <li key={index}>{i}</li>
          ))}
        </ul>
        <h4>Directions</h4>
        <ul>
          <li>{this.props.instructions}</li>
        </ul>
      </div>
    );
  }
}

export default RecipeCard;