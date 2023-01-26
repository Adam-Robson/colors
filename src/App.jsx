import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import Colors from './components/Colors/Colors.jsx';
import Color from './components/Color/Color.jsx';
import Layout from './components/Layout/Layout.jsx';
// import NotFound from './components/NotFound/NotFound.jsx';

import './App.css';

const App = () => {
  return (
    <>
      <Routes>
        <Route element={ <Layout /> }>
          <Route path="/" element={ <Home /> }>
            <Route index element={ <Colors />} />
            <Route path="/:id/:key:/pass" element={ <Color /> } />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
