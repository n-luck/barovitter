"use client";

import React from "react";
import { signOut } from "next-auth/react";
import { BsBellFill, BsHouseFill } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import { GiVampireDracula } from "react-icons/gi";

import useCurrentUser from "@/hooks/useCurrentUser";

import { SidebarLogo } from "./SidebarLogo";
import { SidebarItem } from "./SidebarItem";
import { SidebarPost } from "./SidebarPost";

import { SidebarContent, SidebarFlex, SidebarWrapper } from "./Sidebar.style";

export const Sidebar = () => {
  const { data: currentUser } = useCurrentUser();

  const items = [
    {
      label: "Home",
      href: "/",
      icon: BsHouseFill,
    },
    {
      label: "Notifictations",
      href: "/notifications",
      icon: BsBellFill,
      loggedIn: true,
      alert: currentUser?.hasNotification,
    },
    {
      label: "Profile",
      href: `/users/${currentUser?.id}`,
      icon: FaUser,
      loggedIn: true,
    },
  ];

  return (
    <SidebarWrapper>
      <SidebarFlex>
        <SidebarContent>
          <SidebarLogo />
          {items.map((item) => (
            <SidebarItem
              key={item.href}
              label={item.label}
              href={item.href}
              icon={item.icon}
              loggedIn={item.loggedIn}
              alert={item.alert}
            />
          ))}
          {currentUser && (
            <SidebarItem
              onClick={() => signOut()}
              icon={BiLogOut}
              label="Logout"
            />
          )}
          <SidebarPost
            onClick={() => {}}
            icon={GiVampireDracula}
            label="New Post"
          />
        </SidebarContent>
      </SidebarFlex>
    </SidebarWrapper>
  );
};
