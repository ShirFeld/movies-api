import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//pages
import App from './App';
import Main from './Main';
import NotFound from './NotFound';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/movies/:type" element={<Main />} />
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  </BrowserRouter>
);
