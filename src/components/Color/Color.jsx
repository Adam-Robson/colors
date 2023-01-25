import { NavLink, useParams } from 'react-router-dom';
import './Color.css';

export default function Color() {
  const { id, key, pass } = useParams();
  return (
    <section className="color-wall">
      <div className="color-container"
        style={ { backgroundColor: `#${id}${key}${pass}` } }>
        <p className="hex-text" >{ id }{ key }{ pass }<br />
          <NavLink to="/" className="back">
            back
          </NavLink>
        </p>
      </div>
    </section>
  );
}
