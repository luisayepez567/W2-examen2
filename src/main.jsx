import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './header.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { routerApp } from './routes/routerApp'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={createBrowserRouter(routerApp)} />
  </StrictMode>,
)
