import hero_Img from "../assets/images/index/hero_Img.webp";
import getStarted from "../assets/images/icons/getStarted.svg";
import aboutImg1 from "../assets/images/index/aboutImg_1.webp";
import aboutImg2 from "../assets/images/index/aboutImg_2.webp";
import processImg from "../assets/images/index/processImg.webp";
import servicesImg from "../assets/images/index/servicesImg.webp";
import servicesImg2 from "../assets/images/index/servicesImg2.webp";
import visa_Banner from "../assets/images/index/gamingPE_banner.png";
import visaCard from "../assets/images/index/visaCard.webp";
import pricingImg from "../assets/images/index/pricing_Img.webp";
import StatsImg from "../assets/images/index/Stats_Img.webp";
import globe from "../assets/images/index/globe.mp4";
import FeaturesHeroImg from "../assets/images/index/featuresHero_Img.webp";
import coreFeaturesImg from "../assets/images/index/coreFeatures.webp";
import card1 from "../assets/images/index/card1.svg";
import card2 from "../assets/images/index/card2.svg";
import card3 from "../assets/images/index/card3.svg";
import card4 from "../assets/images/index/card4.svg";
import card5 from "../assets/images/index/card5.svg";
import cryptopageimg from "../assets/images/index/cryptopageimg.png";

export const sectionData = {
  hero: {
    title: "Global",
    title2: "Payment Gateway",
    title3: "for Developing Markets",
    description:
      "Unlock global markets and step into new opportunities. Expand your reach, accelerate growth, and explore endless possibilities",
    images: {
      // hero_Img,
      getStarted,
    },
    // countries_image : [
    //   { country: "india", image: india, height: "90px" },
    //   { country: "brazil", image: brazil, height: "85px" },
    //   { country: "egypt", image: egypt, height: "47px" },
    //   { country: "turkey", image: turkey, height: "100px" },
    //   { country: "bangladesh", image: bangladesh, height: "100px" },
    //   { country: "vietnam", image: vietnam, height: "56px" },
    //   { country: "thailand", image: thailand, height: "92px" },
    // ],
    countries: [
      "India",
      "Brazil",
      "Egypt",
      "Turkey",
      "Bangladesh",
      "Vietnam",
      "Thailand",
    ],
  },
  about: {
    title: "About",
    description:
      "Gamingpe, founded in 2014, specializes in state-of-the-art payment processing and gateway technology. With expertise in payment solutions, risk management, and AI-driven innovations, we empower merchants to streamline operations and safeguard revenue. Our mission is to revolutionize payment experiences and enable global reach for businesses.",
    images: {
      aboutImg1,
      aboutImg2,
    },
    videoLink: {
      url: "https://www.youtube.com/embed/u31qwQUeGuM?si=o1Nt3XrgyYRKwJ13",
    },
    stats: [
      {
        value: "50M+",
        description:
          "Over 50 million transactions processed with the highest success rate.",
      },
      {
        value: "30+",
        description:
          "Available in over 30 languages to cater to a global audience.",
      },
    ],
    rating: {
      stars: 5,
      text: "We are supported with over 30+ languages ",
    },
  },
  goal: {
    title: "Fraud Protection",
    description:
      "Keep transactions secure with advanced fraud detection. Our solutions are designed to provide unparalleled security for your business.",
  },
  process: {
    title: "Simple payment gateway process",
    description:
      "GamingPe offers a seamless payment gateway with straightforward steps. Users can easily select their preferred payment method, enter details securely, and confirm their purchase. The process is quick, with minimal clicks, ensuring an effortless transaction experience while maintaining top-notch security throughout.",
      imagembl: processImg,
    cards:{card1,card2,card3,card4,card5}
  },
  services: {
    title: "Insightful Data Rich Analytics",
    description:
      "Leverage real-time insights to understand payment trends, optimize strategies, and drive growth in emerging markets with GamingPe's data-driven platform.",
    image: servicesImg2,
  },
  visa: {
    title: "Just One API Easy Integration",
    description: [
      "Gamingpe's One API Integration connects businesses to multiple payment providers with a single REST API. It eliminates the need for multiple gateways, simplifying operations and offering local payment options seamlessly.",
      "This scalable solution grows with your business, allowing easy addition of new payment methods. With centralized updates and maintenance, Gamingpe ensures a smooth global payment experience.",
    ],
    images: {
      banner: visa_Banner,
      card: visaCard,
    },
    cards:{card1,card2,card3,card4,card5},
    integrations: {
      count: "100+",
      text: "Global Payment Providers",
      description:
        "Simplify Your Payment Integration with Just One API Integration",
    },
  },
  pricing: {
    title: "Economical Pricing Options",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry when an unknown printer took a galley of type and scrambled.",
    image: pricingImg,
  },
  api_integration: {
    title: "Just One API Integration",
    description:
      "Streamline Your Payment Integration with a API",
    image: pricingImg,
  },
  cryptocurrency: {
    title: "Integrating Cryptocurrency Payments",
    description:
      "Enable secure, global crypto payments with Gamingpe.",
    image: cryptopageimg,
  },
  testimonials: {
    title: "Trusted By Professionals",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry when an unknown printer took a galley of type and scrambled.",
  },
  Visiontestimonials: {
    title: "Experienced Leadership",
    description:
      "Connect with Gamingpe for payment solutions, career opportunities, or inquiries, leveraging AI-driven innovation in fintech.",
  },
  faq: {
    title: "Frequently asked questions",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry when an unknown printer took a galley of type and scrambled.",
  },
  blog: {
    title: "Our latest News & Events",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry when an unknown printer took a galley of type and scrambled.",
  },
  aboutServices: {
    title: "Financial Goals are Our Priority",
    description: [
      "Gamingpe, founded in 2014 by experts in payment processing, gateway technology, and risk management, is dedicated to revolutionizing digital payments. Our mission is to provide cutting-edge payment solutions that simplify operations, enhance payment experiences, and protect merchant revenue. With a focus on global card acquisition, digital payments, and AI-driven risk management, Gamingpe enables businesses to overcome traditional barriers and expand internationally.",
    ],
    image: servicesImg,
  },
  ourVision: {
    title: "A Team of Innovators",
    description: [
      "The founders realized that in order to be successful in existing as well as emerging ecommerce markets an excellent client journey was paramount. Gamingpe was designed from the ground up to offer market changing innovative features and technology. Gamingpe created a team of innovators, technologists and payments enthusiasts who were focused on their mission to bridge the gaps between technology, intelligence and payments.",
      "Gamingpe's mission is ensuring our merchants along with their customers receive the best seamless customer experience that maximizes sales, profits, client retention. Our vision is to become a global payment connector Brand known for its diversity of localized payment options within emerging markets countries."
    ],
    image: servicesImg,
  },
  connectorServices: {
    title: "Connector Technology Services",
    description: [
      "Welcome to Connector Technology Services, your trusted partner in payment solutions. We provide seamless and secure transaction processing to enhance business operations. Experience reliable service tailored to meet your specific needs, ensuring your enjoy a hassle-free payment. Let us help you connect to the future of payments.",
    ],
    image: servicesImg,
  },
  simplicity: {
    title: "Replacing Complexity With Simplicity",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.",
  },
  stats: {
    title: "We are round the world",
    description:
      "GamingPe is a global platform, connecting gamers from every corner of the world. No matter where you're located, our seamless services ensure you enjoy a top-notch gaming experience. With regional servers and localized support, GamingPe bridges the gap, bringing a unified and vibrant community together across continents.",
    image: StatsImg,
    video:globe,
  },
  visionstats: {
    title: "Our Overview",
    description:[
      "GamingPE was founded in 2015 by industry veterans with deep expertise in payments technology and cybersecurity. Born from a vision to revolutionize global payments, GamingPE is not just about transactions—it's about transforming experiences.",
      "We are pioneering the future of payments with our cutting-edge alternative global payment connector, setting new benchmarks in market-leading payment technology. Harnessing the power of AI and leveraging the latest innovations, we ensure seamless and secure transactions across the globe.",
      "At GamingPE, we are committed to pushing the boundaries of what's possible. Our solutions are designed to adapt and evolve, meeting the dynamic needs of the gaming industry and beyond. We empower businesses to thrive in an ever-changing digital landscape, providing them with the tools and technologies to stay ahead. Join us on our journey as we continue to innovate and redefine the world of payments, one transaction at a time."
    ],
    image: StatsImg,
    video:globe,
  },
  team: {
    title: "Who’s behind",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  featuresHero: {
    image: FeaturesHeroImg,
    videoUrl: "https://www.youtube.com/embed/u31qwQUeGuM?si=o1Nt3XrgyYRKwJ13",
  },
  coreFeatures: {
    title: "Core Features",
    description:
      "Experience hassle-free gaming with transparent pricing, swift delivery, and secure transactions, backed by 24/7 support and a money-back guarantee.",
    image: coreFeaturesImg,
  },
};

export const subPageHeroData = {
  about: {
    title: "ABOUT US",
    description:
      "Make Gaming Transactions Easy",
  },
  ourvision: {
    title: "OUR VISION",
    description:
      "Bridging technology, intelligence, and payments for a seamless client journey.",
  },
  blog: {
    title: "Our latest News & Events",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry when an unknown printer took a galley of type and scrambled.",
  },
  features: {
    title: "FEATURES",
    description:
      "Gamingpe streamlines global payments with a single API, offering secure, scalable solutions to enhance transactions and drive business growth.",
  },
  technical_connector: {
    title: "Technical Connector",
    description:
      "Empowering seamless, global payment solutions with AI-driven innovation.",
  },
  pricing: {
    title: "PRICING",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },

  api_integration: {
    title: "Secure Payment Solutions",
    description:
      "Empowering partners with seamless Debit, e-wallets, and crypto transactions for gaming worldwide.",
  },
  cryptocurrency: {
    title: "Cryptocurrency Payment Solutions",
    description:
      "Empowering partners with seamless Debit, e-wallets, and crypto transactions for gaming worldwide.",
  },
  contact: {
    title: "Contact",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  team: {
    title: "MEET OUR TEAM",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  testimonials: {
    title: "TESTIMONIALS",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  faq: {
    title: "Questions",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
};
