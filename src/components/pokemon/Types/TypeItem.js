import React from "react";

const TypeItem = ({ eleType: { type } }) => {
  
//  console.log(type)

  return (
    <div className={`mr-Sides-1 ${type.name}`}>
      <p className='space-between pokeType'>
        <strong>
          {type.name.charAt(0).toUpperCase() + type.name.slice(1)}
        </strong>
      </p>
    </div>
  );
};

export default TypeItem;
