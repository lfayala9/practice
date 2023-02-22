import React from 'react';
import App from './routes/App';
import 'react-tooltip/dist/react-tooltip.css'
import { createRoot } from 'react-dom/client';


const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App tab="home" />);
