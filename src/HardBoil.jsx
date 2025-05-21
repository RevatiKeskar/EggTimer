import React from 'react';

const HardBoil = ({startTimer}) => {
  return (
    <div style={styles.container}>
      <h2>🥚 Rock Hard</h2>
      <img src="/images/breakfast.png" alt="Hard-boil"  />
      <p>Cook for 9–10 minutes</p>
      <button onClick={()=>startTimer('Hard boil',9)}>Start</button>
    </div>
  );
};

const styles = {
  container: {
    padding: '1rem',
    border: '2px solid #444',
    borderRadius: '10px',
    width: '300px',
    height: '250px',
    backgroundColor: '#e8e8e8',
    textAlign: 'center',
    color : 'black'
  },
};

export default HardBoil;
