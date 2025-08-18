import  { useEffect } from "react";
import { motion, stagger, useAnimate } from "motion/react";
import { cn } from "./Data2"; // Adjust path according to your project

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = (words || "").split(" ");

  useEffect(() => {
    // Small timeout ensures initial styles are applied before animation
    const timer = setTimeout(() => {
      animate(
        "span",
        { 
          opacity: 1,
          filter: filter ? "blur(0px)" : "none"
        },
        {
          duration: duration || 1,
          delay: stagger(0.2) // one word after another
        }
      );
    }, 50); // delay so browser can register initial state

    return () => clearTimeout(timer);
  }, [scope, animate, filter, duration]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => (
          <motion.span
            key={word + idx}
            className="dark:text-white text-black"
            style={{
              opacity: 0, // start hidden
              filter: filter ? "blur(8px)" : "none" // start blur
            }}
          >
            {word}{" "}
          </motion.span>
        ))}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className="dark:text-white text-black text-2xl leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};