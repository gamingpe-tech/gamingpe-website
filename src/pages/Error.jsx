import {
  RiFacebookFill,
  RiInstagramLine,
  RiTwitterXFill,
} from "@remixicon/react";
import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="Error">
      <div className="container">
        <div className="d-flex justify-content-center align-items-center flex-column text-center" data-aos="fade-up">
          <h1>Ooops...</h1>
          <h2>Page Not Found</h2>
          <h3>Error 404</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi unde
            quia ipsam ut asperiores reiciendis fugiat? Aut reiciendis pariatur
            dolore!
          </p>
          <div>
            <Link to={"/gamingpe/home"} className="hover3">Back to Home</Link>
          </div>
          <div className="mt-lg-5 pt-lg-5 mt-4 pt-4">
            <div className="d-flex ga-lg-4 gap-3 justify-content-center">
              <Link>
                <RiTwitterXFill />
              </Link>
              <Link>
                <RiFacebookFill />
              </Link>
              <Link>
                <RiInstagramLine />
              </Link>
            </div>
            <p className="w-100">
              Copyright &copy; 2024 PayPath by Evonicmedia. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Error;
