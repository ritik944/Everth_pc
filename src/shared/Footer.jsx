import { Input } from "postcss";
import logo from "../assets/logo.png";
import facebook from "../assets/facebook.png"
import instagram from "../assets/instagram.png"
import linkein from "../assets/linkedin.png"
import twitter from "../assets/twitter.png"
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-primary md:px-12 p-4 max-w-screen-3xl mx-auto mt-20 text-white">
      <div className="my-12 flex flex-col md:flex-row gap-10">
        <div className="md:w-1/2 space-y-8">
          <Link
            href="/"
            className=" text-2xl font-semibold flex items-center space-x-3 text-primary"
          >
            <img src={logo} alt="" className="w-10 inline-block items-center" />
            <span className="text-white">EVERTH PC</span>
          </Link>
          <p className="md:w-1/2 ">
            WE deals in second hand graphic card this website lets you know the price of your used graphic card.
          </p>
          <div>
            <input
              type="email "
              name="email"
              id="email"
              placeholder="your email"
              className="bg-[#9A7AF159] py-2 px-4 rounded-md focus:outline-none"
            />
            <input
              type="submit"
              value="subsribe"
              className="px-4 py-2 bg-secondary rounded-md -ml-2
            cursor-pointer hover:bg-pink hover:text-primary duration-300 transition-all"
            />
          </div>
        </div>

        {/*footer navigations  */}
        <div className="md:w-1/2 flex flex-col md:flex-row flex-wrap justify-between gap-8 items-start">
          <div className="space-y-4 mt-5 ">
            <h4 className="text-xl">Platform</h4>
            <ul className="space-y-3 ">
              <Link to="/homepage" className="block hover:text-gray-300">
                Overview
              </Link>
              <Link to="/homepage" className="block hover:text-gray-300">
                Features
              </Link>
              <Link to="/homepage" href="/" className="block hover:text-gray-300">
                About
              </Link>
              <Link to="/homepage" className="block hover:text-gray-300">
                Pricing
              </Link>
            </ul>
          </div>
          <div className="space-y-4 mt-5 ">
            <h4 className="text-xl">Help</h4>
            <ul className="space-y-3 ">
              <Link to="/homepage" className="block hover:text-gray-300">
                How does it works?
              </Link>
              <Link href="/" className="block hover:text-gray-300">
                Where to ask question?
              </Link>
              <Link href="/" className="block hover:text-gray-300">
                How to play?
              </Link>
              <Link href="/" className="block hover:text-gray-300">
                What is needed for this?
              </Link>
            </ul>
          </div>
          <div className="space-y-4 mt-5 ">
            <h4 className="text-xl">Contacts</h4>
            <ul className="space-y-3 ">
              <p className=" hover:text-gray-300">(012) 1234-567-890</p>
              <p className=" hover:text-gray-300">123 xyz xyz</p>
              <p className=" hover:text-gray-300">
                qwuerybaihefv, qiwu - hrebcl
              </p>
              <p className=" hover:text-gray-300">095467</p>
            </ul>
          </div>
        </div>
      </div>
      <hr/>
      <div className="flex flex-col sm:flex-row gap-8 sm:items-center justify-between my-8">
        <p >@ EVERTH PC 2022 --- 2024. All rights reserved.</p>
        <div className="flex items-center space-x-5">
          <img src={facebook} alt="/" className="h-8 cursor-pointer hover:-translate-y-4 transition-all duration-300"/>
          <img src={instagram} alt="/" className="h-8 cursor-pointer hover:-translate-y-4 transition-all duration-300"/>
          <img src={twitter} alt="/" className="h-8 cursor-pointer hover:-translate-y-4 transition-all duration-300"/>
          <img src={linkein} alt="/" className="h-8 cursor-pointer hover:-translate-y-4 transition-all duration-300"/>
        </div>
      </div>
    </div>
  );
};

export default Footer;
