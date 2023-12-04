import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import JobCategoryCard from './JobCategoryCard';
import FeaturedCard from './FeaturedCard';

const BrowseByCategory = () => {
   const jobs = useLoaderData();
   const webJobs = jobs.filter(job => job.category === "Web Development");
   const dmJobs = jobs.filter(job => job.category === "Digital Marketing");
   const gsJobs = jobs.filter(job => job.category === "Graphics Design");

   const featuredJobs = jobs.filter((job, ind) => ind < 4)
   console.log(featuredJobs);

   return (
      <div className='my-12'>
         <h1 className='text-center text-5xl font-bold mb-5'>Browse Job by Category</h1>

         <Tabs>
            <TabList>
               <Tab>Web Development</Tab>
               <Tab>Digital Marketing</Tab>
               <Tab>Graphics Design</Tab>
            </TabList>

            <TabPanel>

               <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                  {
                     webJobs.map(job => <JobCategoryCard key={job._id} job={job}></JobCategoryCard>)
                  }
               </div>
            </TabPanel>
            <TabPanel>

               <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                  {
                     dmJobs.map(job => <JobCategoryCard key={job._id} job={job}></JobCategoryCard>)
                  }
               </div>
            </TabPanel>
            <TabPanel>

               <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                  {
                     gsJobs.map(job => <JobCategoryCard key={job._id} job={job}></JobCategoryCard>)
                  }
               </div>
            </TabPanel>
         </Tabs>
         <div className='my-11'>
            <h1 className='font-bold text-5xl text-center my-9'>Featured Jobs</h1>
            <div className='space-y-1'>
               {
                  featuredJobs.map(job => <FeaturedCard key={job._id} job={job}></FeaturedCard>)
               }
            </div>
         </div>
      </div>
   );
};

export default BrowseByCategory;