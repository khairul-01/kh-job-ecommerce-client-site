import { Link } from "react-router-dom";

const ErrorPage = () => {
   return (
      <div className="flex min-h-screen justify-center items-center">
         <h1 className="text-3xl font-bold">Something Error   <Link to='/' className="btn btn-error">Back Home</Link></h1>
      </div>
   );
};

export default ErrorPage;