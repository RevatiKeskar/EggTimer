import React from 'react';

const SoftBoil = ({startTimer}) => {
  return (
    <div style={styles.container}>
      <h2>🥚 Soft Boil</h2>
      <img src="/images/fried-egg.png" alt="Soft-Egg"/>
      <p>Cook for 4–5 minutes</p>
      <button onClick={() => startTimer('Soft boil', 4)}>Start</button>
    </div>
  );
};

const styles = {
  container: {
    padding: '1rem',
    border: '2px solid salmon',
    borderRadius: '10px',
    width: '300px',
    height: '250px',
    backgroundColor: '#fff3f0',
    textAlign: 'center',
    color : 'black'
  },
  
};

export default SoftBoil;
