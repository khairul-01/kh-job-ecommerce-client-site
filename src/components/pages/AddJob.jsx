

const AddJob = () => {
   return (
      <div>
         <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
               <div className="text-center">
                  <h1 className="text-5xl font-bold">Add Job!</h1>
               </div>
               <div className="card w-full max-w-sm shadow-2xl bg-base-100">
                  <form className="card-body">
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Email of the employer</span>
                        </label>
                        <input type="email" name="email" placeholder="Email of the employer" className="input input-bordered" />
                     </div>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Job title</span>
                        </label>
                        <input type="text" name="jobTitle" placeholder="Job title" className="input input-bordered" required />
                     </div>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Deadline</span>
                        </label>
                        <input type="text" name="password" placeholder="Deadline" className="input input-bordered" required />
                     </div>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Description</span>
                        </label>
                        <input type="text" name="password" placeholder="Description" className="input input-bordered" required />
                     </div>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Category</span>
                        </label>
                        <select className="select select-info w-full max-w-xs">
                           <option disabled selected>Select Job Category</option>
                           <option>English</option>
                           <option>Japanese</option>
                           <option>Italian</option>
                        </select>
                     </div>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Minimum Price</span>
                        </label>
                        <input type="text" name="photoUrl" placeholder="Minimum Price" className="input input-bordered" />
                     </div>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Maximum Price</span>
                        </label>
                        <input type="text" name="photoUrl" placeholder="Maximum Price" className="input input-bordered" />
                     </div>
                     <div className="form-control mt-6">
                        <button className="btn btn-primary">Add Job</button>
                     </div>
                  </form>

               </div>
            </div>
         </div>
      </div>
   );
};

export default AddJob;