import { Link } from "react-router-dom";
import { motion } from 'framer-motion';

const JobCategoryCard = ({ job }) => {
   const { _id, job_title, deadline, job_description, minimum_price, maximum_price } = job
   return (
      <div>
         <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 1 }}
         >
            {/* Job Category content goes here */}
            <div className="card min-h-[300px] bg-accent text-accent-content glass">
            <div className="card-body">
               <h2 className="card-title"><span className="font-bold">Job Title: </span> {job_title}</h2>
               <p><span className="font-bold">Deadline: </span> {deadline} </p>
               <p><span className="font-bold">Prece Range: </span> {minimum_price} - {maximum_price} $</p>
               <p><span className="font-bold">Short Description: </span> {job_description} </p>
               <div className="card-actions justify-end">
                  <Link to={`/jobs/${_id}`}><button className="btn">Bid Now</button></Link>
               </div>
            </div>
         </div>
         </motion.div>
         
      </div>
   );
};

export default JobCategoryCard;