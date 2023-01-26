import React from 'react';

import Colors from '../Colors/Colors.jsx';

const Layout = () => {
  return (
    <>
      <header id="header">
        <section id="page-title">
          <h1>
          Color Router
          </h1>
        </section>
        <Colors />
      </header>

      <body id="body"></body>
      <footer id="footer"></footer>
    </>
  );
};

export default Layout;
