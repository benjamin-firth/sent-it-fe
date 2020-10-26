import React from 'react';

const ClimbCard = ({ climbName, climbType, climbGrade, climbLocation, climbAttempts, climbComments, climbPictures }) => {
  return (
    <section>
      <h3>{climbName}</h3>
      <p>{climbType}</p>
      <p>{climbGrade}</p>
      <p>{climbLocation}</p>
      <p>{climbAttempts}</p>
      <p>{climbComments}</p>
      <p>{climbPictures}</p>
    </section>
  )
}

export default ClimbCard;