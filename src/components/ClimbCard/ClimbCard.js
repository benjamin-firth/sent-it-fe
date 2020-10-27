import React from 'react';

const ClimbCard = ({ climb }) => {
  const {
    name, 
    type,
    grade,
    location,
    attempts,
    comments,
    pics
  } = climb;

  return (
    <article>
      <h3>{name}</h3>
      <p>{type}</p>
      <p>{grade}</p>
      <p>{location}</p>
      <p>{attempts}</p>
      <p>{comments}</p>
      <p>{pics}</p>
    </article>
  )
}

export default ClimbCard;