import { useState } from "react";

import green from "../assets/green.png"
import red from "../assets/red.png"
import {motion} from "framer-motion"
import { fadeIn } from "../shared/Variants"


const Pricing = () => {
  const [isyearly, setisyearly] = useState(true);

  const packages = [
    {
      name: "start",
      mounth: 19,
      yearlyprice: 199,
      description:
        "A common form of Lorem ipsum reads: Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        f1: green,
        f2: green,
        f3: red,
        f4: red,
        f5: red,
    },
    // {
    //   name: "Advance",
    //   mounth: 39,
    //   yearlyprice: 399,
    //   description:
    //     "A common form of Lorem ipsum reads: Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    //     f1: green,
    //     f2: green,
    //     f3: green,
    //     f4: green,
    //     f5: red,
    // },
    // {
    //   name: "Premium",
    //   mounth: 59,
    //   yearlyprice: 599,
    //   description:
    //     "A common form of Lorem ipsum reads: Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    //     f1: green,
    //     f2: green,
    //     f3: green,
    //     f4: green,
    //     f5: green,
    // },
  ];

  return (
    <div className="md:px-14 p-4 max-w-s mx-auto py-10 " id="pricing">
      <div className="text-center ">
        <h2 className="md:text-5xl text-3xl text-primary font-extrabold mb-2">
          Here are all our plans
        </h2>
        <p className="text-tartiary md:w-1/3 mx-auto px-4">
          A simple paragraph is comprised of three major components. The which
          is often a declarative sentence.
        </p>
        {/* toggle pricing */}
        <div className="mt-16">
          <label
            htmlFor="toggle"
            className="inline-flex items-center cursor-pointer"
          >
            <span className="mr-8 text-2xl font-semibold">Monthly</span>
            <div className="w-14 h-6 bg-gray-300 rounded-full transition-all duration-300">
              <div
                className={`w-6 h-6 rounded-full ${
                  isyearly ? "bg-primary ml-8" : "bg-gray-500"
                }`}
              ></div>
            </div>
            <span className="ml-8 text-2xl font-semibold">Yearly</span>
          </label>
          <input
            type="checkbox"
            id="toggle"
            className="hidden"
            checked={isyearly}
            onChange={() => setisyearly(!isyearly)}
          />
        </div>
      </div>
      {/*pricing cards*/}
      <motion.div variants={fadeIn("up",0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once:false,amount:0.}} className="grid justify-center sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-20 md:w-11/12 mx-auto">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className="border py-10 md:px-6 px-4 rounded-3xl shadow-3xl"
          >
            <h3 className="text-3xl font-bold text-center text-primary">
              {pkg.name}
            </h3>
            <p className="text-center text-tartiary my-5">{pkg.description}</p>
            <p className="mt-5 text-4xl text-center text-secondary font-bold">
              {isyearly ? `$${pkg.yearlyprice}` : `$${pkg.mounth}`}
              <span className="text-base text-tartiary font-medium">
                {isyearly ? "/yearly" : "/month"}
              </span>
            </p>
            <ul className="mt-4 space-y-2 px-4" id="pricing">
                <li className="flex gap-5 items-center"><img src={pkg.f1} alt="/" className="w-4 h-4"/>Videos of Lessons</li>
                <li className="flex gap-5 items-center"><img src={pkg.f2} alt="/" className="w-4 h-4"/>Homework check</li>
                <li className="flex gap-5 items-center"><img src={pkg.f3} alt="/" className="w-4 h-4"/>Additional practical task</li>
                <li className="flex gap-5 items-center"><img src={pkg.f4} alt="/" className="w-4 h-4"/>Monthly conferences</li>
                <li className="flex gap-5 items-center"><img src={pkg.f5} alt="/" className="w-4 h-4"/>Personal advice from teachers</li>
            </ul>
            <div className="w-full mx-auto mt-8 flex items-center justify-center">
            <button className="btnprimary ">Get started </button>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Pricing;
