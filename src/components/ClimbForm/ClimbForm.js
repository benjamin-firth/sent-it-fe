import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '../AppContext/AppContext';
import bouldererPic from '../../images/bouldererpic.jpg';

const ClimbForm = ({ hideForm }) => {
  const { saveClimb } = useContext(AppContext);
  const [climbName, addClimbName] = useState('');
  const [climbType, addClimbType] = useState('');
  const [climbGrade, addClimbGrade] = useState('');
  const [climbLocation, addClimbLocation] = useState('');
  const [climbAttempts, addClimbAttempts] = useState('');
  const [climbComments, addClimbComments] = useState('');
  const [climbPictures, addClimbPictures] = useState('');
  // const [formFilled, setFormFilled] = useState(false);

  const submitHandler = () => {
    if (climbName === '' || climbType === '' || climbGrade === '') {
      console.log('not today')
    } else {
      const newClimb = {
        name: climbName,
        type: climbType,
        grade: climbGrade,
        location: climbLocation,
        attempts: climbAttempts,
        comments: climbComments,
        pics: climbPictures
      };

      saveClimb(newClimb);
      hideForm();
    };
  };

  return (
    <StyledClimbFormContainer>
      <h2>Add New Send</h2>
      <StyledClimbForm>
        <label>Name</label>
        <input onChange={(e) => addClimbName(e.target.value)} />
        <label>Type</label>
        <input onChange={(e) => addClimbType(e.target.value)} />
        <label>Grade</label>
        <input onChange={(e) => addClimbGrade(e.target.value)} />
        <label>Location</label>
        <input onChange={(e) => addClimbLocation(e.target.value)} />
        <label>Attempts</label>
        <input onChange={(e) => addClimbAttempts(e.target.value)} />
        <label>Comments</label>
        <input onChange={(e) => addClimbComments(e.target.value)} />
        <label>Pictures</label>
        <input onChange={(e) => addClimbPictures(e.target.value)} />
        <button type='button' onClick={submitHandler}>Add Climb</button>
      </StyledClimbForm>
    </StyledClimbFormContainer>
  );
};

const StyledClimbFormContainer = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 20px 0px;
  width: 100%;

  h2 {
    font-size: 1.7em;
  }
`;

const StyledClimbForm = styled.form`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  width: 80%;

  label {
    font-size: 1.2em;
  }

  input {
    border-radius: 5px;
    height: 2em;
    margin-bottom: 15px;
    margin-top: 5px;
    width: 100%;
  }

  button {
    background-color: #CAD1EE;
    color: #14192C;
    cursor: pointer;
    border-radius: 5px;
    font-size: 1.5em;
    padding: 1px 0px;
    width: 60%;
  }

  button:hover {
    background-color: #101628;
    border: 1px solid #CAD1EE;
    color: #FFF;
  }

  button:active {
    background-color: #101628;
    border: 1px solid #CAD1EE;
    color: #FFF;
    transform: scale(1.1);
    transition: .1s;
  }
`;

export default ClimbForm;