import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './index.css';
import App from './App';
import About from './About'
import Contact from './Contact';
import Blogs from './Blogs';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="contact-us" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>    
    </BrowserRouter>
  </React.StrictMode>
);
