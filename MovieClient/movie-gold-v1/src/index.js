import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//const cors = require("cors");

// root.use(
//   cors({
//     origin: "http://localhost:3000",
//     methods: ["GET", "POST","PUT","DELETE"],
//   })
// );


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path = "/*" element={<App />} /> 

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
