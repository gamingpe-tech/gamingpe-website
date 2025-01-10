import Header from "../components/sections/Header";
import SubPage_Hero from "../components/sections/SubPage_Hero";
import NewsLetter from "../components/sections/NewsLetter";
import Footer from "../components/sections/Footer";
import { subPageHeroData } from "../mockData/sectionData";
import AboutServices from "../components/sections/About/AboutServices";
import AboutGoal from "../components/sections/About/AboutGoal";
import Partners from "../components/sections/Partners";
import Stats from "../components/sections/About/Stats";
import ConnectorServices from "../components/sections/About/ConnectorServices";
import TestimonialsConnector from "../components/sections/TestimonialConnector/Testimonials";
import TechnicalConnectorsLogos from "../components/sections/technicalConnectors";

const TechnicalConnector = () => {
  const { title, description } = subPageHeroData.technical_connector;

  return (
    <>
      <div className="three_section_bg">
        <Header />
        <SubPage_Hero title={title} description={description} />
        <ConnectorServices />
      </div>
      {/* <AboutGoal /> */}
      <div style={{padding:'100px 0px'}}>
      <TechnicalConnectorsLogos />
      </div>
      {/* <Simplicity /> */}
      {/* <Process /> */}
      {/* <Stats /> */}
      {/* <Team /> */}
      <TestimonialsConnector />
      <div className="two_section_bg">
        <NewsLetter />
        <Footer />
      </div>
    </>
  );
};

export default TechnicalConnector;
