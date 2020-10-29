import React, { useState } from 'react';
import styled from 'styled-components';
import ClimbContainer from '../ClimbContainer/ClimbContainer';
import ClimbForm from '../ClimbForm/ClimbForm';
import bouldererPic from '../../images/bouldererpic.jpg';

const LowerMain = () => {
  const [showAddForm, setShowAddForm] = useState(false);

  const handleClick = () => {
    setShowAddForm(!showAddForm);
  };

  return (
    <StyledLowerBackground>
      <StyledLowerMain>
        {showAddForm ?
          <>
            <StyledAddClimbButton type='button' onClick={handleClick}>Hide Form</StyledAddClimbButton>
            <ClimbForm hideForm={handleClick} />
          </> :
          <>
            <h2>Recent Sends</h2>
            <StyledAddClimbButton type='button' onClick={handleClick}>Add Climb</StyledAddClimbButton>
            <ClimbContainer />
          </>
        }   
      </StyledLowerMain>
    </StyledLowerBackground>
  );
};

const StyledLowerBackground = styled.div`
  background: url(${bouldererPic}) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`;

const StyledLowerMain = styled.section`
align-items: center;
background-color: rgba(202, 209, 238,0.6);
display: flex;
flex-direction: column;
height: 88vh;
padding-top: 20px;

  h2 {
    font-size: 1.7em;
  }
`;

const StyledAddClimbButton = styled.button`
  background-color: #CAD1EE;
  border-radius: 10px;
  color: #14192C;
  cursor: pointer;
  font-size: 1.2em;
  padding: 6px;
  margin: 10px 0px;
  width: 60%;

  &:hover {
    background-color: #101628;
    border: 1px solid #CAD1EE;
    color: #FFF;
  }

  &:active {
    background-color: #101628;
    border: 1px solid #CAD1EE;
    color: #FFF;
    transform: scale(1.1);
    transition: .1s;
  }
`;

export default LowerMain;