import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppRoutes } from './Routes'
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>
)
