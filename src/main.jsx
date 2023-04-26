import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import AuthProvider from './Providers/AuthProvider.jsx'
import Home from './components/Home.jsx'
import LogIn from './components/LogIn.jsx'
import Orders from './components/Orders.jsx'
import PrivateRoute from './components/PrivateRoute.jsx'
import Register from './components/Register.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: '/orders',
        element: <PrivateRoute><Orders/></PrivateRoute>
      },
      {
        path: '/login',
        element: <LogIn />
      },
      {
        path: '/register',
        element: <Register />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(<AuthProvider>
  <RouterProvider router={router}/>
</AuthProvider>)
