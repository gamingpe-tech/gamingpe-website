import React, { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { router } from "./route/router";
import "react-toastify/dist/ReactToastify.css";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    // Check if there's a hash in the URL
    const hash = window.location.hash;

    if (hash) {
      // Remove the "#" symbol to get the actual ID
      const elementId = hash.substring(1);
      const element = document.getElementById(elementId);

      if (element) {
        element.click(); // Programmatically click the button
      }
    }
  }, []);
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
};

export default App;
