import { useContext } from "react";
import { Navigate, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const MyBids = () => {
   const { user } = useContext(AuthContext);
   const bidJobs = useLoaderData();
   console.log(bidJobs);
   const userBids = bidJobs.filter(bid => bid?.userEmail === user?.email);
   const handleComplete = (id) => {
      const statusInfo = {
         complete: 'complete'
      }
      console.log(id, statusInfo);

      Swal.fire({
         title: "Are you sure to complete this job?",
         text: "You won't be able to revert this!",
         icon: "warning",
         showCancelButton: true,
         confirmButtonColor: "#3085d6",
         cancelButtonColor: "#d33",
         confirmButtonText: "Yes, complete it!"
      }).then((result) => {
         if (result.isConfirmed) {
            fetch(`https://assignment-eleven-server-theta.vercel.app/bidJobs/${id}`, {
               method: 'PUT',
               headers: {
                  'content-type': 'application/json',
               },
               body: JSON.stringify(statusInfo)
            })
               .then(res => res.json())
               .then(data => {
                  console.log(data);
                  if (data.modifiedCount > 0) {

                     Swal.fire({
                        title: 'Success!',
                        text: 'Status information updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                     })
                     Navigate('/bidRequets')
                  }
               })
         }
      })


   }
   if (userBids.length === 0) {
      return <div className="min-h-screen flex justify-center items-center">
         <Helmet>
            <title>KH | My Bids</title>
         </Helmet>
         <p className="text-4xl text-center text-error">You did not bid any job yet</p>
      </div>
   }
   return (
      <div className="my-9">
         <Helmet>
            <title>KH | My Bids</title>
         </Helmet>
         <h1 className="text-4xl text-center mb-5">Your Bids</h1>
         <div className="overflow-x-auto">
            <table className="table">
               {/* head */}
               <thead>
                  <tr>
                     <th></th>
                     <th>Job Title</th>
                     <th>Email</th>
                     <th>Deadline</th>
                     <th>Status</th>
                     <th></th>
                  </tr>
               </thead>
               <tbody>

                  {/* rows */}

                  {
                     userBids.map((bid, ind) => <tr key={ind} className="hover">
                        <th>{ind + 1}</th>
                        <td>{bid.job_title}</td>
                        <td>{bid.email}</td>
                        <td>{bid.deadline}</td>
                        <td>
                           {
                              bid?.status ? 
                              (bid.status === 'reject') ? <p>Cancelled</p> : <p>In Progress</p> 
                              :
                              <p>Pending</p>
                           }
                        </td>
                        {
                           bid?.status === 'accept' ?
                           <td><button onClick={()=>handleComplete(bid._id)} className="btn">Complete</button></td>
                           :
                           <td><button className="btn" disabled>Complete</button></td>
                        }
                     </tr>)
                  }

               </tbody>
            </table>
         </div>
      </div>
   );
};

export default MyBids;