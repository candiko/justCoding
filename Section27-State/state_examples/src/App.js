import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      instructors: [
        {
          name: 'Tim',
          hobbies: ['sailing', 'react']
        },
        {
          name: 'Matt',
          hobbies: ['math', 'd3']
        },
        {
          name: 'Colt',
          hobbies: ['css', 'hiking']
        },
        {
          name: 'Elie',
          hobbies: ['music', 'es2015']
        }
      ]
    };

    setTimeout(() => {
      const instIndex = Math.floor(Math.random() * this.state.instructors.length);
      const hobbyIndex = Math.floor(Math.random() * this.state.instructors[instIndex].length);
      const instructors = this.state.instructors.map((inst, i) => {
        if (i === instIndex) {
          const hobbies = [...inst.hobbies];
          hobbies.splice(hobbyIndex, 1);
          return {
            ...inst,
            hobbies
          }
        }
        else {
          return inst;
        }
      });
      this.setState({instructors});
    }, 5000)
  }
  render() {
    const instructors = this.state.instructors.map((instructor, index) => (
      <li key={index}>
        <h3>{instructor.name}</h3>
        <h4>Hobbies: {instructor.hobbies.join(", ")}</h4>
      </li>
    ));
    return (
      <div className="App">
        <ul>
          {instructors}
        </ul>
      </div>
    );
  }
}






// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {favColor: 'red'};

//     setTimeout(() => {
//       this.setState({favColor: 'blue'})
//     }, 3000);
//   }

//   render() {
//     return (
//       <div>
//         My favorite color:
//         {this.state.favColor}
//       </div>
//     );
//   }
// }

export default App;
