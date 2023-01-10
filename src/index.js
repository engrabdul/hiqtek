import React from 'react';
import ReactDOM from 'react-dom/client';
// import abc, { add, sub } from './calculator.js';
import './index.css';
import App from './App';
import { useParams } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'
import client from './react-query-client';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <QueryClientProvider client={client}>
    <App />
    <ReactQueryDevtools />
  </QueryClientProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
