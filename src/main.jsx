import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginPage from './pages/LoginPage.jsx'
import RegisterPage from './pages/RegisterPage.jsx'
import ErrorNotFound from './pages/ErrorNotFound'
import ErrorForBidden from './pages/ErrorForBidden'
import ProductPage from './pages/ProductPage'
import ProfilePage from './pages/ProfilePage'
import DetailPage from './pages/DetailPage.jsx'
import { Provider } from 'react-redux'
import store from './redux/store.js'



const router = createBrowserRouter([
  {  
    path: '/', 
    element: <div>Welcome</div>,
    errorElement: <ErrorNotFound/>,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
  },
  {
    path: '/products',
    element: <ProductPage />,
  },
  {
    path: '/forbidden',
    element: <ErrorForBidden />,
    errorElement: <ErrorForBidden />,
  },
  {
    path: '/profile',
    element: <ProfilePage />,
  },
  {
    path: '/product/:id',
    element: <DetailPage />,
  }
]); 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
