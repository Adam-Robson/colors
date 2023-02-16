import React from 'react';
import { useRouteError } from 'react-router-dom';

export default function NotFound() {
  const error = useRouteError();
  /* eslint-disable no-console */
  console.error(error);

  return (
    <div id="error">
      <p id="error-text">An unexpected error has occurred.</p>
      <i id="not-found">{ error.statusText || error.message }</i>
    </div>
  );
}
