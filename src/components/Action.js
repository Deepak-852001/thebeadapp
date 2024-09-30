import React from 'react';
import './Action.css'; // Import the Action CSS
import { useNavigate } from 'react-router-dom'; 

function Action() {
    const navigate = useNavigate();

    const handleDictation = () => {
        navigate('/Dictation')
    };

    const handleFlashCards = () => {
        console.log("Flash Cards selected");
    };

    return (
        <div className="action-page">
            <h1>Select the practice type</h1>
            <button onClick={handleDictation}>Dictation</button>
            <button onClick={handleFlashCards}>Flash Cards</button>
        </div>
    );
}

export default Action;
