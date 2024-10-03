import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/routes';
import { Toaster } from 'react-hot-toast';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Toaster position='top-right' toastOptions={{
      success: {
       iconTheme:{
          primary: '#3caf70'
       }
      }
    }}/>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
