import React from "react";
import Accordian from "../utils/Accordian";
import { faqData } from "../../../mockData/FaqData";

const QuestionsFAQ = () => {
  return (
    <section className="FAQ QuestionFAQ pt-0">
      <div className="container">
        <div className="row gy-lg-5 gy-4 justify-content-center">
          <div className="col-md-10">
            <div className="text-center text-md-start">
              <h4>How to USe?</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
            <Accordian data={faqData} />
          </div>
          <div className="col-md-10">
            <div className="text-center text-md-start">
              <h4>Fee Charges and features</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
            <Accordian data={faqData} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuestionsFAQ;
