import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const BrowseByCategory = () => {
   return (
      <div>
         <h1 className='text-center text text-5xl text-blue-600 my-9'>Browse By Category</h1>
         <Tabs>
            <TabList>
               <Tab>Web Development</Tab>
               <Tab>Digital Marketing</Tab>
               <Tab>Graphics Design</Tab>
            </TabList>

            <TabPanel>
               <h2 className='my-9 text-3xl'>Any content 1</h2>
               <h2 className='my-9 text-3xl'>Any content 1</h2>
               <h2 className='my-9 text-3xl'>Any content 1</h2>
               <h2 className='my-9 text-3xl'>Any content 1</h2>
               <h2 className='my-9 text-3xl'>Any content 1</h2>
            </TabPanel>
            <TabPanel>
               <h2>Any content 2</h2>
            </TabPanel>
         </Tabs>
      </div>
   );
};

export default BrowseByCategory;