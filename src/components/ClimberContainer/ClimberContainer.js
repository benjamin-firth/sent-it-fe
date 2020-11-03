import React from 'react';
import styled from 'styled-components';
import ClimberCard from '../ClimberCard/ClimberCard';

const ClimberContainer = () => {

  return (
    <StyledClimberMain>
      <h2>Climbers Near You</h2>
      <StyledClimberWrapper>
        <ClimberCard />
        <ClimberCard />
        <ClimberCard />
        <ClimberCard />
        <ClimberCard />
        <ClimberCard />
      </StyledClimberWrapper>
    </StyledClimberMain>
  );
};

const StyledClimberMain = styled.div`
  h2 {
    font-size: 1.7em;
  }
`;

const StyledClimberWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export default ClimberContainer;