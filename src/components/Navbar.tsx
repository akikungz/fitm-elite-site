"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { IconMenu, IconSearch, IconUser } from "@tabler/icons-react";

import { cn } from "@/lib/utils";
import { Drawer } from "@mantine/core";
import useIsScroll from "@/hooks/isScroll";

export default function Navbar() {
  const isScrolled = useIsScroll();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      <div
        className={cn(
          "sticky -top-[1px] z-50 px-4 flex items-center justify-between",
          "w-full",
          isScrolled ? "h-16" : "h-24",
          "transition-all duration-300 ease-in-out",
          "bg-gray-600/95 backdrop-blur-md",
          "text-white"
        )}
      >
        <Link href="/">
          <Image
            src="/images/creativelab.png"
            alt="Creative Lab"
            width={isScrolled ? 90 : 105}
            height={isScrolled ? 40 : 60}
            className="transition-all duration-300 ease-in-out"
          />
        </Link>

        <div className="flex space-x-4">
          <Link href="/#" className="flex items-center space-x-2">
            <IconSearch size={24} stroke={3} />
          </Link>

          <Link href="/user" className="text-lg font-semibold">
            <IconUser size={24} stroke={3} />
          </Link>

          <button className="text-white" onClick={() => setIsMenuOpen(true)}>
            <IconMenu size={24} stroke={3} />
          </button>
        </div>
      </div>

      <Drawer
        opened={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        position="right"
        size="xs"
        offset={8}
        radius={12}
      >
        <div className="px-4 py-0">
          <div className="flex items-center justify-between">
            <Link href="/">
              <Image
                src="/images/creativelab.png"
                alt="Creative Lab"
                width={105}
                height={60}
                onClick={() => setIsMenuOpen(false)}
              />
            </Link>
          </div>

          <div className="flex flex-col mt-8">
            {["People", "Research", "Article", "Event"].map((item, index) => (
              <Link
                key={index}
                href={`/${item.toLowerCase()}`}
                className="w-full px-4 py-2 hover:bg-green-500 hover:text-white rounded-[8px]"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </Drawer>
    </>
  );
}
