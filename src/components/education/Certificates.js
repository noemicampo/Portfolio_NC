// import React, { useEffect, useRef, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import react from "../../images/certificates/cert_react.jpg";
import git from "../../images/certificates/cert_git.jpg";
import js from "../../images/certificates/cert_js.jpg";
import ml from "../../images/certificates/cert_machinelearning.jpg";
import cs50 from "../../images/certificates/cert_cs50.jpg";
import web from "../../images/certificates/cert_web_bootcamp.jpg";
import html_cert from "../../images/certificates/cert_html.jpg";
import robotics from "../../images/certificates/cert_robotics.jpg";
import ai from "../../images/certificates/cert_ai.jpg";

import "./Certificates.css";

const Certificates = () => {
  return (
    <div
      style={{
        paddingBottom: "30px",
        position: "relative",
        marginBottom: "3rem",
      }}
    >
      <Carousel
        additionalTransfrom={0}
        arrow
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 1,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 1,
          },
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        <img
          src={react}
          alt="Certificate"
          className="certificate-img"
          style={{
            display: "block",
            height: "30rem",
            margin: "auto",
            width: "auto",
          }}
        />
        <img
          src={js}
          alt="Certificate"
          className="certificate-img"
          style={{
            display: "block",
            height: "30rem",
            margin: "auto",
            width: "auto",
          }}
        />
        <img
          src={web}
          alt="Certificate"
          className="certificate-img"
          style={{
            display: "block",
            height: "30rem",
            margin: "auto",
            width: "auto",
          }}
        />
        <img
          src={git}
          alt="Certificate"
          className="certificate-img"
          style={{
            display: "block",
            height: "30rem",
            margin: "auto",
            width: "auto",
          }}
        />
        <img
          src={html_cert}
          alt="Certificate"
          className="certificate-img"
          style={{
            display: "block",
            height: "30rem",
            margin: "auto",
            width: "auto",
          }}
        />
        <img
          src={cs50}
          alt="Certificate"
          className="certificate-img"
          style={{
            display: "block",
            height: "30rem",
            margin: "auto",
            width: "auto",
          }}
        />
        <img
          src={ai}
          alt="Certificate"
          className="certificate-img"
          style={{
            display: "block",
            height: "30rem",
            margin: "auto",
            width: "auto",
          }}
        />
        <img
          src={ml}
          alt="Certificate"
          className="certificate-img"
          style={{
            display: "block",
            height: "30rem",
            margin: "auto",
            width: "auto",
          }}
        />
        <img
          src={robotics}
          alt="Certificate"
          className="certificate-img"
          style={{
            display: "block",
            height: "30rem",
            margin: "auto",
            width: "auto",
          }}
        />
      </Carousel>
    </div>
  );
};

export default Certificates;
