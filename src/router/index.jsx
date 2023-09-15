import { createBrowserRouter, Navigate } from 'react-router-dom';

import { Cola } from '../pages/Cola';
import { Ingresar } from '../pages/Ingresar';
import { CrearTicket } from '../pages/CrearTicket';
import { RouterPage } from '../pages/RouterPage';
import { Escritorio } from '../pages/Escritorio';



export const router = createBrowserRouter([
  {
    path: '/',
    element: <RouterPage />,
    children: [
        { path: '/ingresar', element: <Ingresar />,  },
        { path: '/cola', element: <Cola /> },
        { path: '/crear', element: <CrearTicket /> },
        { path: '/escritorio', element: <Escritorio /> },        
        { path: '*', element: <Navigate to="ingresar" /> },
    ]
  },
  {
    path: '*',
    element: <h1>Not found</h1>,
  },
]);

