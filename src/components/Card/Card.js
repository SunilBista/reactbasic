import React from 'react';
import './card.css';

export const Card = ({monster}) => {
    return(
        <div className="cardContainer">
        <img alt="monster" src={`https://robohash.org/${monster.id}?set=set2`}/>
        <h1> {monster.name} </h1>
        <p>{monster.email}</p>
        </div>
    )
}