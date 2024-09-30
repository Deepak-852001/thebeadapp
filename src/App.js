import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import Action from './components/Action';
import Dictation from './components/Dictation';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/action" element={<Action />} />
                <Route path="/Dictation" element={<Dictation />} />
            </Routes>
        </Router>
    );
}

export default App;
