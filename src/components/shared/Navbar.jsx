
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/kh-ecommerce logo.jpg'
import user from '../../assets/images/user photo.png'

const Navbar = () => {
   const navLinks = <>
      <li><NavLink to='/'>Home</NavLink></li>
      <li><NavLink to='/addJob'>Add Job</NavLink></li>
      {/* <li><NavLink to='/myPostedJob'>My Posted Jobs</NavLink></li>
      <li><NavLink to='/myBids'>My Bids</NavLink></li>
      <li><NavLink to='/bidRequets'>Bid Requests</NavLink></li> */}
      <li><NavLink to='/login'>Login</NavLink></li>
   </>
   return (
      <div>
         <div className="navbar bg-base-100">
            <div className="navbar-start">
               <div className="dropdown">
                  <label tabIndex={0} className="btn btn-ghost lg:hidden">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                  </label>
                  <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                     {navLinks}
                  </ul>
               </div>
               <a className="flex items-center btn btn-ghost text-xl py-1"><img className="h-7 w-7" src={logo} alt="KH Ecommerce Logo" /><span className="font-bold text-orange-500">KH</span> Ecommerce</a>
            </div>
            <div className="navbar-center hidden lg:flex">
               <ul className="menu menu-horizontal px-1">
                  {navLinks}
               </ul>
            </div>
            <div className="navbar-end">
               <a className="btn"><img className='h-5' src={user} alt="user photo" /></a>
            </div>
         </div>
      </div>
   );
};

export default Navbar;