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
            <button type='button' onClick={handleClick}>Hide Form</button>
            <ClimbForm />
          </> :
          <>
            <button type='button' onClick={handleClick}>Add Climb</button>
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
  height: 88vh;
  background-color: rgba(202, 209, 238,0.6);
`;

export default LowerMain;