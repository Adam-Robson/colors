import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <section id="header">
        <h1>
          <NavLink className="color" to="/color/ba/c1/b8" style={ { color: '#bac1b8' } }>ash gray</NavLink>
          <NavLink className="color" to="/color/a5/ce/d5" style={ { color: '#a5ced5' } }>light blue</NavLink>
          <NavLink className="color" to="/color/7d/a1/95" style={ { color: '#7da195' } }>opal</NavLink>
          <NavLink className="color" to="/color/2b/30/3b" style={ { color: '#2b303b' } }>gunmetal</NavLink>
          <NavLink className="color" to="/color/d7/48/33" style={ { color: '#d74833' } }>cinnabar</NavLink>
        </h1>
      </section>
      <Outlet />
      <footer id="footer">colors by adaam</footer>
    </>
  );
};

export default Layout;
