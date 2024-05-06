import React from "react";
import { Socials } from "../utils/helper";
import { AnimatePresence } from "framer-motion";
import { HeroTypeWritter, HomeSocialLinks } from "../components/index";

const GREETING = "Hello, It's";
const NAME = "Maaz Shaikh";
const ROLE = "I'm a ";
const DESCRIPTION =
  "I'm a dedicated web developer with a flair for creating innovative applications using React.js and Tailwind CSS. My projects demonstrate my proactive nature and a strong problem-solving mindset, always eager to embrace new tech challenges.";

const Home = () => {
  const renderSocialLinks = () =>
    Socials &&
    Socials.map((item, index) => (
      <HomeSocialLinks key={index} data={item} index={index} />
    ));

  return (
    <section className="flex text-center px-4 h-[85vh] lg:w-11/12">
      <div className="flex w-full h-full flex-col justify-center items-center gap-3">
        <h2 className="text-3xl lg:text-4xl text-texlight">{GREETING}</h2>
        <h1 className="tracking-wider text-[40px] lg:text-6xl text-WHITE">
          {NAME}
        </h1>
        <h2 className="text-3xl lg:text-4xl text-texlight pt-2">
          {ROLE}
          <HeroTypeWritter
            speed={120}
            words={["Developer...", "Freelancer...", "Designer..."]}
          />
        </h2>
        <p className="text-sm py-5 md:w-3/5 text-texlight text-center">
          {DESCRIPTION}
        </p>
        <div className="flex items-center justify-center gap-5">
          <AnimatePresence>{renderSocialLinks()}</AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Home;
