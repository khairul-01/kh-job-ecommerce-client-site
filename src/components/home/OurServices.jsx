import application from '../../assets/images/Application.png'
import resume from '../../assets/images/Resume.png'
import bookmark from '../../assets/images/Bookmark.jpg'
import paid from '../../assets/images/PaidListng.jpg'
import { motion } from 'framer-motion';

const OurServices = () => {
   return (
      <motion.div
         initial={{ opacity: 0, scale: 0.8 }}
         animate={{ opacity: 1, scale: 1 }}
         transition={{ duration: 1 }}
         whileHover={{ scale: 1.05 }}
         whileTap={{ scale: 0.92 }}
      >
         {/* Your Our Services content goes here */}
         <div className="my-11">
         <motion.nav
               whileHover={{ scale: 1.1 }}
               whileTap={{ scale: 0.9 }}
            >
               {/* Framer motion our service */}
               <h1 className="text-5xl text-center font-bold mb-5">Our Services</h1>
            </motion.nav>
            
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4">
               <div className="card bg-base-100 shadow-xl">
                  <figure className="px-10 pt-10">
                     <img src={application} alt="Shoes" className="rounded-full w-32 h-32 border-4 border-gray-900" />
                  </figure>
                  <div className="card-body items-center text-center">
                     <h2 className="card-title">Applications</h2>
                     <p>Allow candidates to apply to jobs using form & employers to view and manage the applications from their job dashboard.</p>

                  </div>
               </div>
               <div className="card bg-base-100 shadow-xl">
                  <figure className="px-10 pt-10">
                     <img src={resume} alt="Shoes" className="rounded-full w-32 h-32 border-4 border-gray-900" />
                  </figure>
                  <div className="card-body items-center text-center">
                     <h2 className="card-title">Resume Manager</h2>
                     <p>Plugin which adds a resume submission form to your site and resume listings, all manageable from WordPress admin.</p>

                  </div>
               </div>
               <div className="card bg-base-100 shadow-xl">
                  <figure className="px-10 pt-10">
                     <img src={bookmark} alt="Shoes" className="rounded-full w-32 h-32 border-4 border-gray-900" />
                  </figure>
                  <div className="card-body items-center text-center">
                     <h2 className="card-title">Bookmarks</h2>
                     <p>Allow logged in candidates and employers to bookmark jobs and resumes along with an added note.</p>

                  </div>
               </div>
               <div className="card bg-base-100 shadow-xl">
                  <figure className="px-10 pt-10">
                     <img src={paid} alt="Shoes" className="rounded-full w-32 h-32 border-4 border-gray-900" />
                  </figure>
                  <div className="card-body items-center text-center">
                     <h2 className="card-title">Simple Paid Listings</h2>
                     <p>Add paid listing functionality. Set a price per listing and take payment via Stripe or PayPal before the listing becomes published.</p>

                  </div>
               </div>
            </div>
         </div>
      </motion.div>

   );
};

export default OurServices;