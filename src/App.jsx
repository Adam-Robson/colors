import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './components/Home/Home.jsx';
import Colors from './components/Colors/Colors.jsx';
import Layout from './components/Layout/Layout.jsx';
import NotFound from './components/NotFound/NotFound.jsx';

import './App.css';

const App = () => {
  return (
    <>
      <Routes>
        <Route element={ <Layout /> }> 
          <Route path="/" element={ <Home /> } />
          <Route path="/:id/:key/:pass" element={ <Colors /> } />
          <Route path="*" element={ <NotFound /> } />
        </Route>
      </Routes>
    </>
  );
};

export default App;
