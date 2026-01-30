import  { useRef } from "react";
import { cn } from "./AllDataInput";
import {
  motion,
  useMotionValue,

} from "motion/react";
import { Link, useLocation } from "react-router-dom";

export const FloatingDock2 = ({ items, desktopClassName }) => {
  return (
    <>
      <FloatingDockDesktop items={items} className={desktopClassName} />
    </>
  );
};


const FloatingDockDesktop = ({ items, className }) => {
  let mouseX = useMotionValue(Infinity);

  return (
    <motion.div

      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "fixed bottom-[0px]  h-12  gap-4 rounded-t-xl  px-4 pb-2 w-full justify-center items-end bg-white/3 backdrop-blur-2xl flex ",
        className
      )}
    >
      {items.map((item) => (
        <IconContainer mouseX={mouseX} key={item.title} {...item} />
      ))}
    </motion.div>
  );
};

function IconContainer({  icon, href }) {
  let ref = useRef(null);
  const location = useLocation(); 





  const isActive = location.pathname === href;

  return (
    <Link to={href}>
      <motion.div
        ref={ref}
        // style={{ width, height }}
        className={` relative flex aspect-square items-center w-[30px] h-[30px] justify-center rounded-full 
          ${isActive ? " bg-customTeal" : " bg-gray-200"}`}
      >
        

        <motion.div 
        // style={{ width: widthIcon, height: heightIcon }} 
        className={`${isActive ? "text-white" :"text-neutral-500"} flex w-[15px] h-[15px] items-center justify-center `}>
          {icon}
        </motion.div>
      </motion.div>
    </Link>
  );
}