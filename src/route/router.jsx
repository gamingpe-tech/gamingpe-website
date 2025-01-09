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

export const router = createBrowserRouter([
  {
    path: "/gamingpe",
    element: <RootLayout />,
    children: [
      {
        path: "/gamingpe",
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
    ],
  },
]);
