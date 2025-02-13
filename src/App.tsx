import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { About, Contact, Home } from '@/pages';
import { Suspense } from 'react';
import Layout from './layout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> }
    ]
  },
]);

function App() {
  return (
    <Suspense>
      <RouterProvider router={router} />
    </Suspense>
  )
}

export default App
