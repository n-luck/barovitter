import React from "react";
import {
  DiscoverbarFooterWrapper,
  DiscoverbarFooterLinksDot,
} from "./DiscoverBar.style";
import { LinkItem as Link } from "@/components/UI/Link";

const footerLinks = [
  {
    id: 1,
    title: "Home",
    href: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    href: "https://www.nadjaluckhaupt.de",
  },
  {
    id: 3,
    title: "sgdgdfg",
    href: "/",
  },
];

export const DiscoverBarFooter = () => {
  return (
    <DiscoverbarFooterWrapper>
      {footerLinks.map((link, index) => (
        <>
          <Link href={link.href} key={link.id} size="small" secondary underline>
            {link.title}
          </Link>
          {index !== footerLinks.length - 1 && (
            <DiscoverbarFooterLinksDot> &bull; </DiscoverbarFooterLinksDot>
          )}
        </>
      ))}
    </DiscoverbarFooterWrapper>
  );
};
