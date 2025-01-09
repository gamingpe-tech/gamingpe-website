import {
  RiFacebookFill,
  RiInstagramLine,
  RiTwitterXFill,
} from "@remixicon/react";
import React from "react";
import { Link } from "react-router-dom";
import comingSoonImg from "../assets/images/index/comingSoon_bg.webp";

const ComingSoon = () => {
  return (
    <section className="Error ComingSoon">
      <div className="container">
        <div className="row flex-md-row flex-column-reverse gy-md-0 gy-4">
          <div className="col-md-6">
            <figure data-aos="zoom-in-up">
              <img className="w-100" src={comingSoonImg} alt="comingSoon_Img" />
            </figure>
          </div>
          <div className="col-md-6">
            <div className="d-flex justify-content-center flex-column h-100 text-md-start text-center align-items-md-start align-items-center" data-aos="fade-up">
              <h2>We are</h2>
              <h1 className="py-lg-2">Coming Soon</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                unde quia ipsam ut asperiores reiciendis fugiat? Aut reiciendis
                pariatur dolore!
              </p>
            </div>
          </div>
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
          <p className="w-100 text-center">
            Copyright &copy; 2024 PayPath by Evonicmedia. All Rights Reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;
