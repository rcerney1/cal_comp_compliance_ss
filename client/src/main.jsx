import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Initialize AOS before rendering the app
AOS.init({
  once: true,           // animation runs only once
  offset: 100,          // distance from the bottom before it triggers
  duration: 800,        // animation duration in ms
  easing: 'ease-in-out' // smooth animation
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
