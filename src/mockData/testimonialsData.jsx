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
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    name: "Tom Hiddellston",
    title: "Entrepreneur",
    stars: 5,
  },
  {
    img: SliderImg2,
    Comma: Comma,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    name: "Johnny Stone",
    title: "Developer",
    stars: 4,
  },
  {
    img: SliderImg3,
    Comma: Comma,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    name: "Stephen Stewart",
    title: "QA",
    stars: 3,
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
