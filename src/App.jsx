import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import Colors from './components/Colors/Colors';
import Color from './components/Color/Color';
import Layout from './components/Layout/Layout';
import NotFound from './components/NotFound/NotFound';

const App = () => {
  return (
    <>
      <Routes>
        <Route element={ Layout }>
          <Route path="/" element={ <Home /> }>
            <Route index element={ <Colors /> } />
            <Route path="/:id/:key/:pass" element={ <Color /> } />
          </Route>
        </Route>
        <Route path="*" element={ <NotFound /> } />
      </Routes>
    </>
  );
};

export default App;
