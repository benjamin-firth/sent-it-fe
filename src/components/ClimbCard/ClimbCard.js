import React from 'react';

const ClimbCard = ({ name, type, grade, location, attempts, comments, pics }) => {
  return (
    <section>
      <h3>{name}</h3>
      <p>{type}</p>
      <p>{grade}</p>
      <p>{location}</p>
      <p>{attempts}</p>
      <p>{comments}</p>
      <p>{pics}</p>
    </section>
  )
}

export default ClimbCard;