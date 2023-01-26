import React from 'react';
import { Outlet } from 'react-router-dom';
import Color from '../Color/Color.jsx';

export default function Home() {
  return (
    <>
      <section className="all-colors">
        <Outlet />
      </section>
      <section>
        <Color />
      </section>
    </>
  );
}
