import React, { useState } from 'react';
import styled from 'styled-components';
import ClimbContainer from '../ClimbContainer/ClimbContainer';
import ClimbForm from '../ClimbForm/ClimbForm';

const LowerMain = () => {
  const [showAddForm, setShowAddForm] = useState(false);

  const handleClick = () => {
    setShowAddForm(!showAddForm);
  };

  return (
    <section>
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
    </section>
  );
};

export default LowerMain;