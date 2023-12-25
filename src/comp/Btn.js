import React, { useState } from "react";
import { motion } from "framer-motion";

const RandomPositionButton = () => {
  const [position, setPosition] = useState();
  const [interacted, setInteracted] = useState(false);

  const handleInteraction = () => {
    if (!interacted) {
      setInteracted(true);
    }

    const maxX = window.innerWidth - 100; // Subtract button width
    const maxY = window.innerHeight - 40; // Subtract button height

    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;
    setPosition({ x: newX, y: newY });
  };

  const buttonVariants = {
    visible: {
      position: "absolute",
      transition: {
        duration: 0.5,
      },
    },
    hidden: {
      position: "relative",
    },
  };

  return (
    <motion.button
      initial="hidden"
      animate={interacted ? "visible" : "hidden"}
      variants={buttonVariants}
      style={{
        left: `${position?.x}px`,
        top: `${position?.y}px`,
      }}
      className="btn"
      onMouseEnter={handleInteraction} // For desktop hover
      onClick={handleInteraction} // For mobile click
    >
      No
    </motion.button>
  );
};

export default RandomPositionButton;
