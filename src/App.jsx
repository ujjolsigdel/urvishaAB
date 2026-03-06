import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainLayout from './layout/MainLayout.jsx'
import Home from './pages/Home.jsx'
import Services from './pages/Services.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import NotFound from './pages/NotFound.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: 'services', element: <Services /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
    ],
  },
  { path: '*', element: <NotFound /> },
])

export default function App() {
  return <RouterProvider router={router} />
}
