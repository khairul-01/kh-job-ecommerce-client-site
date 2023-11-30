// import { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
// import { AuthContext } from "../../provider/AuthProvider";


const BidRequests = () => {
   // const {user} = useContext(AuthContext);
   const jobRequests = useLoaderData();
   const navigate = useNavigate();
   const handleAccept = (id) => {
      const statusInfo = {
         status: 'accept'
      }
      console.log(id, statusInfo);

      Swal.fire({
         title: "Are you sure to Accept this job?",
         text: "You won't be able to revert this!",
         icon: "warning",
         showCancelButton: true,
         confirmButtonColor: "#3085d6",
         cancelButtonColor: "#d33",
         confirmButtonText: "Yes, accept it!"
      }).then((result) => {
         if (result.isConfirmed) {
            fetch(`http://localhost:5000/bidJobs/${id}`, {
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
                     navigate('/bidRequets')
                  }
               })
         }
      })


   }
   const handleReject = (id) => {
      const statusInfo = {
         status: 'reject'
      }
      console.log(id, statusInfo);

      Swal.fire({
         title: "Are you sure to Reject this job?",
         text: "You won't be able to revert this!",
         icon: "warning",
         showCancelButton: true,
         confirmButtonColor: "#3085d6",
         cancelButtonColor: "#d33",
         confirmButtonText: "Yes, reject it!"
      }).then((result) => {
         if (result.isConfirmed) {
            fetch(`http://localhost:5000/bidJobs/${id}`, {
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
                     navigate('/bidRequets')
                  }
               })
         }
      })
   }
   return (
      <div className="my-9">
         <h1 className="text-4xl text-center mb-5">Bid Requests</h1>
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
                     <th></th>
                  </tr>
               </thead>
               <tbody>

                  {/* rows */}

                  {
                     jobRequests.map((bid, ind) => <tr key={ind} className="hover">
                        <th>{ind + 1}</th>
                        <td>{bid.job_title}</td>
                        <td>{bid.email}</td>
                        <td>{bid.deadline}</td>
                        {
                           bid?.status ?
                           bid.status === 'accept'?
                           <td>In Progress</td>
                           :
                           <td>Rejected</td>
                           :
                           <td>pending</td>
                        }
                        <td><button onClick={() => handleAccept(bid._id)} className="btn">Accept</button></td>
                        <td><button onClick={() => handleReject(bid._id)} className="btn">Reject</button></td>
                     </tr>)
                  }

               </tbody>
            </table>
         </div>
      </div>
   );
};

export default BidRequests;