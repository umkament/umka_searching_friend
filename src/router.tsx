import {
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'

import { Layout } from '@/components/layout'
import { ErrorPage } from '@/pages/error-page'
import { MainPage } from '@/pages/main-page'

const privateRoutes: RouteObject[] = [
  //{ element: <Layout />, path: '/' },
  { element: <div> ProfilePage</div>, path: '/my-profile' },
]
const publicRoutes: RouteObject[] = [
  { element: <div>loginPage</div>, path: '/login' },
  { element: <div> logoutPage</div>, path: '/logout' },
  { element: <div> forgotPasswordPage</div>, path: '/forgot-password' },
  { element: <div> cardPage</div>, path: '/card/:id' },
  { element: <ErrorPage />, path: '/error' },
  { element: <MainPage />, path: '/main' },
]
const router = createBrowserRouter([
  {
    children: [
      ...publicRoutes,
      { children: privateRoutes, element: <PrivateRoutes /> },
      {
        element: <ErrorPage />,
        path: '*',
      },
    ],
    element: <Layout />,
  },
])

export const Router = () => {
  return <RouterProvider router={router} />
}

function PrivateRoutes() {
  const isAuthenticated = true

  return isAuthenticated ? <Outlet /> : <Navigate to={'/login'} />
}
