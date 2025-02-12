import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import Layout from './Layout';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import './global.css'; // Import the global CSS file

const container = document.getElementById('root');
const root = createRoot(container);

const Main = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <App />
        </Layout>
      </Router>
    </ThemeProvider>
  );
};

root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);