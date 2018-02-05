import React, { Component } from 'react';
import RecipeCard from './RecipeCard';
import Navbar from './Navbar';
import './RecipeApp.css';

class RecipeApp extends Component {
  render() {
    return (
      <div className="recipe-app">
        <Navbar />
        <div className="recipe-cards">
          <RecipeCard
                url="img/hamburger.jpg"
                name="Hamburger" />
        </div>        
      </div>
    );
  }
}

export default RecipeApp;
