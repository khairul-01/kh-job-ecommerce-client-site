import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import JobCategoryCard from './JobCategoryCard';

const BrowseByCategory = () => {
   const jobs = useLoaderData();
   const webJobs = jobs.filter(job => job.category === "Web Development")
   const dmJobs = jobs.filter(job => job.category === "Digital Marketing")
   const gsJobs = jobs.filter(job => job.category === "Graphics Design")

   return (
      <div className='my-12'>
  
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
      </div>
   );
};

export default BrowseByCategory;