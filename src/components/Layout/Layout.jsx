import React from 'react';
import { Outlet } from 'react-router';
import { NavLink } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <header className="title-container">
        <NavLink>
          <h1 className="title">
            palette
          </h1>
        </NavLink>
      </header>
      <Outlet />
    </>
  );
}
