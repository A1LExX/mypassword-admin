import React from "react";
import ReactDOM from "react-dom/client";
import Login from "./pages/login/login";
import Main from "./pages/main/main";
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import './main.css'
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <BrowserRouter>
    <Routes>
          <Route index element={<Login />} />
          <Route path="main/*" element={<Main />} />
      </Routes>
    </BrowserRouter>
)