import { FloatingDock } from "./PagesTController";
import {
  IconHome,
  IconMessageChatbot, 
  IconDeviceDesktop,
  IconMessage,
  IconAward,
} from "@tabler/icons-react";

export function FloatingDockDemo() {
  const links = [
    { title: "Home", icon: <IconHome  className="h-full w-full text-neutral-500 dark:text-neutral-300" />,href:"/" },
    { title: "About Me", icon: <IconMessageChatbot  className="h-full w-full text-neutral-500 dark:text-neutral-300" />, href: "/aboutme" },
    { title: "Education", icon: <IconAward  className="h-full w-full text-neutral-500 dark:text-neutral-300" />, href: "/education" },
    { title: "Projects", icon: <IconDeviceDesktop  className="h-full w-full text-neutral-500 dark:text-neutral-300" />, href: "/projects" },
    { title: "Contect", icon: <IconMessage className="h-full w-full text-neutral-500 dark:text-neutral-300" />, href: "/contect" },
    
  ];

  return (
    <div className="flex items-center justify-center h-[35rem] w-full">
      <FloatingDock mobileClassName="translate-y-20" items={links} />
    </div>
  );
}
