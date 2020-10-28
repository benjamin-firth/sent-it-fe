import React from 'react';
import styled from 'styled-components';

const ClimbCard = ({ climb }) => {
  const {
    name, 
    grade,
    location,
    attempts,
    comments,
    pics
  } = climb;

  return (
    <StyledClimbCard>
      <StyledCardTitle>
        <h3>{name}</h3>
        <p>{grade}</p>
      </StyledCardTitle>
      <p>Location: {location}</p>
      <p>Attempts: {attempts}</p>
      <p>{comments}</p>
      <p>{pics}</p>
    </StyledClimbCard>
  );
};

const StyledClimbCard = styled.article`
  border: 1px solid #000;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  padding: 15px;
  width: 220px;
`;

const StyledCardTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export default ClimbCard;