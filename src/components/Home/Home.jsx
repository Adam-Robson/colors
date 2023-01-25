import React from 'react';
import { NavLink } from 'react-router-dom';

import './Home.css';

export default function Colors() {
  return (
    <article className="container">
      <section className="links-container">
        <NavLink className="color"
          id="champagne"
          to="/color/f1/e0/c5"
          style={ { color: '#f1e0c5' } }>
          champage
        </NavLink>
        <NavLink className="color"
          id="mauve"
          to="/color/ed/c9/ff"
          style={ { color: '#edc9ff' } }>
          mauve
        </NavLink>
        <NavLink className="color"
          id="xanadu"
          to="/color/71/81/6d"
          style={ { color: '#71816d' } }>
          xanadu
        </NavLink>
        <NavLink className="color"
          id="midnight-green-eagle-green"
          to="/color/0b/3c/49"
          style={ { color: '#0b3c49' } }>
          midnight green<br /> eagle green
        </NavLink>
        <NavLink className="color"
          id="gunmetal"
          to="/color/33/37/45"
          style={ { color: '#333745' } }>
          gunmetal
        </NavLink>
      </section>
    </article>
  );
}
