import { Link } from "react-router-dom";
import { FloatingDock } from "./PagesTController";
import {
  IconExchange,
  IconHome,
  IconNewSection,
  IconMessageChatbot ,
} from "@tabler/icons-react";

export function FloatingDockDemo() {
  const links = [
    { title: "Home", icon: <Link to={"/"} ><IconHome  className="h-full w-full text-neutral-500 dark:text-neutral-300" /></Link> },
    { title: "About Me", icon: <IconMessageChatbot  className="h-full w-full text-neutral-500 dark:text-neutral-300" />, href: "#" },
    { title: "Components", icon: <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />, href: "#" },
    { title: "Aceternity UI", icon: <img src="https://assets.aceternity.com/logo-dark.png" width={20} height={20} alt="Aceternity Logo" />, href: "#" },
    { title: "Changelog", icon: <IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />, href: "#" },
    
  ];

  return (
    <div className="flex items-center justify-center h-[35rem] w-full">
      <FloatingDock mobileClassName="translate-y-20" items={links} />
    </div>
  );
}
