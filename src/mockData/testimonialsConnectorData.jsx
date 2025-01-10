import SliderImg1 from "../assets/images/icons/localizedpayment.svg";
import SliderImg2 from "../assets/images/icons/channel.svg";
import SliderImg3 from "../assets/images/icons/ai.svg";
import Comma from "../assets/images/icons/Comma.svg";
import { RiArrowLeftLine, RiArrowRightLine } from "@remixicon/react";

export const testimonials = [
  {
    img: SliderImg1,
    Comma: Comma,
    description:
      "The traditional payment method world is a bricks and mortar building with a product to sell, limiting the number of customers that this merchant can target in their stores. Our localized online payment connector not only allows a traditional merchant to grow their business nationally but also allows them to target other growth regions outside their country with Gamingpe's software technology.",
    // name: "Tom Hiddellston",
    name: "Localized Payment Connector",
    stars: 5,
  },
  {
    img: SliderImg2,
    Comma: Comma,
    description:
      "Gamingpe's is an Omni Channel connector with the functionality to connect merchants and processors to various local payment types without causing friction with the user experience and customer flow. This allows our merchants to grow a global business without having to worry about integrating to each local payment method per country.",
    // name: "Johnny Stone",
    name: "Omni Channel Connector",
    stars: 5,
  },
  {
    img: SliderImg3,
    Comma: Comma,
    description:
      "Gamingpe's AI machine learning technology means the system will always keep improving as it understands customer behaviors in different regions. This means our local technology per region is unparalleled in terms of customer approval as the software efficacy keeps improving itself with time.",
    // name: "Stephen Stewart",
    name: "AI Machine Learning Technology",
    stars: 5,
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
