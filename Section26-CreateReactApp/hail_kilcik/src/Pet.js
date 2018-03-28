import React, { Component } from 'react';
import './Pet.css';
import HobbyList from './HobbyList';

class Pet extends Component {
    render() {
        return (
            <div className="card">
                <h2> Kılçık </h2>
                <img src="kilcik_the_queen.jpg"
                    alt="Kılçık" />
                <h3>Hobbies:</h3>
                <HobbyList />
            </div>
        );
    }
}

export default Pet;