import {
  FaDiagramProject,
  FaEnvelope,
  FaGoogle,
  FaGithub,
  FaHouse,
  FaLinkedinIn,
  FaRenren,
  FaUser,
} from "react-icons/fa6";
import { BiLogoTailwindCss } from "react-icons/bi";

export const Menus = [
  {
    id: `home-${Date.now()}`,
    Icon: FaHouse,
    uri: "",
    name: "Home",
  },
  {
    id: `about-${Date.now()}`,
    Icon: FaUser,
    uri: "/about",
    name: "About",
  },
  {
    id: `skills-${Date.now()}`,
    Icon: FaRenren,
    uri: "/skills",
    name: "Skills",
  },
  {
    id: `projects-${Date.now()}`,
    Icon: FaDiagramProject,
    uri: "/projects",
    name: "Projects",
  },
  {
    id: `contact-${Date.now()}`,
    Icon: FaEnvelope,
    uri: "/contact",
    name: "Contact",
  },
];

export const Socials = [
  {
    id: `google-${Date.now()}`,
    Icon: FaGoogle,
    uri: "mailto:codemaaz1953@gmail.com",
    color: "text-white",
  },
  {
    id: `linkedin-${Date.now()}`,
    Icon: FaLinkedinIn,
    uri: "http://www.linkedin.com/in/maaz-shaikh-7a3325217",
    color: "text-blue-500",
  },
  {
    id: `github-${Date.now()}`,
    Icon: FaGithub,
    uri: "https://github.com/Codemaaz/",
    color: "text-gray-500",
  },
];
