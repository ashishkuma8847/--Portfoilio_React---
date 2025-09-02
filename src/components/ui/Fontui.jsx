import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useState } from "react";
import { useTheme } from "../Themetoggel/ThemeProvider";

function Fontui({
  words = ["Frontend Developer", "React Enthusiast", "UI/UX Designer"], // ✅ tumhare words
  typingSpeed = 120,
  deleteSpeed = 80,
  delayBetweenWords = 1500,
  cursorBlinkSpeed = 0.4,
  className = "",
  outofspan = "I am ", // ✅ span ke bahar ka text
  inspan = "", // ✅ span ke andar ka prefix text
}) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const controls = useAnimationControls();
  const { theme } = useTheme();

  // Typing / Deleting logic
  useEffect(() => {
    const word = words[currentWordIndex];
    let timer;

    if (isDeleting) {
      if (currentText === "") {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      } else {
        timer = setTimeout(() => {
          setCurrentText(word.substring(0, currentText.length - 1));
        }, deleteSpeed);
      }
    } else {
      if (currentText === word) {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, delayBetweenWords);
      } else {
        timer = setTimeout(() => {
          setCurrentText(word.substring(0, currentText.length + 1));
        }, typingSpeed);
      }
    }

    return () => clearTimeout(timer);
  }, [currentText, currentWordIndex, isDeleting, words, typingSpeed, deleteSpeed, delayBetweenWords]);

  // Cursor blinking animation
  useEffect(() => {
    controls.start({
      opacity: [0.2, 1],
      transition: {
        duration: cursorBlinkSpeed,
        repeat: Infinity,
        repeatType: "reverse",
      },
    });
  }, [controls, cursorBlinkSpeed]);

  return (
    <div className="flex items-center justify-start">
      <div className={`font-semibold  italic font-inter ${className}`}>
        <span className={`${!theme ? "text-white" : "text-customBlack"}`}>
          {outofspan}
        </span>
        <span className="text-customTeal">
          {inspan}
          {currentText}
        </span>
        <motion.span animate={controls} className="inline-block text-customTeal">
          |
        </motion.span>
      </div>
    </div>
  );
}

export default Fontui;
