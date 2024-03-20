import { GrLanguage } from "react-icons/gr";
import logo from "../assets/logo.png";
import { useState } from "react";
import { FaXmark, FaBars } from "react-icons/fa6";
// import link form react scroll
import { Link } from "react-router-dom";
import Cpmofgpu from "./Cpmofgpu";
import { useNavigate } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Cmppage from "./pages/Cmppage"
const Navbar = () => {
  const [ismenuopen, setismenuopen] = useState(false);

  const toggelmenu = () => {
    setismenuopen(!ismenuopen);
  };
  
  const navitems = [
    { link: "OVERVIEW", path: "/" },
    { link: "CPM OF GPU", path: "/cmppage" },

  ];

  return (
    <>
      <nav className="bg-white md:px-14 p-4 max-w-screen-3xl border-b mx-aut0 text-primary fixed top-0 right-0 left-0">
        <div className="text-lg container mx-auto flex justify-between items-center font-medium">
          <div className=" flex space-x-14 items-center">
            <Link
              to="/homepage"
              className=" text-2xl font-semibold flex items-center space-x-3 text-primary"
            >
              <img
                src={logo}
                alt=""
                className="w-10 inline-block items-center"
              />
              <span>EVERTH PC</span>
            </Link>
            <ul className="md:flex space-x-12 hidden">
                <Link to='/homepage'  className="block hover:text-gray-300 cursor-pointer">HOME</Link>
                <Link to='/cmpofgpu'  className="block hover:text-gray-300 cursor-pointer">CMP OF GPU</Link>
                <Link to='/homepage'  className="block text-red-600 hover:text-red-300 cursor-pointer">TRADE (upcoming)</Link>
            </ul>
          </div>
 
          
          {/*menu button only on mobile display  */}
          <div className=" md:hidden ">
            <button
              onClick={toggelmenu}
              className="text-white focus:outline-none focus:text-gray-300"
            >
              {ismenuopen ? (
                <FaXmark className="w-6 h-6 text-primary" />
              ) : (
                <FaBars className="w-6 h-6 text-primary" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/*nav item for mobile devices*/}
      <div
        className={`space-y-4 px-4 pt-24 pb-5 bg-secondary  text-xl ${
          ismenuopen ? "block fixed top-0 right-0 left-0 " : "hidden"
        }`}
      >
      
          <Link
            className="block text-white hover:text-gray-300 "
            onClick={toggelmenu}
          >
           
          </Link>
     
      </div>
    </>
  );
};

export default Navbar;
