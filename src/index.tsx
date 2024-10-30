import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyled } from './GlobalStyled';
import Animation from './1. Animation/Animation';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyled />
    <Animation />
  </React.StrictMode>
);

