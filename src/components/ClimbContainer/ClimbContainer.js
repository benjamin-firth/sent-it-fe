import React, { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '../AppContext/AppContext';
import ClimbCard from '../ClimbCard/ClimbCard';

const ClimbContainer = () => {
  const { climbs } = useContext(AppContext);

  return (
    <StyledClimbs>
      <StyledClimbScroll>
        { climbs.map(climb => (
          <ClimbCard key={climb.id} climb={climb} />
        )) }
      </StyledClimbScroll>
    </StyledClimbs>
  );
};

const StyledClimbs = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 65vh;
  padding: 10px;
`;

const StyledClimbScroll = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: scroll;
  scroll-behavior: smooth;
`;

export default ClimbContainer;