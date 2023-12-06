import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import loadingImg from '../assets/images/Loading.gif'


const PrivateRoute = ({children}) => {
   const {user, loading} = useContext(AuthContext);
   const location = useLocation();
   console.log(location);

   if(loading){
      return <div className="flex justify-center my-12">
         <img className="w-24" src={loadingImg} alt="Loading img" />
         <div><progress className="progress w-56"></progress></div>
      </div>
   }
   if(user?.email){
      return children;
   }
   return <div>

      <Navigate state={location.pathname} to='/login' replace></Navigate>
   </div>
};

export default PrivateRoute;