import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import Color from './components/Color/Color.jsx';
import Layout from './components/Layout/Layout.jsx';
import NotFound from './components/NotFound/NotFound.jsx';

import './App.css';

export default function App() {
  return (
    <>
      <Routes>
        <Route element={ <Layout />}>
          <Route path="/" element={ <Navigate to="/color/dc/e1/e9" /> } errorElement={ <NotFound /> } />
          <Route path="/color/:a/:b/:c" element={ <Color /> } />
        </Route>
      </Routes>
    </>
  );
}
