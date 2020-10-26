import React from 'react';

const Welcome = ({ login }) => {
  const clickHandler = () => {
    login();
  };

  return (
    <section>
      <h1>Welcome!</h1>
      <button type='button' onClick={clickHandler}>LOGIN</button>
    </section>
  )
}

export default Welcome;