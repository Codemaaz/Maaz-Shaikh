import React from "react";
import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { FaArrowsAltH } from "react-icons/fa";


const TITLEII = "Education";
const educationDetails = [
  {
    date: "2021 - 2023",
    title: "Master of Computer Application",
    subtitle: "CGPA - 7.5",
    institution: "Sandip University",
  },
  {
    date: "2016 - 2021",
    title: "Bachelor of Computer Application",
    subtitle: "CGPA - 6.17",
    institution: "Yashwantrao Chavan Open University",
  },
  {
    date: "2015 - 2016",
    title: "HSC",
    subtitle: "50%",
    institution: "Maharashtra State Board of Education",
  },
  {
    date: "2013 - 2014",
    title: "SSC",
    subtitle: "52%",
    institution: "Maharashtra State Board of Education",
  },
];

const TITLE = "About Me";
const IMAGE_SRC = "https://firebasestorage.googleapis.com/v0/b/maaz-shaikh.appspot.com/o/me.jpg?alt=media&token=868dc3a8-f715-44a5-a1bf-59db37e2cf1d";
const DESCRIPTION =
  "Being a web developer who has acquired skills through self-learning and a deep love for coding, I have refined my abilities in React JS and Tailwind CSS. I have independently created numerous web applications and projects, which include a personal portfolio and an Ecommerce website. I thrive on creatively resolving complex issues and am always on the lookout for fresh and innovative solutions. I am adept at learning quickly and have a keen interest in discovering new technologies and programming paradigms.";

const AboutMe = () => {
  return (
    <section className=" text-texlight lg:w-11/12 p-5">
      <div>
        <h2 className="text-3xl lg:text-4xl text-center text-WHITE hover:scale-105 transition-transform duration-300 my-4 ">
          {TITLE}
          <div className=" bg-gradient-to-r from-primary to-secondary h-[2px] w-3/5 md:w-2/6 rounded-full mx-auto my-1 "></div>
        </h2>
        <div className=" grid grid-cols-1 md:grid-cols-2  mt-4 md:mt-16">
          <motion.div className=" flex items-center justify-center my-4">
            <img
              src={IMAGE_SRC}
              alt=""
              className="h-[270px] w-[270px] rounded-full "
            />
          </motion.div>
          <div className=" flex items-center justify-center">
            <p className="p-4 text-texlight text-justify text-md md:bg-none bg-gradient-to-t from-bgPrimary rounded-md to-transparent">
              {DESCRIPTION}
            </p>
          </div>
        </div>
      </div>

      {/* Education section */}

      <div className=" w-full text-center ">
        <h2 className="text-3xl lg:text-4xl text-center text-WHITE hover:scale-105 transition-transform duration-300 my-12 ">
          {TITLEII}
          <div className=" bg-gradient-to-r from-primary to-secondary h-[2px] w-3/5 md:w-2/6 rounded-full mx-auto my-1 "></div>
        </h2>
        <div className=" w-full text-start text-sm lg:text-center">
          <VerticalTimeline>
            {educationDetails.map((detail, index) => (
              <VerticalTimelineElement
                key={index}
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "rgb(23, 23, 23)",
                  color: "#dcdcdc",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid  rgb(23, 23, 23)",
                }}
                date={detail.date}
                iconStyle={{ background: "rgb(23, 23, 23)", color: "#dcdcdc" }}
                icon={<FaArrowsAltH />}
              >
                <h3 className="vertical-timeline-element-title">
                  {detail.title}
                </h3>
                <h3 className="vertical-timeline-element-subtitle">
                  {detail.subtitle}
                </h3>
                <h3 className="vertical-timeline-element-subtitle">
                  {detail.institution}
                </h3>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
