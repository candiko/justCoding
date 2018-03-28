import React, { Component } from 'react';

class HobbyList extends Component {
    render() {
        const hobbies = ['Sleeping', 'Throwin objects from top of fridge', 'Biting toes'];
        return (
            <ul>
                {hobbies.map((h, i) => {
                    return <li key={i}>{h}</li>
                })}
            </ul>
        );
    }
}

export default HobbyList;