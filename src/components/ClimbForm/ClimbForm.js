import React, { useState } from 'react';

const ClimbForm = () => {
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
      console.log({
        climbName,
        climbType,
        climbGrade,
        climbLocation,
        climbAttempts,
        climbComments,
        climbPictures
      });
    };
  };

  return (
    <section>
      <h2>Add New Send</h2>
      <form>
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
      </form>
    </section>
  )
}

export default ClimbForm;