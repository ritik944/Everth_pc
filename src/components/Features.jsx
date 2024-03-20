import feature from "../assets/safe-deal.jpg";
import feature1 from "../assets/Untitled design.svg"
import feature2 from "../assets/Untitled design (1).svg"
import {motion} from "framer-motion"
import { fadeIn } from "../shared/Variants"

const Features = () => {
  return (
    <div className="my-24 md:px-14 px-4 max-w-screen-2xl mx-auto  " id="feature">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
        <div  className="lg:w-1/4 ">
          <h3 className="text-3xl text-primary font-bold lg:w-1/2 mb-3">
            Why we are better than others
          </h3>
          <p className="text-base text-tartiary ">
          As a result, the project charts a trajectory for future phases, exploring advanced methodologies such as web scraping to automate data gathering. 
          </p>
        </div>


        {/*feature cards */}
        <div 
          initial="hidden"
          whileInView={"show"}
          viewport={{once:false,amount:0.75}} className="w-full lg:w-3/4">
          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-start md:gap-12 gap-8">
            <div
              className="bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-96 shadow-3xl 
          p-8 items-center flex justify-center hover:-translate-y-4 transition-all duration-300 cursor-pointer"
            >
              <div>
                <img src={feature} alt="" />
                <h5 className="text-2xl-primary font-semibold px-5  text-center">
                Safe Deal
                </h5>
                <p className="text-center">Implements a secure transaction environment using JavaScript and Node.js.</p>
              </div>
            </div>
            <div
              className="bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-96 shadow-3xl 
          p-8 items-center flex justify-center hover:-translate-y-4 transition-all duration-300 cursor-pointer md:mt-16"
            >
              <div>
                <img className="h-60" src={feature1} alt="" />
                <h5 className="text-2xl-primary font-semibold px-5  text-center">
                Real-time Market Adaptability
                </h5>
                <p className="text-center">Employs Node.js for real-time updates, ensuring adaptability to market trends.
</p>
              </div>
            </div>
            <div
              className="bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-96 shadow-3xl 
          p-8 items-center flex justify-center hover:-translate-y-4 transition-all duration-300 cursor-pointer"
            >
              <div>
                <img className="h-45" src={feature2} alt="" />
                <h5 className="text-2xl-primary font-semibold px-5  text-center">
                Responsive User Interface with React Components
                </h5>
                <p className="text-center">Utilizes React components for a modular and responsive user interface</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
