import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root";
import ErrorPage from "../components/ErrorPage";
import Login from "../components/login/Login";
import Registration from "../components/login/Registration";
import Home from "../components/home/Home";
import AddJob from "../components/pages/AddJob";
import JobDetails from "../components/pages/JobDetails";
import PostedJobs from "../components/pages/postedJobs";
import MyBids from "../components/pages/MyBids";
import BidRequests from "../components/pages/BidRequests";

export const router = createBrowserRouter([
   {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
         {
            path: '/',
            element: <Home></Home>,
            loader: () => fetch('http://localhost:5000/jobs')
         },
         {
            path: '/addJob',
            element: <AddJob></AddJob>
         },
         {
            path: '/jobs/:id',
            element: <JobDetails></JobDetails>,
            loader: ({ params }) => fetch(`http://localhost:5000/jobs/${params.id}`),
         },
         {
            path: '/postedJobs',
            element: <PostedJobs></PostedJobs>,
            loader: () => fetch('http://localhost:5000/jobs'),
         },
         {
            path: '/myBids',
            element: <MyBids></MyBids>,
            loader: () => fetch('http://localhost:5000/bidJobs'),
         },
         {
            path: '/bidRequets',
            element: <BidRequests></BidRequests>,
            loader: () => fetch('http://localhost:5000/bidJobs'),
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