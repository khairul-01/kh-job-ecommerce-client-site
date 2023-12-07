
import { Helmet } from 'react-helmet-async';
import Banner from './Banner';
import BrowseByCategory from './BrowseByCategory';
import OurServices from './OurServices';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
   const jobs = useLoaderData();
   return (
      <div>
         <Helmet>
            <title>KH | HOME</title>
         </Helmet>
         <Banner></Banner>
         <BrowseByCategory jobs={jobs}></BrowseByCategory>
         <OurServices></OurServices>
      </div>
   );
};

export default Home;