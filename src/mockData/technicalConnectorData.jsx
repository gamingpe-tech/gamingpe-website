import paymentmethods1 from "../assets/images/index/localpayment1.png";
import paymentmethods2 from "../assets/images/index/localpayment2.png";
import paymentmethods3 from "../assets/images/index/channel1.png";
import paymentmethods4 from "../assets/images/index/channel1.png";
import paymentmethods5 from "../assets/images/index/ai1.png";
import paymentmethods6 from "../assets/images/index/ai2.png";



export const partnersLogos = [
  { src: paymentmethods1, alt: "paymentmethods1" },
  { src: paymentmethods3, alt: "paymentmethods3" },
  { src: paymentmethods2, alt: "paymentmethods2" },
  { src: paymentmethods5, alt: "paymentmethods5" },
  { src: paymentmethods4, alt: "paymentmethods4" },
  { src: paymentmethods6, alt: "paymentmethods6" },
];

export const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 5000,
    cssEase: "linear",
    slidesToShow: 4,
    slidesToScroll: 1,
    rtl: false,
    pauseOnHover: true,
    draggable: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 481,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 321,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };