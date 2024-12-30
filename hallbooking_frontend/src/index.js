import React from 'react';
import ReactDOM from 'react-dom/client';  // Correct import for React 18+
import App from './App';
import './index.css';

// Create a root container for React 18
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component inside the root
root.render(<App />);
