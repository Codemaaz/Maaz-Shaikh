import React from "react";
import { SkillCard } from "../components";
import {
  FaBootstrap,
  FaCss3Alt,
  FaGithub,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaPhp,
  FaReact,
  FaWordpress,
} from "react-icons/fa6";
import { SiExpress, SiJquery, SiMongodb, SiMui, SiVite } from "react-icons/si";
import { BiLogoFirebase, BiLogoTailwindCss } from "react-icons/bi";

const skills = [
  {
    skillName: "HTML5",
    percentage: "100%",
    color: "#FF6D00",
    skillIcon: <FaHtml5 />,
  },
  {
    skillName: "CSS",
    percentage: "90%",
    color: "#2AA4F4",
    skillIcon: <FaCss3Alt />,
  },
  {
    skillName: "JavaScript",
    percentage: "85%",
    color: "#FFD600",
    skillIcon: <FaJs />,
  },
  {
    skillName: "Bootstrap",
    percentage: "85%",
    color: "#7C4DFF",
    skillIcon: <FaBootstrap />,
  },
  {
    skillName: "JQuery",
    percentage: "85%",
    color: "#106daf",
    skillIcon: <SiJquery />,
  },
  {
    skillName: "ReactJS",
    percentage: "75%",
    color: "#98CCFD",
    skillIcon: <FaReact />,
  },
  {
    skillName: "Tailwind",
    percentage: "85%",
    color: "#00ACC1",
    skillIcon: <BiLogoTailwindCss />,
  },
  {
    skillName: "NodeJS",
    percentage: "70%",
    color: "#4CAF50",
    skillIcon: <FaNodeJs />,
  },
  {
    skillName: "Github",
    percentage: "80%",
    color: "#4C4C4C",
    skillIcon: <FaGithub />,
  },
  {
    skillName: "MUI ",
    percentage: "70%",
    color: "#007fff",
    skillIcon: <SiMui />,
  },
  {
    skillName: "Vite",
    percentage: "90%",
    color: "#ffd02d",
    skillIcon: <SiVite />,
  },
  {
    skillName: "Firebase",
    percentage: "85%",
    color: "#FFC400",
    skillIcon: <BiLogoFirebase />,
  },
  {
    skillName: "PHP",
    percentage: "60%",
    color: "#484c89",
    skillIcon: <FaPhp />,
  },
  {
    skillName: "WordPress",
    percentage: "70%",
    color: "#21759e",
    skillIcon: <FaWordpress />,
  },
  {
    skillName: "Express",
    percentage: "10%",
    color: "#ff914d",
    skillIcon: <SiExpress />,
  },
  {
    skillName: "MongoDB",
    percentage: "10%",
    color: "#599636",
    skillIcon: <SiMongodb />,
  },
];

const Skills = () => {
  return (
    <section id="skills" className="lg:w-11/12 h-[81vh] py-5 text-texlight">
      <h2 className="text-3xl lg:text-4xl text-center text-WHITE hover:scale-105 transition-transform duration-300 my-4 ">
        Skills
        <div className=" bg-gradient-to-r from-primary to-secondary h-[2px] w-3/5 md:w-2/6 rounded-full mx-auto my-1 "></div>
      </h2>


      <div className=" mx-auto my-10 grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
        {skills.map((skill, index) => (
          <SkillCard key={index} {...skill} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
