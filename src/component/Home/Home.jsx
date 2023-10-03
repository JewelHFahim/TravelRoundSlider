import MainSlider from "../MainSlider/MainSlider";
import Navbar from "../Navbar/Navbar";
import SocialIcons from "../../utils/SocialIcons";
import Btn from "../../utils/Btn";

const Home = () => {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <div className=" w-full absolute top-0 left-0 z-[999]">
        <Navbar />
      </div>
      <MainSlider />

      <div className="absolute bottom-[250px] right-[100px]">
        <SocialIcons />
      </div>

      <div className="absolute right-[100px] bottom-[103px] z-[100]">
        <Btn/>
      </div>
    </div>
  );
};

export default Home;
