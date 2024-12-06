import { motion } from "framer-motion";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { logo } from "../assets";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden h-[80vh]">
      {/* Content Section */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl w-full xl:w-[80%] flex flex-col  h-[80%]"
      >
        {/* Logo and Title */}
        <div className="flex items-center mb-4">
          <img
            src={logo}
            alt="EPI-Fraternité Logo"
            className="w-9 h-9 object-contain"
          />
          <p className="font-bold text-lg">
            <span className="text-purple-500">EPI-</span>
            <span className="text-cyan-400">FRATENITÉ SANS BANNIÉRES</span>
          </p>
        </div>

        {/* Section Description */}
        <p className={styles.sectionSubText}>
          We are a global community of developers, designers, and creators who
          are passionate about building the future of the web.
        </p>

        <Link
          to="/quiz"
          className="bg-cyan-400 py-3 px-8 rounded-xl text-white font-bold shadow-md mt-4 transition-transform transform hover:scale-105 mt-10 justify-center align-center w-[100%]"
          aria-label="Start Quiz"
        >
          <p className="flex justify-center align-center  "> Start Quiz </p>
        </Link>
        {/* Next Question Button */}
      </motion.div>

      {/* Earth Canvas */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px] w-full flex items-center justify-center"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Hero, "Hero");
