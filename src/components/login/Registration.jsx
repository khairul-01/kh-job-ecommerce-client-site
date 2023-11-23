import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Registration = () => {
   const { userRegister } = useContext(AuthContext);

   const handleRegistration = (event) => {
      event.preventDefault();
      const form = event.target;
      const name = form.name.value;
      const email = form.email.value;
      const password = form.password.value;
      const photoUrl = form.photoUrl.value;
      console.log(name, email, password, photoUrl);

      userRegister(email, password)
         .then(result => {
            console.log(result.user)
         })
         .catch(error => {
            console.error(error);
         })
   }
   return (
      <div>
         <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
               <div className="text-center">
                  <h1 className="text-5xl font-bold">Register now!</h1>

               </div>
               <div className="card  w-full max-w-sm shadow-2xl bg-base-100">
                  <form onSubmit={handleRegistration} className="card-body">
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Name" className="input input-bordered" />
                     </div>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                     </div>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                     </div>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">PhotoURL</span>
                        </label>
                        <input type="text" name="photoUrl" placeholder="PhotoURL" className="input input-bordered" />
                     </div>
                     <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                     </div>
                  </form>
                  <p className="px-5 py-3">Are you already registered! Please <Link to='/login' className="btn btn-sm underline">Login</Link></p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Registration;