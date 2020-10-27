import React from 'react';
import styled from 'styled-components';
import ropedClimber from '../../images/ropeclimber.jpg';
import bouldererPic from '../../images/ropeclimber.jpg';

const Welcome = ({ login }) => {
  const clickHandler = () => {
    login();
  };

  return (
    <StyledBackground>
      <StyledWelcomeMain>
        <StyledWelcomeTitle>
          <h3>Welcome to</h3>
          <h1>SenderBeta</h1>
          <p>Record your sends and see what people near you are climbing.</p>
        </StyledWelcomeTitle>
        <StyledButtonContainer>
          <StyledLoginButton type='button' onClick={clickHandler}>LOGIN</StyledLoginButton>
          <StyledCreateButton type='button' onClick={clickHandler}>CREATE ACCOUNT</StyledCreateButton>
        </StyledButtonContainer>
      </StyledWelcomeMain>
    </StyledBackground>
  )
}

const StyledBackground = styled.div`
  background: url(${ropedClimber}) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`;

const StyledWelcomeMain = styled.section`
  align-items: center;
  // background-color: rgba(66,82,143,0.8);
  background-color: rgba(58, 68, 110,0.8);
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-around;
  padding: 0vh 10vw;
`;

const StyledWelcomeTitle = styled.div`
  align-items: center;
  color: #FFF;
  display: flex;
  flex-direction: column;
  padding-bottom: 40px;

  h3 {
    font-size: 1.2em;
  }

  h1 {
    font-size: 2.5em;
    margin-bottom: 15px;
    margin-top: 2px;
  }

  p {
    text-align: center;
  }
`;

const StyledButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100px;
  justify-content: flex-end;
  width: 80vw;
`;

const StyledLoginButton = styled.button`
  background-color: #CAD1EE;
  border-radius: 10px;
  color: #14192C;
  cursor: pointer;
  font-size: 1.2em;
  padding: 10px;
  width: 100%;

  &:hover {
    background-color: #101628;
    border: 1px solid #CAD1EE;
    color: #FFF;
  }
`;

const StyledCreateButton = styled.button`
  background-color: #101628;
  border: 1px solid #CAD1EE;
  border-radius: 10px;
  color: #FFF;
  cursor: pointer;
  font-size: 1.2em;
  margin-top: 15px;
  padding: 10px;

  &:hover {
    background-color: #CAD1EE;
    border: none;
    color: #14192C;
  }
`;

export default Welcome;