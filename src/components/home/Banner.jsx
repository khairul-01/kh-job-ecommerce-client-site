import banner1 from '../../assets/images/ecommerce banner1.jpg'
import banner2 from '../../assets/images/ecommerce banner 2.jpg'
import banner3 from '../../assets/images/ecommerce banner 3.png'
import banner4 from '../../assets/images/e-commerce-banner-4.jpg'
import { motion } from 'framer-motion';

const Banner = () => {
   return (
      <motion.div
         initial={{ opacity: 0, scale: 0.8 }}
         animate={{ opacity: 1, scale: 1 }}
         transition={{ duration: 1 }}

         whileHover={{ scale: 0.95 }}
         whileTap={{ scale: 0.9 }}

      >
         {/* Banner content */}
         <div className="carousel w-full mt-3">

            <div id="slide1" className="carousel-item relative w-full">
               <img src={banner1} className="w-full rounded-lg" />
               <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide4" className="btn btn-circle">❮</a>
                  <a href="#slide2" className="btn btn-circle">❯</a>
               </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
               <img src={banner3} className="w-full rounded-lg" />
               <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide1" className="btn btn-circle">❮</a>
                  <a href="#slide3" className="btn btn-circle">❯</a>
               </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
               <img src={banner4} className="w-full rounded-lg" />
               <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide2" className="btn btn-circle">❮</a>
                  <a href="#slide4" className="btn btn-circle">❯</a>
               </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
               <img src={banner2} className="w-full rounded-lg" />
               <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide3" className="btn btn-circle">❮</a>
                  <a href="#slide1" className="btn btn-circle">❯</a>
               </div>
            </div>
         </div>
      </motion.div>

   );
};

export default Banner;