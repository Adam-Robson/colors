import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export default function Layout() {


  return (
    <>
      <section id="section">
        <div id="links">
          <NavLink 
            className={ primo => primo ? 'active' : 'active'}
            to="/color/ba/c1/b8">ashgray</NavLink>
          <NavLink 
            className={ primo => primo ? 'active' : '' } 
            to="/color/a5/ce/d5">lightblue</NavLink>
          <NavLink 
            className={ primo => primo ? 'active' : '' } 
            to="/color/7d/a1/95">opal</NavLink>
          <NavLink 
            className={ primo => primo ? 'active' : '' }
            to="/color/2b/30/3b">gunmetal</NavLink>
          <NavLink 
            className={ primo => primo ? 'active' : '' } 
            to="/color/d7/48/33">cinnabar</NavLink>
        </div>
        <Outlet />
      </section>
    </>
  );
}
