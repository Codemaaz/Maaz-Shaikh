import React, { useEffect, useState } from "react";

const HeroTypeWritter = ({ words, speed }) => {
  const [currentWordIndex, setWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const currentWord = words[currentWordIndex];

  useEffect(() => {
    let charIndex = 0;

    const typingIntervel = setInterval(() => {
      if (charIndex <= currentWord.length) {
        setCurrentText(currentWord.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typingIntervel);

        setTimeout(() => {
          setWordIndex((prevIndex) =>
            prevIndex === words.length - 1 ? 0 : prevIndex + 1
          );
        }, 1500);
      }
    }, speed);
    return () => {
      clearInterval(typingIntervel);
    };
  }, [currentWord, speed, words]);
  return (
    <span className=" tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary ">
      {currentText}
    </span>
  );
};

export default HeroTypeWritter;
