import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
   const {user, loading} = useContext(AuthContext);
   const location = useLocation();
   console.log(location);

   if(loading){
      return <div className="flex justify-center my-40">
         <progress className="progress w-56"></progress>
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