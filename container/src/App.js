import React, { useState, useEffect } from 'react';
const MFE1Button = React.lazy(() => import('microFrontEnd1/MicroFrontEnd1Index'));
const MFE2Button = React.lazy(() => import('microFrontEnd2/MicroFrontEnd2Index'));
import './App.css';

function App() {
    const [showButtons, setShowButtons] = useState(false);
    const [time, setTime] = useState((new Date()).toString());
    useEffect(() => {
        setInterval(() => {
            setTime((new Date()).toString())
        },1000);
    },[])
    return (
        <div className="App">
            <h1>Welcome to React App</h1>
            <h2>Date: {time}</h2>
            <button onClick={() => setShowButtons(!showButtons)}>Show Buttons</button>
            {showButtons && (
                <div className="buttons">
                    <React.Suspense fallback={<div>Loading...</div>}>
                        <MFE1Button />
                        <MFE2Button />
                    </React.Suspense>
                </div>
            )}
        </div>
    )
}

export default App;