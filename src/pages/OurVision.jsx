import React, { useEffect } from "react";
import Header from "../components/sections/Header";
import SubPage_Hero from "../components/sections/SubPage_Hero";
import AboutGoal from "../components/sections/About/AboutGoal";
import Partners from "../components/sections/Partners";
import Simplicity from "../components/sections/About/Simplicity";
import Process from "../components/sections/Process";
import Stats from "../components/sections/About/Stats";
import Team from "../components/sections/About/Team";
import Testimonials from "../components/sections/Testimonials";
import NewsLetter from "../components/sections/NewsLetter";
import Footer from "../components/sections/Footer";
import { subPageHeroData } from "../mockData/sectionData";
import OurVisionPage from "../components/sections/About/OurVision";
import VisionStats from "../components/sections/About/VisionStats";
import OurVisionTestimonials from "../components/sections/OurVisionTestimonials";

const OurVision = () => {
  const { title, description } = subPageHeroData.ourvision;

  return (
    <>
      <div className="three_section_bg">
        <Header />
        <SubPage_Hero title={title} description={description} />
        <OurVisionPage />
      </div>
      <VisionStats />
      <div className="two_section_bg">
        <OurVisionTestimonials />
        <NewsLetter />
        <Footer />
      </div>
    </>
  );
};

export default OurVision;
