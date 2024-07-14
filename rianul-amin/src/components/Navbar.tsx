'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [cursorX, setCursorX] = useState(0);
  const [cursorY, setCursorY] = useState(0);
  const [hovered, setHovered] = useState<string | null>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setCursorX(event.clientX);
      setCursorY(event.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const links = [
    { href: '/projects', label: 'Projects' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' }
  ];

  const calculateOffset = (linkRect: DOMRect) => {
    const distanceX = cursorX - (linkRect.left + linkRect.width / 2);
    const distanceY = cursorY - (linkRect.top + linkRect.height / 2);
    const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);

    const multiplier = 0.25;
    const threshold = 160; 

    if (distance < threshold) {
      return {
        x: distanceX * multiplier,
        y: distanceY * multiplier,
      };
    }
    return { x: 0, y: 0 };
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-10 bg-transparent mt-0 pt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center h-16 relative">
            <div className="flex space-x-4">
              {links.map((link, index) => (
                <motion.div
                  key={link.href}
                  id={`link-${index}`}
                  className="relative"
                  onMouseEnter={() => setHovered(link.href)}
                  onMouseLeave={() => setHovered(null)}
                  animate={
                    hovered === link.href
                      ? (() => {
                          const linkElement = document.getElementById(`link-${index}`);
                          if (linkElement) {
                            const linkRect = linkElement.getBoundingClientRect();
                            return calculateOffset(linkRect);
                          }
                          return { x: 0, y: 0 };
                        })()
                      : { x: 0, y: 0 }
                  }
                  transition={{ type: 'spring', stiffness: 500, damping: 30, bounce: 0.3 }}
                >
                  <Link href={link.href}>
                    <motion.div
                      className="font-medium text-m py-2 px-4 transition-all duration-500 ease-out"
                    >
                      {link.label}
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </nav>
      <div className="mt-16"></div>
    </>
  );
}
