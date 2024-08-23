import Home from '@pages/Home'
import AboutUs from '@pages/AboutUs'
import Categories from '@pages/Categories'
import Products from '@pages/Products'
import { MainLayout } from '@layouts/MainLayout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([{
    path: '/',
    element:<MainLayout />,
    children:[{
        index: true,
        element: <Home />
    },
    {
        path: 'categories',
        element: <Categories />,
        
    },
    {
        path: 'Products/:prefix',
        element: <Products />,
        
    },
    {
        path: 'AboutUs',
        element: <AboutUs />,
        
    }

]
}]);

const AppRouter = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default AppRouter
