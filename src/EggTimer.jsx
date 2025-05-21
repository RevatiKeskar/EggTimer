import React from 'react';

function EggTimer({label,secondsLeft}){
    const formatTime = (secs) => {
    const mins = Math.floor(secs / 60).toString().padStart(2, '0');
    const secondsLeft = Math.floor(secs % 60).toString().padStart(2, '0');
    return `${mins}:${secondsLeft}`;
  };

  return (
    <div style = {styles.timer}>
        <h3>{label}</h3>
        <p>{formatTime(secondsLeft)}</p>
        <video src="/EggInProcess.mp4" autoPlay loop muted style={styles.video} playsInline></video>
        <button style = {styles.btns}>Pause</button>
        <button style = {styles.btns}>Reset</button>
    </div>
  );
  
}
const styles = {
    timer : {
        maxHeight : '400px',
        overflow : 'hidden',
        transition : 'max-height 0.5s ease',
        backgroundColor : '#eee',
        margin : '20px auto',
        width : '300px',
        borderRadius : '10px',
        textAlign : 'center',
        padding : '1rem',
        color : 'black'

    },
    btns:{
        margin : '10px',
        backgroundColor : 'yellow',
        color : 'black',
        border : '2px solid black',
        
    },
    video:{
        width : '40px',
        height : '40px',
        verticalAlign:'middle',
        marginRight:'8px',
        display : 'flex'
    }
}

export default EggTimer;