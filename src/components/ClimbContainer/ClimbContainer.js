import React, { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '../AppContext/AppContext';
import ClimbCard from '../ClimbCard/ClimbCard';

const ClimbContainer = () => {
  const { climbs } = useContext(AppContext);

  return (
    <StyledClimbs>
      { climbs.map(climb => (
        <ClimbCard key={climb.id} climb={climb} />
      )) }
    </StyledClimbs>
  );
};

const StyledClimbs = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default ClimbContainer;