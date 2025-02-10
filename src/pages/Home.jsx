import Header from "../components/sections/Header";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Goal from "../components/sections/Goal";
import Partners from "../components/sections/Partners";
import Process from "../components/sections/Process";
import Services from "../components/sections/Services";
import Visa from "../components/sections/Visa";
import NewsLetter from "../components/sections/NewsLetter";
import Footer from "../components/sections/Footer";

const Home = () => {
  return (
    <>
      <div className="three_section_bg">
        <Header />
        <Hero />
        <About />
      </div>
      <Goal />
      <Partners />
      <Process />
      <Services />
      <Visa />
      {/* <Pricing /> */}
      {/* <Testimonials /> */}
      {/* <FAQ /> */}
      {/* <Blog /> */}
      <div className="two_section_bg">
        <NewsLetter />
        <Footer />
      </div>
    </>
  );
};

export default Home;
