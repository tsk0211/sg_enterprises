import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar.jsx';
import Footer from './components/Footer/Footer.jsx';
import HomePage from './pages/HomePage.jsx';
import AboutUs from './pages/AboutUs.jsx';
import Products from './pages/Products.jsx';
import ContactUs from './pages/ContactUs.jsx';
import CapabilityPage from './pages/CapabilityPage.jsx';

function App() {

  const router= createBrowserRouter([
    {
      path : "/",
      element : <><Navbar/> <HomePage /></>,
      errorElement : <div>404 Page Not Found</div>
    },
    {
      path : "/about",
      element : <><Navbar/> <AboutUs /></>
    },
    {
      path : "/products",
      element : <><Navbar/> <Products /></>
    },
    {
      path : "/contact",
      element : <><Navbar/> <ContactUs /></>
    },
    {
      path : "/cap",
      element : <><Navbar/> <CapabilityPage /></>
    },
    {
      path : "/products/:id",
      element : <> <Navbar /> <Products /></>
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App;