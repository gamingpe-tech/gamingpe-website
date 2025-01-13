import React, { useEffect } from "react";
import Header from "../components/sections/Header";
import SubPage_Hero from "../components/sections/SubPage_Hero";
import AboutServices from "../components/sections/About/AboutServices";
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
import AboutFlexibility from "../components/sections/About/AboutFlexibility";

const About = () => {
  const { title, description } = subPageHeroData.about;

  return (
    <>
      <div className="three_section_bg">
        <Header />
        <SubPage_Hero title={title} description={description} />
        <AboutServices />
      </div>
      {/* <AboutGoal /> */}
      <div style={{padding:'100px 0px 0px'}}>
         <Partners />
      </div>
     
      {/* <Simplicity /> */}
      {/* <Process /> */}
      <AboutFlexibility />
      <Stats />
      {/* <Team /> */}
      {/* <Testimonials /> */}
      <div className="two_section_bg">
        <NewsLetter />
        <Footer />
      </div>
    </>
  );
};

export default About;
