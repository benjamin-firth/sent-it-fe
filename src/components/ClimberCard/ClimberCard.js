import React from 'react';
import styled from 'styled-components';
import profilePic from '../../images/no-profile-img.png';

const ClimberCard = () => {

  return (
    <StyledClimberCard>
      <StyledClimberCardTitle>
        <StyledProfileImageContainer>
          <img src={profilePic} alt='Profile picture'></img>
        </StyledProfileImageContainer>
        <h3>Whitney Burton</h3>
      </StyledClimberCardTitle>
      <p>Location: Golden</p>
      <p>Total Climbs: 40</p>
      <p>Recent Sends: 3 </p>
    </StyledClimberCard>
  )
}

const StyledClimberCard = styled.article`
  background-color: #101628;
  border: 1px solid #000;
  border-radius: 5px;
  color: #FFF;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  padding: 15px;
  width: 220px;
`;

const StyledClimberCardTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const StyledProfileImageContainer = styled.section`
  border: 1px solid #CAD1EE;
  border-radius: 10px;
  height: 8vh;

  img {
    height: 100%;
  }
`;

export default ClimberCard;