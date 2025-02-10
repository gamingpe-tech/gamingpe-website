import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/root";
import Home from "../pages/Home";
import AboutUs from "../pages/About";
import Blog from "../pages/Blog";
import ComingSoon from "../pages/ComingSoon";
import Contact from "../pages/Contact";
import Error from "../pages/Error";
import FAQ from "../pages/FAQ";
import Features from "../pages/Features";
import Pricing from "../pages/Pricing";
import Team from "../pages/Team";
import Testimonials from "../pages/Testimonials";
import TechnicalConnector from "../pages/TechnicalConnector";
import APIIntegration from "../pages/APIIntegration";
import CryptoCurrency from "../pages/CryptoCurrency";
import OurVision from "../pages/OurVision";
import NewsLetter from "../components/sections/NewsLetter";
import EventInvite from "../pages/Event";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/gamingpe/home",
        element: <Home />,
      },
      {
        path: "/gamingpe/about",
        element: <AboutUs />,
      },
      {
        path: "/gamingpe/features",
        element: <Features />,
      },
      {
        path: "/gamingpe/technicalconnector",
        element: <TechnicalConnector />,
      },
      {
        path: "/gamingpe/apiintegration",
        element: <APIIntegration />,
      },
      {
        path: "/gamingpe/cryptocurrency",
        element: <CryptoCurrency />,
      },
      {
        path: "/gamingpe/oruvision",
        element: <OurVision />,
      },
      {
        path: "/gamingpe/newsletter",
        element: <NewsLetter />,
      },
      {
        path: "/gamingpe/pricing",
        element: <Pricing />,
      },
      {
        path: "/gamingpe/contact",
        element: <Contact />,
      },
      {
        path: "/gamingpe/team",
        element: <Team />,
      },
      {
        path: "/gamingpe/testimonials",
        element: <Testimonials />,
      },
      {
        path: "/gamingpe/blog",
        element: <Blog />,
      },
      {
        path: "/gamingpe/faq",
        element: <FAQ />,
      },
      {
        path: "/gamingpe/error",
        element: <Error />,
      },
      {
        path: "/gamingpe/comingSoon",
        element: <ComingSoon />,
      },
      {
        path: "/gamingpe/event",
        element: <EventInvite />,
      },
    ],
  },
]);
