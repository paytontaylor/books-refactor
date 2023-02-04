import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from './context/BooksContext';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider value={5}>
      <App />
    </Provider>
  </React.StrictMode>
);
