import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App1 from './App.jsx';  // Importing the default export from App.jsx

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App1 />
  </StrictMode>
);
