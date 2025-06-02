import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';
import AboutProduct from './pages/AboutProduct';
import AboutInnovator from './pages/AboutInnovator';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import PaymentSystem from './components/checkout/PaymentSystem';
import Products from './pages/Products';
import Testimonials from './pages/Testimonials';

function App() {
const router = createBrowserRouter([ 
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "about",
        element: <AboutProduct />
      },
      {
        path: "innovator",
        element: <AboutInnovator />
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path: "blog",
        element: <Blog />
      },
      {
        path: "payment",
        element: <PaymentSystem/>
      },
      {
        path: "products",
        element: <Products />
      },
      {
        path: "testimonials",
        element: <Testimonials />
      },
    ]
  }
  ]);


  return (
    <>
     <RouterProvider router={router} />
    </>
  );
}

export default App;