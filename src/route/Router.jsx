import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root";
import ErrorPage from "../components/ErrorPage";
import Login from "../components/login/Login";
import Registration from "../components/login/Registration";
import Home from "../components/home/Home";
import AddJob from "../components/pages/AddJob";

export const router = createBrowserRouter([
   {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
         {
            path: '/',
            element: <Home></Home>
         },
         {
            path: '/addJob',
            element: <AddJob></AddJob>
         },
         {
            path: '/login',
            element: <Login></Login>
         },
         {
            path: '/register',
            element: <Registration></Registration>,
         }
      ]
    },
])