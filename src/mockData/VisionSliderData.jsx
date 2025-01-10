import SliderImg1 from "../assets/images/slider/testimionalSlider_1.webp";
import SliderImg2 from "../assets/images/slider/testimionalSlider_2.webp";
import SliderImg3 from "../assets/images/slider/testimionalSlider_3.webp";
import Comma from "../assets/images/icons/Comma.svg";
import { RiArrowLeftLine, RiArrowRightLine } from "@remixicon/react";

export const testimonials = [
  {
    img: SliderImg1,
    Comma: Comma,
    description:
      "Please send us an email at info@gamingpe.com and we’ll connect you with the right team member to get in touch with you directly.",
    name: "General Inquiries",

  },
  {
    img: SliderImg2,
    Comma: Comma,
    description:
      "Please send us an email at technologyservices@gamingpe.com and tell us which specific solution you desire, and the correct group partner will get in touch with you directly.",
    name: "Seeking out a particular payment solution",
  },
  {
    img: SliderImg3,
    Comma: Comma,
    description:
      "As a thriving rapidly growing global organization, much opportunity exists for individuals seeking a challenging career in fintech and we are currently looking to fill many different positions – if you think you fit the mold, then please reach out to us at careers@gamingpe.com.",
    name: "Careers with Gamingpe",

  },
  {
    img: SliderImg3,
    Comma: Comma,
    description:
      "Gamingpe's innovative approach in the payments market has led to its exponential growth. By utilizing AI machine learning we have created a next generation Payment technology platform with the ability to “learn” payment behaviors.",
    name: "AI Machine Learning",
  },
];

const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <RiArrowLeftLine size={40} />
    </div>
  );
};

const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <RiArrowRightLine size={40} />
    </div>
  );
};

export const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplayspeed: 4000,
  arrows: true,
  prevArrow: <CustomPrevArrow />,
  nextArrow: <CustomNextArrow />,
};
