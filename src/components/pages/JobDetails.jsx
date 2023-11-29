import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";


const JobDetails = () => {
   const detailsJob = useLoaderData();
   const {job_title, job_description, minimum_price, maximum_price, deadline, email} = detailsJob;
   const {user} = useContext(AuthContext);
   

   return (
      <div>
         <div className="text-center my-6">
                  <h1 className="text-5xl font-bold">Job Details</h1>
               </div>
         <div className="card bg-accent text-accent-content glass">
            <div className="card-body">
               <h2 className="card-title"><span className="font-bold">Job Title: </span> {job_title}</h2>
               <p><span className="font-bold">Deadline: </span> {deadline} </p>
               <p><span className="font-bold">Prece Range: </span> {minimum_price} - {maximum_price} </p>
               <p><span className="font-bold">Short Description: </span> {job_description} </p>

            </div>
         </div>
         <div className="hero bg-base-200 mt-5">
            <div className="hero-content flex-col">
               <div className="text-center">
                  <h1 className="text-4xl font-bold">Place Your Bid</h1>
               </div>
               <div className="card w-full max-w-sm shadow-2xl bg-base-100">
                  <form className="card-body">
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Price (Your Bidding Amount)</span>
                        </label>
                        <input type="text" name="price" placeholder={`${minimum_price} - ${maximum_price}`} className="input input-bordered" />
                     </div>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Deadline</span>
                        </label>
                        <input type="date" name="deadline" defaultValue={`${deadline}`} className="input input-bordered" />
                     </div>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Email</span>
                        </label>
                        {
                           user?
                           <input type="email" name="email" readOnly defaultValue={user.email} placeholder="Email" className="input input-bordered" required />
                           :
                           <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                        }
                        
                     </div>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Buyer Email</span>
                        </label>         
                        <input type="email" name="userEmail" readOnly defaultValue={email} placeholder="Email" className="input input-bordered" required />
                     </div>
                     <div className="form-control mt-6">
                        {
                           (user?.email===detailsJob?.email)?
                           <button disabled className='btn btn-primary' >Bid On the Project</button>
                           :
                           <button className='btn btn-primary' >Bid On the Project</button>
                        }
                        
                     </div>
                  </form>
                  
               </div>
            </div>
         </div>
      </div>
   );
};

export default JobDetails;