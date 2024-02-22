import {
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'

import { Layout } from '@/components/layout'

const privateRoutes: RouteObject[] = [
  { element: <Layout />, path: '/' },
  { element: <div> ProfilePage</div>, path: '/my-profile' },
]
const publicRoutes: RouteObject[] = [
  { element: <div>loginPage</div>, path: '/login' },
  { element: <div> logoutPage</div>, path: '/logout' },
  { element: <div> forgotPasswordPage</div>, path: '/forgot-password' },
  { element: <div> cardPage</div>, path: '/card/:id' },
]
const router = createBrowserRouter([
  { children: privateRoutes, element: <PrivateRoutes /> },
  ...publicRoutes,
])

export const Router = () => {
  return <RouterProvider router={router} />
}

function PrivateRoutes() {
  const isAuthenticated = true

  return isAuthenticated ? <Outlet /> : <Navigate to={'/login'} />
}
