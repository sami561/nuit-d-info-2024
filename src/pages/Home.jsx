import { Hero, StarsCanvas } from "../components";
import Footer from "../components/Footer";

const Home = ({ theme }) => {
  return (
    <div
      className={`relative z-0 ${
        theme === "light"
          ? "bg-white-100 text-black-100"
          : "bg-primary text-white-100"
      }`}
    >
      <div className="relative z-0">
        <StarsCanvas />
        <Hero />
        <Footer theme={theme} />
      </div>
    </div>
  );
};

export default Home;
