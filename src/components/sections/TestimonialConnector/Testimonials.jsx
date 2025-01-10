import React from "react";
import TestimonialSlider from "../utils/TestimonialSlider";
import { testimonials } from "../../../mockData/testimonialsConnectorData";
import TestimonialConnectorSlider from "../utils/TestimonialConnectorSlider";

const TestimonialsConnector = () => {
  return (
    <section className="Testimonial pt-0">
      <div className="container">
        <div className="d-flex flex-column gap-lg-5 gap-4">
          {testimonials.map((testimonial, index) => (
            <TestimonialConnectorSlider
              img={testimonial.img}
              Comma={testimonial.Comma}
              description={testimonial.description}
              name={testimonial.name}
              title={testimonial.title}
              stars={testimonial.stars}
              key={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsConnector;
