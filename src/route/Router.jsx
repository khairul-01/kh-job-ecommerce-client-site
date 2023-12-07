import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root";
import ErrorPage from "../components/ErrorPage";
import Login from "../components/login/Login";
import Registration from "../components/login/Registration";
import Home from "../components/home/Home";
import AddJob from "../components/pages/AddJob";
import JobDetails from "../components/pages/JobDetails";
import MyBids from "../components/pages/MyBids";
import BidRequests from "../components/pages/BidRequests";
import PrivateRoute from "./PrivateRoute";
import PostedJobs from "../components/pages/PostedJobs";

export const router = createBrowserRouter([
   {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
         {
            path: '/',
            element: <Home></Home>,
            loader: () => fetch('https://assignment-eleven-server-theta.vercel.app/jobs'),
         },
         {
            path: '/addJob',
            element: <PrivateRoute><AddJob></AddJob></PrivateRoute>,
         },
         {
            path: '/jobs/:id',
            element: <PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
            loader: ({ params }) => fetch(`https://assignment-eleven-server-theta.vercel.app/jobs/${params.id}`),
         },
         {
            path: '/postedJobs',
            element: <PrivateRoute><PostedJobs></PostedJobs></PrivateRoute>,
            loader: () => fetch('https://assignment-eleven-server-theta.vercel.app/jobs'),
         },
         {
            path: '/myBids',
            element: <PrivateRoute><MyBids></MyBids></PrivateRoute>,
            loader: () => fetch('https://assignment-eleven-server-theta.vercel.app/bidJobs'),
         },
         {
            path: '/bidRequets',
            element: <PrivateRoute><BidRequests></BidRequests></PrivateRoute>,
            loader: () => fetch('https://assignment-eleven-server-theta.vercel.app/bidJobs'),
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