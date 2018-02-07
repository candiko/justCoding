import React, { Component } from 'react';
import RecipeList from './RecipeList';
import Navbar from './Navbar';

class RecipeApp extends Component {
  

  render() {
    return (
      <div className="recipe-app">
        <Navbar />
        <div className="recipe-cards">
          <RecipeList />          
        </div>        
      </div>
    );
  }
}

export default RecipeApp;
