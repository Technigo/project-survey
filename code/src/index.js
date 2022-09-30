import React from 'react';
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/App'
import Layout from './components/Layout'

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <Layout>
    <App />
  </Layout>
);
