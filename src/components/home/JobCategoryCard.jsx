

const JobCategoryCard = () => {
   return (
      <div>
         <div className="card w-96 bg-base-100 shadow-xl">

            <div className="card-body">
               <h2 className="card-title">
                  Job Title
                  <div className="badge badge-secondary">NEW</div>
               </h2>
               <div className="card-actions justify-between">
                  <div className="badge badge-outline">Deadline</div>
                  <div className="badge badge-outline">Price Range</div>
               </div>
               <p>Short Description</p>
               <div className="card-actions justify-end">
                  <button className="btn btn-primary">Bid Now</button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default JobCategoryCard;