import React from 'react';
import { createRoot } from 'react-dom/client'
import './css/index.css'
import './css/start.css'
import './css/place.css'
import { App } from './App'

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
