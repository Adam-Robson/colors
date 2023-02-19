import React from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';

export default function Layout() {
  const { a, b, c } = useParams();


  return (
    <>
      <section id="section" style={ { backgroundColor: `#${a}${b}${c}` } }>
        <div id="links">
          <NavLink 
            className={ primo => primo ? 'active' : ''}
            to="/color/37/38/33">olive</NavLink>
          <NavLink 
            className={ primo => primo ? 'active' : '' } 
            to="/color/34/8b/a8">munsell</NavLink>
          <NavLink 
            className={ primo => primo ? 'active' : '' } 
            to="/color/eb/60/56">bittersweet</NavLink>
          <NavLink 
            className={ primo => primo ? 'active' : '' }
            to="/color/fe/d8/67">naples</NavLink>
          <NavLink 
            className={ primo => primo ? 'active' : '' } 
            to="/color/dc/e1/e9">alice</NavLink>
        </div>
        <Outlet a={ a } b={ b } c={ c } />
      </section>
    </>
  );
}
