import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const MyBids = () => {
   const {user} = useContext(AuthContext);
   const bidJobs = useLoaderData();
   console.log(bidJobs);
   const userBids = bidJobs.filter(bid => bid?.userEmail === user?.email);
   return (
      <div className="my-9">
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
                     <th>{ind+1}</th>
                     <td>{bid.job_title}</td>
                     <td>{bid.email}</td>
                     <td>{bid.deadline}</td>
                     <td>pending</td>
                     <td><button className="btn">Complete</button></td>
                  </tr>)
                  }

               </tbody>
            </table>
         </div>
      </div>
   );
};

export default MyBids;