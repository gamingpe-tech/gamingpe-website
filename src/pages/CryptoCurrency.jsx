import React from "react";
import Header from "../components/sections/Header";
import SubPage_Hero from "../components/sections/SubPage_Hero";
import PricingSection from "../components/sections/Pricing";
import FAQ from "../components/sections/FAQ";
import NewsLetter from "../components/sections/NewsLetter";
import Footer from "../components/sections/Footer";
import { subPageHeroData } from "../mockData/sectionData";
import APIIntegrationPage from "../components/sections/APIIntegration";
import CryptoCurrencyPage from "../components/sections/CryptoCurrencyPage";

const CryptoCurrency = () => {
  const { title, description } = subPageHeroData.cryptocurrency;

  return (
    <>
      <div className="three_section_bg">
        <Header />
        <SubPage_Hero title={title} description={description} />
        <CryptoCurrencyPage />
      </div>
      {/* <FAQ /> */}
      <div className="two_section_bg">
        <NewsLetter />
        <Footer />
      </div>
    </>
  );
};

export default CryptoCurrency;
