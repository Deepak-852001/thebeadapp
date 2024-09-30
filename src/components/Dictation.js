import React, { useState, useEffect, useRef } from 'react';
import './Dictation.css'; // Import the CSS file

function Dictation() {
  const numbers = [2, -3, 5, 2, 9, -1];
  const [currentNumber, setCurrentNumber] = useState(null); // Store the current number being spoken
  const [finished, setFinished] = useState(false); // Track if the numbers have been fully spoken
  const hasRan = useRef(false); // Ref to track if the effect has run

  // Define the speakNumbers function
  const speakNumbers = (numbersArray) => {
    numbersArray.forEach((num, index) => {
      setTimeout(() => {
        setCurrentNumber(num); // Set the current number before speaking it
        let speechText = '';
        if (index === 0) {
          speechText += num;
        } else {
          speechText += num >= 0 ? ` ${num}` : ` minus ${Math.abs(num)}`;
        }

        const utterance = new SpeechSynthesisUtterance(speechText);
        window.speechSynthesis.speak(utterance);
        
        // After the last number, call "that is"
        if (index === numbersArray.length - 1) {
          setTimeout(() => {
            const finalUtterance = new SpeechSynthesisUtterance("that is");
            window.speechSynthesis.speak(finalUtterance);
            setFinished(true); // Mark as finished after saying "that is"
          }, 1500); // Delay to wait for the last number to finish
        }
      }, index * 1500); // Set delay of 1.5 seconds per number to mimic calling one by one
    });
  };

  // Use useEffect to call speakNumbers after the component mounts
  useEffect(() => {
    if (!hasRan.current) {
      speakNumbers(numbers);
      hasRan.current = true; // Mark the effect as run
    }
  }, []); // Keep the dependency array empty

  return (
    <div className="App">
      <h1>Sum 1</h1>
      <div>
        <h2>Currently calling number:</h2>
        <h1 className="currentNumber">{currentNumber !== null ? currentNumber : 'Waiting...'}</h1>
        {finished && <h2>That is</h2>} {/* Optional message when finished */}
      </div>
    </div>
  );
}

export default Dictation;
