import React from 'react';
import Banner from './Banner';
import BrowseByCategory from './BrowseByCategory';
import OurServices from './OurServices';

const Home = () => {
   return (
      <div>
         <Banner></Banner>
         <BrowseByCategory></BrowseByCategory>
         <OurServices></OurServices>
      </div>
   );
};

export default Home;