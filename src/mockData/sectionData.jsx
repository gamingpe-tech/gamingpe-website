import getStarted from "../assets/images/icons/getStarted.svg";
import aboutImg1 from "../assets/images/index/aboutImg_1.webp";
import aboutImg2 from "../assets/images/index/aboutImg_2.webp";
import processImg from "../assets/images/index/processImg.webp";
import servicesImg from "../assets/images/index/servicesImg.webp";
import gamingpeLogo from "../assets/images/index/logo.svg";
import servicesImg2 from "../assets/images/index/servicesImg2.webp";
import servicesImg3 from "../assets/images/index/chat.png";
import visa_Banner from "../assets/images/index/aboutBanner.png";
import visaCard from "../assets/images/index/visaCard.webp";
import pricingImg from "../assets/images/index/pricing_Img.svg";
import StatsImg from "../assets/images/index/Stats_Img.svg";
import globe from "../assets/images/index/globe.mp4";
import FeaturesHeroImg from "../assets/images/index/featuresHero_image.webp";
import coreFeaturesImg from "../assets/images/index/coreFeatures.webp";
import card1 from "../assets/images/index/card1.svg";
import card2 from "../assets/images/index/card2.svg";
import card3 from "../assets/images/index/card3.svg";
import card4 from "../assets/images/index/card4.svg";
import card5 from "../assets/images/index/card5.svg";
import cryptopageimg from "../assets/images/index/cryptopageimg.png";
import connector_img from "../assets/images/index/connector_img.webp";

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
    cards: { card1, card2, card3, card4, card5 },
  },
  services: {
    title: "Insightful Data Rich Analytics",
    description:
      "Leverage real-time insights to understand payment trends, optimize strategies, and drive growth in emerging markets with GamingPe's data-driven platform.",
    image: servicesImg2,
    image2: servicesImg3,
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
    cards: { card1, card2, card3, card4, card5 },
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
    description: "Streamline Your Payment Integration with an API",
    image: pricingImg,
  },
  cryptocurrency: {
    title: "Integrating Cryptocurrency Payments",
    description: "Enable secure, global crypto payments with Gamingpe.",
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
    heading: "Gamingpe's Principles",
    title: "Innovation",
    description:
      "Leading the Future of Digital Payments Our relentless pursuit of groundbreaking technology and advanced solutions ensures we stay ahead in the rapidly evolving world of e-commerce payments.",
    title2: "Accessibility",
    description2:
      "Empowering Merchants and Consumers Globally We provide seamless, flexible payment options that are accessible to everyone, enabling merchants to reach new markets and consumers to enjoy smooth, secure transactions.",
    title3: "Expertise",
    description3:
      "Delivering Unmatched Payment Strategies With our deep industry knowledge and commitment to excellence, we offer bespoke solutions that enhance the payment experience and protect merchants' revenue.",
    comonDesc:
      "These pillars reflect Gamingpe’s dedication to innovation, inclusivity, and expert guidance in the digital payment landscape. How do these align with your vision? If you'd like any further adjustments, feel free to let me know!",
    image: servicesImg,
  },
  aboutFlexibility: {
    title: "Harnessing the Power of AI for Seamless Payment Solutions",
    description:
      "At Gamingpe, we leverage the cutting-edge capabilities of AI to connect consumers with a diverse range of e-commerce merchants, catering to individual passions and preferences.",
    title2: "Flexible, Interest-Free Payments and Personalized Controls",
    description2:
      "Our commitment to innovation ensures that users enjoy flexible, interest-free payment options and personalized controls, empowering them to manage their finances effortlessly while pursuing their passions.",
    title3: "Empowering Merchants for Enhanced Access and Growth",
    description3:
      "By partnering with Gamingpe, merchants can expand their reach and offer more choices to consumers. This collaboration leads to increased sales, driven by a new generation of empowered customers who appreciate the seamless and secure payment experience we provide.",
  },
  ourVision: {
    title: "A Team of Innovators",
    description: [
      "The founders realized that in order to be successful in existing as well as emerging e-commerce markets an excellent client journey was paramount. Gamingpe was designed from the ground up to offer market changing innovative features and technology. Gamingpe created a team of innovators, technologists and payments enthusiasts who were focused on their mission to bridge the gaps between technology, intelligence and payments.",
      "Gamingpe's mission is ensuring our merchants along with their customers receive the best seamless customer experience that maximizes sales, profits & client retention. Our vision is to become a global payment connector Brand known for its diversity of localized payment options within emerging markets countries.",
    ],
    image: gamingpeLogo,
  },
  connectorServices: {
    title: "Connector Technology Services",
    description: [
      "Welcome to Connector Technology Services, your trusted partner in payment solutions. We provide seamless and secure transaction processing to enhance business operations. Experience reliable service tailored to meet your specific needs, ensuring you enjoy a hassle-free payment. Let us help you connect to the future of payments.",
    ],
    image: connector_img,
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
    video: globe,
  },
  visionstats: {
    title: "Our Overview",
    description: [
      "GamingPE was founded in 2015 by industry veterans with deep expertise in payments technology and cybersecurity. Born from a vision to revolutionize global payments, GamingPE is not just about transactions—it's about transforming experiences.",
      "We are pioneering the future of payments with our cutting-edge alternative global payment connector, setting new benchmarks in market-leading payment technology. Harnessing the power of AI and leveraging the latest innovations, we ensure seamless and secure transactions across the globe.",
      "At GamingPE, we are committed to pushing the boundaries of what's possible. Our solutions are designed to adapt and evolve, meeting the dynamic needs of the gaming industry and beyond. We empower businesses to thrive in an ever-changing digital landscape, providing them with the tools and technologies to stay ahead. Join us on our journey as we continue to innovate and redefine the world of payments, one transaction at a time.",
    ],
    image: StatsImg,
    video: globe,
  },
  team: {
    title: "Who’s behind",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  featuresHero: {
    image: FeaturesHeroImg,
    videoUrl:
      "https://drive.google.com/file/d/1LfD5yQDLy92YRXgH_kXSOs2aYAYBt5Is/view?usp=sharing ",
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
    description: "Make Gaming Transactions Easy",
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
