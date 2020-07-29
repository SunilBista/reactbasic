import React from "react";
import './cardList.css';

export const CardList = ({monsters}) => {
  return (
    <>
      <div className='cardList'>
      {monsters.map((monster) => (
          <h1 key={monster.id}> {monster.name} </h1>
        ))}
      </div>
    </>
  );
};
