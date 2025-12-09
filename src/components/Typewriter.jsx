import React, { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";

const TypingEffect = () => {
  const sentences = [
    "Turn your preparation into a predictable system for success.",
    "Learn efficient methods, smart strategies, and productivity habits that truly work.",
    "FOCUS helps you PLAN wisely, LEARN effectively, and PERFORM exceptionally.",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Disable scrolling
    document.body.style.overflow = "hidden";

    let timer;

    if (currentIndex < sentences.length - 1) {
      // Change to next sentence after some time
      timer = setTimeout(() => {
        setCurrentIndex((prev) => prev + 1);
      }, 3000); // Adjust based on typing speed
    }

    return () => {
      document.body.style.overflow = "auto";
      clearTimeout(timer);
    };
  }, [currentIndex, sentences.length]);

  return (
    <div className="type-effect">
      <p className="courier-prime" style={{ color: "white" }}>
        <Typewriter
          options={{
            strings: [sentences[currentIndex]],
            autoStart: true,
            loop: false,
            delay: 20,
            cursor: "|",
          }}
        />
      </p>
    </div>
  );
};

export default TypingEffect;
