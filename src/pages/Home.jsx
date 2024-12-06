import { Hero, StarsCanvas } from "../components";
/* import Footer from "../components/Footer"; */

const Home = () => {
  return (
    <div className="relative z-0 bg-primary">
      <div className="relative z-0">
        <StarsCanvas />
        <Hero />
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default Home;
