import banner from "../assets/2.svg";
import Banner from "../shared/banner";
import { useNavigate } from "react-router-dom";

const Home = () => {
  let navigate=useNavigate();
  const handleclick=()=>{
    let path ='/cmpofgpu';
    navigate(path)
  }
  return (
    <div className="md:px-12 p-4  max-w-screen-2xl mx-auto mt-24" id="home">
      <Banner
        banner={banner}
        heading="ADMIN METHOD"
        subheading="project identifies this challenge as a focal point, recognizing that accurate and real-time pricing predictions are paramount for fostering confidence and facilitating smooth transactions."
        btn1="Get Started"
        handleclick={handleclick}
      />
    </div>
  );
};

export default Home;
