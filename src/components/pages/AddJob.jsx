import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../provider/AuthProvider";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";


const AddJob = () => {
   const { user } = useContext(AuthContext);
   const navigate = useNavigate();
   const handleAddJob = event => {
      event.preventDefault();
      const form = event.target;
      const email = form.email.value;
      const job_title = form.jobTitle.value;
      const deadline = form.deadline.value;
      const job_description = form.description.value;
      const category = form.category.value;
      const minimum_price = form.minPrice.value;
      const maximum_price = form.maxPrice.value;
      const jobInfo = {
         email,
         job_title,
         deadline,
         job_description,
         category,
         minimum_price,
         maximum_price,
      }
      console.log(jobInfo);
      const currentDate = new Date();
      const inputDate = new Date(deadline)
      if (inputDate > currentDate) {
         console.log(currentDate, inputDate);
         Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Your date should be valid or after current date!',
         });
      }
      else {
         axios.post('https://assignment-eleven-server-theta.vercel.app/jobs', jobInfo)
            .then(res => {
               console.log(res.data);
               if (res.data.insertedId) {
                  toast.success("Data added successfully !", {
                     position: toast.POSITION.BOTTOM_RIGHT
                  });
                  Swal.fire({
                     title: 'Success!',
                     text: 'Data added successfully !',
                     icon: 'success',
                     confirmButtonText: 'Cool'
                  })
                  navigate('/postedJobs')
               }
            })
      }
   }
   return (
      <div>
         <Helmet>
            <title>Job | Add Job</title>
         </Helmet>
         <div className="hero min-h-screen bg-base-200 my-5">
            <div className="hero-content flex-col">
               <div className="text-center">
                  <h1 className="text-5xl font-bold">Add Job!</h1>
               </div>
               <div className="card w-full max-w-sm shadow-2xl bg-base-100">
                  <form onSubmit={handleAddJob} className="card-body">
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Email of the employer</span>
                        </label>
                        <input type="email" name="email" readOnly defaultValue={user?.email} className="input input-bordered" />
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
                        <input type="date" name="deadline" placeholder="Deadline" className="input input-bordered" required />
                     </div>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Description</span>
                        </label>
                        <input type="text" name="description" placeholder="Description" className="input input-bordered" required />
                     </div>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Category</span>
                        </label>
                        <select name="category" className="select select-info w-full max-w-xs">
                           <option disabled selected>Select Job Category</option>
                           <option>Web Development</option>
                           <option>Digital Marketing</option>
                           <option>Graphics Design</option>
                        </select>
                     </div>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Minimum Price</span>
                        </label>
                        <input type="text" name="minPrice" placeholder="Minimum Price" className="input input-bordered" />
                     </div>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Maximum Price</span>
                        </label>
                        <input type="text" name="maxPrice" placeholder="Maximum Price" className="input input-bordered" />
                     </div>
                     <div className="form-control mt-6">
                        <button className="btn btn-primary">Add Job</button>
                     </div>
                     <ToastContainer />
                  </form>

               </div>
            </div>
         </div>
      </div>
   );
};

export default AddJob;