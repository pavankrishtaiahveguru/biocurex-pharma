"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const HomeLink = ({ children, className, onClick }) => {
  const pathname = usePathname();

  const handleClick = (event) => {
    onClick?.(event);

    if (
      event.defaultPrevented ||
      pathname !== "/" ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Link href="/" onClick={handleClick} className={className}>
      {children}
    </Link>
  );
};

export default HomeLink;
