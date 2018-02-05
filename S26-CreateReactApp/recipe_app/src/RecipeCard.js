import React, {Component} from 'react';
import './RecipeCard.css';

class RecipeCard extends Component {
    render() {
        return(
            <div className="recipe-card">
                <img
                    src={this.props.url}
                    alt={this.props.name}
                />
                <h2>{this.props.name}</h2>
                <h4>Ingredients</h4>
                <ul>
                    <li>Blah</li>
                </ul>
                <h4>Directions</h4>
                <ul>
                    <li>Blah</li>
                </ul>
            </div>
        );
    }
}

export default RecipeCard;