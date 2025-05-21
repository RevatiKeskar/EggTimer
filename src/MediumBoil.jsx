import React from 'react';

const MediumBoil = ({startTimer}) => {
  return (
    <div style={styles.container}>
      <h2>🥚 Medium Boil</h2>
      <img src="/images/medium.png" alt="" styles = {styles.imageEgg2}/>
      <p>Cook for 6–7 minutes</p>
      <button onClick={()=>startTimer('Medium boil',6)}>Start</button>
    </div>
  );
};

const styles = {
  container: {
    padding: '1rem',
    border: '2px solid orange',
    borderRadius: '10px',
    width: '300px',
    height: '250px',
    backgroundColor: '#fff8e6',
    textAlign: 'center',
    color : 'black'
  },
  imageEgg2:{
    width : '30px',
    height : '30px',
  }
};

export default MediumBoil;
