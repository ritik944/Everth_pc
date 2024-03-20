import about from "../assets/about.png";
import about2 from "../assets/aboutpart2.png"
import {motion} from "framer-motion"
import { fadeIn } from "../shared/Variants"


const About = () => {
  return (
    <div className="md:px-14 p-4 max-w-s mx-auto space-y-10" id="about">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <motion.div 
        variants={fadeIn("right",0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once:false,amount:0.75}} className="md:w-1/2 ">
          <img src={about} alt="/" />
        </motion.div>
        <motion.div variants={fadeIn("left",0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once:false,amount:0.75}} className="md:w-2/5 ">
          <h3 className="md:text-5xl text-3xl text-primary font-bold mb-5 leading-normal">We have been improving our product <span className="text-secondary">for many years.</span></h3>
          <p className="text-tartiary text-lg mb-7">
            A good example of a paragraph contains a topic conclusion. 'There
            are many different kinds of animals that live in China.
          </p>
          <button className="btnprimary">Get Started</button>
        </motion.div>
      </div>
     
      {/* 2nd part  */}
      <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-8">
      <motion.div variants={fadeIn("up",0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once:false,amount:0.75}} className="md:w-1/2 ">
          <img src={about2} alt="/" />
        </motion.div>
        <motion.div variants={fadeIn("right",0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once:false,amount:0.75}} className="md:w-2/5">
          <h3 className="md:text-5xl text-3xl text-primary font-bold mb-5 leading-normal">You can Practice at any <span className="text-secondary">time convinent for you.</span></h3>
          <p className="text-tartiary text-lg mb-7">
            A good example of a paragraph contains a topic conclusion. 'There
            are many different kinds of animals that live in China.
          </p>
          <button className="btnprimary">Get Started</button>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
