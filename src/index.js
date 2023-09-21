import { StyleProvider } from '@ant-design/cssinjs';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { TicketApp } from './TicketApp';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { UiProvider } from './context/UiContext';
import { SocketProvider } from './context/SocketContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  // </React.StrictMode>
  
  <SocketProvider>
    <UiProvider>
      <StyleProvider hashPriority="high">
        <RouterProvider router={ router} />
        {/* <TicketApp/> */}
      </StyleProvider>
    </UiProvider>
  </SocketProvider>
);
