import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { Tilt } from "react-tilt";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
const ServiceCard = ({ title, icon, index }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full  green-pink-gradient p-[1px] rounded-[20px] shadow-card  "
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[250px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] text-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};
const About = () => {
  console.log(services.title);
  return (
    <>
      <motion.div variants={textVariant}>
        <p className={styles.sectionSubText}>Introduction </p>
        <h2 className={styles.sectionHeadText}>Overview .</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Étudiant en 2ème année Master spécialisé en Services Web et Multimédia,
        je suis à la recherche d'un stage pour mon Projet de Fin d'Études (PFE)
        alliant développement web et pratique de DevOps.{" "}
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10 ">
        {services.map((services, index) => {
          return (
            <ServiceCard key={services.title} index={index} {...services} />
          );
        })}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
