import { Link, useLoaderData } from "react-router-dom";


const JobDetails = () => {
   const jobDetails = useLoaderData();
   const {minimum_price, maximum_price, deadline, email} = jobDetails;
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
                           <span className="label-text">Price</span>
                        </label>
                        <input type="text" name="price" placeholder={`${minimum_price} - ${maximum_price}`} className="input input-bordered" />
                     </div>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Deadline</span>
                        </label>
                        <p className="border-2 border-gray-400/50 rounded px-4 py-2">{deadline}</p>
                     </div>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="password" placeholder="Email" className="input input-bordered" required />
                     </div>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Buyer Email</span>
                        </label>
                        
                        <p className="border-2 border-gray-400/50 rounded px-4 py-2">{email}</p>
                     </div>
                     <div className="form-control mt-6">
                        <button className="btn btn-primary">Bid On the Project</button>
                     </div>
                  </form>
                  
               </div>
            </div>
         </div>
      </div>
   );
};

export default JobDetails;