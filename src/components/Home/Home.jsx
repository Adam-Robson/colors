import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import Color from '../Color/Color.jsx';

export default function Home() {
  return (
    <>
      <section className="home">
        <Color />
      </section>
    </>
  );
}
