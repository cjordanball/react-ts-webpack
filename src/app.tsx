import React from 'react';
import ReactDOM from 'react-dom';
import './styling/main.css';
import Parent from './Components/Parent'

const App = () => {
    return (
        <div className="toast">
            <Parent />
        </div>
    );
};

ReactDOM.render(
    // Note the strict mode, runs in dev only, highlights potential problems
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('insertPoint'));