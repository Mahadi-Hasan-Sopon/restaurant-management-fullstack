import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/mainLayout/MainLayout";
import Home from "../pages/home/Home";
import ContactUs from "../pages/contactUs/ContactUs";
import Dashboard from "../pages/dashboard/Dashboard";
import OurMenu from "../pages/ourMenu/OurMenu";
import OurShop from "../pages/ourShop/OurShop";
import Cart from "../pages/cart/Cart";
import Login from "../pages/login/Login";
import Registration from "../pages/registration/Registration";
import UserLayout from "../layouts/userLayout/UserLayout";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <UserLayout />,
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: "contact-us",
            element: <ContactUs />,
          },
          {
            path: "dashboard",
            element: <Dashboard />,
          },
          {
            path: "our-menu",
            element: <OurMenu />,
          },
          {
            path: "our-shop",
            element: <OurShop />,
          },
          {
            path: "cart",
            element: <Cart />,
          },
        ],
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registration",
        element: <Registration />,
      },
    ],
  },
]);

export default routes;
