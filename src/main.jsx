import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import Shop from './components/Shop'
import Cart from './components/Cart'
import App from './App'
import ErrorPage from './components/ErrorPage'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {path: '', element: <Home/>},
      {path: 'shop', element: <Shop/>},
      {path: 'cart', element: <Cart/>},
    ],
    errorElement: <ErrorPage/>
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
