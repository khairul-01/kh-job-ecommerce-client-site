import { Link } from "react-router-dom";


const JobDetails = () => {
   return (
      <div>
         <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
               <div className="text-center">
                  <h1 className="text-5xl font-bold">Job Details</h1>
               </div>
               <div className="card w-full max-w-sm shadow-2xl bg-base-100">
                  <form className="card-body">
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Email of the employer</span>
                        </label>
                        <input type="email" name="name" placeholder="Name" className="input input-bordered" />
                     </div>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Job Title</span>
                        </label>
                        <input type="text" name="email" placeholder="email" className="input input-bordered" required />
                     </div>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Deadline</span>
                        </label>
                        <input type="email" name="password" placeholder="password" className="input input-bordered" required />
                     </div>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Buyer Email</span>
                        </label>
                        <input type="email" name="photoUrl" placeholder="PhotoURL" className="input input-bordered" />
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

export default JobDetails;