import { createRoot } from 'react-dom/client';
import * as Sentry from '@sentry/react';
import React from 'react';

function App() {
  return (
    <div>
      <h1>This is my React app!</h1>
      <button onClick={() => methodDoesNotExist()}>Send Error</button>
    </div>
  );
}

Sentry.init({
  dsn: 'https://2be1473a1dd846cb8e0eac77c57251a7@o925438.ingest.sentry.io/4505466188005376',
});

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);
