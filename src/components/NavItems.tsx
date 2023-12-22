"use client";

import { PRODUCT_CATEGORIES } from "@/config";
import { useRef, useState } from "react";
import NavItem from "./NavItem";

const NavItems = () => {
  const [activeIndex, setActiveIndex] = useState<null | number>(null);
  const isAnyOpen = activeIndex !== null;
  return (
    <div className="flex gap-4 items-center h-full">
      {PRODUCT_CATEGORIES.map((category, i) => {
        const handleOpen = () => {
          if (activeIndex === i) {
            setActiveIndex(null);
          } else {
            setActiveIndex(i);
          }
        };

        const isOpen = i === activeIndex;

        const navRef = useRef<HTMLDivElement | null>(null)

        return (
          <div>
            <NavItem
              category={category}
              handleOpen={handleOpen}
              isOpen={isOpen}
              isAnyOpen={isAnyOpen}
              key={category.value}
            />
          </div>
        );
      })}
    </div>
  );
};

export default NavItems;
