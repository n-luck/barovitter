import React from "react";
import { useRouter } from "next/navigation";
import { GiVampireCape } from "react-icons/gi";

import { Logo, LogoText } from "./Sidebar.style";

export const SidebarLogo = () => {
  const router = useRouter();

  return (
    <Logo onClick={() => router.push("/")}>
      <GiVampireCape size={70} /> 
      <LogoText>Barovitter</LogoText>
    </Logo>
  );
};
