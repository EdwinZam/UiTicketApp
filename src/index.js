import { StyleProvider } from '@ant-design/cssinjs';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { TicketApp } from './TicketApp';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { UiProvider } from './context/UiContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  // </React.StrictMode>
  
  <UiProvider>
    <StyleProvider hashPriority="high">
      
      <RouterProvider router={ router} />
      {/* <TicketApp/> */}
    </StyleProvider>
  </UiProvider>
);
