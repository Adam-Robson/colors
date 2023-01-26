import React from 'react';
import { Link, useParams } from 'react-router-dom';

const Colors = () => {
  
  const { id, key, pass } = useParams();

  return (
    <>
      <section id="navigation">
        <nav id="navigation">
          <Link
            to={ `/colors/${id}/${key}/${pass}` } 
            style={ { color: `#${id}${key}${pass}` } } 
            className="color"
          >{ id }{ key }{ pass }</Link>
        </nav>
      </section>
    </>
  );
};

export default Colors;
