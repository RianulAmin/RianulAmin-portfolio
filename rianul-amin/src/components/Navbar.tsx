'use client';
import Link from 'next/link';
import { motion, MotionValue, useMotionValue } from 'framer-motion';
import React, { useState } from 'react';

export default function Navbar() {
  const [activeLink, setActiveLink] = useState<string | null>(null);

  const links = [
    { href: '/projects', label: 'Projects' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  const mapRange = (
    inputLower: number,
    inputUpper: number,
    outputLower: number,
    outputUpper: number
  ) => {
    const INPUT_RANGE = inputUpper - inputLower;
    const OUTPUT_RANGE = outputUpper - outputLower;

    return (value: number) =>
      outputLower + (((value - inputLower) / INPUT_RANGE) * OUTPUT_RANGE || 0);
  };

  const setTransform = (item: HTMLElement & EventTarget, event: React.PointerEvent, x: MotionValue, y: MotionValue) => {
    const bounds = item.getBoundingClientRect();
    const relativeX = event.clientX - bounds.left;
    const relativeY = event.clientY - bounds.top;
    const xRange = mapRange(0, bounds.width, -1, 1)(relativeX);
    const yRange = mapRange(0, bounds.height, -1, 1)(relativeY);
    x.set(xRange * 15);
    y.set(yRange * 15);
  };

  const handleClick = (href: string) => {
    setActiveLink(href);
  };

  const MotionLink = motion(Link);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-10 bg-transparent mt-0 pt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center h-10 relative">
            <div className="flex space-x-4">
              {links.map((link) => {
                const x = useMotionValue(0);
                const y = useMotionValue(0);
                return (
                  <motion.div
                    key={link.href}
                    className="relative"
                    onPointerMove={(event) => {
                      const item = event.currentTarget;
                      setTransform(item, event, x, y);
                    }}
                    onPointerLeave={() => {
                      x.set(0);
                      y.set(0);
                    }}
                    style={{ x, y }}
                  >
                    <MotionLink
                      href={link.href}
                      className={`font-medium text-m py-2 px-4 transition-all duration-500 ease-out ${
                        activeLink === link.href ? 'active-dot' : 'hover-dot'
                      }`}
                      onClick={() => handleClick(link.href)}
                    >
                      {link.label}
                    </MotionLink>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </nav>
      <br /><br /><br /><br />
    </>
  );
}
