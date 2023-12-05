
import { Helmet } from 'react-helmet-async';
import Banner from './Banner';
import BrowseByCategory from './BrowseByCategory';
import OurServices from './OurServices';

const Home = () => {
   return (
      <div>
         <Helmet>
            <title>KH | HOME</title>
         </Helmet>
         <Banner></Banner>
         <BrowseByCategory></BrowseByCategory>
         <OurServices></OurServices>
      </div>
   );
};

export default Home;