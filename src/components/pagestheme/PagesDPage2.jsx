import { FloatingDock2 } from "./PagesTController2";
import {
  IconHome,
  IconMessageChatbot, 
  IconDeviceDesktop,
  IconMessage,
} from "@tabler/icons-react";

export function FloatingDockDemo2() {
  const links = [
    { title: "Home", icon: <IconHome  className="h-full w-full  " />,href:"/" },
    { title: "About Me", icon: <IconMessageChatbot  className="h-full w-full  " />, href: "/aboutme" },
    { title: "Portfolio", icon: <IconDeviceDesktop  className="h-full w-full  " />, href: "/portfolio" },
    { title: "Contect", icon: <IconMessage className="h-full w-full  " />, href: "/contect" },
    
  ];

  return (
    <div className="flex items-center justify-center  bg-transparent">
      <FloatingDock2 mobileClassName="translate-y-20" items={links} />
    </div>
  );
}
