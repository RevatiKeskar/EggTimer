import { useState, useEffect } from "react";
import "./App.css";
import SoftBoil from "./SoftBoil";
import MediumBoil from "./MediumBoil";
import HardBoil from "./HardBoil";
import EggTimer from "./EggTimer";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };
  const [timer, setTimer] = useState({
    label: null,
    secondsLeft: 0,
    running: false,
  });

  // Function to start the timer
  const startTimer = (label, minutes) => {
    console.log("Starting timer:", label, minutes);
    setTimer({
      label,
      secondsLeft: minutes * 60,
      running: true,
    });
  };

  useEffect(() => {
    let interval = null;

    if (timer.running && timer.secondsLeft > 0) {
      interval = setInterval(() => {
        setTimer((prev) => ({
          ...prev,
          secondsLeft: prev.secondsLeft - 1,
        }));
      }, 1000);
    } else if (timer.running && timer.secondsLeft === 0) {
      clearInterval(interval);

      const alarm = new Audio("/alarm.mp3");
      alarm.play();

      setTimer((prev) => ({ ...prev, running: false }));
    }

    return () => clearInterval(interval);
  }, [timer.running, timer.secondsLeft]);

  return (
    <>
    
      <h1>Hey! We missed you!</h1>

      {/* Egg selection row */}
      <div style={styles.row}>
        <SoftBoil startTimer={startTimer} />
        <MediumBoil startTimer={startTimer} />
        <HardBoil startTimer={startTimer} />
      </div>
      {(timer.running || timer.secondsLeft > 0) && (
        <EggTimer label={timer.label} secondsLeft={timer.secondsLeft} />
      )}
    </>
  );
}

const styles = {
  row: {
    display: "flex",
    justifyContent: "space-around",
    padding: "2rem",
    gap: "1rem",
  },
};

export default App;
