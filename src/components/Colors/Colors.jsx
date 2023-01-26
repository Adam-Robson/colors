import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import Color from '../Color/Color.jsx';

const Colors = () => {
  return (
    <>
      <Color />
      <Outlet />
    </>
  );
};

export default Colors;
